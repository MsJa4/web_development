//collect the elements//
const priceitem_display = document.querySelector('.price_display')
const quantity_display = document.querySelector('.quantity_display')
const totalprice_display = document.querySelector('.totalprice_display')

// get values for quantity and price per unit//
const priceitem = sessionStorage.getTitem('sale_price')
const quantityitem = sessionStorage.getTitem('quantityitem1')

//calculate for the total price//
const totalprice = (priceitem*quantityitem).toFixed(2) //Math.round(priceitem*quantityitem,2)//

//print the price, quantity, and total price in the collected elements//
priceitem_display.innerHTML = `$ ${priceitem}` //priceitem//
quantity_display.innerHTML = `${quantityitem}`
totalprice_display.innerHTML = `$ ${totalprice}`