function suma() {
    const garu = document.querySelector('#garu').value;
    const pucca = document.querySelector('#pucca').value;
    const abyo = document.querySelector('#abyo').value;

    var total = parseInt(garu) + parseInt(pucca) + parseInt(abyo);

    document.querySelector('#resultado').innerHTML = total;

    if(total <= 10){
        document.querySelector('#resultado').innerHTML = "Llevas "+total+" stickers"
    }
    else{
        document.querySelector('#resultado').innerHTML = "Llevas demasiados stickers"
    }
};

document.querySelector('#btn').addEventListener('click', suma);