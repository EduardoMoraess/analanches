let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById('cart-total').innerText = total.toFixed(2).replace('.', ',');
  alert(`${name} adicionado ao pedido!`);
}

// Função especial para itens com sabor obrigatório
function addComSabor(productName, selectId, price) {
  let selectElement = document.getElementById(selectId);
  let saborEscolhido = selectElement.value;

  if (saborEscolhido === "") {
    alert("Por favor, selecione um sabor antes de adicionar!");
    return;
  }

  let itemCompleto = `${productName} (Sabor: ${saborEscolhido})`;
  addToCart(itemCompleto, price);

  // Reseta a seleção após adicionar
  selectElement.value = "";
}

function sendWhatsApp() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio! Adicione itens antes de pedir.");
    return;
  }

  let phone = "5564996454479"; // Número retirado da imagem caradpio2.png
  let text = "Olá! Gostaria de fazer o seguinte pedido do Anna Lanches:\n\n";

  cart.forEach((item, index) => {
    text += `- ${item.name}: R$ ${item.price.toFixed(2).replace('.', ',')}\n`;
  });

  text += `\n*Total:* R$ ${total.toFixed(2).replace('.', ',')}`;

  let url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}