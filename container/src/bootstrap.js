import {mount as productMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartIndex';
productMount(document.querySelector('#my-cart'));
cartMount(document.querySelector('.my-pro'));
