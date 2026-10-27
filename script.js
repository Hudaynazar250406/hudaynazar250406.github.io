const glow=document.getElementById('glow');
document.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});
const words=['Python Developer','Network Engineer','Security Enthusiast','Linux Lover'];
let w=0,ch=0,del=false;
const el=document.getElementById('typing');
(function type(){
  const word=words[w];
  el.textContent=word.slice(0,del?--ch:++ch);
  let delay=del?50:110;
  if(!del&&ch===word.length){del=true;delay=1500;}
  else if(del&&ch===0){del=false;w=(w+1)%words.length;delay=400;}
  setTimeout(type,delay);
})();
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('show');
      e.target.querySelectorAll('[data-count]').forEach(n=>{
        const t=+n.dataset.count;let c=0;
        const step=setInterval(()=>{c+=Math.ceil(t/40);if(c>=t){c=t;clearInterval(step);}n.textContent=c;},30);
      });
      io.unobserve(e.target);
    }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(s=>io.observe(s));
document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(700px) rotateY(${x*14}deg) rotateX(${-y*14}deg) scale(1.03)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});
