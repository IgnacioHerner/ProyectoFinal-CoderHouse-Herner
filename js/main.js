const user = {
    name : 'Usuario',
    age: 21,
    isRegistered: true,
}
user.isRegistered ? document.getElementById('user').innerHTML = `Bienvenido ${user.name}` : document.getElementById('user').innerHTML =`Bienvenido Guest`;

// Boton profe
const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", ()=>{

  Swal.fire({
    title:'Hola Profe',
    text:'Presione aqui si me aprueba',
    icon:'question',
    confirmButtonText:'Si',
    cancelButtonText:'No',
    showCancelButton: true,
  })
  
});

// LocalStorage 

let wallet = JSON.parse(localStorage.getItem('billetera'));
let btc = JSON.parse(localStorage.getItem('cripto'));

if(wallet === null && btc === null){
    wallet=0;
    btc=0;
}

document.getElementById("wallet").innerHTML = `<p>ARS$ ${wallet}  y BTC$ ${btc}  </p>`
document.getElementById("wallet-sidebar").innerHTML = `<p>ARS$ ${wallet}<br> BTC$ ${btc}  </p>`

// Transaccion: Comprar btc

const cryptoTrade = () =>{ 

amount = parseInt( document.getElementById('exchange').value);
if(wallet >= 0 && amount <= wallet){
    wallet -= amount;
    btc += amount/3802620.70;
    Swal.fire(
        'Transaccion Completa',
        `Perfecto, compraste ${btc} en BTC`,
        'success'
    )

    document.getElementById("wallet").innerHTML = `<p>ARS$${wallet} y BTC${btc}</p>`;
    document.getElementById("wallet-sidebar").innerHTML = `<p>ARS$ ${wallet}<br> BTC$ ${btc}  </p>`
}
else if(document.getElementById('amountIn').value = isNaN(amount)){
    document.getElementById('validate').innerHTML = `<p class = " p-2 text-center border border-danger rounded">X No has ingresado un monto en particular, por favor reintenta.</p>`;
}
else{
    document.getElementById('validate').innerHTML = `<p class = " p-2 text-center border border-danger rounded">X No contas con dinero para hacer la transaccion</p>`;
}
let arsLoad = localStorage.setItem('billetera', wallet);
let btcLoad = localStorage.setItem('cripto', btc);
return;
}
// Transaccion: Ingresar dinero
const moneyIn = document.getElementById('amountInBtn') 
moneyIn.onclick = () => { 
if(amount = parseInt( document.getElementById('amountIn').value)){
    wallet += amount;
    Swal.fire(
        'Transaccion Completa',
        `Felicitaciones, ingresaste ARS$${amount} cantidad de dinero`,
        'success'
    )
    document.getElementById("wallet").innerHTML = `<p>ARS$${wallet} y BTC${btc}</p>`;
    document.getElementById("wallet-sidebar").innerHTML = `<p>ARS$ ${wallet}<br> BTC$ ${btc}  </p>`
}
else if(document.getElementById('amountIn').value = isNaN(amount)){
    document.getElementById('validate').innerHTML = `<p class = " p-2 text-center border border-danger rounded">X No has ingresado un monto en particular, por favor reintenta.</p>`;
}
let arsLoad = localStorage.setItem('billetera', wallet);
let btcLoad = localStorage.setItem('cripto', btc);
return;
}
const moneyOut = document.getElementById('amountOutBtn')
moneyOut.onclick = () =>{ 
amount = parseInt(document.getElementById('amountOut').value);

// Transaccion: Retirar pesos
if(wallet >= 0 && amount <= wallet){
    wallet -= amount;
    Swal.fire(
        'Transaccion Completa',
        `Felicitaciones, descontaste ARS$${amount} cantidad de dinero`,
        'success'
    )
    document.getElementById("wallet").innerHTML = `<p>ARS$${wallet} y BTC${btc}</p>`;
    document.getElementById("wallet-sidebar").innerHTML = `<p>ARS$ ${wallet} <br> BTC$ ${btc}  </p>`
}

else if(document.getElementById('amountIn').value = isNaN(amount)){
    document.getElementById('validate').innerHTML = `<p class = " p-2 text-center border border-danger rounded">X No has ingresado un monto en particular, por favor reintenta.</p>`;
}
else{
    document.getElementById('validate').innerHTML = `<p class = " p-2 text-center border border-danger rounded">X No es posible realizar la transaccion</p>`;
}
let arsLoad = localStorage.setItem('billetera', wallet);
let btcLoad = localStorage.setItem('cripto', btc);
return;
}

let arsLoad = localStorage.setItem('billetera', JSON.parse(wallet));
let btcLoad = localStorage.setItem('cripto', JSON.parse(btc));


var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
sidebar.classList.toggle("active-nav");
container.classList.toggle("active-cont");
});



const api = fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=ars\n")
.then(response => response.text())
.then(result => console.log(result))
const getValue = ()=>{
document.getElementById('values').innerHTML = `El valor del Bitcoin hoy Es de ${api.bitcoin}`
}
getValue(api.bitcoin);