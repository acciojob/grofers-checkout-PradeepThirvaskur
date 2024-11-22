const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let sum = 0;

const getSum = () => {
    // Add your code here
    let totalPrice = document.querySelector(".totalprice");
    let prices = document.querySelectorAll(".prices");
    // console.log(prices);
    prices.forEach((userItem) => {
        let num = parseInt(userItem.textContent);
        sum += num;
    });
    totalPrice.innerText = sum;
};

getSumBtn.addEventListener("click", getSum);
