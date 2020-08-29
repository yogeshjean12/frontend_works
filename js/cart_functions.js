


function del(id){
    console.log("hi")

    var dataToSend = JSON.stringify({"product_id": id});
    
    var detail = fetch(`http://127.0.0.1:5000/cart/${user_id}`,{
        method:'DELETE',
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
                window.location.href = "cart.html?user_id=" + user_id
            else{
                alert('Fail to delete product, Error occured')
                window.location.href = "cart.html?user_id=" + user_id
            }
        })
    })
}



function update(id, c){
    console.log("hi")

    var quantity = document.getElementById(`no${c}`).value; 
    console.log(quantity)
    console.log(id)

    var dataToSend = JSON.stringify({"product_id": id, "quantity": quantity});
    console.log(dataToSend)
    
    var detail = fetch(`http://127.0.0.1:5000/cart/${user_id}`,{
        method:'PUT',
      
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
                window.location.href = "cart.html?user_id=" + user_id
            else{
                alert('Out of stock.')
                window.location.href = "cart.html?user_id=" + user_id
            }
        })
    })
}



function home() {
    window.location.href = "home.html?user_id=" + user_id

}


function logout() {
              window.location.href = 'welcome.html'
 
  }
