let data;
let response;
(async function (){

    data = await fetch('http://localhost:3000/resturant')
    response = await data.json();
})();

let city;
let filterdata;
function res(arg){
    city = arg;
    console.log(city)
}