import faker from 'faker';

const mount=(el)=>{
    let products='';
    for(let i=0; i<9; i++){
    let name=faker.commerce.productName(0);
    products+=`<div>${name}<div/>`;
    }
    console.log(products);
    el.innerHTML=products;
}
if (process.env.NODE_ENV==="development"){
    const el=document.querySelector('.dev-pro');
    if(el){
        mount(el);
    }
}
export {mount};