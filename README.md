# Japan in figures

![Static site](https://img.shields.io/badge/site-static-1E40AF)
![Country Japan](https://img.shields.io/badge/country-Japan-D97706)
![No dependencies](https://img.shields.io/badge/dependencies-zero-1E40AF)

[Bounty page](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

An original, independent national statistics atlas for **Japan**. Eight hash-routed pages cover Overview, Population, Economy, Labour, Prices, Trade, Regions and Sources. Built with local HTML, CSS, JavaScript modules and original SVG charts, using system fonts only. No build step, framework, CDN, external assets, analytics or runtime API requests.

## Data

Figures cover 2023–2024. The Statistics Bureau of Japan supplies Population Estimates, the Labour Force Survey, consumer prices and the Statistical Handbook of Japan 2025. Nominal national GDP uses the Statistics Bureau's National Accounts yearbook tables (2020 benchmark). Trade statistics are the Ministry of Finance series reproduced in the handbook. Supplementary primary prefectural accounts from Tokyo, Aichi and Osaka supply FY2023 regional GDP; population comes from the Statistics Bureau. GDP per resident is explicitly calculated, not presented as household income or the official GDP-per-capita series. The Regions comparison covers three selected prefectures, not all prefectures.

Every displayed observation has a source and reporting year. The searchable Sources register includes publishers, links, definitions, units and calculation notes. No figures are live-updated. Vintages and reporting periods differ and are labelled. The 2023 goods-trade snapshot stays fixed when the overview year changes.

## Run

With Node.js 22.18+ (or Node.js 24), run `node serve.ts`, then visit `http://localhost:8080`. No installation is required. Hash routes work from the same index document. The app also works on a static HTTP host serving the app directory.

Controls include annual reference selectors, bar/line chart toggles, a trade-flow selector, prefecture and source searches, sortable tables, and CSV downloads. Keyboard focus states, a skip link, reduced-motion support and responsive layouts are included. External source links navigate only when clicked; the README badge URLs are never loaded by the site.

The starter's packaging entry point, vendor file and licence are preserved. The screenshots directory is intentionally empty for owner captures.
