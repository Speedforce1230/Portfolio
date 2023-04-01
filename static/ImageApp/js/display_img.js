import {send_image_to_webpage} from "./image_func.js"

const fashionButton = document.getElementById("fashion-button");
const productButton = document.getElementById("product-button");
const weddingButton = document.getElementById("wedding-button");






fashionButton.addEventListener("click", function(){
    send_image_to_webpage("/fashion_img/")
});

productButton.addEventListener("click", function(){
    send_image_to_webpage("/product_img/")
});

weddingButton.addEventListener("click", function(){
    send_image_to_webpage("/wedding_img/")
});
