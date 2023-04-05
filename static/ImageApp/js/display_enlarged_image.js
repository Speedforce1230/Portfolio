export function display_img(name, extension, url){
    const image_name = name;
    const image_extension = extension;
    const mediaURL = url;


    const linkElement = document.createElement("link");
    linkElement.href = "E:/Portfolio/static/ImageApp/css/styles.css";
    linkElement.rel = "stylesheet";
    linkElement.type = "text\css";
    document.head.appendChild(linkElement);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("container");
    imageContainer.id = "enlarged-image-container";


    const mainContainer = document.getElementById("image-container");

    
    const imageElement = document.createElement("img");
    imageElement.src = mediaURL + image_name + "." + image_extension;
    imageElement.id = "enlarged-img";


    imageContainer.appendChild(imageElement);
    document.body.appendChild(imageContainer);
    mainContainer.classList.add("blur");
    
    imageContainer.addEventListener("click", function(){
        if (imageContainer){
            imageContainer.remove();
            mainContainer.classList.remove("blur");
        }
    })
    

}
