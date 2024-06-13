import faker from 'faker';
let products='';
for(let i=0; i<9; i++){
let name=faker.commerce.productName(0);
products+=`<div>${name}<div/>`;
}
console.log(products);
document.querySelector(".dev-pro").innerHTML=products;