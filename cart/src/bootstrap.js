import faker from 'faker'

const cartItems = `You have ${faker.random.number()} in your card`

document.getElementById('dev-cart').innerHTML = cartItems