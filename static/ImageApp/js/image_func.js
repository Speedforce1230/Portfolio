export function send_image_to_webpage(url){
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const linkElement = document.createElement("link");
        linkElement.href = href;
        linkElement.rel = "stylesheet";
        linkElement.type = "text\css";
        const imageContainer = document.getElementById("image-container");
        imageContainer.innerHTML = ""; 
        let rowElement = document.createElement("div");
        rowElement.classList.add("row");
        rowElement.id = "dynamic-card-row"
        data.images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = data.MEDIA_URL + image.name + "." + image.file_extension;
            const cardElement = document.createElement("div");
            cardElement.id = "dynamic-cards";
            cardElement.classList.add("card");
            cardElement.appendChild(imgElement);
            const columnElement = document.createElement("div");
            columnElement.id = "dynamic-card-columns";
            columnElement.classList.add("col");
            columnElement.appendChild(cardElement);
            rowElement.appendChild(columnElement);
        });
        imageContainer.appendChild(rowElement);
    })
    .catch(error => console.error(error))
}