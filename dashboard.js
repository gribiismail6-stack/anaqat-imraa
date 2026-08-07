document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const title = card.querySelector("h3").innerText;

            switch(title){

                case "إدارة المنتجات":
                    alert("سيتم إنشاء صفحة إدارة المنتجات في الخطوة القادمة");
                    break;

                case "إدارة الطلبات":
                    alert("سيتم إنشاء صفحة إدارة الطلبات قريباً");
                    break;

                case "الإحصائيات":
                    alert("سيتم إنشاء صفحة الإحصائيات قريباً");
                    break;

                case "الإعدادات":
                    alert("سيتم إنشاء صفحة الإعدادات قريباً");
                    break;

            }

        });

    });

});