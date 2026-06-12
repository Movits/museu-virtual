# Baixa os scans ORIGINAIS das obras listadas em scripts/obras-fontes.json para sources/.
# (O renderizador de thumbs do Wikimedia limita a 3840 px, insuficiente para o
# zoom profundo, entao baixamos os originais e reduzimos localmente no tiles.mjs.)
# Uso: powershell -File scripts/download.ps1 [slug1 slug2 ...]   (sem args: todos os faltantes)
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$ua = 'MuseuVirtual/1.0 (robertomovits@gmail.com)'
$root = Split-Path $PSScriptRoot -Parent
$sources = Join-Path $root 'sources'

$json = Get-Content -Path (Join-Path $PSScriptRoot 'obras-fontes.json') -Encoding UTF8 -Raw | ConvertFrom-Json
$alvos = $args

foreach ($prop in $json.PSObject.Properties) {
    $slug = $prop.Name
    if ($alvos.Count -gt 0 -and $alvos -notcontains $slug) { continue }
    $dest = Join-Path $sources "$slug.jpg"
    if (Test-Path $dest) { Write-Output "${slug}: ja existe, pulando"; continue }

    $page = (Invoke-RestMethod -Uri 'https://commons.wikimedia.org/w/api.php' -Body @{
        action = 'query'; format = 'json'; prop = 'imageinfo'
        iiprop = 'url|size'; titles = $prop.Value
    } -Headers @{ 'User-Agent' = $ua }).query.pages.PSObject.Properties.Value[0]
    if (-not $page.imageinfo) { throw "arquivo nao encontrado no Commons: $($prop.Value)" }
    $info = $page.imageinfo[0]

    Write-Output ("{0}: baixando original {1}x{2} ({3:N0} MB)" -f $slug, $info.width, $info.height, ($info.size/1MB))
    curl.exe -sS -L --retry 3 --retry-delay 5 -A $ua -o $dest $info.url
    if ($LASTEXITCODE -ne 0) { throw "falha ao baixar $slug" }
    $mb = (Get-Item $dest).Length / 1MB
    Write-Output ("{0}: ok ({1:N1} MB)" -f $slug, $mb)
}
Write-Output 'downloads concluidos'
