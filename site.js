// Custom cursor: a dot that follows the pointer exactly, with a 3D cheese wedge trailing behind
(function(){
  if(!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root=document.documentElement;
  document.body.insertAdjacentHTML('beforeend',`
<svg class="cur-cheese" viewBox="0 0 40 34" aria-hidden="true">
  <defs>
    <linearGradient id="ch-top" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE48A"/><stop offset="1" stop-color="#FFD25A"/></linearGradient>
    <linearGradient id="ch-front" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC93C"/><stop offset="1" stop-color="#F2A91F"/></linearGradient>
  </defs>
  <path d="M30 5 L37 12 L37 21 L30 14 Z" fill="#E08E14"/>
  <path d="M3 21 L37 12 L37 21 L3 29 Z" fill="url(#ch-front)"/>
  <path d="M3 21 L30 5 L37 12 Z" fill="url(#ch-top)"/>
  <ellipse cx="22" cy="12" rx="2.6" ry="1.4" fill="#EDB437"/>
  <ellipse cx="28.5" cy="12.3" rx="1.6" ry=".9" fill="#EDB437"/>
  <ellipse cx="15" cy="17" rx="1.5" ry=".8" fill="#EDB437"/>
  <path d="M12 23.6 a2.2 2.2 0 0 1 4.4 -1 L16.4 25.5 a2.2 2.2 0 0 1 -4.4 .9Z" fill="#D9921A"/>
  <circle cx="27" cy="18.6" r="1.7" fill="#D9921A"/>
  <circle cx="21" cy="22.4" r="1.1" fill="#D9921A"/>
  <path d="M3 21 L37 12" stroke="#FFF3C4" stroke-width=".8" stroke-linecap="round"/>
</svg><div class="cur-dot" aria-hidden="true"></div>`);
  const dot=document.querySelector('.cur-dot'), ch=document.querySelector('.cur-cheese');
  root.classList.add('has-cur');
  let mx=-100,my=-100,cx=-100,cy=-100,rot=0;
  addEventListener('mousemove',e=>{
    mx=e.clientX; my=e.clientY; root.classList.add('cur-in');
    dot.style.transform=`translate(${mx}px,${my}px)`;
    dot.classList.toggle('hover',!!e.target.closest('a,button'));
  });
  document.addEventListener('mouseleave',()=>root.classList.remove('cur-in'));
  (function loop(){
    const k=still?1:0.14, tx=mx+18, ty=my+20, vx=tx-cx;
    cx+=vx*k; cy+=(ty-cy)*k;
    rot+=((still?0:Math.max(-25,Math.min(25,vx*0.6)))-rot)*0.15;
    ch.style.transform=`translate(${cx}px,${cy}px) rotate(${rot}deg)`;
    requestAnimationFrame(loop);
  })();
})();
