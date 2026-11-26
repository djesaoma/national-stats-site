export const esc=s=>String(s).replace(/[&<>"']/g,c=>`&#${c.charCodeAt(0)};`);
export function chart(rows,{type='bar',unit='',title='Statistical chart',color='blue'}={}) {
 if(!rows.length)return '<div class="empty">No matching observations. Try another search.</div>';
 const W=800,H=265,L=60,R=30,T=32,B=43,iw=W-L-R,ih=H-T-B;
 const max=Math.max(...rows.map(r=>r.value),1)*1.15;
 const x=i=>L+(i+.5)*iw/rows.length,y=v=>T+ih-v/max*ih;
 const grid=Array.from({length:5},(_,i)=>{const v=max*i/4;return `<line x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}" class="grid-line"/><text x="${L-12}" y="${y(v)+4}" text-anchor="end" class="axis">${v<10?v.toFixed(1):Math.round(v)}</text>`}).join('');
 const labels=rows.map((r,i)=>`<text x="${x(i)}" y="${H-17}" text-anchor="middle" class="axis">${esc(r.label)}</text>`).join('');
 const shapes=type==='line'?`<path d="${rows.map((r,i)=>`${i?'L':'M'}${x(i)},${y(r.value)}`).join(' ')}" class="chart-line"/>${rows.map((r,i)=>`<circle cx="${x(i)}" cy="${y(r.value)}" r="5" class="chart-dot"><title>${esc(r.label)}: ${r.value} ${esc(unit)}</title></circle><text x="${x(i)}" y="${y(r.value)-13}" text-anchor="middle" class="value-label">${esc(r.value)}</text>`).join('')}`:rows.map((r,i)=>{const w=Math.min(65,iw/rows.length*.55);return `<rect x="${x(i)-w/2}" y="${y(r.value)}" width="${w}" height="${T+ih-y(r.value)}" rx="3" class="bar ${color}"><title>${esc(r.label)}: ${r.value} ${esc(unit)}</title></rect><text x="${x(i)}" y="${y(r.value)-9}" text-anchor="middle" class="value-label">${esc(r.value)}</text>`}).join('');
 return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}"><title>${esc(title)}; ${esc(unit)}. ${rows.map(r=>`${esc(r.label)}: ${r.value}`).join('; ')}</title><text x="${L}" y="15" class="axis">${esc(unit)}</text>${grid}${shapes}${labels}</svg>`;
}
export function spark(values){const max=Math.max(...values),min=Math.min(...values)-.15;return `<svg viewBox="0 0 100 28" class="spark" aria-hidden="true"><path d="${values.map((v,i)=>`${i?'L':'M'}${3+i*94/(values.length-1)},${24-(v-min)/(max-min)*20}`).join(' ')}"/></svg>`}
