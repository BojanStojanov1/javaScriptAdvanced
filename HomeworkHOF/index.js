function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

const products = [
    new Product("Kiwi", "Food", true, 10),
    new Product("Potato", "Food", false, 5),
    new Product("Piza", "Food", true, 8),
    new Product("Laptop", "Electronics", false, 300),
    new Product("Camera", "Electronics", true, 1000),
    new Product("Skirt", "Fashion", false, 50),
    new Product("T-shirt", "Fashion", true, 15),
    new Product("Speakers", "Electronics", false, 80),
    new Product("Pasta", "Food", true, 4),
    new Product("Eggs", "Food", false, 6),
    new Product("Oil", "Food", true, 12),
    new Product("Notebook", "Stationery", false, 25),
    new Product("Ring", "Fashion", true, 30),
    new Product("Umbrella", "Accessories", false, 18),
    new Product("Ink Pen", "Stationery", true, 22)
];

let productsOver20 = products.filter(product => product.price > 20);
console.log("Products with price greater than 20 are:", productsOver20);

let productsFoodAndDiscount = products
    .filter(product => product.category === "Food") 
    .filter(product => product.hasDiscount === true)
    .map(product => product.name);
console.log("Discounted Food Products are:", productsFoodAndDiscount);

let allDiscountedPrices = products
    .filter(product => product.hasDiscount === true)
    .map(product => product.price);
console.log("Prices of Discounted Products are:", allDiscountedPrices);

const vowelNonDiscountedProducts = products
    .filter(product => ['A', 'E', 'I', 'O', 'U'].includes(product.name[0]) && !product.hasDiscount)
    .map(product => ({ name: product.name, price: product.price }));
console.log("Products whose names start with a vowel and are not on discount:", vowelNonDiscountedProducts);




