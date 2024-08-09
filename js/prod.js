async function fetchData(){
    try{
        console.log(window.location);
        const urlParams=new URLSearchParams(window.location.search)
        id=urlParams.get('id');
        const res=await fetch(`https://dummyjson.com/products/${id}`)
        console.log(id);
        const products= await res.json();
        console.log(products.images);
        document.getElementById("img").src=products.thumbnail
        str=``
            str+=`
           <div class="cardx">
            <h1>${products.products.id.title}</h1>
            <h3>${products.products.id.description}</h3>
            <h3>${products.products[0].category}</h3>
            <div class="price"><h1>$${products.products[0].price}</h1></div>
            <p><b>Brand: </b>${products.products[0].brand}</p>
            <p><b>sku: </b>${products.products[0].sku}</p>
            <p><b>Warranty Information: </b>${products.products[0].warrantyInformation}</p>
            <p><b>Shipping Information: </b>${products.products[0].shippingInformation}</p>
            <p><span class="r">Rating: ${products.products[0].rating}</span><br><br>Stock: ${products.products[0].stock}<br><br> Availibility: <span class="avail">${products.products[0].availabilityStatus}</span></p>
             <h3 align="center"><u>Reviews</u></h3>
            <div class="rev">
                <div class="review">
                    <p><b>Name:</b>${products.products[0].reviews[0].reviewerName}</p>
                    <p><b>Email:</b>${products.products[0].reviews[0].reviewerEmail}</p>
                    <p> <b>Date:</b>${products.products[0].reviews[0].date}</p>
                    <p><b>Comment:</b>${products.products[0].reviews[0].comment}</p>
                </div>
            </div>
        </div>`
        document.getElementById("c1").innerHTML=str;
    }
    catch(error)
    {
        console.log(error);
    }
}
 fetchData();