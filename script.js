var bolso = 0;
var lula = 0;
var ciro = 0;


function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}


function votar() {

    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var candidado = (valor1 * 10) + valor2;
    var tex1 = document.getElementById("tex1");
    var tex2 = document.getElementById("tex2");

    if(candidado === 17) {
        tex1.innerHTML = 'Bolsonaro'
        bolso += 1
    }else if(candidado === 13) {
        tex1.innerHTML = 'Lula'
        lula += 1
    }else if(candidado === 12) {
        tex1.innerHTML = 'Ciro'
        ciro += 1
    }

    tex2.innerHTML = `O candidato Bolsonaro teve ${bolso} votos <br>
    O candidato Lula teve ${lula} votos <br>
    O candidato Ciro teve ${ciro} voto`


   /* alert("Confirmado voto no candidato "+candidado) */
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = ""; 
}

function resultado() {
    document.getElementById("resultado").innerHTML=""
    for(i=0;i<100;i++){
        if (sessionStorage.getItem(i) !== null) {
            //alert(i);
            document.getElementById("resultado").innerHTML += "Cantidado "+i+" tem "+sessionStorage.getItem(i)+" votos<br/>";
        }
    }
}