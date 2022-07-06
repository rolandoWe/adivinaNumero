

let formulario=document.querySelector('.formulario')
let numero_ingresado=document.querySelector('.numero_ingresado')
let btn_ver=document.querySelector('.btn_ver')
let span=document.querySelector('.span')
let contar=document.querySelector('.contar')
let oculto=document.querySelector('.oculto')
let nuevaJugada=document.querySelector('.nuevaJugada')
let n_random=null;
let veces=false;
let regresivo=5
let intento=0
let ingresado=null;
let clickMusic=null

function random(){
   n_random= Math.round(Math.random()*99)

    console.log(n_random)
}

if(veces===false){
    random()
    veces=true
    verSi()

}
function verSi(){
    contar.innerHTML="Intentos restantes: "+`<b>${regresivo}</b>`
    if(n_random<50){
        span.innerHTML=`El numero oculto es menor a <b>50</b>.`
    }else if(n_random>50){
        span.innerHTML=`El numero oculto es mayor a <b>50</b>.`

    }else if(n_random===50){
        span.innerHTML=`Si te digo que el numero oculto es <b>50</b> es porque hoy estas de suerte.`

    }
}

function comparar(){
    clickMusic=new Audio("audio/donkey-kong-coin.mp3")
    clickMusic.play()
    span.style.color="black"
    intento++
    if(veces===false){
        random()
       veces=true
    }
    regresivo--
    if(regresivo<=0){
        regresivo=0
    }
    if(oculto.style.background='green'){
        oculto.style.background='black';
        oculto.style.color='white';
        oculto.innerHTML='?';
    }
    contar.innerHTML="Intentos restantes: "+`<b>${regresivo}</b>`
 ingresado=numero_ingresado.value;
    ingresado=parseInt(ingresado)
    n_random=parseInt(n_random)
    // console.log(typeof ingresado)
    console.log( n_random)
    // console.log(ingresado)
    // oculto.innerHTML=n_random


    if(ingresado<n_random){
        span.innerHTML=`El numero oculto es mayor a <b>${ingresado}</b>.`
    }else if(ingresado>n_random){
        span.innerHTML=`El numero oculto es menor a <b>${ingresado}</b>.`

    }else if(ingresado===n_random) {
        let risa=new Audio("audio/hehecough-graciosos.mp3");
            risa.play()
        span.innerHTML=`<b>FELICIDADES</b>. Lo haz logrado en <b>${intento}</b> intentos`;
        span.style.color="green";
        oculto.classList.add('addAnimate')

        oculto.style.background='green';
        oculto.style.transition=".0s"
        oculto.style.fontSize='23px';
        if(n_random<10){
            n_random="0"+n_random
           }
            oculto.innerHTML=n_random;
            oculto.style.color="transparent";

        setTimeout(()=>{
            oculto.classList.remove('addAnimate')
            oculto.style.transition=".9s"
            oculto.style.color="white";
        },100)
        regresivo=5;
        contar.innerHTML="Intentos restablecidos: "+regresivo;
        // contar.style.color="green";
        intento=0
        random()
    }

    if(regresivo===0){

            oculto.classList.add('addAnimate')
            oculto.innerHTML=n_random  
            oculto.style.color="transparent"  
            oculto.style.transition="0s"

        setTimeout(()=>{
            let mama=new Audio("audio/mario-bros-mamma-mia.mp3")
            mama.play()
            oculto.classList.remove('addAnimate')
            oculto.style.transition=".9s"

            span.innerHTML=`Haz agotado tus 5 oportunidades, vuelve a intentarlo.`
            span.style.color="red"
            oculto.style.background='red';
            oculto.style.color='white';
            oculto.style.fontSize='23px';
            numero_ingresado.disabled=true  
            btn_ver.disabled=true  
            intento=0 ;
        },100)

    }



}


function verficarInput(){
let numero_ingresado=document.querySelector('.numero_ingresado').value
// console.log('conatr')
ingresado=numero_ingresado;

    let permitido="1234567890";
    let contadoor=0;
    for(let n=0;n<numero_ingresado.length;n++){
        for(let c=0;c<permitido.length;c++){
            if(numero_ingresado[n]==permitido[c])
            contadoor++;
        }
    }
    if(numero_ingresado.length!=contadoor){
        console.log('si')
        span.innerHTML=`ingrese solo numeros.`

    }else{
        console.log('no')
        if(n_random<5){
            span.innerHTML=`El numero oculto es menor a ${ingresado}.`
        }else if(n_random>5){
            span.innerHTML=`El numero oculto es mayor a ${ingresado}.`
    
        }else if(n_random===5){
            span.innerHTML=`Si te digo que el numero oculto es <b>5</b> es porque hoy estas de suerte.`
    
        }

    }
}
// numero_ingresado.addEventListener('keyup',()=>{
//     verficarInput()
// })

nuevaJugada.addEventListener('click',()=>{
    let otra=new Audio("audio/mario-bros-hmm.mp3")
        otra.play()
    span.style.color="black"

    random()
    if(oculto.style.background='green'){
        oculto.style.background='black';
        oculto.style.color='white';
        oculto.innerHTML='?';
        numero_ingresado.value=""
    }
    verSi()
   numero_ingresado.disabled=false;
   btn_ver.disabled=false;
   regresivo=5;
   contar.innerHTML="Intentos restantes: "+`<b>${regresivo}</b>`
    console.log(n_random)

})
formulario.addEventListener('submit',(f)=>{
    f.preventDefault()
    comparar()
    // if(oculto.style.background='red'){
    //     oculto.style.background='black';
    //     oculto.style.color='white';
    //     oculto.innerHTML='?';
    // }

})

// random()

