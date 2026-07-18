// เปิดรูป
function openImage(src) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-img").src = src;

}


// ปิดรูป
function closeImage() {

    document.getElementById("popup").style.display = "none";

}


// กด ESC เพื่อปิดรูป

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeImage();

    }

});


// กดพื้นหลังสีดำเพื่อปิดรูป

document.getElementById("popup").addEventListener("click", function(e){

    if(e.target.id === "popup"){

        closeImage();

    }

});
