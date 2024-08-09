async function fetchData(){
    try{
        console.log(window.location);
        const urlParams=new URLSearchParams(window.location.search)
        id=urlParams.get('id');
        const res=await fetch(`https://dummyjson.com/products/${id}`)
        console.log(id);
        const products= await res.json();
        console.log(products.images);
        document.getElementById("img").src=`${products.thumbnail}`
        document.getElementById("one").innerHTML=`${products.title}`
        document.getElementById("three").innerHTML=`${products.description}`
        document.getElementById("four").innerHTML=`${products.category}`
        document.getElementById("five").innerHTML=`${products.price}`
        document.getElementById("six").innerHTML=`${products.brand}`
        document.getElementById("seven").innerHTML=`${products.sku}`
        document.getElementById("eight").innerHTML=`${products.warrantyInformation}`
        document.getElementById("nine").innerHTML=`${products.shippingInformation}`
        document.getElementById("ten").innerHTML=`<span class="r">Rating: ${products.rating}</span><br><br>Stock: ${products.stock}<br><br> Availibility: <span class="avail">${products.availabilityStatus}</span>`

        
        // document.getElementById("c1").innerHTML=str;
    }
    catch(error)
    {
        console.log(error);
    }
}
 fetchData();