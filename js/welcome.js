


var slideimg = document.getElementById("slideimg");
var images = new Array(
    "11.jpg",
    "21.jpg",
    "6.jpg",
    "20.jpg",
    "17.jpg"
);
var len = images.length;
var i = 0;
function slider(){
    if(i > len-1){
        i = 0;
    }
    slideimg.src = images[i];
    i++;
    setTimeout("slider()", 15000);
}



document.getElementById('button1').addEventListener("click", function() {
document.querySelector('.login').style.display = "flex"; 
});

document.querySelector('.close').addEventListener("click", function() {
document.querySelector('.login').style.display = "none";
});


document.getElementById('button2').addEventListener("click", function() {
document.querySelector('.register').style.display = "flex"; 
});

document.querySelector('.close1').addEventListener("click", function() {
document.querySelector('.register').style.display = "none";
});




function home(){
    var name = document.getElementById('Username').value; 
    var password = document.getElementById('Password').value; 
    var dataToSend = JSON.stringify({"username": name, "password": password});

    var detail = fetch("http://127.0.0.1:5000/login",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:dataToSend
    });
    detail.then((res)=>{
        res.json()
        .then((data)=>{
            console.log(data)
            if (data['status'] == "200")
                window.location.href = 'home.html?user_id=' + data['user_id']
            else{
                alert('Incorrect username or password')
                window.location.href = 'welcome.html'
            }
        })
    })
} 





const pass  = document.getElementById("Password1").value;
const rpass  = document.getElementById("confirm_password").value;
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let message = []
    console.log('in')
    if (pass.value === '' | pass.value == null)
    console.log('in IN')
    message.push('password required')

    if (rpass.value === '' | rpass.value == null)
    message.push('confirm password required')

    if (rpass.value === pass.value)
    message.push('password not matched')




    e.preventDefault()
    errorElement.innerText = message.join(', ')

})



function register(){
    var name = document.getElementById('Username1').value; 
    var password = document.getElementById('Password1').value; 
    var confirm_password = document.getElementById('confirm_password').value;
    var dataToSend = JSON.stringify({"username": name, "password": password, "confirm_password": confirm_password});
    console.log(dataToSend)
    var detail = fetch("http://127.0.0.1:5000/register",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:dataToSend
    });
    detail.then((res)=>{
        res.json()
        .then((data)=>{
            console.log(data)
            if (data['status'] == "200")
                window.location.href = 'welcome.html'
            else{
                alert('Invalid entry!')
                window.location.href = 'welcome.html'
                
            }
        })
    })
}

