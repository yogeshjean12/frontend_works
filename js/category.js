
const urlParams = new URLSearchParams(window.location.search);
const user_id = urlParams.get('user_id');
console.log(user_id)

if (user_id == null)
    alert('Please login!')

if (user_id == null)

        window.location.href = "welcome.html" 
else {



fetch("http://127.0.0.1:5000/categories").then(
        function(u){ return u.json();}
      ).then(
        function(json){
            data_function(json);
        }
      )

function data_function(data){
    console.log(data)
    document.getElementById("category").innerHTML = `
    
    ${data.map(function(data) {
    return `
    <div class="category">
        <a  href="product.html?id=${data.category_id}&user_id=${user_id}" ><h2  class="categories-name"> ${data.category_name}</h2>
        <img src="${data.category_image}">
        </a>        
    </div>    
`
} ).join('')}

`    
}
}

