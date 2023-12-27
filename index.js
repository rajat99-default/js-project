

function show(){
    document.getElementById('signinform').style.display = 'none';
    // document.getElementById('loginform').style.display = 'none';
    document.getElementById('admindatatable').style.display = 'none'
    document.getElementById('button').style.display = 'none';
    document.getElementById('admindashboard').style.display = 'none';
    // document.getElementById('searchbar').style.display = 'none';
}

function register(){
    
    let nam = document.getElementById('nam').value;
    let uname = document.getElementById('uname').value;
    let mob = document.getElementById('mob').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    let imag = document.getElementById('imag').value;
    let role = document.getElementById('role').value;

    let obj ={
        Names:nam,
        Username:uname,
        Mobile_Number:mob,
        Password:pass,
        Confirm_Password:cpass,
        images:imag,
        role:role
    }

    if(role === "teacher" || role === "student" ){
        fetch('http://localhost:3000/database',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    }).then(alert("Registration Successfull"))    

    document.getElementById('signinform').style.display = 'none';
    
    }
    
    else if(role === "select"){
        alert("Please Select Your Role")
    }
    
}

async function login(){

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let aftertrimuname = username.trim();

    let data = await fetch('http://localhost:3000/database');
    let response = await data.json();

    let founder = response.find(items=> items.Username === aftertrimuname && 
        items.Password === password );

    if(founder){
        document.getElementById('admindashboard').style.display = 'block';
        // document.getElementById('')
        document.getElementById('loginform').style.display = 'none';
        document.getElementById('signinform').style.display = 'none';
    
    document.getElementById('all').innerHTML = response.length

    let teafilter = response.filter(items => items.role === 'teacher');
    document.getElementById('tea').innerHTML = teafilter.length;

    let stufilter = response.filter(items => items.role === 'student');
    document.getElementById('stu').innerHTML = stufilter.length;
    }
    else{
        alert("Not Exist Please Sign In First")
        document.getElementById('signinform').style.display = 'flex';
        document.getElementById('loginform').style.display = 'none';
    }

}

async function records(){
    document.getElementById('loginform').style.display = 'none';
    document.getElementById('signinform').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('admindatatable').style.display = 'block'
    document.getElementById('button').style.display = 'flex';

    let data = await fetch('http://localhost:3000/database');
    let response = await data.json();

    document.getElementById('admindatatable').innerHTML = 
    response.map(items=> `
    <table> <tr>
    <td>${items.Names}</td>
    <td>${items.Username}</td>
    <td>${items.Mobile_Number}</td>
    <td>${items.Password}</td>
    <td>${items.Confirm_Password}</td>
    <td><img src="${items.images}" height="40px"> </td>
    <td>${items.role}</td>
    </tr></table> `).join(" ")

    document.getElementById('all').innerHTML = response.length

    let teafilter = response.filter(items => items.role === 'teacher');
    document.getElementById('tea').innerHTML = teafilter.length;

    let stufilter = response.filter(items => items.role === 'student');
    document.getElementById('stu').innerHTML = stufilter.length;

}

async function dashboard(){

        document.getElementById('loginform').style.display = 'none';
        document.getElementById('signinform').style.display = 'none';
        document.getElementById('admindatatable').style.display = 'none';
        document.getElementById('dashboard').style.display = 'flex';
 
        document.getElementById('button').style.display = 'none';

        let data = await fetch('http://localhost:3000/database');
        let response = await data.json();

        document.getElementById('all').innerHTML = response.length

        let teafilter = response.filter(items => items.role === 'teacher')
        document.getElementById('tea').innerHTML = teafilter.length

        let stufilter = response.filter(items => items.role === 'student')
        document.getElementById('stu').innerHTML = stufilter.length
        
}

async function filterdataall(){

    let data = await  fetch('http://localhost:3000/database');
    let response = await data.json();

    document.getElementById('admindatatable').innerHTML = 
    response.map(items=> `
    <table> <tr>
    <td>${items.Names}</td>
    <td>${items.Username}</td>
    <td>${items.Mobile_Number}</td>
    <td>${items.Password}</td>
    <td>${items.Confirm_Password}</td>
    <td><img src="${items.images}" height="40px"> </td>
    <td>${items.role}</td>
    </tr></table> `).join(" ")
}

async function filterdatatea(){
    
    let data = await  fetch('http://localhost:3000/database');
    let response = await data.json();

    let teafilter = response.filter(items => items.role === 'teacher')
    document.getElementById('admindatatable').innerHTML = 
    teafilter.map(items=> `
    <table> <tr>
    <td>${items.Names}</td>
    <td>${items.Username}</td>
    <td>${items.Mobile_Number}</td>
    <td>${items.Password}</td>
    <td>${items.Confirm_Password}</td>
    <td><img src="${items.images}" height="40px"> </td>
    <td>${items.role}</td>
    </tr></table> `).join(" ")
}

async function filterdatastu(){
    
    let data = await  fetch('http://localhost:3000/database');
    let response = await data.json();

    let stufilter = response.filter(items => items.role === 'student')
    document.getElementById('admindatatable').innerHTML = 
    stufilter.map(items=> `
    <table> <tr>
    <td>${items.Names}</td>
    <td>${items.Username}</td>
    <td>${items.Mobile_Number}</td>
    <td>${items.Password}</td>
    <td>${items.Confirm_Password}</td>
    <td><img src="${items.images}" height="40px"> </td>
    <td>${items.role}</td>
    </tr></table> `).join(" ")
}

async function searching(){

    let searchtext = document.getElementById('box').value;
    let optionsearch = document.getElementById('searchfilter').value;
    
    let data = await fetch('http://localhost:3000/database')
    let response = await data.json();

    if (optionsearch ===  "name"){
        let fil = response.filter(items=> items.Names === searchtext);
        document.getElementById('admindatatable').innerHTML = fil.map(
            items=> `
           <table> <tr>
           <td>${items.Names}</td>
           <td>${items.Username}</td>
           <td>${items.Mobile_Number}</td>
           <td>${items.Password}</td>
           <td>${items.Confirm_Password}</td>
           <td><img src="${items.images}" height="40px"> </td>
           <td>${items.role}</td>
           </tr></table> `).join(" ")
    }
    else if (optionsearch ===  "email"){
        let fil = response.filter(items=> items.Username === searchtext);
        document.getElementById('admindatatable').innerHTML = fil.map(
            items=> `
           <table> <tr>
           <td>${items.Names}</td>
           <td>${items.Username}</td>
           <td>${items.Mobile_Number}</td>
           <td>${items.Password}</td>
           <td>${items.Confirm_Password}</td>
           <td><img src="${items.images}" height="40px"> </td>
           <td>${items.role}</td>
           </tr></table> `).join(" ")
    }
    if (optionsearch ===  "mob"){
        let fil = response.filter(items=> items.Mobile_Number === searchtext);
        document.getElementById('admindatatable').innerHTML = fil.map(
            items=> `
           <table> <tr>
           <td>${items.Names}</td>
           <td>${items.Username}</td>
           <td>${items.Mobile_Number}</td>
           <td>${items.Password}</td>
           <td>${items.Confirm_Password}</td>
           <td><img src="${items.images}" height="40px"> </td>
           <td>${items.role}</td>
           </tr></table> `).join(" ")
    }
    
}