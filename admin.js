let senhaCorreta = "coti2021";

let dados = {
    movimentacoes: []
};

function login() {
    let senha = document.getElementById("senha").value;

    if (senha === senhaCorreta) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("painel").style.display = "block";
    } else {
        alert("Senha incorreta!");
    }
}

function adicionar() {
    let tipo = document.getElementById("tipo").value;
    let categoria = document.getElementById("categoria").value;
    let valor = Number(document.getElementById("valor").value);
    let data = document.getElementById("data").value;

    let nova = {
        tipo,
        categoria,
        valor,
        data
    };

    dados.movimentacoes.push(nova);

    document.getElementById("preview").innerText =
        JSON.stringify(dados, null, 2);
}