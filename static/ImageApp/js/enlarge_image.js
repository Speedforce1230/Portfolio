import {display_img} from "./display_enlarged_image.js"


fetch('home_img/')
    .then(Response => Response.json())
    .then(data => {
        data.images.forEach(image => {
            const image_button = document.getElementById(image.name);
            image_button.addEventListener("click", function(){
                display_img(image.name, image.file_extension, "/media/");
            });
        });
    })
    .catch(error => console.error(error));

