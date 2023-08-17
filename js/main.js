let addUser = document.forms["add-user"];
let userName = document.querySelector("#user-name span");
let totalPerson = document.querySelector("#total-person span");
let totalRate = document.querySelector("#total-price span");

const fixedPrice = 200;

addUser.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = addUser.querySelector('input[type="text"]').value;
  let totalValue = addUser.querySelector('input[type="number"]').value;

  if (value !== "" || totalValue !== "") {
    let th = document.createElement("span");
    let totalTh = document.createElement("span");
    let totalThPrice = document.createElement("span");

    totalPrice = fixedPrice * totalValue

    th.textContent = value;
    totalTh.textContent = totalValue;
    totalThPrice.textContent=totalPrice

    userName.appendChild(th);
    totalPerson.appendChild(totalTh);
    totalRate.appendChild(totalThPrice);
    addUser.reset();
    
    
  } else {
    alert("fill the form");
  }
});


// DROP DOWN

//  if(drop){

//  } else if(){

//  }else{

//  }