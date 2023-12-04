//product crud operation
import Product from "../models/product.js";
import makeNetworkCalls from "./api-client.js";

const productOperations ={
    products:[],
    
    search(pizzaId){
        const product =this.products.find
        (currentPizza=>currentPizza.id==pizzaId)
        // console.log('product 1',product);
        product.isAddToCart= true;
        // console.log('product 2',this.products);
        // return product;
    },
    getProductsInCart(){
        // console.log('getProductsInCart block initial',this.products);
        
        const productInBasket = this.products.filter(product=> product.isAddToCart)
    
        // console.log('getProductsInCart block end',productInBasket);
        return productInBasket;
    },

    async loadProducts(){
        const pizzas= await makeNetworkCalls();

        const pizzaArray= pizzas['Vegetarian'];
        const productsArray =pizzaArray.map(pizza=>
            {
            const currentPizza =new Product(pizza.id,pizza.name, pizza.menu_description , pizza.price ,pizza.assets.product_details_page[0].url)

            return currentPizza;
            })
        // console.log('Products array', productsArray);
        this.products=productsArray;
        return productsArray;
    },
    sortProducts(){

    }
}
export default productOperations;