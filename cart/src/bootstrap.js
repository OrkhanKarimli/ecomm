import faker from 'faker';

const mount=(el)=>{
    const carText=`<div> cartinizda ${faker.random.number()} qeder item var <div/>`;
    el.innerHTML=carText;
}
export {mount};