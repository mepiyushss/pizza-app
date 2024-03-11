import productOperations from "../services/product-operations.js";

async function loadPizzas() {
  const pizzas = await productOperations.loadProducts();
  for (let pizza of pizzas) {
    preparePizzaCart(pizza);
  }
}
loadPizzas();

function addToCart() {
  const currentButton = this;
  const pizzaId = currentButton.getAttribute("product-id");
  productOperations.search(pizzaId);
  printBasket();
}

function printBasket() {
  // console.log("print Basket is called");
  const cartProducts = productOperations.getProductsInCart();
  // console.log('cart product',cartProducts);
  const basket = document.querySelector("#basket");
  basket.innerHTML = "";
  for (let product of cartProducts) {
    const li = document.createElement("li");
    // console.log(product);
    li.innerText = `${product.name} ${product.price}`;
    basket.appendChild(li);
  }
}
function preparePizzaCart(pizza) {
  const outputDiv = document.querySelector("#cardBodyDiv");

  const colDiv = document.createElement("div");
  colDiv.className = "col-4";

  const cartDiv = document.createElement("div");
  cartDiv.className = "cart";
  cartDiv.style = "width: 18rem;";
  colDiv.appendChild(cartDiv);

  const img = document.createElement("img");
  img.src = pizza.url;
  img.className = "card-img-top";
  cartDiv.appendChild(img);

  const cartBodyDiv = document.createElement("div");
  cartBodyDiv.className = "cart-body";
  cartDiv.appendChild(cartBodyDiv);

  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = pizza.name;
  cartBodyDiv.appendChild(h5);

  const p = document.createElement("p");
  p.innerText = "card-text";
  p.innerText = pizza.desc;
  cartBodyDiv.appendChild(p);

  const button = document.createElement("button");
  button.setAttribute("product-id", pizza.id);
  button.addEventListener("click", addToCart);
  button.className = "btn btn-primary";
  button.innerText = " Add to cart";
  cartBodyDiv.appendChild(button);

  outputDiv.appendChild(colDiv);
}
