const swapImage = (image) => {
    let mainImage = document.getElementById("mainImage");

    let tempSrc = mainImage.getAttribute("src");
    mainImage.setAttribute("src", image.getAttribute("src"));
    image.setAttribute("src", tempSrc);
};
