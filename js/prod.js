async function fetchData(){
    try{
        console.log(window.location);
        const urlParams=new URLSearchParams(window.location.search)
        id=urlParams.get('id');
        const res=await fetch(`https://dummyjson.com/products/${id}`)
        console.log(id);
        const products= await res.json();
        console.log(products);
        
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
        str=``
        products.reviews.map((i)=>{
           str+= `<div class="review">
                    <p><b>Name:</b>${i.reviewerName}</p>
                    <p><b>Email:</b>${i.reviewerEmail}</p>
                    <p> <b>Date:</b>${i.date.substring(0,10)}</p>
                    <p><b>Comment:</b>${i.comment}</p>
                </div>`
        })
        document.getElementById("rev").innerHTML=str;
        document.getElementById("pc").innerHTML=`<p> <b> RETURN POLICY : </b> ${products.returnPolicy}</p>
        <p><b>Minimum Order Quantity :</b>${products.minimumOrderQuantity}</p>`;
        document.getElementById("img2").src=`${products.meta.qrCode}`;
    }
    catch(error)
    {
        console.log(error);
    }
}
 fetchData();