let products;
async function fetchData(){
    try{
        console.log(window.location);
        const urlParams=new URLSearchParams(window.location.search)
        id=urlParams.get('id');
        const res=await fetch(`https://dummyjson.com/products/${id}`)
        console.log(id);
         products= await res.json();
        console.log(products);
        
        console.log(products.images);
        document.getElementById("img").src=`${products.thumbnail}`
        str1=``;
        products.images.map((i)=>{
        str1+=`<img onmouseover="changeImage('${i}')" src="${i}" alt="" >`;
        })
        document.getElementById("m2").innerHTML=str1;
        document.getElementById("one").innerHTML=`${products.title}`
        document.getElementById("three").innerHTML=`${products.description}`
        document.getElementById("four").innerHTML=`${products.category}`
        document.getElementById("five").innerHTML=`<span class="m"><b>$<b>${products.price}</span>`
        document.getElementById("six").innerHTML=`<span class="m"><b>Brand:<b> ${products.brand}</span>`
        document.getElementById("seven").innerHTML=`<span class="m"><b>Model No:<b> ${products.sku}</span>`
        document.getElementById("eight").innerHTML=`<span class="m"><b>Warranty Info : <b>${products.warrantyInformation}</span>`
        document.getElementById("nine").innerHTML=`<span class="m"><b>Shipping Info : <b>${products.shippingInformation}</span><br>`
        document.getElementById("ten").innerHTML=`<br><span class="r">Rating: ${products.rating}</span><br><br><b>Stock:<b> ${products.stock}<br> Availibility: <span class="avail">${products.availabilityStatus}</span>`
        str=``
        products.reviews.map((i)=>{
           str+= `<div class="review">
                    <p><b>Name:</b>${i.reviewerName}</p>
                    <p><b>Comment:</b>${i.comment.substring(0,15)}</p>
                </div>`
        })
        document.getElementById("rev").innerHTML=str;
        document.getElementById("pc").innerHTML=`<p> <br><b> RETURN POLICY : </b> ${products.returnPolicy}</p>
        <p><b>Minimum Order Quantity :</b>${products.minimumOrderQuantity}</p>`;
    }
    catch(error)
    {
        console.log(error);
    }
}
 fetchData();
 function addToCart(){
    console.log(products);
    localStorage.setItem(products.id,JSON.stringify(products));
    window.location.href='./cart.html';
 }
 function changeImage(img){
    document.getElementById("img").src=img;
}


