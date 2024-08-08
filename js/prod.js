async function fetchData(){
    try{
        const res=await fetch("https://dummyjson.com/products");
        const products= await res.json();
        str=``
        products.products.map((product)=>{
            str+=`<div class="card">
                    <img src="${product.thumbnail}" alt="">
                    <h5>${product.title.substring(0,15)}</h5>
                    <p>${product.price}</p>
                    <button class="bt2"><a href="product.html">Click Here</a></button>

            </div>`
        })
        document.getElementById("cards").innerHTML=str;
    }
    catch(error)
    {
        console.log(error);
    }
}