const compras = [
    {
        estabelecimento: "Mercado",
        valor: 100,
        data: "21/06/2026"
    },
    {
        estabelecimento: "Farmácia",
        valor: 200,
        data: "20/06/2026"
    }
];

const tabela = document.getElementById("tabelaCompras");

compras.forEach(compra => {
    tabela.innerHTML += `
    <tr>
        <td>${compra.estabelecimento}</td>
        <td>R$ ${compra.valor}</td>
        <td>${compra.data}</td>
    </tr>
    `;
});