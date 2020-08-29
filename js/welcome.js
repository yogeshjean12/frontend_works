


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
    setTimeout("slider()", 600000);
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


var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
      console.log('match')
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
      console.log('not match')
    }
  }


  function checkPass(){
    var pass  = document.getElementById("password").value;
    var rpass  = document.getElementById("rpassword").value;
   if(pass != rpass){
       document.getElementById("submit").disabled = true;
       $('.missmatch').html("Entered Password is not matching!! Try Again");
   }else{
       $('.missmatch').html("");
       document.getElementById("submit").disabled = false;
   }
}



function register(){
    var name = document.getElementById('Username1').value; 
    var password = document.getElementById('Password1').value; 
    var dataToSend = JSON.stringify({"username": name, "password": password});
    
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
                alert('Username already exist, try somthing different.')
                window.location.href = 'welcome.html'
                
            }
        })
    })
}

