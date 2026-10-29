/* Small, dependency-free orthographic renderer. Every volume uses world x/y/z
   coordinates; all faces, routes and marker anchors share the same projection. */
(() => {
const root=document.getElementById('borgo-walk'); if(!root)return;
const svg=root.querySelector('.map-scene svg');
const P=(x,y,z=0)=>[550+(x-500)*.90+(y-285)*.34,380-(x-500)*.15+(y-285)*.67-z*.95];
window.nidoBorgoProject=P;
const pt=p=>p.map(v=>v.toFixed(2)).join(',');
const pp=p=>pt(P(...p));
const polygon=(points,fill,stroke='none',extra='')=>`<polygon points="${points.map(pp).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width=".65" stroke-linejoin="round" ${extra}/>`;
const line=(points,stroke,width=1,extra='')=>`<polyline points="${points.map(pp).join(' ')}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linejoin="round" stroke-linecap="round" ${extra}/>`;
const original=svg.querySelector('#borgo-wall-outline'),length=original.getTotalLength();
const ring=Array.from({length:110},(_,i)=>{const p=original.getPointAtLength(length*i/110);return [p.x,p.y];});
const groundPoints=ring.map(p=>[...p,0]);
const faces=[];
const push=(x,y,markup,kind='')=>faces.push({depth:P(x,y)[1],markup,kind});
function box(x,y,w,d,h,colors={top:'#ece0c7',front:'#d5bea0',side:'#b29a7b'},base=0){
 return polygon([[x,y,base],[x+w,y,base],[x+w,y,base+h],[x,y,base+h]],colors.side)
 +polygon([[x+w,y,base],[x+w,y+d,base],[x+w,y+d,base+h],[x+w,y,base+h]],colors.side)
 +polygon([[x,y+d,base],[x+w,y+d,base],[x+w,y+d,base+h],[x,y+d,base+h]],colors.front)
 +polygon([[x,y,base+h],[x+w,y,base+h],[x+w,y+d,base+h],[x,y+d,base+h]],colors.top);
}
function roof(x,y,w,d,h,r=11,tone=0){
 const palettes=[['#b97757','#d49b74'],['#bd8665','#d8a785'],['#aa775b','#c99575']];
 const c=palettes[tone%3];
 let out=polygon([[x-2,y-2,h],[x+w/2,y-2,h+r],[x+w/2,y+d+2,h+r],[x-2,y+d+2,h]],c[1]);
 out+=polygon([[x+w/2,y-2,h+r],[x+w+2,y-2,h],[x+w+2,y+d+2,h],[x+w/2,y+d+2,h+r]],c[0]);
 out+=polygon([[x-2,y+d+2,h],[x+w/2,y+d+2,h+r],[x+w+2,y+d+2,h]],'#c28f6b');
 for(let t=5;t<d;t+=6)out+=line([[x+w/2,y+t,h+r+.3],[x+w+1,y+t,h+.5]],'#9a6043',.5,'opacity=".3"');
 return out;
}
function windows(x,y,w,d,h,floors=2){
 let out='';
 const cols=Math.max(2,Math.floor(w/15));
 for(let floor=0;floor<floors;floor++)for(let col=0;col<cols;col++){
  const wx=x+(col+1)*w/(cols+1)-2.5,z=12+floor*18;
  if(z+7<h)out+=polygon([[wx,y+d+.1,z],[wx+5,y+d+.1,z],[wx+5,y+d+.1,z+7],[wx,y+d+.1,z+7]],'#6f7660');
 }
 out+=polygon([[x+w*.45,y+d+.2,0],[x+w*.59,y+d+.2,0],[x+w*.59,y+d+.2,12],[x+w*.45,y+d+.2,12]],'#8d6647');
 return out;
}
function house(x,y,w=28,d=24,h=33,tone=0){
 let s=polygon([[x+6,y+7,1],[x+w+15,y+7,1],[x+w+18,y+d+12,1],[x+8,y+d+10,1]],'#9e8d6e','none','opacity=".11"');
 s+=box(x,y,w,d,h,{top:'#ecdfc7',front:tone%2?'#e1d0b6':'#e9dac0',side:'#c3ad8e'});
 s+=windows(x,y,w,d,h,h>42?3:2)+roof(x,y,w,d,h,9,tone);
 if(tone%4===0)s+=box(x+w*.7,y+d*.3,4,5,10,{top:'#e8d7bb',front:'#cdb597',side:'#ac9478'},h+4);
 push(x+w/2,y+d,s,'house');
}
function tree(x,y,size=1){
 const c=P(x,y,26*size),base=P(x,y,0);
 let s=`<ellipse cx="${base[0]+7}" cy="${base[1]+2}" rx="${13*size}" ry="${4*size}" fill="#526747" opacity=".12"/>`;
 s+=line([[x,y,0],[x,y,28*size]],'#8c7956',2.5);
 s+=`<ellipse cx="${c[0]}" cy="${c[1]}" rx="${12*size}" ry="${16*size}" fill="#8f9c71"/><ellipse cx="${c[0]-3*size}" cy="${c[1]-3*size}" rx="${8*size}" ry="${12*size}" fill="#a6b088"/>`;
 push(x,y,s,'tree');
}
const path=points=>'M'+points.map(p=>pt(P(...p))).join(' L');
let scene=`<defs><filter id="borgo-island-shadow" x="-30%" y="-30%" width="180%" height="180%"><feGaussianBlur stdDeviation="12"/></filter><radialGradient id="borgo-scene-bg"><stop stop-color="#faf6f0"/><stop offset="1" stop-color="#faf6f0"/></radialGradient></defs><rect width="1100" height="720" fill="url(#borgo-scene-bg)"/>`;
scene+=`<ellipse cx="565" cy="518" rx="410" ry="105" fill="#857657" opacity=".13" filter="url(#borgo-island-shadow)"/>`;
// A solid cutaway base makes the town read as a miniature on a ridge.
for(let i=0;i<ring.length;i++){
 const a=ring[i],b=ring[(i+1)%ring.length];
 scene+=polygon([[...a,-31],[...b,-31],[...b,0],[...a,0]],P(...a)[1]>380?'#c4b597':'#d4c8ad');
}
scene+=polygon(groundPoints,'#e6dfc8','#cbbb9c');
scene+=polygon(ring.map(([x,y])=>[500+(x-500)*.985,285+(y-285)*.985,.5]),'#eee6d2');
const lanes=[[[880,147],[797,171],[748,207],[711,251],[696,328],[680,360]],[[440,230],[512,204],[574,180],[635,163]],[[301,346],[350,400],[428,403],[505,412]],[[170,430],[250,459],[365,470],[480,450],[565,430]],[[375,135],[510,100],[655,90],[790,76]]];
lanes.forEach(p=>{scene+=line(p.map(v=>[...v,1]),'#d4c5a9',13);scene+=line(p.map(v=>[...v,1.2]),'#fbf2df',9);});
const curve=(a,b,c,d,t)=>{const u=1-t;return [u*u*u*a[0]+3*u*u*t*b[0]+3*u*t*t*c[0]+t*t*t*d[0],u*u*u*a[1]+3*u*u*t*b[1]+3*u*t*t*c[1]+t*t*t*d[1],2];};
const segs=[[[680,360],[676,305],[564,287],[531,258]],[[531,258],[498,229],[482,230],[440,230]],[[440,230],[434,281],[325,314],[301,346]],[[301,346],[277,378],[257,390],[235,390]]];
const route=segs.flatMap(s=>Array.from({length:40},(_,i)=>curve(...s,i/39)));
scene+=line(route,'#c8b899',15)+line(route,'#fff5e2',11);
scene+=polygon([[397,206,2],[488,206,2],[508,246,2],[461,269,2],[395,251,2]],'#ded1b8','#c7b492');
for(let x=400;x<490;x+=14)scene+=line([[x,210,2.2],[x+9,253,2.2]],'#c9baa1',.6);
scene+=`<path id="borgo-route-base" d="${path(route)}" fill="none" stroke="#c1a583" stroke-width="1.5" stroke-dasharray="2 6"/><path id="borgo-trail" fill="none" stroke="#984e30" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle id="borgo-pen" r="4" fill="#984e30" opacity="0"/>`;
// Quieter housing clusters leave the itinerary and the square breathing room.
const homes=[
 [289,288,29,24,29],[331,278,24,22,37],[345,326,29,23,34],[389,323,26,25,36],[430,345,29,24,30],
 [305,422,35,24,30],[354,436,25,23,36],[397,435,28,25,31],[461,422,31,24,39],[515,415,32,24,34],
 [551,366,25,22,33],[593,389,25,22,40],[722,315,29,23,35],[750,271,26,24,40],
 [557,205,30,23,30],[608,182,25,24,34],[651,164,26,22,36],[695,147,28,24,37],[742,131,27,22,30],
 [787,119,25,24,37],[823,114,28,23,32],[797,185,30,23,39],[838,165,25,23,34],[735,210,29,24,29],[659,240,27,22,32],
 [170,414,24,23,29],[204,456,24,22,32],[244,469,27,22,30],
 [294,201,24,24,28],[336,174,27,23,34],[365,117,25,23,29],[408,92,27,24,34],
 [465,76,28,22,29],[511,65,25,24,33],[556,62,27,23,31],[603,60,26,22,35],
 [648,58,25,23,28],[694,52,25,24,32],[744,47,29,24,30],
 [280,379,25,22,30],[563,302,24,21,29]
];
homes.forEach((h,i)=>house(...h,i));
// Nido: an apartment in the existing urban fabric, represented as a palazzo.
let nido=box(650,302,59,43,65,{top:'#e4d0ac',front:'#f0dfc1',side:'#bfa27c'});
nido+=windows(650,302,59,43,65,3)+roof(650,302,59,43,65,14,0);
nido+=polygon([[673,345.3,0],[685,345.3,0],[685,345.3,17],[673,345.3,17]],'#965338');
push(679,345,nido,'landmark" data-building="0');
// Palazzo Comunale: crenellated civic facade and central belfry.
let comune=box(404,160,64,43,40,{top:'#e9dfc7',front:'#f1e5cc',side:'#c7b797'});
comune+=windows(404,160,64,43,40,2)+box(426,169,20,22,91,{top:'#f2e7d0',front:'#e8d8b8',side:'#bfa783'});
comune+=polygon([[432,191.3,62],[440,191.3,62],[440,191.3,77],[432,191.3,77]],'#6d715e');
for(let x=404;x<468;x+=10)comune+=box(x,199,5,5,6,{top:'#f6ebd6',front:'#e6d7ba',side:'#b9a382'},40);
for(let x=426;x<446;x+=8)comune+=box(x,169,4,22,6,{top:'#f6ebd6',front:'#e6d7ba',side:'#b9a382'},91);
push(436,203,comune,'landmark" data-building="1');
// Duomo: a broad, warm unfinished front, rather than an invented campanile.
let duomo=box(491,160,54,54,33,{top:'#c9ad8d',front:'#c8a588',side:'#ae8b6c'});
duomo+=roof(491,160,54,54,33,12,2)+box(489,211,58,4,39,{top:'#d5b79b',front:'#ccac90',side:'#a98667'});
for(let x of [498,514,534])duomo+=polygon([[x,215.2,0],[x+8,215.2,0],[x+8,215.2,16],[x,215.2,16]],'#97795b');
duomo+=line([[490,215.5,25],[547,215.5,25]],'#ae8b6d',1);
push(518,215,duomo,'landmark duomo');
// Fortezza: fortified wings around a courtyard, with planted surroundings.
scene+=polygon([[169,298,1],[282,298,1],[291,366,1],[171,369,1]],'#cbd2b4');
let fort=box(188,304,88,18,31,{top:'#e3d1b1',front:'#d5bc95',side:'#b9a07a'});
fort+=box(188,304,18,49,34,{top:'#e3d1b1',front:'#ddc7a1',side:'#b59b73'});
fort+=box(258,304,18,49,34,{top:'#e3d1b1',front:'#ddc7a1',side:'#b59b73'});
fort+=box(188,341,88,14,28,{top:'#e9d9b9',front:'#dfcaa5',side:'#bba17a'});
for(let x of [188,258]){
 fort+=box(x,336,18,21,47,{top:'#eee0c4',front:'#dfcaa5',side:'#b59b73'});
 for(let dx=0;dx<18;dx+=7)fort+=box(x+dx,352,4,5,6,{top:'#f2e6cb',front:'#dbc5a0',side:'#ac926c'},47);
}
fort+=polygon([[226,355.2,0],[239,355.2,0],[239,355.2,20],[226,355.2,20]],'#8e7a56');
push(233,357,fort,'landmark" data-building="2');
[[173,311,.85],[286,309,.9],[172,353,.75],[286,353,.7],[576,458,.7],[586,471,.6],[859,248,.7],[861,269,.7],[148,402,.65]].forEach(t=>tree(...t));
// Masonry faces and coping follow the irregular enclosing perimeter.
for(let i=0;i<ring.length;i++){
 const a=ring[i],b=ring[(i+1)%ring.length],mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2;
 let wall=polygon([[...a,0],[...b,0],[...b,16],[...a,16]],'#b7a181','#a58d6e');
 wall+=line([[...a,17],[...b,17]],'#e9d8b8',4);
 if(i%4===0)wall+=line([[mx,my,2],[mx,my,14]],'#9c8465',.6,'opacity=".55"');
 push(mx,my,wall,'wall');
}
// A discreet entrance at the north-eastern tip.
let gate=box(900,120,25,11,30,{top:'#e6d5b7',front:'#cbb38e',side:'#aa916f'});
gate+=polygon([[908,131.3,0],[917,131.3,0],[917,131.3,19],[908,131.3,19]],'#8b7b5d');push(912,131,gate,'gate');
faces.sort((a,b)=>a.depth-b.depth);
scene+=faces.map(f=>`<g class="${f.kind}" stroke-linejoin="round">${f.markup}</g>`).join('');
svg.innerHTML=scene;
function layout(){
 const mobile=matchMedia('(max-width:700px)').matches;
 const [x,y,w,h]=mobile?[100,140,900,550]:[0,0,1100,720];
 svg.setAttribute('viewBox',`${x} ${y} ${w} ${h}`);
 [[680,360],[440,230],[235,390]].forEach((p,i)=>{
  const q=P(...p,3),node=root.querySelector(`.map-node[data-stop="${i}"]`);
  node.style.setProperty('--x',(q[0]-x)/w*100+'%');node.style.setProperty('--y',(q[1]-y)/h*100+'%');
 });
}
layout();window.addEventListener('resize',layout);
})();
