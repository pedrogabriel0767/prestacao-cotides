let compras = [
  {estabelecimento:"Mercado", valor:100, data:"2026-06-21"},
  {estabelecimento:"Farmácia", valor:200, data:"2026-06-20"}
];

let saldo = 1500;

document.getElementById("saldo").innerText = saldo;

let total = compras.reduce((a,b)=>a+b.valor,0);
document.getElementById("total").innerText = total;

let tbody = document.querySelector("tbody");

compras.forEach(c=>{
  tbody.innerHTML += `
    <tr>
      <td>${c.estabelecimento}</td>
      <td>${c.valor}</td>
      <td>${c.data}</td>
    </tr>
  `;
});