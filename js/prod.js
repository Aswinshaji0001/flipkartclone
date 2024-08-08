async function fetchData(){
    try{
        const res=await fetch("https://dummyjson.com/products");
        const products= await res.json();
        str=``
        products.products.map((product)=>{
            str+=`<div class="cardx">
                    <img src="${product.thumbnail}" alt="">
                    <button class="bt2"><a href="product.html">Click Here</a></button>

            </div>`
        })
        document.getElementById("c1").innerHTML=str;
    }
    catch(error)
    {
        console.log(error);
    }
}
 fetchData();