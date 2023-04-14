import { send_image_to_webpage } from "./display_button_images.js"
import { onImageClick } from "./display_enlarged_image.js";
const fashionButton = document.getElementById("fashion-button");
const productButton = document.getElementById("product-button");
const homeButton = document.getElementById("home-button");

fetch("home_img/")
    .then(Response => Response.json())
    .then(data => {
        data.images.forEach(image =>{
            const imgElement = document.getElementById(image.name);
            imgElement.addEventListener("click", function(){
                onImageClick(image.name, image.file_extension, data.MEDIA_URL);
            })
        })
    })
homeButton.addEventListener("click", function(){
    send_image_to_webpage("home_img/");
})


fashionButton.addEventListener("click", function(){
    send_image_to_webpage("fashion_img/");
})

productButton.addEventListener("click", function(){
    send_image_to_webpage("product_img/");
})


