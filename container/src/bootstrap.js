
import { mount as productsMount } from 'products/ProductsIndex'
import { mount as productsCart } from 'productCart/ProductsCartIndex'

productsMount(document.querySelector('#dev-products'))
productsCart(document.querySelector('#dev-cart'))