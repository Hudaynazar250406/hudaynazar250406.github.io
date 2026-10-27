const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const root=document.documentElement;
const LS=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const T={
ru:{n_about:'Обо мне',n_skills:'Навыки',n_projects:'Проекты',n_path:'Путь',n_contact:'Контакты',hello:'Привет, я',name:'Худайназар',
sub:'Будущий специалист по информационной безопасности. Pentest, сети, администрирование инфраструктуры.',b_proj:'Мои проекты',b_contact:'Связаться',
t_about:'Обо мне',about:'Ориентирован на результат: информационная безопасность и сетевые технологии с фокусом на pentest, анализ уязвимостей и администрирование инфраструктуры. С детства работаю с сетевым оборудованием, что дало глубокое понимание архитектуры и протоколов сетей.',
st1:'публичных репозиториев',st2:'VPN-протоколов',st3:'языка программирования',t_skills:'Навыки',t_projects:'Проекты',t_repos:'Из GitHub',t_path:'Путь',t_contact:'Контакты',
c_text:'Давай сделаем что-нибудь крутое вместе.',f_name:'Ваше имя',f_msg:'Сообщение',f_send:'Отправить письмо',b_resume:'Скачать резюме',
repos_load:'Загружаю репозитории...',repos_err:'Не удалось загрузить репозитории с GitHub.',repos_empty:'Публичных проектов пока нет.',th_light:'Светлая',th_dark:'Тёмная',
term:[['whoami','Худайназар Мерданов'],['cat role.txt','Системный администратор / Information Security'],['ls skills/','linux  windows-server  vpn  pentest  docker  git'],['cat education.txt','Московский политехнический университет\nИнформационная безопасность, 2024-2028'],['echo $GOAL','Карьера в кибербезопасности и сетевой безопасности']],
pr:[['Экспертные VPN-решения','OpenVPN, WireGuard, IPSec/IKEv2, L2TP/IPSec, SSTP, PPTP. Шифрование AES-256-GCM, ChaCha20-Poly1305, ECDSA, Diffie-Hellman. Обход DPI и маскировка трафика.','VPN'],
['Пентест и анализ уязвимостей','Массовое сканирование через OpenVAS, выявление критических уязвимостей, детальный анализ сервисов и версий ПО через Nmap с NSE-скриптами.','Pentest'],
['Корпоративная Windows-инфраструктура','Windows Server: Active Directory + DNS, DHCP с резервированием IP, WDS PXE-установка клиентов, Kaspersky Security Center с управлением KES.','Windows Server'],
['Сетевая безопасность','Маршрутизаторы OSPF (L2) и BGP (L3). Проверка RADIUS/TACACS+ на brute-force, защита сложными PSK, скрытый SSID, MAC-фильтрация.','Networking'],
['Тренажёр MLTA','Windows-приложение на C++ и Qt: клиент-серверная архитектура, база данных SQLite.','C++ / Qt'],
['Target-сайт для пентеста','Собственное веб-приложение для тестирования. Обнаружен SMTP open relay и показана отправка spoofed-писем на собственном стенде.','Web Security']],
tl:[['С ДЕТСТВА','Сетевое оборудование','Маршрутизаторы, коммутаторы, Wi-Fi: так появилось понимание архитектуры и протоколов сетей.'],['2024','Московский политехнический университет','Направление «Информационная безопасность».'],['СЕЙЧАС','Pentest, инфраструктура, разработка','VPN, Active Directory, OSPF и BGP, Qt-приложения, сканирование уязвимостей.'],['2028','Выпуск','Цель: карьера в кибербезопасности и сетевой безопасности.']]},
en:{n_about:'About',n_skills:'Skills',n_projects:'Projects',n_path:'Journey',n_contact:'Contact',hello:'Hi, I am',name:'Khudainazar',
sub:'Future information security specialist. Pentest, networking, infrastructure administration.',b_proj:'My projects',b_contact:'Get in touch',
t_about:'About me',about:'Result-oriented, focused on information security and networking, with an emphasis on pentesting, vulnerability analysis and infrastructure administration. I have worked with network equipment since childhood, which gave me a deep understanding of network architecture and protocols.',
st1:'public repositories',st2:'VPN protocols',st3:'programming languages',t_skills:'Skills',t_projects:'Projects',t_repos:'From GitHub',t_path:'Journey',t_contact:'Contact',
c_text:'Let us build something cool together.',f_name:'Your name',f_msg:'Message',f_send:'Send email',b_resume:'Download resume',
repos_load:'Loading repositories...',repos_err:'Could not load repositories from GitHub.',repos_empty:'No public projects yet.',th_light:'Light',th_dark:'Dark',
term:[['whoami','Khudainazar Merdanov'],['cat role.txt','System Administrator / Information Security'],['ls skills/','linux  windows-server  vpn  pentest  docker  git'],['cat education.txt','Moscow Polytechnic University\nInformation Security, 2024-2028'],['echo $GOAL','A career in cybersecurity and network security']],
pr:[['Expert VPN solutions','OpenVPN, WireGuard, IPSec/IKEv2, L2TP/IPSec, SSTP, PPTP. AES-256-GCM, ChaCha20-Poly1305, ECDSA, Diffie-Hellman. DPI bypass and traffic masking.','VPN'],
['Pentest and vulnerability analysis','Mass scanning with OpenVAS, critical vulnerability discovery, detailed service and version analysis with Nmap NSE scripts.','Pentest'],
['Corporate Windows infrastructure','Windows Server: Active Directory + DNS, DHCP with IP reservations, WDS PXE client deployment, Kaspersky Security Center with KES management.','Windows Server'],
['Network security','OSPF (L2) and BGP (L3) routers. Brute-force testing of RADIUS/TACACS+, hardening with strong PSKs, hidden SSID, MAC filtering.','Networking'],
['MLTA Trainer','Windows application in C++ and Qt: client-server architecture, SQLite database.','C++ / Qt'],
['Pentest target website','Own web application for testing. Found an SMTP open relay and demonstrated spoofed mail on a private test bench.','Web Security']],
tl:[['SINCE CHILDHOOD','Network equipment','Routers, switches, Wi-Fi: this built my understanding of network architecture and protocols.'],['2024','Moscow Polytechnic University','Information Security program.'],['NOW','Pentest, infrastructure, development','VPN, Active Directory, OSPF and BGP, Qt applications, vulnerability scanning.'],['2028','Graduation','Goal: a career in cybersecurity and network security.']]}};
const SK=[['Linux Administration',85],['Network Security',85],['Kali Linux / Pentest',75],['Windows Server / AD',75],['Git',75],['Python',70],['C++ / Qt',65],['Docker',65]];
let lang=LS('lang')==='en'?'en':'ru';
root.dataset.theme=LS('theme')==='light'?'light':'dark';

