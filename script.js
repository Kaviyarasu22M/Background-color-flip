
    const btn=document.getElementById("btn")
    const colortext=document.getElementById("color")
    const wrap=document.getElementById("wrap")
    const bd=document.querySelector('body')
    const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
console.log(randv())

btn.addEventListener("click",changebg)

function changebg(){
    let hexcolor='#'
    for(let i=1;i<=6;i++){
        hexcolor=hexcolor+randv();
    }
    bd.style.backgroundColor=hexcolor
    colortext.innerHTML=hexcolor
}

function randv(){
    let randin=Math.floor(Math.random()*16)
     return hex[randin]
}
