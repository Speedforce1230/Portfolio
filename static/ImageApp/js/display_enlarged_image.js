let isImageDisplayed = false;

export function onImageClick(name, extension, mediaURL){
    if (!isImageDisplayed) {
        const focused_img = document.getElementById(name);
        const posi = focused_img.getBoundingClientRect();
        display_enlarged_image(name, extension, mediaURL, [posi.left, posi.top,posi.bottom,posi.right, posi.width]);
        isImageDisplayed = true;
    }
}

function display_enlarged_image(name, extension, mediaURL, array_){
    const clickedImageName = name;
    const clickedImageExtension = extension;
    const clickedImageMediaURL = mediaURL;
    const imageProperties = array_;
    const imgLeftValue = imageProperties[0];
    const imgTopValue = imageProperties[1];
    const imgWidth = imageProperties[4];
    
    const linkElement = document.createElement("link");
    linkElement.href = href;
    linkElement.rel = "stylesheet";
    linkElement.type = "text/css";
    document.head.appendChild(linkElement);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("container");
    imageContainer.id = "enlarged-img-container";
    imageContainer.style.setProperty("--start-top", `${imgTopValue}px`);
    imageContainer.style.setProperty("--start-left", `${imgLeftValue}px`);
    imageContainer.style.setProperty("--img-width", `${imgWidth}px`);
    imageContainer.style.setProperty("--window-width",``)
    const mainContainer = document.getElementById("main-container");
    const navContainer = document.getElementById("navbar");
    
    const imageElement = document.createElement("img");
    imageElement.src = clickedImageMediaURL + clickedImageName + "." + clickedImageExtension;
    

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
};