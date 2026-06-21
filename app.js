const URL = "https://raw.githubusercontent.com/pedrogabriel0767/prestacao-cotides/main/data.json";

async function carregarDados() {
    const res = await fetch(URL);
    const data = await res.json();

    document.getElementById("saldo").innerText = "R$ " + data.saldo;

    const tabela = document.getElementById("tabelaCompras");

    let total = 0;

    data.compras.forEach(c => {
        total += c.valor;

        tabela.innerHTML += `
        <tr>
            <td>${c.estabelecimento}</td>
            <td>R$ ${c.valor}</td>
            <td>${c.data}</td>
        </tr>
        `;
    });

    document.getElementById("total").innerText = "R$ " + total;
    document.getElementById("quantidade").innerText = data.compras.length;
}

carregarDados();