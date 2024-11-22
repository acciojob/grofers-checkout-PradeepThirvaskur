const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let sum=0
const getSum = () => {
//Add your code here
  let totalPrice= document.querySelector(".totalprice");
  let price= document.querySelectorAll(".price")
//   console.log(price)
price.forEach((userItem) => {
    let num=parseInt(userItem.textContent)
    sum+=num;

//   totalPrice.innerText=sum;
});
totalPrice.innerText=sum;
};

getSumBtn.addEventListener("click", getSum);

