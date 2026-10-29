(() => {
const root=document.getElementById('borgo-walk'); if(!root)return;
const stops=[
 {kind:'LA CASA, DENTRO IL BORGO',title:'Il Nido<br> <em>di Sofì.</em>',time:'Partenza da Via del Poliziano',description:'Un appartamento in un palazzo del centro storico. Fuori dalla porta, il borgo: facciate, botteghe e piccole strade da percorrere a piedi.',label:'IL SENSO DI QUESTA PASSEGGIATA',detail:'Il borgo comincia sulla soglia.'},
 {kind:'LA PRIMA SOSTA',title:'Piazza<br> <em>Grande.</em>',time:'La seconda tappa, nel cuore monumentale',description:'Da Via del Teatro si raggiunge Piazza Grande, fra il Palazzo Comunale, il Duomo e i palazzi storici. Uno spazio in cui fermarsi, alzare lo sguardo e riconoscere il carattere di Montepulciano.',label:'UNA PIAZZA, MOLTE STORIE',detail:'La pietra, le facciate, il tempo di guardare.'},
 {kind:'DALLA PIAZZA AL VERDE',title:'La<br> <em>Fortezza.</em>',time:'Da Piazza Grande verso la Fortezza',description:'La passeggiata prosegue lungo Via di San Donato verso la Fortezza Medicea. Il disegno del borgo incontra qui il verde che circonda la fortificazione.',label:'L’ULTIMA TAPPA DEL NOSTRO FILO',detail:'Un altro volto del centro, sempre dentro le mura.'}
];
const arrowIcon='<svg class="icon-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 13L13 3M4 3H13V12"/></svg>';
let ui={play:'Segui il filo',next:'Tappa successiva',back:'Torna al Nido',replay:'Rivedi la passeggiata',playing:'Una passeggiata nel borgo…'},touring=false,finished=false;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const trail=root.querySelector('#borgo-trail'),pen=root.querySelector('#borgo-pen');
const curve=(a,b,c,d,t)=>{const u=1-t;return [u*u*u*a[0]+3*u*u*t*b[0]+3*u*t*t*c[0]+t*t*t*d[0],u*u*u*a[1]+3*u*u*t*b[1]+3*u*t*t*c[1]+t*t*t*d[1]]};
const segments=[[[680,360],[676,305],[564,287],[531,258]],[[531,258],[498,229],[482,230],[440,230]],[[440,230],[434,281],[325,314],[301,346]],[[301,346],[277,378],[257,390],[235,390]]];
const points=[];
segments.forEach((s,index)=>{for(let i=index?1:0;i<=60;i++)points.push(window.nidoBorgoProject(...curve(...s,i/60),3));});
let selected=0,position=0,frame=0,token=0,resolveMove=null,activeTick=null,resetClock=false;
function cancelMove(){cancelAnimationFrame(frame);activeTick=null;if(resolveMove){resolveMove(false);resolveMove=null;}pen.setAttribute('opacity','0');}
function paint(p){
 const end=Math.min(240,Math.max(0,p)),index=Math.floor(end),fraction=end-index;
 const visible=points.slice(0,index+1);
 if(fraction&&index<240)visible.push([points[index][0]+(points[index+1][0]-points[index][0])*fraction,points[index][1]+(points[index+1][1]-points[index][1])*fraction]);
 trail.setAttribute('d','M'+visible.map(p=>p.map(n=>n.toFixed(2)).join(',')).join(' L'));
 const tip=visible[visible.length-1];pen.setAttribute('cx',tip[0]);pen.setAttribute('cy',tip[1]);position=end;
 root.dataset.routeProgress=(end/240).toFixed(4);
}
function details(index){
 selected=index;const stop=stops[index];
 root.querySelector('#borgo-chapter').textContent=`0${index+1} / 03`;
 root.querySelector('#borgo-kind').textContent=stop.kind;
 root.querySelector('#borgo-stop-title').innerHTML=stop.title;
 root.querySelector('#borgo-time').textContent=stop.time;
 root.querySelector('#borgo-description').textContent=stop.description;
 root.querySelector('#borgo-detail-label').textContent=stop.label;
 root.querySelector('#borgo-detail-copy').textContent=stop.detail;
 root.querySelectorAll('[data-stop]').forEach(button=>{const active=Number(button.dataset.stop)===index;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
 root.querySelectorAll('[data-building]').forEach(g=>g.classList.toggle('is-active',Number(g.dataset.building)===index));
 root.querySelector('.duomo').classList.toggle('is-active',index===1);
 const panel=root.querySelector('.story-panel');panel.classList.remove('changing');void panel.offsetWidth;panel.classList.add('changing');
 root.querySelector('#borgo-next').innerHTML=index===2?ui.back+' <span aria-hidden="true">↺</span>':ui.next+' <span aria-hidden="true">→</span>';
}
function moveTo(index,run){
 cancelMove();details(index);
 const from=position,to=index*120,duration=reduced.matches?0:Math.max(500,Math.abs(to-from)*8);
 if(duration===0){paint(to);return Promise.resolve(true);}
 pen.setAttribute('opacity','1');
 return new Promise(resolve=>{
  resolveMove=resolve;let last=null,elapsed=0;
  const tick=time=>{
   if(run!==token){cancelMove();return;}
   if(document.hidden){last=null;return;}
   if(resetClock){last=null;resetClock=false;}
   if(last!==null)elapsed+=time-last;last=time;
   const t=Math.min(1,elapsed/duration),eased=t*t*(3-2*t);paint(from+(to-from)*eased);
   if(t<1)frame=requestAnimationFrame(tick);else{activeTick=null;resolveMove=null;pen.setAttribute('opacity','0');resolve(true);}
  };
  activeTick=tick;frame=requestAnimationFrame(tick);
 });
}
function choose(index){touring=false;finished=false;token++;cancelMove();root.querySelector('#borgo-play').innerHTML=ui.play+arrowIcon;moveTo(index,token);}
root.querySelectorAll('[data-stop]').forEach(button=>button.addEventListener('click',()=>choose(Number(button.dataset.stop))));
root.querySelector('#borgo-next').addEventListener('click',()=>choose((selected+1)%3));
root.querySelector('#borgo-play').addEventListener('click',async()=>{
 const run=++token;touring=true;finished=false;cancelMove();paint(0);details(0);
 root.querySelector('#borgo-play').textContent=ui.playing;
 await moveTo(1,run);if(run!==token)return;
 await new Promise(resolve=>setTimeout(resolve,reduced.matches?0:650));if(run!==token)return;
 await moveTo(2,run);if(run!==token)return;
 touring=false;finished=true;root.querySelector('#borgo-play').innerHTML=ui.replay+' <span aria-hidden="true">↺</span>';
});
reduced.addEventListener('change',()=>{touring=false;finished=false;token++;cancelMove();paint(selected*120);root.querySelector('#borgo-play').innerHTML=ui.play+arrowIcon;});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);resetClock=true;}else if(activeTick)frame=requestAnimationFrame(activeTick);});
root.addEventListener('borgo-language',event=>{
 const t=event.detail.copy;ui=t;
 t.stops.forEach((v,i)=>Object.assign(stops[i],{kind:v[0],time:v[1],description:v[2]}));
 stops[2].title=event.detail.lang==='it'?'La<br> <em>Fortezza.</em>':'<em>Fortezza.</em>';
 details(selected);root.querySelector('.story-panel').classList.remove('changing');
 root.querySelector('#borgo-play').innerHTML=touring?ui.playing:finished?ui.replay:ui.play+arrowIcon;
 root.querySelectorAll('[data-stop]').forEach(button=>{const i=Number(button.dataset.stop);button.setAttribute('aria-label',String(i+1)+': '+['Il Nido di Sofì','Piazza Grande','Fortezza'][i]);});
});
details(0);paint(0);root.querySelector('.story-panel').classList.remove('changing');

})();
