function getCart(){
    console.log(localStorage.length);
    str=``
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        console.log(key);
        const value=JSON.parse(localStorage.getItem(key));
        console.log(value);
        str+=`<div class="cart">
                    <div class="img">
                    <img id="img" src="${value.thumbnail}" alt="">
                    </div>
                    <div class="tit">
                     <h2>$${value.price}</h2>
                    <h2>${value.title.substring(0,15)}</h2>
                   
                    </div>
                    <div class="brn">
                        <button class="brnn" onclick="removeCart('${value.id}')">REMOVE</button>
                    </div>
              </div>`
    }
    document.getElementById("carts").innerHTML=str;
   
}
function removeCart(id){
    localStorage.removeItem(id);
    getCart();
}

getCart();