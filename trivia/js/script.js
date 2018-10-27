pergunta1.addEventListener("click", clickBtnpergunta1);

function clickBtnpergunta1() {

    let pergunta1 = document.getElementById("patolino").value;

    if (pergunta1 == 'patolino') {
        console.log(patolino + " ok")
        document.write("PATOLINO, resposta certa");
    } else(pergunta1 != 'patolino')

    {
        document.getElementById('patolinoErrado').innerHTML += 'ERRADO, resposta certa era PATOLINO';
    }
}

pergunta2.addEventListener("click", clickBtnpergunta2);

function clickBtnpergunta2() {

    let pergunta2 = document.getElementById("chiquinha").value;

    if (pergunta2 == 'chiquinha') {
        console.log(pergunta2 + " ok")
        document.write("CHIQUINHA, resposta certa");
    } else(pergunta2 != 'chiquinha')

    {
        document.getElementById('patolinoErrado').innerHTML += 'ERRADO, resposta certa era CHIQUINHA';
    }
}

pergunta3.addEventListener("click", clickBtnpergunta3);

function clickBtnpergunta3() {

    let pergunta3 = document.getElementById("azul").value;

    if (pergunta3 == 'azul') {
        console.log(pergunta3 + " ok")
        document.write("AZUL, resposta certa");
    } else(pergunta3 != 'azul')

    {
        document.getElementById('patolinoErrado').innerHTML += 'ERRADO, resposta certa era AZUL';
    }
}