# Baixa os scans ORIGINAIS das 10 obras do Wikimedia Commons para sources/.
# (O renderizador de thumbs do Wikimedia limita a 3840 px, insuficiente para o
# zoom profundo, entao baixamos os originais e reduzimos localmente no tiles.mjs.)
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$ua = 'MuseuVirtual/1.0 (robertomovits@gmail.com)'
$root = Split-Path $PSScriptRoot -Parent
$sources = Join-Path $root 'sources'

# titulos sem acentos no literal: o "a" agudo de Velazquez entra via [char]0x00E1
# porque o PowerShell 5.1 le .ps1 sem BOM como ANSI e corrompe acentos
$aAgudo = [char]0x00E1
$obras = @(
    @{ slug = 'casal-arnolfini';                title = 'File:Jan van Eyck - Arnolfini Portrait - Macrophotography.jpg' },
    @{ slug = 'jardim-das-delicias';            title = 'File:The Garden of earthly delights.jpg' },
    @{ slug = 'os-embaixadores';                title = 'File:Hans Holbein the Younger - The Ambassadors - Google Art Project.jpg' },
    @{ slug = 'vocacao-de-sao-mateus';          title = 'File:The Calling of Saint Matthew-Caravaggo (1599-1600).jpg' },
    @{ slug = 'ronda-noturna';                  title = 'File:The Night Watch - HD.jpg' },
    @{ slug = 'las-meninas';                    title = "File:Las Meninas, by Diego Vel${aAgudo}zquez, from Prado in Google Earth.jpg" },
    @{ slug = 'moca-com-brinco-de-perola';      title = 'File:1665 Girl with a Pearl Earring.jpg' },
    @{ slug = 'andarilho-sobre-o-mar-de-nevoa'; title = 'File:Caspar David Friedrich - Wanderer above the Sea of Fog.jpeg' },
    @{ slug = 'impressao-nascer-do-sol';        title = 'File:Monet - Impression, Sunrise.jpg' },
    @{ slug = 'noite-estrelada';                title = 'File:Van Gogh - Starry Night - Google Art Project.jpg' }
)

foreach ($obra in $obras) {
    $dest = Join-Path $sources "$($obra.slug).jpg"
    if (Test-Path $dest) { Write-Output "$($obra.slug): ja existe, pulando"; continue }

    $page = (Invoke-RestMethod -Uri 'https://commons.wikimedia.org/w/api.php' -Body @{
        action = 'query'; format = 'json'; prop = 'imageinfo'
        iiprop = 'url|size'; titles = $obra.title
    } -Headers @{ 'User-Agent' = $ua }).query.pages.PSObject.Properties.Value[0]
    if (-not $page.imageinfo) { throw "arquivo nao encontrado no Commons: $($obra.title)" }
    $info = $page.imageinfo[0]

    Write-Output ("{0}: baixando original {1}x{2} ({3:N0} MB)" -f $obra.slug, $info.width, $info.height, ($info.size/1MB))
    curl.exe -sS -L --retry 3 --retry-delay 5 -A $ua -o $dest $info.url
    if ($LASTEXITCODE -ne 0) { throw "falha ao baixar $($obra.slug)" }
    $mb = (Get-Item $dest).Length / 1MB
    Write-Output ("{0}: ok ({1:N1} MB)" -f $obra.slug, $mb)
}
Write-Output 'todos os downloads concluidos'
