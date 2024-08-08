async function fetchData(){
    try{
        const res=await fetch("https://dummyjson.com/products");
        const products= await res.json();
        str=``
            str+=`<div class="cardy">
           <img src="${products.products[0].thumbnail}" alt="">
           <div class="butt">
                <button id="bt11">Add To Cart</button> <button id="bt22">Buy Now</button>
            </div>
        </div>
           <div class="cardx">
            <h1>${products.products[0].title}</h1>
            <h3>${products.products[0].description}</h3>
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