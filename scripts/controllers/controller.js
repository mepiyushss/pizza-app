import productOperations from "../services/product-operations.js";

async function loadPizzas() {
    const pizzas = await productOperations.loadProducts();
    // console.log("pizza array", pizzas);
    for( let pizza of pizzas)
    {
        preparePizzaCart(pizza);
    }
}
loadPizzas();

function addToCart(){
    // const cartItems = document.querySelectorAll('#cartItem');
    // console.log("add to cart is called",this);
    const currentButton= this;
    const pizzaId = currentButton.getAttribute('product-id');
    // console.log("pizzaId",pizzaId)
    productOperations.search(pizzaId);
    printBasket();
}

function printBasket(){
    // console.log("print Basket is called");
    const cartProducts=productOperations.getProductsInCart();
    // console.log('cart product',cartProducts);
    const basket = document.querySelector('#basket');
    basket.innerHTML='';
    for(let product of cartProducts)
    {
        const li= document.createElement('li');
        // console.log(product);
        li.innerText = `${product.name} ${product.price}`;
        basket.appendChild(li);
    }
    
    
}
/* <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div> */

function preparePizzaCart(pizza){
    const outputDiv= document.querySelector('#cardBodyDiv');

    const colDiv = document.createElement('div');
    colDiv.className = 'col-4'

    const cartDiv = document.createElement('div');
    cartDiv.className = 'cart';
    cartDiv.style = 'width: 18rem;';
    colDiv.appendChild(cartDiv);

    const img = document.createElement('img');
    img.src= pizza.url;
    img.className= 'card-img-top';
    cartDiv.appendChild(img);

    const cartBodyDiv = document.createElement('div');
    cartBodyDiv.className = 'cart-body';
    cartDiv.appendChild(cartBodyDiv);

    const h5 = document.createElement('h5');
    h5.className='card-title';
    h5.innerText =pizza.name;
    cartBodyDiv.appendChild(h5);

    const p = document.createElement('p');
    p.innerText='card-text';
    p.innerText =pizza.desc;
    cartBodyDiv.appendChild(p);

    const button = document.createElement('button');
    button.setAttribute('product-id',pizza.id);
    button.addEventListener('click',addToCart);
    button.className='btn btn-primary';
    button.innerText=' Add to cart';
    cartBodyDiv.appendChild(button);

    
    outputDiv.appendChild(colDiv);

}