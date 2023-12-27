  // ================================HOODIES================================
        function show1(){
            document.getElementById('hoodie').style.display = 'grid';
            document.getElementById('jeans').style.display = 'none';
            document.getElementById('shirt').style.display = 'none';

            let hoodies = [
            {
                imag:"https://m.media-amazon.com/images/I/61Jx9DZ7sHL._SY741_.jpg",
                brand:"NOBERO",
                price:"1199",
                rating:"4.2",
                Shop_name:"Tom & Jerry"
            },
            {
                imag:"https://m.media-amazon.com/images/I/612MX+lIaUL._SY741_.jpg",
                brand:"Allen Solly",
                price:"1869",
                rating:"4.8",
                Shop_name:"Tom & Jerry"
            },{
                imag:"https://m.media-amazon.com/images/I/418DGt+bn0L.jpg",
                brand:"Alan Jones Clothing",
                price:"1699",
                rating:"4.1",
                Shop_name:"Tom & Jerry"
            },{
                imag:"https://m.media-amazon.com/images/I/61MiSlYLPML._SY879_.jpg",
                brand:"Koverify",
                price:"2699",
                rating:"4.2",
                Shop_name:"Tom & Jerry"
            },{
                imag:"https://m.media-amazon.com/images/I/61O187w5QlL._SY741_.jpg",
                brand:"fanideaz",
                price:"2499",
                rating:"4.9",
                Shop_name:"Tom & Jerry"
            },{
                imag:"https://m.media-amazon.com/images/I/51+diCQf+9L._SY879_.jpg",
                brand:"Tabadtod",
                price:"1899",
                rating:"4.2",
                Shop_name:"Tom & Jerry"
            },{
                imag:"https://m.media-amazon.com/images/I/51os4bxHILL._SY741_.jpg",
                brand:"Veirdo",
                price:"1399",
                rating:"4.3",
                Shop_name:"Tom & Jerry"
            },{
                imag:"https://m.media-amazon.com/images/I/71hTmF5ymhL._SY741_.jpg",
                brand:"Generic",
                price:"1499",
                rating:"4.4",
                Shop_name:"Tom & Jerry"
            },
            {
                imag:"https://m.media-amazon.com/images/I/71TSagNVFgL._SY879_.jpg",
                brand:"LEOTUDE",
                price:"1699",
                rating:"4.7",
                Shop_name:"Tom & Jerry"
            },
            {
                imag:"https://m.media-amazon.com/images/I/61akXAZ3dfL._SY879_.jpg",
                brand:"OOKSIN",
                price:"2399",
                rating:"4.6",
                Shop_name:"Tom & Jerry"
            },
            {
                imag:"https://m.media-amazon.com/images/I/61Jx9DZ7sHL._SY741_.jpg",
                brand:"NOBERO",
                price:"1199",
                rating:"4.2",
                Shop_name:"Tom & Jerry"
            },
            {
                imag:"https://m.media-amazon.com/images/I/612MX+lIaUL._SY741_.jpg",
                brand:"Allen Solly",
                price:"1869",
                rating:"4.8",
                Shop_name:"Tom & Jerry"
            }
            ]
            let see = document.getElementById('hoodie')
        see.innerHTML = hoodies.map(cards =>`<div id="hover1"> 
            <div id="img1"> <img src="${cards.imag}" alt=""> </div> 
            <h4> ${cards.brand} </h4>
            <h4> ${cards.price} </h4>
            <h4> ${cards.rating} </h4>
            <h4> ${cards.Shop_name} </h4> </div>`).join('')
            
        }
        // ================================HOODIES================================

        // ================================JEANS================================

        function show2(){
            document.getElementById('jeans').style.display = 'grid';
            document.getElementById('hoodie').style.display = 'none';
            document.getElementById('shirt').style.display = 'none';
            let jeans = [
            {
                imag1:"https://m.media-amazon.com/images/I/71FgMgPW8ZL._SY879_.jpg",
                brand1:"NOBERO",
                price1:"1199",
                rating1:"4.2",
                Shop_name1:"Tom & Jerry"
            },
            {
                imag1:"https://m.media-amazon.com/images/I/71PZII8teOL._SY879_.jpg",
                brand1:"Allen Solly",
                price1:"1869",
                rating1:"4.8",
                Shop_name1:"Tom & Jerry"
            },{
                imag1:"https://m.media-amazon.com/images/I/81tAVhNSdnL._SY879_.jpg",
                brand1:"Alan Jones Clothing",
                price1:"1699",
                rating1:"4.1",
                Shop_name1:"Tom & Jerry"
            },{
                imag1:"https://m.media-amazon.com/images/I/61KGHTiK5sL._SX679_.jpg",
                brand1:"Koverify",
                price1:"2699",
                rating1:"4.2",
                Shop_name1:"Tom & Jerry"
            },{
                imag1:"https://m.media-amazon.com/images/I/812NfsF-TDS._SX569_.jpg",
               brand1:"fanideaz",
                price1:"2499",
                rating1:"4.9",
               Shop_name1:"Tom & Jerry"
            },{
               imag1:"https://m.media-amazon.com/images/I/81e-Bdu0P8L._SY879_.jpg",
               brand1:"Tabadtod",
               price1:"1899",
               rating1:"4.2",
               Shop_name1:"Tom & Jerry"
            },{
                imag1:"https://m.media-amazon.com/images/I/71hdABai61L._SY879_.jpg",
                brand1:"Veirdo",
                price1:"1399",
                rating1:"4.3",
                Shop_name1:"Tom & Jerry"
            },{
                imag1:"https://m.media-amazon.com/images/I/613VVX646CL._SY879_.jpg",
                brand1:"Generic",
                price1:"1499",
                rating1:"4.4",
                Shop_name1:"Tom & Jerry"
            },{
                imag1:"https://m.media-amazon.com/images/I/61lONnw0hWL._SY741_.jpg",
                brand1:"LEOTUDE",
                price1:"1699",
                rating1:"4.7",
                Shop_name1:"Tom & Jerry"
            },{
                imag1:"https://m.media-amazon.com/images/I/41b+Rm-2xvL._SX679_.jpg",
                brand1:"OOKSIN",
                price1:"2399",
                rating1:"4.6",
                Shop_name1:"Tom & Jerry"
            },{
                imag1:"https://m.media-amazon.com/images/I/41jm8kYB8QL._SX679_.jpg",
                brand1:"NOBERO",
                price1:"1199",
                rating1:"4.2",
                Shop_name1:"Tom & Jerry"
            },{
                imag1:"https://m.media-amazon.com/images/I/61xLMH9+IeL._SX679_.jpg",
                brand1:"Allen Solly",
                price1:"1869",
                rating1:"4.8",
                Shop_name1:"Tom & Jerry"
            }
        ]
            let jee = document.getElementById('jeans')
            jee.innerHTML = jeans.map(cards1 =>`<div id="hover2"> 
            <div id="img2"> <img src="${cards1.imag1}" alt=""> </div> 
            <h4> ${cards1.brand1} </h4>
            <h4> ${cards1.price1} </h4>
            <h4> ${cards1.rating1} </h4>
            <h4> ${cards1.Shop_name1} </h4> </div>`).join('')
        }

        // ================================JEANS================================

        // ================================SHIRTS================================

        function show3(){
            document.getElementById('shirt').style.display = 'grid';
            document.getElementById('jeans').style.display = 'none';
            document.getElementById('hoodie').style.display = 'none';
            let shirt = [
            {
                imag2:"https://m.media-amazon.com/images/I/61HfFh9LohL._SY741_.jpg",
                brand2:"NOBERO",
                price2:"1199",
                rating2:"4.2",
                Shop_name2:"Tom & Jerry"
            },
            {
                imag2:"https://m.media-amazon.com/images/I/717UdRZFXnL._SY879_.jpg",
                brand2:"Allen Solly",
                price2:"1869",
                rating2:"4.8",
                Shop_name2:"Tom & Jerry"
            },{
                imag2:"https://m.media-amazon.com/images/I/715s6hHaYeL._SY741_.jpg",
                brand2:"Alan Jones Clothing",
                price2:"1699",
                rating2:"4.1",
                Shop_name2:"Tom & Jerry"
            },{
                imag2:"https://m.media-amazon.com/images/I/71vaiADTu5L._SY741_.jpg",
                brand2:"Koverify",
                price2:"2699",
                rating2:"4.2",
                Shop_name2:"Tom & Jerry"
            },{
                imag2:"https://m.media-amazon.com/images/I/61bUripau7L._SY741_.jpg",
               brand2:"fanideaz",
                price2:"2499",
                rating2:"4.9",
               Shop_name2:"Tom & Jerry"
            },{
               imag2:"https://m.media-amazon.com/images/I/61b7sMMNVXL._SY741_.jpg",
               brand2:"Tabadtod",
               price2:"1899",
               rating2:"4.2",
               Shop_name2:"Tom & Jerry"
            },{
                imag2:"https://m.media-amazon.com/images/I/61YbK5YpbEL._SY741_.jpg",
                brand2:"Veirdo",
                price2:"1399",
                rating2:"4.3",
                Shop_name2:"Tom & Jerry"
            },{
                imag2:"https://m.media-amazon.com/images/I/61vUFZfSfqL._SY741_.jpg",
                brand2:"Generic",
                price2:"1499",
                rating2:"4.4",
                Shop_name2:"Tom & Jerry"
            },{
                imag2:"https://m.media-amazon.com/images/I/61vmxtHv4IL._SY741_.jpg",
                brand2:"LEOTUDE",
                price2:"1699",
                rating2:"4.7",
                Shop_name2:"Tom & Jerry"
            },{
                imag2:"https://m.media-amazon.com/images/I/71EAaI2MHUL._SY741_.jpg",
                brand2:"OOKSIN",
                price2:"2399",
                rating2:"4.6",
                Shop_name2:"Tom & Jerry"
            },{
                imag2:"https://m.media-amazon.com/images/I/61Zl4Onuq+L._SY741_.jpg",
                brand2:"NOBERO",
                price2:"1199",
                rating2:"4.2",
                Shop_name2:"Tom & Jerry"
            },{
                imag2:"https://m.media-amazon.com/images/I/71K25sPAGGL._SY741_.jpg",
                brand2:"Allen Solly",
                price2:"1869",
                rating2:"4.8",
                Shop_name2:"Tom & Jerry"
            }
        ]
            let bee = document.getElementById('shirt')
            bee.innerHTML = shirt.map(cards2 =>`<div id="hover3"> 
            <div id="img3"> <img src="${cards2.imag2}" alt=""> </div> 
            <h4> ${cards2.brand2} </h4>
            <h4> ${cards2.price2} </h4>
            <h4> ${cards2.rating2} </h4>
            <h4> ${cards2.Shop_name2} </h4> </div>`).join('')
        }

        // ================================SHIRTS================================
