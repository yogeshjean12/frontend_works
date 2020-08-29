const urlParams = new URLSearchParams(window.location.search);
const user_id = urlParams.get('user_id');
console.log(user_id)

if (user_id == null)
    alert("Please login!")

if (user_id == null)       
        window.location.href = "welcome.html"
else {

  

fetch(`http://127.0.0.1:5000/cart/${user_id}`).then(
        function(u){ return u.json();}
      ).then(
        function(data){
            data_function(data);

        }
      )

function data_function(data){
    var count = 0
    console.log(data)
    document.getElementById("cart").innerHTML = `
    <h1 class="category-title">Cart</h1>
    ${data.map(function(data) {
        count+=1
    return `
    <div class="category">
    <img src="${data.product_image}">
        <h2>Name: ${data.product_name}</h2>
        <h2> Price: Rs.${data.price}</h2>
        
        <h2> Quantity - ${data.quantity}</h2>
        <button onclick="del(${data.product_id})" type="submit" class="btn btn-outline-danger">Delete</button>
        <div class="box">
            <input id='no${count}' type='number' min='1'>
            <button onclick="update(${data.product_id}, ${count})" type="submit" class="btn btn-outline-primary">Update quantity</button>
        </div>
        <br>
        <hr>       
    </div>
    
`

} ).join('')}

`    
}

} 