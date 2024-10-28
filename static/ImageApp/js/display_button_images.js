import { onImageClick } from "./display_enlarged_image.js";


// Overwrites original page with new images. Adds event listeners for enlarging images.
export function send_image_to_webpage(url){
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const imageContainer = document.getElementById("main-container");
        imageContainer.innerHTML = "";
        let rowElement = "";
        for (var i = 0; i < data.length; i++){
            // To display only two images in one row.
            if (i % 2 == 0){
                rowElement = document.createElement("div");
                rowElement.classList.add("row");
                rowElement.classList.add("card-rows");
                imageContainer.appendChild(rowElement);
            }
            
            let image = data.images[i];
            const imgElement = document.createElement("img");
            imgElement.src = data.MEDIA_URL + image.name + "." + image.file_extension;
            imgElement.id = image.name;

            const columnElement = document.createElement("div");
            columnElement.classList.add("col");
            columnElement.classList.add("card-columns");
            columnElement.appendChild(imgElement);
            rowElement.appendChild(columnElement);

            imgElement.addEventListener("click", function(){
                onImageClick(image.name, image.file_extension, data.MEDIA_URL);
            })
        }
    })
    .catch(error => console.error(error))
}
