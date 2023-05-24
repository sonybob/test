class product {
    id;
    name;
    description;
    price;

    constructor(params) {
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.price = params.price;
    }
    get getPrice() {
        return this.price;
    }
    get getInfo() {
        return this.description;
    }
    set addDescription(value) {
        this.description = value;
    }

}

class laptop extends product{
    //size;
     constructor(params){
        super(params);
        this.size = params.size;
        
    }
    
    get getInfo() {
        const inf = [this.id, this.name, this.size, this.price];
        return  inf;
    }
    set changePrice (value){
        this.price = value;
    }

}
class headphone extends product{
    weight;
    constructor(params){
        super(params);
        this.weight = params.weight;
    }
    get getInfo() {
        const inf = [this.name, this.weight, this.price, this.description];
    return  inf;
    }
    set addPriceAndWeight (value){
        this.price = value[0];
        this.weight = value[1];
    }
}
class monitor extends product{
    screen;
    constructor(params){
        super(params);
        this.screen = params.screen;
    }
    get getInfo() {
        const inf = [this.name, this.screen, this.price];
        return  inf;
    }
    set addPriceAndName (value){
        this.price = value.price;
        this.name  = value.name;
    }
}


// const iphone = new product({
//     id: 1,
//     name: "iphone13",
//     description: "new phone",
//     price: 13000,
// });

// iphone.addDescription = "This is new Iphon"
// console.log(iphone.getPrice);
// console.log(iphone.getInfo);

const asus = new laptop({
    id: 2,
    name: "asus tuf",
    description: "gaming note",
    price: 30000,
    size: 50
})
asus.changePrice = 37000;
console.log(asus.getInfo);


const ipods = new headphone({
    id: 3,
    name: "ipods pro",
    description: "headphone aplle",
    price: 5000,
    weight: 20 
})
ipods.addPriceAndWeight = ([6000, 15]);
console.log(ipods.getInfo);

const sony = new monitor({
    id: 4,
    name: "sony17",
    description: "monitol OLED",
    price: 50000,
    screen: 56
})
sony.addPriceAndName = {price: 52000, name: "sony bravia"}
console.log(sony.getInfo);