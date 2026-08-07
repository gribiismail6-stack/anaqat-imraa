function login(){

    const password = document.getElementById("password").value;

    if(password === "123456"){

        window.location.href = "dashboard.html";

    }else{

        alert("كلمة المرور غير صحيحة");

    }

}