const scriptURL = "ضع_هنا_رابط_Apps_Script";

const form = document.getElementById("myForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
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
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        successMessage.style.display = "block";

        setTimeout(() => {
            successMessage.style.display = "none";
            form.reset();
        }, 2000);
    })
    .catch(error => {
        alert("حدث خطأ أثناء إرسال الطلب");
        console.error(error);
    });
});