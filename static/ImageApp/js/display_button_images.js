import { onImageClick } from "./display_enlarged_image.js";


// Overwrites original page with new images. Adds event listeners for enlarging images.
export function send_image_to_webpage(url){
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const imageContainer = document.getElementById("image-container");
        imageContainer.innerHTML = ""; 
        const rowElement = document.createElement("div");
        rowElement.classList.add("row");
        rowElement.id = "dynamic-card-row";
        

        data.images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = data.MEDIA_URL + image.name + "." + image.file_extension;
            imgElement.id = image.name;


            const columnElement = document.createElement("div");
            columnElement.id = "dynamic-card-columns";
            columnElement.classList.add("col");
            columnElement.appendChild(imgElement);


            rowElement.appendChild(columnElement);
            
            imgElement.addEventListener("click", function(){
                onImageClick(image.name, image.file_extension, data.MEDIA_URL);
            })
        });
        imageContainer.appendChild(rowElement);
    })
    .catch(error => console.error(error))
}
