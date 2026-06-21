const URL = "https://raw.githubusercontent.com/pedrogabriel0767/prestacao-cotides/main/data.json";

async function carregar() {
    const res = await fetch(URL);
    const data = await res.json();

    // 🧠 SALDOS
    document.getElementById("resumo").innerHTML = `
        <h3>Saldo Anterior: R$ ${data.saldoAnterior}</h3>
        <h3>Saldo Atual: R$ ${data.saldoAtual}</h3>
        <h3>Poupança: R$ ${data.poupanca.valor}</h3>
        <p>${data.poupanca.descricao}</p>
    `;

    // 📊 separar entradas e saídas
    let entradas = 0;
    let saidas = 0;

    data.movimentacoes.forEach(m => {
        if (m.tipo === "entrada") entradas += m.valor;
        if (m.tipo === "saida") saidas += m.valor;
    });

    // 📊 GRÁFICO ESTILO EXCEL
    new Chart(document.getElementById("graficoFluxo"), {
        type: "bar",
        data: {
            labels: ["Entradas", "Saídas", "Saldo Atual", "Saldo Anterior"],
            datasets: [{
                label: "Resumo Financeiro",
                data: [
                    entradas,
                    saidas,
                    data.saldoAtual,
                    data.saldoAnterior
                ]
            }]
        }
    });
}

carregar();