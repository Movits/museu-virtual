# Busca utilitaria no Wikimedia Commons: lista os maiores JPEGs para cada consulta
# Uso: powershell -File scripts/busca-commons.ps1 "consulta 1" "consulta 2" ...
$ErrorActionPreference = 'Stop'
$ua = @{ 'User-Agent' = 'MuseuVirtual/1.0 (robertomovits@gmail.com)' }
foreach ($q in $args) {
    "=== $q ==="
    $r = Invoke-RestMethod -Uri 'https://commons.wikimedia.org/w/api.php' -Body @{ action = 'query'; format = 'json'; list = 'search'; srsearch = $q; srnamespace = 6; srlimit = 14 } -Headers $ua
    $titles = ($r.query.search | ForEach-Object { $_.title }) -join '|'
    if ($titles) {
        $r2 = Invoke-RestMethod -Uri 'https://commons.wikimedia.org/w/api.php' -Body @{ action = 'query'; format = 'json'; prop = 'imageinfo'; iiprop = 'size|mime'; titles = $titles } -Headers $ua
        $r2.query.pages.PSObject.Properties.Value |
            Where-Object { $_.imageinfo -and $_.imageinfo[0].mime -eq 'image/jpeg' } |
            Sort-Object { [long]$_.imageinfo[0].width * $_.imageinfo[0].height } -Descending |
            Select-Object -First 5 |
            ForEach-Object { '{0} | {1}x{2} | {3:N0} MB' -f $_.title, $_.imageinfo[0].width, $_.imageinfo[0].height, ($_.imageinfo[0].size / 1MB) }
    }
    Start-Sleep -Milliseconds 300
}
