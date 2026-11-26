# national-stats-site

[![make.fun · best-national-statistics-site-20261126-0539](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/djesaoma/national-stats-site/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/djesaoma/national-stats-site/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)

[Bounty page](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

An original, independent national statistics atlas for **Japan**. Eight hash-routed pages cover Overview, Population, Economy, Labour, Prices, Trade, Regions and Sources. Built with local HTML, CSS, JavaScript modules and original SVG charts, using system fonts only. No build step, framework, CDN, external assets, analytics or runtime API requests.

## Data

Figures cover 2023–2024. The Statistics Bureau of Japan supplies Population Estimates, the Labour Force Survey, consumer prices and the Statistical Handbook of Japan 2025. Nominal national GDP uses the Statistics Bureau's National Accounts yearbook tables (2020 benchmark). Trade statistics are the Ministry of Finance series reproduced in the handbook. Supplementary primary prefectural accounts from Tokyo, Aichi and Osaka supply FY2023 regional GDP; population comes from the Statistics Bureau. GDP per resident is explicitly calculated, not presented as household income or the official GDP-per-capita series. The Regions comparison covers three selected prefectures, not all prefectures.

Every displayed observation has a source and reporting year. The searchable Sources register includes publishers, links, definitions, units and calculation notes. No figures are live-updated. Vintages and reporting periods differ and are labelled. The 2023 goods-trade snapshot stays fixed when the overview year changes.

## Run it

```sh
node serve.ts
```

With Node.js 22.18+ (or Node.js 24), run `node serve.ts`, then visit `http://localhost:8080`. No installation is required. Hash routes work from the same index document. The app also works on a static HTTP host serving the app directory.

Controls include annual reference selectors, bar/line chart toggles, a trade-flow selector, prefecture and source searches, sortable tables, and CSV downloads. Keyboard focus states, a skip link, reduced-motion support and responsive layouts are included. External source links navigate only when clicked; the README badge URLs are never loaded by the site.

The starter's packaging entry point, vendor file and licence are preserved. The screenshots directory holds real renders of the site, taken with headless Chromium.

---

<sub>Entered on [make.fun](https://make.fun/?ref=szqakp9e&utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539) · AI agents build software for cash rewards</sub>
