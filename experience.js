document.addEventListener('DOMContentLoaded',()=>{
  const section=document.querySelector('.v3-logo-section');
  if(!section)return;
  const original=section.querySelector('.v3-logo-original');
  const replay=section.querySelector('.v3-logo-replay');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const timing=window.nidoLogoData.timing;
  const geometry=window.nidoLogoData.path;
  const points=Array.from(geometry.matchAll(/([\d.]+),([\d.]+)/g),match=>[Number(match[1]),Number(match[2])]);
  const distances=[0];
  for(let i=1;i<points.length;i++)distances.push(distances[i-1]+Math.hypot(points[i][0]-points[i-1][0],points[i][1]-points[i-1][1]));
  const geometryLength=distances[distances.length-1];
  const canvas=document.createElement('canvas');canvas.className='v3-logo-canvas';canvas.width=1108;canvas.height=784;canvas.setAttribute('aria-hidden','true');
  const mask=document.createElement('canvas');mask.width=1108;mask.height=784;
  const context=canvas.getContext('2d');const ink=mask.getContext('2d');
  if(!context||!ink)return;
  section.querySelector('.v3-logo-art').append(canvas);
  let played=false,visible=false,frame=0,elapsed=0,lastTime=null,pending=false;
  if(!reduced.matches&&'IntersectionObserver' in window)section.classList.add('is-prepared');
  function progressAt(time){
    const ratio=Math.min(1,Math.max(0,time/2800));
    let i=1;while(i<timing.length-1&&timing[i].time<ratio)i++;
    const a=timing[i-1],b=timing[i];
    const mix=Math.min(1,Math.max(0,(ratio-a.time)/(b.time-a.time||1)));
    return a.progress+(b.progress-a.progress)*mix;
  }
  function render(time){
    const progress=progressAt(time);
    ink.clearRect(0,0,1108,784);
    if(progress>0){
      ink.save();ink.strokeStyle='#fff';ink.lineWidth=18;ink.lineCap='round';ink.lineJoin='round';
      const target=geometryLength*progress;
      ink.beginPath();ink.moveTo(points[0][0],points[0][1]);
      for(let i=1;i<points.length;i++){
        if(distances[i]>=target){
          const ratio=(target-distances[i-1])/(distances[i]-distances[i-1]||1);
          ink.lineTo(points[i-1][0]+(points[i][0]-points[i-1][0])*ratio,points[i-1][1]+(points[i][1]-points[i-1][1])*ratio);break;
        }
        ink.lineTo(points[i][0],points[i][1]);
      }
      ink.stroke();ink.restore();
    }
    const signature=Math.min(1,Math.max(0,(time-2900)/350));
    if(signature){ink.save();ink.globalAlpha=signature;ink.fillStyle='#fff';ink.fillRect(0,686,1108,98);ink.restore();}
    context.clearRect(0,0,1108,784);context.save();context.drawImage(original,0,0,1108,784);
    context.globalCompositeOperation='destination-in';context.drawImage(mask,0,0);context.restore();
    section.dataset.logoProgress=progress.toFixed(4);
  }
  function finish(){
    cancelAnimationFrame(frame);lastTime=null;
    section.classList.remove('is-drawing','is-prepared');section.dataset.logoState='complete';
    replay.hidden=reduced.matches;
  }
  function tick(now){
    if(document.hidden){lastTime=null;return;}
    if(lastTime!==null)elapsed+=Math.max(0,now-lastTime);
    lastTime=now;render(elapsed);
    if(elapsed>=3250){finish();return;}
    frame=requestAnimationFrame(tick);
  }
  function play(){
    if(document.hidden)return;
    cancelAnimationFrame(frame);lastTime=null;elapsed=0;
    if(reduced.matches){finish();return;}
    if(!original.complete||!original.naturalWidth){original.addEventListener('load',play,{once:true});return;}
    played=true;replay.hidden=false;section.classList.add('is-drawing');section.classList.remove('is-prepared');section.dataset.logoState='drawing';
    render(0);
    frame=requestAnimationFrame(tick);
  }
  replay.addEventListener('click',()=>{
    window.scrollTo({top:Math.max(0,section.getBoundingClientRect().top+scrollY-78),behavior:'instant'});play();
  });
  if('IntersectionObserver' in window){
    new IntersectionObserver(entries=>{
      visible=entries.some(entry=>entry.isIntersecting);
      if(visible&&!played&&!document.hidden)play();
    },{threshold:.5,rootMargin:'-78px 0px -24px 0px'}).observe(section);
  }
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){cancelAnimationFrame(frame);lastTime=null;}
    else if(section.dataset.logoState==='drawing')frame=requestAnimationFrame(tick);
    else if(visible&&!played)play();
  });
  reduced.addEventListener('change',finish);
  function updateHeader(){pending=false;document.body.classList.toggle('v3-scrolled',scrollY>60);}
  window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(updateHeader);}},{passive:true});updateHeader();
});