function count(n){const t=+n.dataset.count;let c=0;clearInterval(n._i);n._i=setInterval(()=>{c+=Math.max(1,Math.ceil(t/40));if(c>=t){c=t;clearInterval(n._i);}n.textContent=c;},30);}
function bindTilt(card){
 card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateY(${x*12}deg) rotateX(${-y*12}deg) scale(1.03)`;});
 card.addEventListener('mouseleave',()=>card.style.transform='');
}
function renderProjects(){
 const b=$('#featured');b.innerHTML='';
 T[lang].pr.forEach(([h,p,t])=>{const d=document.createElement('div');d.className='glass card tilt';d.innerHTML=`<h4></h4><p></p><span class='tag'></span>`;d.children[0].textContent=h;d.children[1].textContent=p;d.children[2].textContent=t;b.appendChild(d);bindTilt(d);});
}
function renderTimeline(){
 $('#tl').innerHTML=T[lang].tl.map(([w,h,p])=>`<div class='tl-item'><div class='tl-when'>${w}</div><h4>${h}</h4><p>${p}</p></div>`).join('');
}
function applyTheme(){$('#theme').textContent=root.dataset.theme==='dark'?T[lang].th_light:T[lang].th_dark;}
function applyLang(){
 root.lang=lang;
 $$('[data-i]').forEach(e=>e.textContent=T[lang][e.dataset.i]);
 $$('[data-p]').forEach(e=>e.placeholder=T[lang][e.dataset.p]);
 $('#lang').textContent=lang==='ru'?'EN':'RU';
 renderProjects();renderTimeline();applyTheme();
 if(termOn)runTerm();
}
$('#bars').innerHTML=SK.map(([n,v])=>`<div><div class='bar-h'><span>${n}</span><b>${v}%</b></div><div class='bar'><i data-w='${v}'></i></div></div>`).join('');

let termTok=0,termOn=false;
async function runTerm(){
 const tok=++termTok,out=$('#term');out.innerHTML='';
 for(const [cmd,res] of T[lang].term){
  const l=document.createElement('div');
  l.innerHTML=`<span class='ps'>hudaynazar@portfolio:~$</span> <span class='cmd'></span>`;out.appendChild(l);
  const c=$('.cmd',l);
  for(const ch of cmd){if(tok!==termTok)return;c.textContent+=ch;await sleep(40);}
  await sleep(250);if(tok!==termTok)return;
  const r=document.createElement('div');r.className='res';r.textContent=res;out.appendChild(r);await sleep(300);
 }
 if(tok===termTok){const l=document.createElement('div');l.innerHTML=`<span class='ps'>hudaynazar@portfolio:~$</span> <span class='caret'></span>`;out.appendChild(l);}
}

const words=['Security Engineer','Network Administrator','Pentest Enthusiast','Linux Lover'];
let w=0,ch=0,del=false;
const tp=$('#typing');
(function type(){
 const word=words[w];tp.textContent=word.slice(0,del?--ch:++ch);
 let d=del?50:110;
 if(!del&&ch===word.length){del=true;d=1500;}else if(del&&ch===0){del=false;w=(w+1)%words.length;d=400;}
 setTimeout(type,d);
})();

const io=new IntersectionObserver(es=>es.forEach(e=>{
 if(!e.isIntersecting)return;const t=e.target;t.classList.add('show');
 $$('[data-count]',t).forEach(count);
 $$('.bar i',t).forEach(b=>b.style.width=b.dataset.w+'%');
 if(t.id==='about'&&!termOn){termOn=true;runTerm();}
 io.unobserve(t);
}),{threshold:.15});
$$('.reveal').forEach(s=>io.observe(s));

const CH='!<>-_/[]{}=+*^?#abcdef0123456789';
function scramble(el){
 if(el.dataset.run)return;el.dataset.run=1;const o=el.textContent;let f=0;
 const id=setInterval(()=>{el.textContent=[...o].map((c,i)=>c===' '||i<f/2?c:CH[Math.random()*CH.length|0]).join('');if(++f>o.length*2){clearInterval(id);el.textContent=o;delete el.dataset.run;}},30);
}
$$('.links a,.title').forEach(e=>e.addEventListener('mouseenter',()=>scramble(e)));
$$('.btn').forEach(b=>{
 b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`;});
 b.addEventListener('mouseleave',()=>b.style.transform='');
});

