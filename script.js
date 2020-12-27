



//Increment quantite
let nb = document.getElementsByClassName("increase");

for (let i = 0; i < nb.length; i++) {
  nb[i].addEventListener("click", function () {
    nb[i].previousElementSibling.innerHTML++;
    
  });
}

// Decrement quantite
let nb1 = document.getElementsByClassName("decrease")
console.log(nb1)
for (let btn of nb1) {
  btn.addEventListener("click", function () {
    if (btn.nextElementSibling.innerHTML > 0) {
      btn.nextElementSibling.innerHTML--;
    }
  });
}




//Function TotalPrice()
function TotalPrice() {
  let price = document.getElementsByClassName("pu");
  let qte = document.getElementsByClassName("quantity");
  let PRIXT = 0;
  for (let i = 0; i < price.length; i++) {
    PRIXT += price[i].innerHTML * qte[i].innerHTML;
  }
  document.getElementById("PT").innerHTML = "Shopping Bag total : $" + PRIXT;
}
 
//delete item from shopping-cart 
function DeleteArticle(article){
  let ligne=document.getElementById(article)
  let index=ligne.rowIndex
 
 // articled.getElement
let data=document.getElementById('table1')
data.deleteRow(index)
let data1=document.getElementById('table2')
data1.deleteRow(index)
let data2=document.getElementById('table3')
data2.deleteRow(index)
let data3=document.getElementById('table4')
data3.deleteRow(index)
  
}

