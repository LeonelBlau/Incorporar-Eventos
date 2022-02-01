
class Moneda{
    constructor(nombre, valor1, valor2) {
        this.nombre = nombre;
        this.valor1   = valor1;
        this.valor2 = valor2;
    }
}


                            //        arg,   ur
const moneda1 = new Moneda("Dolar", 213, 44.58);
                            //                  dol      ur
const moneda2 = new Moneda("Pesos Arg", 0.0096, 0.43 ); 
                            //                 dol    ar
const moneda3 = new Moneda("Pesos Uru", 0.022,  2.34)

// array con objetos
const Monedas = [moneda1, moneda2, moneda3];
console.log(Monedas)



let cantidad = document.querySelector(".ingresoMonto");
let convertir = document.querySelector(".convertir");

const cambio = document.querySelector(".aCambiar");



cambio.addEventListener('change', ()=> {
})




if (cambio.options[cambio.selectedIndex].text == moneda1.nombre) {
    convertir.addEventListener('click', ()=> {
        document.querySelector(".resultado").innerHTML = cantidad.value * moneda1.valor1
    })   
} else if  (cambio.options[cambio.selectedIndex].text == moneda3.nombre) {
    convertir.addEventListener('click', ()=> {
        document.querySelector(".resultado").innerHTML = cantidad.value * moneda3.valor1

    })

}

