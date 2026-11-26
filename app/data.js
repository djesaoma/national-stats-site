// Frozen observations: no runtime data fetching. Units and vintages travel with values.
export const sources = {
 population:{name:'Population Estimates',publisher:'Statistics Bureau of Japan',years:'2023–2024',url:'https://www.stat.go.jp/english/data/jinsui/2024np/index.html',detail:'Total population at 1 October. Prefectural estimates are reproduced in Statistical Handbook of Japan 2025, Appendix 1.'},
 gdp:{name:'Japan Statistical Yearbook, table 3-1 / 3-3',publisher:'Statistics Bureau of Japan; underlying accounts: Cabinet Office',years:'2023–2024',url:'https://www.stat.go.jp/english/data/nenkan/76nenkan/pdf/03e.pdf',detail:'Calendar-year GDP at current prices, 2020 benchmark. GDP per resident is calculated here using October population, not the official annual-average denominator.'},
 labour:{name:'Labour Force Survey · Handbook 2025, table 12.1',publisher:'Statistics Bureau of Japan',years:'2023–2024',url:'https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf#page=136',detail:'Annual averages. Unemployment is a percentage of the labour force; employed and labour force counts are in millions.'},
 prices:{name:'Consumer Price Index · Handbook 2025, table 13.5',publisher:'Statistics Bureau of Japan',years:'2023–2024',url:'https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf#page=162',detail:'Annual-average indices, 2020 = 100. Headline inflation is the published annual change in all-items CPI.'},
 trade:{name:'Foreign Trade · Handbook 2025, tables 11.1–11.2',publisher:'Statistics Bureau of Japan; underlying data: Ministry of Finance',years:'2023',url:'https://www.stat.go.jp/english/data/handbook/pdf/2025all.pdf#page=120',detail:'Customs-clearance merchandise trade. Exports FOB; imports CIF. Balance is exports minus imports. Values converted from billion to trillion yen.'},
 tokyo:{name:'Tokyo Metropolitan Accounts, related indicators',publisher:'Tokyo Metropolitan Government, Bureau of General Affairs',years:'FY2023',url:'https://catalog.data.metro.tokyo.lg.jp/dataset/t000003d2000001116',detail:'Nominal gross prefectural product: ¥125,018.5 billion. Supplementary primary regional source.'},
 aichi:{name:'Aichi Prefectural Accounts, main results',publisher:'Aichi Prefectural Government, Statistics Division',years:'FY2023',url:'https://www.pref.aichi.jp/press-release/toukei20260130-2023kenminkeizai.html',detail:'Nominal gross prefectural product: ¥46,091.1 billion. Supplementary primary regional source.'},
 osaka:{name:'Osaka Prefectural Accounts, main indicators',publisher:'Osaka Prefectural Government, Statistics Division',years:'FY2023',url:'https://www.pref.osaka.lg.jp/documents/123401/gdp2023k02dai2hen.pdf',detail:'Nominal gross prefectural product: ¥44,992,432 million. Supplementary primary regional source.'}
};
export const national = {
 2023:{population:124.352,gdp:616.033,unemployment:2.6,inflation:3.2,employed:67.47,force:69.25},
 2024:{population:123.802,gdp:634.226,unemployment:2.5,inflation:2.7,employed:67.81,force:69.57}
};
export const priceRows = [
 ['All items',105.6,108.5],['Food',112.9,117.8],['Housing',102.4,103.1],['Fuel, light & water',108.5,112.8],['Furniture & utensils',113.8,118.4],['Clothing & footwear',105.7,108.2],['Medical care',101.2,102.8],['Transport & communication',95.8,97.4],['Education',102.1,101.6],['Culture & recreation',107.1,112.9],['Miscellaneous',103.7,104.8]
];
export const tradeRows = [
 ['Foodstuff',1.127,9.342],['Raw materials',1.607,7.188],['Mineral fuels',1.616,27.346],['Chemicals',11.024,11.624],['Manufactured goods',11.545,9.072],['General machinery',18.446,9.598],['Electrical machinery',16.749,17.829],['Transport equipment',23.633,4.148],['Other goods',15.127,14.249]
];
export const labourRows=[['Total',2023,67.47,69.25,2.6],['Men',2023,36.96,38.01,2.8],['Women',2023,30.51,31.24,2.3],['Total',2024,67.81,69.57,2.5],['Men',2024,36.99,38.00,2.7],['Women',2024,30.82,31.57,2.4]];
export const regions=[
 {name:'Tokyo',region:'Kanto',population:14086,gdp:125018.5,source:'tokyo'},
 {name:'Aichi',region:'Chubu',population:7477,gdp:46091.1,source:'aichi'},
 {name:'Osaka',region:'Kansai',population:8763,gdp:44992.432,source:'osaka'}
];
export const prefectures=[['Tokyo',14178],['Kanagawa',9225],['Osaka',8757],['Aichi',7460],['Saitama',7332],['Chiba',6251],['Hyogo',5337],['Fukuoka',5092],['Hokkaido',5043],['Shizuoka',3527]];
export const topics=[['population','Population','People & demographic change'],['economy','Economy','Output & living standards'],['labour','Labour','Employment & participation'],['prices','Prices','The cost of everyday life'],['trade','Trade','Japan in the world economy'],['regions','Regions','A closer look at prefectures']];
