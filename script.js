const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'✕':'☰'});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.textContent='☰';menu.setAttribute('aria-expanded','false')}));document.querySelectorAll('.choose-van').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#van').value=a.dataset.van}));const form=document.querySelector('#bookingForm');form?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form),extras=d.getAll('extras').join(', ')||'None';const subject=encodeURIComponent('Van Dan Campers availability enquiry');const body=encodeURIComponent(`Hi Van Dan Campers,

I'd like to check availability.

Name: ${d.get('name')}
Mobile: ${d.get('phone')}
Email: ${d.get('email')}
Preferred van: ${d.get('van')}
Travellers: ${d.get('travellers')}
Collection: ${d.get('start')}
Return: ${d.get('end')}
Pets: ${d.get('pets')}
Extras: ${extras}

Message: ${d.get('message')||'None'}

Thanks!`);window.location.href=`mailto:andysmethurst1@hotmail.com?subject=${subject}&body=${body}`});