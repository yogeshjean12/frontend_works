

function add(id){
    console.log("hi")
  
    var dataToSend = JSON.stringify({"product_id": id});
    
    var detail = fetch(`http://127.0.0.1:5000/cart/${user_id}`,{
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
                window.location.href = `product.html?id=${category_id}&user_id=${user_id}`
            else{
                alert('Out of stock')
                window.location.href = `product.html?id=${category_id}&user_id=${user_id}`
            }
        })
    })
  }
  
  
  function home() {
      window.location.href = "home.html?user_id=" + user_id
  
  }
  
  function cart() {
      window.location.href = "cart.html?user_id=" + user_id
  
  }
  
  function logout() {
              window.location.href = 'welcome.html'
  }