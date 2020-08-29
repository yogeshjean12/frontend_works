

const urlParams = new URLSearchParams(window.location.search);
const category_id = urlParams.get('id');
const user_id = urlParams.get('user_id')

if (user_id == null)
    alert('Please login!')

if (user_id == null)
        
        window.location.href = "welcome.html"
else{


   
fetch(`http://127.0.0.1:5000/categories/${category_id}/products`).then(
        function(u){ return u.json();}
      ).then(
        function(json){
            data_function(json);
        }
      )

function data_function(data){
    console.log(data)
    document.getElementById("product").innerHTML = `
    <h1 class="category-title">Products</h1>
    ${data.map(function(data) {
    return `
    <div class="category">
        <img src="${data.product_image}">
        <h2>Name: ${data.product_name} </h2>
        <h2> Price: Rs.${data.price}</h2>
        <button onclick="add(${data.product_id})" type="submit" class="btn btn-outline-warning">Add To Cart</button>
        <br>
        <hr>        
        
    </div>
    
`
} ).join('')}

`    

}

}
    