const glow=$('#glow');
addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});
if(matchMedia('(pointer:fine)').matches){
 document.body.classList.add('fine');
 const dot=$('#cur'),ring=$('#cur-ring');let rx=0,ry=0,mx=0,my=0;
 addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px)`;});
 (function f(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;ring.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(f);})();
 document.addEventListener('mouseover',e=>ring.classList.toggle('big',!!(e.target.closest&&e.target.closest('a,button,.tilt,input,textarea'))));
}

const cv=$('#bg'),cx=cv.getContext('2d');let W,H,P=[];const ms={x:-999,y:-999};
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;const n=Math.min(90,Math.floor(W*H/16000));P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5}));}
addEventListener('resize',rs);rs();
addEventListener('mousemove',e=>{ms.x=e.clientX;ms.y=e.clientY;});
(function draw(){
 cx.clearRect(0,0,W,H);
 const col=getComputedStyle(root).getPropertyValue('--pc').trim();
 P.forEach((a,i)=>{
  a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
  const dx=ms.x-a.x,dy=ms.y-a.y,d=Math.hypot(dx,dy);if(d<160&&d>0){a.x+=dx/d*.6;a.y+=dy/d*.6;}
  cx.fillStyle='rgba('+col+',.8)';cx.beginPath();cx.arc(a.x,a.y,1.6,0,7);cx.fill();
  for(let j=i+1;j<P.length;j++){const b=P[j],l=Math.hypot(a.x-b.x,a.y-b.y);if(l<120){cx.strokeStyle='rgba('+col+','+((1-l/120)*.35)+')';cx.lineWidth=1;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke();}}
 });
 requestAnimationFrame(draw);
})();

$('#lang').addEventListener('click',()=>{lang=lang==='ru'?'en':'ru';SS('lang',lang);applyLang();loadRepos();});
$('#theme').addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';SS('theme',root.dataset.theme);applyTheme();});
$('#form').addEventListener('submit',e=>{
 e.preventDefault();
 location.href='mailto:merdanowhudaynazar7@mail.ru?subject='+encodeURIComponent('Message from website: '+$('#f-name').value)+'&body='+encodeURIComponent($('#f-msg').value);
});

let repoCache=null;
function showRepos(list){
 const box=$('#repos');box.innerHTML='';
 const rs2=list.filter(r=>!r.fork&&r.name.toLowerCase()!=='hudaynazar250406.github.io').slice(0,6);
 if(!rs2.length){box.innerHTML=`<p class='muted'>${T[lang].repos_empty}</p>`;return;}
 rs2.forEach(r=>{
  const a=document.createElement('a');a.className='glass card tilt';a.href=r.html_url;a.target='_blank';a.rel='noopener';
  const h=document.createElement('h4');h.textContent=r.name;
  const p=document.createElement('p');p.textContent=r.description||'GitHub repository';
  const s=document.createElement('span');s.className='tag';s.textContent=(r.language||'Code')+(r.stargazers_count?'  ·  '+r.stargazers_count+' stars':'');
  a.append(h,p,s);box.appendChild(a);bindTilt(a);
 });
}
function loadRepos(){
 if(repoCache){showRepos(repoCache);return;}
 fetch('https://api.github.com/users/Hudaynazar250406/repos?per_page=100&sort=updated')
  .then(r=>{if(!r.ok)throw 0;return r.json();})
  .then(list=>{repoCache=list;const e=$('#st1');e.dataset.count=list.length;count(e);showRepos(list);})
  .catch(()=>{$('#repos').innerHTML=`<p class='muted'>${T[lang].repos_err}</p>`;});
}

applyLang();loadRepos();
const ready=()=>document.body.classList.add('ready');
(function(){
 const n=$('#l-num'),bar=$('#l-bar i');let v=0;
 const id=setInterval(()=>{v+=Math.random()*9+3;if(v>=100){v=100;clearInterval(id);setTimeout(ready,350);}n.textContent=Math.floor(v);bar.style.width=v+'%';},60);
 setTimeout(ready,4000);
})();
