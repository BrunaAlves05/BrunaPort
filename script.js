const rainbow = document.querySelectorAll('#rainbow')
const btn = document.querySelectorAll('#botao')
const botao = document.querySelectorAll('#btn_rainbow')
const p = document.querySelectorAll('.p3')
const skill = document.querySelectorAll('#graph')
const text = document.getElementById('text')
const texto = document.querySelector('.text p')

const classe = JSON.parse(localStorage.getItem("className")) 

document.addEventListener("DOMContentLoaded", function() {
    deixaColorido(classe)  
});

btn.forEach((e)=>{
    e.addEventListener('click', ()=>{

        var nome = e.className

        deixaColorido(nome)

        localStorage.setItem("className", JSON.stringify(nome))
        
    })
})

document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let luz = document.createElement('span');
    luz.classList.add('luz')

    let x = e.clientX;
    let y = e.clientY;

    luz.style.left = x + 'px';
    luz.style.top = y + 'px';

    let size = Math.random() * 80;
    luz.style.width = 20 + size + 'px';
    luz.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    luz.style.transform = 'rotate('+ transformValue +'deg)'

    body.appendChild(luz);
    
    setTimeout(function(){
        luz.remove();
    }, 1000)
})

function deixaColorido(nome){
    rainbow.forEach((x)=>{
        x.className = ''
        x.classList.add(nome)
        x.classList.add('transition')
    })

    botao.forEach((y)=> {
        y.className = ''
        y.classList.add(nome)
        y.classList.add('botao_rainbow')
        y.classList.add('transition')
    })
    document.documentElement.style.setProperty("--clr", nome)
}

texto.innerHTML = texto.innerText.split("").map(
    (char, i) =>
        `<span style="transform:rotate(${i * 5.2}deg)">${char}</span>`
).join("")