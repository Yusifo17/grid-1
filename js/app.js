
const barsMenu = document.querySelector(".bars .fa-bars");
const barsMobil = document.querySelector(".bars-off");
const barsClose = document.querySelector(".clous");
const bodyColor = document.querySelector("body");
const bodyColor1 = document.querySelector("body");
const butto = document.querySelector(".akardion-button-1");
const button = document.querySelector(".mybutton1")
const butto1 = document.querySelector(".akardion-button-2");
const button1 = document.querySelector(".mybutton2")
const butto2 = document.querySelector(".akardion-button-3");
const button2 = document.querySelector(".mybutton3")
const butto3 = document.querySelector(".akardion-button-4");
const button3 = document.querySelector(".mybutton4")



///MOB MENU
barsMenu.addEventListener("click", () => {
    barsMobil.classList.add("active-menu");
    // bodyColor.style.background = "rgba(30,40,69,0.8)";
    bodyColor1.style.position = "fixed";
});
barsClose.addEventListener("click" , () => {
    barsMobil.classList.remove("active-menu")
    bodyColor.style.background = "none";
    bodyColor1.style.position = "relative";

})
////MOB MENU
/////ACARDION
$('.home').click(function(){
    $('ul').stop().slideUp(500);
    $(this).next().stop().slideToggle(1000)
})
////ACARDION

////////BUTON

butto.addEventListener("click", () => {
    button.classList.toggle("active-btn");})

    butto1.addEventListener("click", () => {
        button1.classList.toggle("active-btn");})

        butto2.addEventListener("click", () => {
            button2.classList.toggle("active-btn");})

            butto3.addEventListener("click", () => {
                button3.classList.toggle("active-btn");})
                //////BUTON



                const c1 = document.querySelector(".v-1");
                const c2 = document.querySelector(".v-2");
                const c3 = document.querySelector(".v-3");
                const c4 = document.querySelector(".v-4");
                const c5 = document.querySelector(".v-5");
                const c6 = document.querySelector(".v-6");
                const c7 = document.querySelector(".v-7");
                const c8 = document.querySelector(".v-8");
////////////////////////////////////////////////////////////////////////////
                const ad1 = document.querySelector(".all");
                const ad2= document.querySelector(".business");
                const ad3= document.querySelector(".finance");
                const ad4= document.querySelector(".lifestyle");
                const ad5= document.querySelector(".technology"); 
                ////////////////////////////////////////////

                ad1.addEventListener("click" , () => {
                    c1.style.display= "block";
                    c2.style.display= "block";
                    c3.style.display= "block";
                    c4.style.display= "block";
                    c5.style.display= "block";
                    c6.style.display= "block";  
                    c7.style.display= "block";
                    c8.style.display= "block";
                 
                
                })

                ad2.addEventListener("click", () => {
                    c1.style.display= "none";
                    c2.style.display= "block";
                    c3.style.display= "none";
                    c4.style.display= "none";
                    c5.style.display= "none";
                    c6.style.display= "block"; 
                    c7.style.display= "none";
                    c8.style.display= "none";
                });
               
                ad3.addEventListener("click", () => {
                    c1.style.display= "none";
                    c2.style.display= "none";
                    c3.style.display= "block";
                    c4.style.display= "none";
                    c5.style.display= "block";
                    c6.style.display= "block";  
                    c7.style.display= "block";
                    c8.style.display= "none";
                
                });
                ad4.addEventListener("click", () => {
                    c1.style.display= "none";
                    c2.style.display= "block";
                    c3.style.display= "block";
                    c4.style.display= "block";
                    c5.style.display= "block";
                    c6.style.display= "block";  
                    c7.style.display= "block";
                    c8.style.display= "none";
                });
                ad5.addEventListener("click", () => {
                    c1.style.display= "block";
                    c2.style.display= "block";
                    c3.style.display= "block";
                    c4.style.display= "block";
                    c5.style.display= "none";
                    c6.style.display= "block";  
                    c7.style.display= "block";
                    c8.style.display= "block";
                    
                    
                });