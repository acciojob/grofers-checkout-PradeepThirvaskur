const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
	let sum = 0;
    
    let totalPrice = document.querySelector(".totalprice");
    let prices = document.querySelectorAll(".price");
    // console.log(prices);
    prices.forEach((userItem) => {
        let num = parseInt(userItem.textContent);
        sum += num;
    });
    totalPrice.innerText = sum;
	
};

getSumBtn.addEventListener("click", getSum);
