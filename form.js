
// Data fetch form innerHTML by json server
function register(){
    
    let nam = document.getElementById('nam').value;
    let uname = document.getElementById('uname').value;
    let mob = document.getElementById('mob').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    
    let obj ={
        Names:nam,
        Username:uname,
        Number:mob,
        Password:pass,
        Confirm_password:cpass
    }

    fetch('http://localhost:3000/registration',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    }).then(alert("Registration Successfull"))
}
// Data show on innerHTML by async function

async function load(){
    let data = await fetch('http://localhost:3000/registration')
    let response = await data.json();
    console.log(response)
    let showing = document.getElementById('showing');
    showing.innerHTML = response.map(items=> `<tr>
    <td>${items.Names}</td>
    <td>${items.Username}</td>
    <td>${items.Number}</td>
    <td>${items.Password}</td>
    <td>${items.Confirm_password}</td>
    <td style="cursor:pointer" onclick="del(${items.id})"> Delete </td>
    <td style="cursor:pointer" onclick="update(${items.id})"> Update </td>
</tr>`).join(" ")
}
(async function(){
    fetch('http://localhost:3000/registration')
//     let data = await fetch('http://localhost:3000/registration')
//     let response = await data.json();
//     // console.log(response)
//     let showing = document.getElementById('showing');
//     showing.innerHTML = response.map(items=> `<tr>
//     <td>${items.Names}</td>
//     <td>${items.Username}</td>
//     <td>${items.Number}</td>
//     <td>${items.Password}</td>
//     <td>${items.Confirm_password}</td>
// </tr>`).join(" ")
    
})();

function del(id){
    storeid = id;
    fetch(`http://localhost:3000/registration/${storeid}`,{
    method:"DELETE"
}).then(alert("Successfullly Deleted"))
}
// // .then(window.confirm("are you sure"))

function update(id){
    document.getElementById('showdata').style.display = "block";
    storeid = id;
}
function updatedata(){
     
    let nam = document.getElementById('nam').value;
    let uname = document.getElementById('uname').value;
    let mob = document.getElementById('mob').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    
    let obj ={
        Names:nam,
        Username:uname,
        Number:mob,
        Password:pass,
        Confirm_password:cpass
    }

    fetch(`http://localhost:3000/registration/${storeid}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)

    })
}

 