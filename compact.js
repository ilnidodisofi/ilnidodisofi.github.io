(() => {
  const copy={
    it:{homeDetails:'I dettagli del soggiorno',morePhotos:'Mostra tutte le foto',photoCount:'17 immagini della casa',fewerPhotos:'Mostra solo le prime 10 foto ↑',borgoKicker:'02 — NEL CUORE DEL BORGO',borgoTitle:'Una casa.<br><em>Un intero borgo.</em>',borgoLead:'Il Nido è in Via del Poliziano, nel centro storico di Montepulciano. Da qui raggiungi Piazza Grande lungo Via del Teatro, poi la Fortezza lungo Via di San Donato.',modelNote:'Un plastico illustrativo per scoprire le tre tappe: volumi, distanze e mura sono interpretati e non in scala.',dockBook:'Prenota direttamente',modelLabel:'IL BORGO IN MINIATURA',play:'Segui il filo',next:'Tappa successiva',back:'Torna al Nido',replay:'Rivedi la passeggiata',playing:'Una passeggiata nel borgo…',trail:'Il percorso',walls:'Le mura',scale:'PLASTICO ILLUSTRATO · NON IN SCALA',photoDialog:'Foto dell’appartamento',expandLabel:'Mostra tutte le 17 foto',expanded:'Ora sono visibili tutte le 17 foto.',collapsed:'Sono visibili le prime 10 foto.',steps:'Scegli una tappa',
    stops:[['LA CASA, DENTRO IL BORGO','Partenza da Via del Poliziano','Un appartamento in un palazzo del centro storico. Fuori dalla porta, il borgo: facciate, botteghe e piccole strade da percorrere a piedi.'],['LA PRIMA SOSTA','La seconda tappa, nel cuore monumentale','Da Via del Teatro si raggiunge Piazza Grande, fra il Palazzo Comunale, il Duomo e i palazzi storici. Uno spazio in cui fermarsi e guardarsi intorno.'],['DALLA PIAZZA AL VERDE','Da Piazza Grande verso la Fortezza','La passeggiata prosegue lungo Via di San Donato verso la Fortezza Medicea e il verde che la circonda. Sempre dentro il centro storico.']]},
    en:{homeDetails:'The details of your stay',morePhotos:'Show all photos',photoCount:'17 photos of the apartment',fewerPhotos:'Show only the first 10 photos ↑',borgoKicker:'02 — IN THE HEART OF THE OLD TOWN',borgoTitle:'One home.<br><em>A whole town.</em>',borgoLead:'Il Nido is on Via del Poliziano, in Montepulciano’s historic centre. Walk along Via del Teatro to Piazza Grande, then along Via di San Donato to the Fortezza.',modelNote:'An illustrated model of three stops: buildings, distances and walls are interpreted and not to scale.',dockBook:'Book direct',modelLabel:'THE TOWN IN MINIATURE',play:'Follow the trail',next:'Next stop',back:'Back to Il Nido',replay:'Replay the walk',playing:'A walk through the town…',trail:'The route',walls:'The walls',scale:'ILLUSTRATED MODEL · NOT TO SCALE',photoDialog:'Apartment photographs',expandLabel:'Show all 17 photos',expanded:'All 17 photos are now visible.',collapsed:'The first 10 photos are visible.',steps:'Choose a stop',
    stops:[['YOUR HOME IN THE OLD TOWN','Starting on Via del Poliziano','An apartment in a historic town building. Outside the door: facades, small shops and streets to explore on foot.'],['THE FIRST PAUSE','The second stop, in the monumental centre','Via del Teatro leads to Piazza Grande, between the Palazzo Comunale, the Duomo and historic palaces. A place to pause and look around.'],['FROM THE SQUARE TO THE GREEN','From Piazza Grande to the Fortezza','The walk continues along Via di San Donato to the Medici Fortress and its green surroundings, within the historic centre.']]},
    es:{homeDetails:'Los detalles de la estancia',morePhotos:'Ver todas las fotos',photoCount:'17 imágenes del apartamento',fewerPhotos:'Mostrar solo las primeras 10 fotos ↑',borgoKicker:'02 — EN EL CORAZÓN DEL CASCO HISTÓRICO',borgoTitle:'Una casa.<br><em>Todo un pueblo.</em>',borgoLead:'Il Nido está en Via del Poliziano, en el centro histórico de Montepulciano. Desde aquí, Via del Teatro lleva a Piazza Grande y Via di San Donato a la Fortezza.',modelNote:'Maqueta ilustrativa de tres paradas: edificios, distancias y murallas son interpretativos y no están a escala.',dockBook:'Reserva directa',modelLabel:'EL PUEBLO EN MINIATURA',play:'Sigue el recorrido',next:'Siguiente parada',back:'Volver a Il Nido',replay:'Repetir el paseo',playing:'Un paseo por el pueblo…',trail:'El recorrido',walls:'Las murallas',scale:'MAQUETA ILUSTRATIVA · SIN ESCALA',photoDialog:'Fotos del apartamento',expandLabel:'Ver las 17 fotos',expanded:'Ahora se ven las 17 fotos.',collapsed:'Se ven las primeras 10 fotos.',steps:'Elige una parada',
    stops:[['LA CASA EN EL CASCO HISTÓRICO','Salida desde Via del Poliziano','Un apartamento en un edificio histórico. Al salir: fachadas, pequeñas tiendas y calles para recorrer a pie.'],['LA PRIMERA PAUSA','Segunda parada, en el centro monumental','Via del Teatro lleva a Piazza Grande, entre el Palazzo Comunale, el Duomo y los palacios históricos. Un lugar para detenerse y mirar alrededor.'],['DE LA PLAZA AL VERDE','De Piazza Grande a la Fortezza','El paseo sigue por Via di San Donato hasta la Fortaleza Medicea y el verde que la rodea, dentro del casco histórico.']]},
    de:{homeDetails:'Die Details Ihres Aufenthalts',morePhotos:'Alle Fotos ansehen',photoCount:'17 Bilder der Wohnung',fewerPhotos:'Nur die ersten 10 Fotos zeigen ↑',borgoKicker:'02 — MITTEN IN DER ALTSTADT',borgoTitle:'Ein Zuhause.<br><em>Eine ganze Stadt.</em>',borgoLead:'Il Nido liegt in der Via del Poliziano in Montepulcianos Altstadt. Über die Via del Teatro erreichen Sie die Piazza Grande, dann über die Via di San Donato die Fortezza.',modelNote:'Ein illustriertes Modell mit drei Stationen: Gebäude, Entfernungen und Mauern sind interpretiert und nicht maßstabsgetreu.',dockBook:'Direkt buchen',modelLabel:'DIE STADT IM KLEINFORMAT',play:'Dem Weg folgen',next:'Nächste Station',back:'Zurück zu Il Nido',replay:'Spaziergang wiederholen',playing:'Ein Spaziergang durch die Stadt…',trail:'Der Weg',walls:'Die Stadtmauer',scale:'ILLUSTRIERTES MODELL · NICHT MASSSTABSGETREU',photoDialog:'Fotos der Wohnung',expandLabel:'Alle 17 Fotos ansehen',expanded:'Alle 17 Fotos sind jetzt sichtbar.',collapsed:'Die ersten 10 Fotos sind sichtbar.',steps:'Eine Station wählen',
    stops:[['IHR ZUHAUSE IN DER ALTSTADT','Start in der Via del Poliziano','Eine Wohnung in einem historischen Stadthaus. Vor der Tür warten Fassaden, kleine Läden und Gassen auf einen Spaziergang.'],['DIE ERSTE PAUSE','Zweite Station im historischen Zentrum','Die Via del Teatro führt zur Piazza Grande mit Palazzo Comunale, Dom und historischen Palästen. Ein Ort zum Innehalten und Umschauen.'],['VOM PLATZ INS GRÜNE','Von der Piazza Grande zur Fortezza','Der Weg führt über die Via di San Donato zur Medici-Festung und dem umliegenden Grün, innerhalb der Altstadt.']]},
    fr:{homeDetails:'Les détails de votre séjour',morePhotos:'Voir toutes les photos',photoCount:'17 images de l’appartement',fewerPhotos:'Afficher seulement les 10 premières photos ↑',borgoKicker:'02 — AU CŒUR DU BOURG',borgoTitle:'Une maison.<br><em>Tout un bourg.</em>',borgoLead:'Il Nido se trouve Via del Poliziano, dans le centre historique de Montepulciano. La Via del Teatro mène à Piazza Grande, puis la Via di San Donato à la Fortezza.',modelNote:'Une maquette illustrée de trois étapes : bâtiments, distances et remparts sont interprétés et non à l’échelle.',dockBook:'Réserver en direct',modelLabel:'LE BOURG EN MINIATURE',play:'Suivre le parcours',next:'Étape suivante',back:'Retour à Il Nido',replay:'Revoir la promenade',playing:'Une promenade dans le bourg…',trail:'Le parcours',walls:'Les remparts',scale:'MAQUETTE ILLUSTRÉE · SANS ÉCHELLE',photoDialog:'Photos de l’appartement',expandLabel:'Voir les 17 photos',expanded:'Les 17 photos sont maintenant visibles.',collapsed:'Les 10 premières photos sont visibles.',steps:'Choisir une étape',
    stops:[['VOTRE MAISON DANS LE BOURG','Départ de Via del Poliziano','Un appartement dans un bâtiment historique. Dehors : façades, petites boutiques et ruelles à découvrir à pied.'],['LA PREMIÈRE PAUSE','Deuxième étape, au cœur monumental','La Via del Teatro mène à Piazza Grande, entre le Palazzo Comunale, le Duomo et les palais historiques. Un lieu où s’arrêter et regarder autour de soi.'],['DE LA PLACE À LA VERDURE','De Piazza Grande à la Fortezza','La promenade continue Via di San Donato jusqu’à la forteresse des Médicis et ses abords verdoyants, dans le centre historique.']]},
    ru:{homeDetails:'Подробности проживания',morePhotos:'Показать все фото',photoCount:'17 фотографий квартиры',fewerPhotos:'Показать только первые 10 фото ↑',borgoKicker:'02 — В СЕРДЦЕ СТАРОГО ГОРОДА',borgoTitle:'Один дом.<br><em>Целый город.</em>',borgoLead:'Il Nido находится на Via del Poliziano в историческом центре Монтепульчано. Via del Teatro ведёт к Piazza Grande, а Via di San Donato — к крепости Fortezza.',modelNote:'Иллюстрированный макет трёх остановок: здания, расстояния и стены переданы условно и не в масштабе.',dockBook:'Прямое бронирование',modelLabel:'ГОРОД В МИНИАТЮРЕ',play:'Следовать по маршруту',next:'Следующая остановка',back:'Вернуться в Il Nido',replay:'Повторить прогулку',playing:'Прогулка по городу…',trail:'Маршрут',walls:'Стены',scale:'ИЛЛЮСТРИРОВАННЫЙ МАКЕТ · НЕ В МАСШТАБЕ',photoDialog:'Фотографии квартиры',expandLabel:'Показать все 17 фото',expanded:'Теперь видны все 17 фото.',collapsed:'Видны первые 10 фото.',steps:'Выбрать остановку',
    stops:[['ДОМ В СТАРОМ ГОРОДЕ','Начало на Via del Poliziano','Квартира в историческом здании. За дверью — фасады, небольшие лавки и улицы для пеших прогулок.'],['ПЕРВАЯ ПАУЗА','Вторая остановка в историческом центре','Via del Teatro ведёт к Piazza Grande, где находятся Palazzo Comunale, собор и исторические дворцы. Место, чтобы остановиться и осмотреться.'],['ОТ ПЛОЩАДИ К ЗЕЛЕНИ','От Piazza Grande к Fortezza','Прогулка продолжается по Via di San Donato к крепости Медичи и окружающей зелени, в пределах исторического центра.']]},
    zh:{homeDetails:'住宿细节',morePhotos:'查看全部照片',photoCount:'公寓的17张照片',fewerPhotos:'仅显示前10张照片 ↑',borgoKicker:'02 — 古城中心',borgoTitle:'一处居所。<br><em>一整座古城。</em>',borgoLead:'Il Nido 位于蒙特普尔恰诺历史中心的 Via del Poliziano。从这里沿 Via del Teatro 前往 Piazza Grande，再沿 Via di San Donato 抵达 Fortezza。',modelNote:'展示三个地点的插画模型：建筑、距离和城墙均经过艺术化处理，并非按比例绘制。',dockBook:'直接预订',modelLabel:'微缩古城',play:'沿着路线漫步',next:'下一站',back:'返回 Il Nido',replay:'重看漫步路线',playing:'漫步古城…',trail:'路线',walls:'城墙',scale:'插画模型 · 非等比例',photoDialog:'公寓照片',expandLabel:'查看全部17张照片',expanded:'现已显示全部17张照片。',collapsed:'现已显示前10张照片。',steps:'选择地点',
    stops:[['古城中的家','从 Via del Poliziano 出发','公寓坐落于历史建筑中。走出门便是古城的立面、小店和适合步行探索的街巷。'],['第一处停留','第二站，古城的地标中心','沿 Via del Teatro 抵达 Piazza Grande，这里有 Palazzo Comunale、主教座堂和历史宫殿，适合停下脚步环顾四周。'],['从广场走向绿意','从 Piazza Grande 前往 Fortezza','沿 Via di San Donato 继续前往美第奇堡垒及周边绿地，全程位于历史中心内。']]}
  };
  window.nidoV4Copy=copy;
  const lang=()=>{const l=(document.documentElement.lang||'it').slice(0,2);return copy[l]?l:'it';};
  const gallery=document.querySelector('.house-gallery');
  const tenth=gallery?.querySelector('[data-photo-expand]');
  const extras=[...(gallery?.querySelectorAll('[data-gallery-extra]')||[])];
  const collapse=document.querySelector('.gallery-collapse-wrap');
  const live=document.createElement('p');live.className='sr-only';live.setAttribute('aria-live','polite');gallery?.after(live);
  extras.forEach((photo,i)=>photo.id=`extra-photo-${i+11}`);
  tenth?.setAttribute('aria-controls',extras.map(p=>p.id).join(' '));
  let expanded=false;
  function setExpanded(value){
    expanded=value;extras.forEach(photo=>photo.hidden=!value);
    collapse.hidden=!value;tenth.setAttribute('aria-expanded',String(value));
    tenth.classList.toggle('gallery-is-expanded',value);tenth.querySelector('.gallery-more').hidden=value;
    tenth.setAttribute('aria-label',value?(tenth.querySelector('img')?.alt||'Photo 10'):copy[lang()].expandLabel);
    live.textContent=copy[lang()][value?'expanded':'collapsed'];
    if(value)extras[0]?.focus({preventScroll:true});else tenth.focus();
  }
  gallery?.addEventListener('click',event=>{
    if(event.target.closest('[data-photo-expand]')&&!expanded){
      event.preventDefault();event.stopImmediatePropagation();setExpanded(true);
    }
  },true);
  collapse?.querySelector('button').addEventListener('click',()=>setExpanded(false));
  // Preserve the existing lightbox, adding focus return for the expanded gallery.
  const lightbox=document.getElementById('lightbox');let photoTrigger=null;
  gallery?.addEventListener('click',event=>{photoTrigger=event.target.closest('[data-lightbox]');},true);
  if(lightbox){
    new MutationObserver(()=>{
      if(lightbox.classList.contains('is-open'))lightbox.querySelector('.lightbox-close')?.focus();
      else if(photoTrigger?.isConnected)photoTrigger.focus({preventScroll:true});
    }).observe(lightbox,{attributes:true,attributeFilter:['class']});
    document.addEventListener('keydown',event=>{
      if(event.key==='Tab'&&lightbox.classList.contains('is-open')){event.preventDefault();lightbox.querySelector('.lightbox-close')?.focus();}
    });
  }
  function render(){
    const t=copy[lang()];
    document.querySelectorAll('[data-v4]').forEach(el=>{const s=t[el.dataset.v4];if(s!==undefined)el.textContent=s;});
    document.querySelectorAll('[data-v4-html]').forEach(el=>{const s=t[el.dataset.v4Html];if(s!==undefined)el.innerHTML=s;});
    [['#casa',1],['.events-section',3],['.food-section',4],['.host',5],['#valdorcia',6],['#prenota',7],['.contacts',8],['.faq',9]].forEach(([selector,n])=>{
      const k=document.querySelector(`${selector} .section-kicker`);if(k)k.textContent=String(n).padStart(2,'0')+' — '+k.textContent.replace(/^\d+\s*[—–-]\s*/,'');
    });
    if(!expanded)tenth?.setAttribute('aria-label',t.expandLabel);
    lightbox?.setAttribute('aria-label',t.photoDialog);
    const root=document.getElementById('borgo-walk');
    root?.querySelector('.map-meta>span')?.replaceChildren(document.createTextNode('MONTEPULCIANO · '+t.modelLabel));
    const legend=root?.querySelector('.map-bottom>span');
    if(legend)legend.innerHTML=`<i class="legend-line"></i> ${t.trail}<i class="legend-wall"></i> ${t.walls}`;
    const scale=root?.querySelector('.map-bottom>span:last-child');if(scale)scale.textContent=t.scale;
    root?.querySelectorAll('.steps,.mobile-stops').forEach(el=>el.setAttribute('aria-label',t.steps));
    root?.dispatchEvent(new CustomEvent('borgo-language',{detail:{lang:lang(),copy:t}}));
  }
  // The older translation and pricing layers also call setLanguage. Render after
  // that function, so they cannot restore obsolete section numbers.
  const originalLanguage=window.setLanguage;
  if(originalLanguage)window.setLanguage=function(language){originalLanguage(language);render();};
  document.addEventListener('DOMContentLoaded',render);
  document.getElementById('languageSelect')?.addEventListener('change',()=>setTimeout(render,0));
  render();
})();
