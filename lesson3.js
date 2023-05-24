class product {

    id;
    name;
    description;
    price;
    weight;
    size;


    constructor(params) {
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.price = params.price;
        this.weight = params.weight;
        this.size = params.size;

    }

    currency(car) {
        if (car == "USD" || car == "usd") {
            console.log(this.price / 37);
        }
        else if (car == "EUR" || car == "eur") {
            console.log(this.price / 40);
        }
        else if (car == "UAH" || car == "uah") {
            console.log(this.price);

        } else {
            throw new Error("Wrong carrency");
        }
    }
}

const iphone = new product({
    id: 1,
    name: 'iphone13',
    description: "new phone",
    price: 3000,
    weight: 50,
    size: 15,

})


const android = new product({
    id: 2,
    name: 'pixel7',
    description: "new android phone",
    price: 5000,
    weight: 50,
    size: 15,

})
const android1 = new product({
    id: 3,
    name: 'pixel7',
    description: "old android phone",
    price: 3000,
    weight: 50,
    size: 15,

})
// iphone.currency("usd");
// android.currency("eur");
// console.log(iphone);
// console.log(android);



//____________________________________________________________________________________

class Cart {
    products = [];

    addProd(prod) {
        this.products.push(prod);
    }
    delProd(prod) {
        this.products = this.products.filter(product => product != prod);
    }
    CostCart() {
        let midlCostCart = 0;
        for (let i = 0; i < this.products.length; i++) {

            midlCostCart = midlCostCart + this.products[i].price; //Загальна ціна в корзині
        }
        if (midlCostCart >= 15000) {
            return midlCostCart - (midlCostCart * 0.1); // якщо сума корзини більше 10000 скидка 10%
        } else {
            return midlCostCart;
        }
    }
    Delivery() {
        let deliv = 0;
        if (this.CostCart() <= 10000) {
            deliv = 50; // Доставка 50 якщо сума в корзині менше 10000
        }
        return deliv;
    }
    numOfGoods() {
        console.log(this.products.length);
    }
    numOfGoodsUnique() {
        const uniqueGoods = new Set();
        for (let i = 0; i < this.products.length; i++) {
            uniqueGoods.add(this.products[i].name)
        }
        console.log(uniqueGoods.size);
        return uniqueGoods;
    }


}

const phone = new Cart();
phone.addProd(iphone);
phone.addProd(android);
phone.addProd(android1);
console.log(phone.numOfGoodsUnique());
console.log(phone.CostCart() + phone.Delivery());
//phone.numOfGoods();
//phone.numOfGoodsUnique();
//phone.delProd(android);
//console.log(phone);

