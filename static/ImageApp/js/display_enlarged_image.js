let isImageDisplayed = false;

export function onImageClick(name, extension, mediaURL, element){
    if (!isImageDisplayed) {
        const sent_img = document.getElementById(name);
        const posi = sent_img.getBoundingClientRect();
        const width = sent_img.clientWidth;
        display_enlarged_image(name, extension, mediaURL, [posi.left, posi.top, width]);
        isImageDisplayed = true;
    }
}

function display_enlarged_image(name, extension, mediaURL, array_){
    const clickedImageName = name;
    const clickedImageExtension = extension;
    const clickedImageMediaURL = mediaURL;
    const imageProperties = array_;
    const imgTopValue = imageProperties[1];
    const imgLeftValue = imageProperties[0];
    const imgWidth = imageProperties[2];


    const linkElement = document.createElement("link");
    linkElement.href = href;
    linkElement.rel = "stylesheet";
    linkElement.type = "text/css";
    document.head.appendChild(linkElement);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("container");
    imageContainer.id = "enlarged-image-container";
    
    imageContainer.style.setProperty("--start-top", `${imgTopValue}px`);
    imageContainer.style.setProperty("--start-left", `${imgLeftValue}px`);
    imageContainer.style.setProperty("--img-width", `${imgWidth}px`);

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