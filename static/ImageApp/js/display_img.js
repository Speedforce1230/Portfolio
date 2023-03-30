import {send_image_to_webpage} from "./image_func.js"

const fashionButton = document.getElementById("fashion-button");
const streetButton = document.getElementById("street-button");
const weddingButton = document.getElementById("wedding-button");






fashionButton.addEventListener("click", function(){
    send_image_to_webpage("/fashion_img/")
});

streetButton.addEventListener("click", function(){
    send_image_to_webpage("/street_img/")
});

weddingButton.addEventListener("click", function(){
    send_image_to_webpage("/wedding_img/")
});
