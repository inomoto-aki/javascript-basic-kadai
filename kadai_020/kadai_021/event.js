const btn = document.getElementById('btn');
const text =document.getElementById('text');

btn.addEventListener('click', ()=>{
  setTimeout(() =>{
  document.getElementById('text').innerHTML = 'ボタンをクリックされました';
}, 2000);
});

