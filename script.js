function toggleMenu(){document.getElementById('nav').classList.toggle('open')}
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));
document.getElementById('contactForm').addEventListener('submit',function(e){
 e.preventDefault();
 const name=document.getElementById('name').value.trim();
 const phone=document.getElementById('phone').value.trim();
 const msg=document.getElementById('message').value.trim();
 const text=`Hello DIPU TECHCARE,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AProblem: ${encodeURIComponent(msg)}`;
 window.open(`https://wa.me/918276846320?text=${text}`,'_blank');
});
