/* survey form* */
//collect components//
const myform = document.querySelector(".myform")
const displayresult = document.querySelector(".displayresult")

myform.addEventListener("submit", function(event){
    //collect values afther submitting the form //
    const username = document.querySelector("#firstname").value
    const fav_language = document.querySelector("input[name=`fav_language`]:checked").value


    /* ---- debug moved code to swap -----------

    const fav_language = document.querySelector("input[name='fav_language']:checked").value
    //to test if the data was colleceted, we can set preventDefault or the form//

    event.preventDefault()
    displayresult.innerHTML = `Username: ${username} <br>Favorite Web language: ${fav_language}`
    */
    /*To test if the data was collected, we can set preventDefailt for the form event.preventDefualt()
    displayresult.innerHTML = `Username: ${username} <br>Favorite Web language: ${fav_language}`
    */

    // save the data, username and favorite language//
  sessionStorage.setItem('firstname', username)
  sessionStorage.setItem('selection_language', fav_language)
  sessionStorage.setItem('product123', "Product Name")

})

/**Shopping Cart* */
//Collect the elements//

const formitem1 = document.querySelector(".formitem1")
const itemname = document.querySelector('.itemname').textContent
const itemdescription = document.querySelector('.itemdescription').textContent
const saleprice = document.querySelector('.saleprice').textContent
const imgitem1 = document.querySelector(".imgitem1").getAttribute('src')




formitem1.addEventListener("submit", function(){
  //collect the quantity//
  
  const x = document.querySelector('.quantityinput').value

  /**  ---- moved code to swap -----------
  const quantityitem1 = document.querySelector('.quantityinput').value
  */

  //Set data into sessionStorage//
  sessionStorage.setItem('quantityitem1', x)
  sessionStorage.setItem('name_item1', itemname)
  sessionStorage.setItem('description_item1', itemdescription)
  sessionStorage.setItem('sale_price', saleprice)
  sessionStorage.setItem('item_image', imgitem1)

})

  /** ----------------------debug section to place moved code 2 -----------------------------------
  sessionStorage.setItem('quantityitem1',quantityitem1)
  sessionStorage.setItem('itemname1',itemname)
  sessionStorage.setItem('itemdescription1',itemdescription)
  sessionStorage.setItem('imgitem1',imgitem)
  sessionStorage.setItem('saleprice1',saleprice.textContent)
  */

    /**  -----------debug section to place moved code 3 -----------------------------------

   */


/**
const imgitem = document.querySelector('.imgitem1')

*/
  /** ----------------------debug section to place moved code 1 -----------------------------------
const formitem1 = document.querySelector(".formitem1")
const itemname = document.querySelector(".itemname")
const itemdescription = document.querySelector(".itemdescription").textContent)
const saleprice = document.querySelector(".saleprice").textContent)
 */


