import faker from 'faker';

let products = '';

for (var i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
}

document.getElementById('dev-products').innerHTML = products
console.log(products)