
console.log('hola')
let contenedor=document.querySelector('.contenedor');
let btn_inicio=document.querySelector('.btn_inicio');
let btn_registro=document.querySelector('.btn_registro');
let registro=document.querySelector('.registro');
let inicio=document.querySelector('.inicio');
let iniciar_sesion=document.querySelector('.iniciar_sesion');
let registrarse=document.querySelector('.registrarse');
let mensaje1=document.querySelectorAll('.mensaje1');

contenedor.addEventListener('click',function(c){
    // console.log(c.target)
    if(c.target==btn_inicio||c.target==btn_registro){
        // console.log('iniciando')
        inicio.classList.toggle('desactivo');
        registro.classList.toggle('desactivo');
    }
    if(c.target==iniciar_sesion||c.target==registrarse){
    //    mensaje1.classList.add('mostrar_mensaje1')
       mensaje1.forEach((m)=>{
        m.classList.add('mostrar_mensaje1')
               setTimeout(()=>{
       m.classList.remove('mostrar_mensaje1')

       },4000)
       })

       console.log('reg')
    }
})