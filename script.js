// add to cart

const btncart = document.querySelector('btn-cart');
const cart = document.querySelector('.cart');
const btnclose = document.querySelector('#cart-close');

btncart.addEventListener(.click',()=>{ 
    cart.classList.add('cart-active');
});

btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadfood);

function loadfood(){
    loadcontent();
}

function loadcontent(){
    let btnRemove=document.querySelectorAll('.cart-remove');
    console.log(btnRemove);
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',changeQty);

    });

    let qtyElements = document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change', changeQty);

    });

    let cartBtns = document.querySelectorAll('.add-cart');
    cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addcart);
    });
 re
    updateTotal();
}

function removeItem(){

if(confirm('Are you sure to remove')){
    let title = this.parentElement.querySelector('.cart-food-title').innerHTML
    itemList = itemList.filter(el => el.title !=title);
    this.parentElement.remove();
    loadcontent();
}
}

function changeQty{
    if(isNaN(this.value) || this.value <1){
        this.value =1;
    }
    loadcontent();
}

let itemList =[];
function addcart(){
    let food =this.parentElement;
    let title = food.querySelector('.food-title').innerHTML;
    let price= food.querySelector('.food-price').innerHTML;
    let imgsrc =this.parentElement.querySelector(',food-img').src;

    let newproduct = {title,price,imgsrc}

    if(itemList.find((el) =>el.title == newproduct.title)){
        alert("product Already added in cart");
        return;
    }
else{ 
    itemList.push(newProduct);
}
let newproductElement =createCartProduct(title,price,imgsrc);
let element = document.createElement('div');
element.innerHTML=newproductElement;
let cartBasket = document.querySelector('.cart-content');
cartBasket.append(element);
loadcontent();
}

function createCartProduct(title,price,imgsrc){
  return'
    
                   

  <div class="cart-box">
  <img src="${imgsrc}" class="cart-img">
  <div class="detail-box">

      <div class="cart-food-title">${title}</div>
      <div class="price-box">
          <div class="cart-price">${price}</div>
          <div class="cart-amt">${price}</div>
      </div>
      <input type="number" value="1" class="cart-quantity">

  </div>
  <i class="fa fa-trash" aria-hidden="true"></i>
  

';
           
}

function  updateTotal(){
    const cartItems = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price';)

    let total=0;
    cartItems.forEach(product=>{
        let priceElement = product.querySelector('.cart-price');
        let price= parseeFloat(priceElement.innerHTML.replace("Rs.",""));
        let qty = product.querySelector('.cart-quantity').value;
        total += (price *qty);
        product.querySelector('.cart-amt').innerHTML ="Rs." + (price * qty);

    });

    totalValue.innerHTML ='Rs.' +total;
}

const cartCount =document.querySelector('.cart-count');
let count = itemList.length;
cartCount.innerHTML= count;

if(count==0){

    cartCount.style.display ='none';
}

else{
    cartCount.style.display ='block';
}

