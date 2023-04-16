let isImageDisplayed = false;

export function onImageClick(name, extension, mediaURL){
    if (!isImageDisplayed) {
        display_enlarged_image(name, extension, mediaURL);
        isImageDisplayed = true;
    }
}

function display_enlarged_image(name, extension, mediaURL){
    const clickedImageName = name;
    const clickedImageExtension = extension;
    const clickedImageMediaURL = mediaURL;

    const linkElement = document.createElement("link");
    linkElement.href = href;
    linkElement.rel = "stylesheet";
    linkElement.type = "text/css";
    document.head.appendChild(linkElement);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("container");
    imageContainer.id = "enlarged-image-container";


    const mainContainer = document.getElementById("image-container");
    const navContainer = document.getElementById("navbar");
    
    const imageElement = document.createElement("img");
    imageElement.src = clickedImageMediaURL + clickedImageName + "." + clickedImageExtension;
    imageElement.id = "enlarged-img";
    
    imageContainer.appendChild(imageElement);
    document.body.appendChild(imageContainer);
    mainContainer.classList.add("blur");
    navContainer.classList.add("blur");
    

    imageContainer.addEventListener("click", function(){
        if (imageContainer){
            imageContainer.remove();
            mainContainer.classList.remove("blur");
            navContainer.classList.remove("blur");
            isImageDisplayed = false;
        }
    });
}