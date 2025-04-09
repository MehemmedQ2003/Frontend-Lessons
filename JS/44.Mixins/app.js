// Qiymət hesablama mixini
const PriceMixin = {
    calculateTotalPrice() {
        return this.price * (1 - this.discount);
    },
    applyDiscount(discountPercent) {
        this.discount = discountPercent / 100;
    }
};


// Stok idarəetmə mixini
const InventoryMixin = {
    addToStock(amount) {
        this.inStock += amount;
        console.log(`${this.name} stoku ${amount} ədəd artırıldı. Yeni stok: ${this.inStock}`);
    },
    removeFromStock(amount) {
        if (this.inStock >= amount) {
            this.inStock -= amount;
            console.log(`${this.name} stokdan ${amount} ədəd çıxarıldı. Yeni stok: ${this.inStock}`);
        } else {
            console.log(`Xəta: ${this.name} üçün kifayət qədər stok yoxdur.`);
        }
    }
};


// Məhsul sinifi
class Product {
    constructor(name, price, inStock = 0) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.discount = 0;
    }

    display() {
        console.log(`${this.name} - Qiymət: ${this.price}₼, Stok: ${this.inStock}`);
    }
}

Object.assign(Product.prototype, PriceMixin, InventoryMixin);

// İstifadə nümunəsi
const laptop = new Product("Laptop", 1500, 10);
laptop.display();

laptop.applyDiscount(10);
console.log(`Endirimli qiymət: ${laptop.calculateTotalPrice()}₼`);

laptop.addToStock(5);
laptop.removeFromStock(2);

