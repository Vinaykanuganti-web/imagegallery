const search = document.querySelector(".search-box input")
      images = document.querySelector(".search-box input")
search.addEventListener("keyup", e=>{
    if(e.key == "Enter"){
        let searchvalue = search.value,
            value = searchvalue.toLowerCase();
            images.forEach(image =>{
                if(value === image.dataset.name){
                    return image.style.display = "block";
                }
            })
            console.log(value);

    }
})