var clearCartButton = document.getElementsByClassName('btn clear-cart')[0];
var viewCartButton = document.getElementsByClassName('view-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
var cart = [];


viewCartButton.addEventListener('click', function () {
  if (shoppingCart.classList.contains('show')) {
    shoppingCart.className = 'shopping-cart';
  } else {
    shoppingCart.className += ' show';
  }
});

var products = document.getElementsByClassName('products')[0];

products.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
      var itemName = e.target.closest('.item')
        .getAttribute('data-name');

      var itemPrice = e.target.closest('.item')
        .getAttribute('data-price');

        var product = {
             name: itemName,
             price: parseInt(itemPrice)
           };

           cart.push(product);
           renderCart();
         }
       });

var renderCart = function () {
  var cartList = document.getElementsByClassName('cart-list')[0];

    while(cartList.hasChildNodes()) {
      cartList.removeChild(cartList.firstChild);
    }

    var items = '';

      for (var i = 0; i < cart.length; i++) {
        items += '<div>' + cart[i].name
        + ' - $' + cart[i].price + '</div>';
    }
    cartList.innerHTML = items;

    var totalCost = cart.reduce(function (sum, item) {
        return sum + item.price
    },0);

    console.log(totalCost)

    document.getElementsByClassName('total')[0].innerHTML= totalCost;
};

clearCartButton.addEventListener('click', function ()
document.getElementsByClassName('cart-list')[0].removeChild()
document.getElementsByClassName('total')[0].innerHTML= 0
});
