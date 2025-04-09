// Capsulation

class ProductItem extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="css/product.css">
        <div class="product-item">
            <img src="${this.getAttribute('img')}"/> 
            <h3>${this.getAttribute('name')}</h3> 
            <h4>${this.getAttribute('price')}</h4>
            <button>Add to cart</button>
            <p class="word-add-to-cart"></p>
        </div>
        `
        
        // this.shadowRoot.querySelector('button').addEventListener('click', () => {
        //     console.log(`${this.getAttribute('name')} added to cart`)  
        // })

        this.shadowRoot.querySelector('button').addEventListener('click', () => this.addToCart())
    }

    addToCart() {
        // this.shadowRoot.querySelector('.word-add-to-cart').innerHTML = `${this.getAttribute('name')} added to cart`;
        console.log(`${this.getAttribute('name')} added to cart`);
    }
}


window.customElements.define('product-item' , ProductItem)