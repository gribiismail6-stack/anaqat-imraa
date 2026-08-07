const scriptURL = "https://script.google.com/macros/s/AKfycbw4NNsXr8V4mjd-RzQVGpJJGgbukYESFjtmYGoOZ3rPd0m4eWrfK8jZZDdC9ZStfXHq/exec";

document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("orderForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        wilaya: document.getElementById("wilaya").value,
        address: document.getElementById("address").value,
        quantity: document.getElementById("quantity").value
    };


    fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data)
})

    .then(() => {

        successMessage.style.display = "block";
        successMessage.innerHTML = "✅ تم إرسال طلبك بنجاح";

        form.reset();

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 4000);

    })

    .catch(error => {
        console.log(error);
        alert("حدث خطأ في الإرسال");
    });

});

});