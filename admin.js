function login(){

    const password = document.getElementById("password").value;

    if(password === "123456"){
        alert("مرحباً بك في لوحة الإدارة");
    }else{
        alert("كلمة المرور غير صحيحة");
    }

}