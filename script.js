function addToCart(){
alert("Product added to cart");
}
function buyNow(){
window.location.href="https://buy.stripe.com/test_4gw6qk5b3d8H6uI144";
}
function showTab(tab){
document.querySelectorAll('.tab').forEach(t=>t.style.display="none");
document.getElementById(tab).style.display="block";
}
