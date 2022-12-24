import faker from 'faker'


const mount = (el) => {
    const cartItems = `You have ${faker.random.number()} in your card`

    el.innerHTML = cartItems
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('dev-cart');

    if (el) {
        mount(el)
    }
}

export { mount }