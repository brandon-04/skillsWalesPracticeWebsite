
let f4Images = document.querySelectorAll(".f4"),f3Images = document.querySelectorAll(".f3"),
f1Images = document.querySelectorAll(".f1"),driverImages = document.querySelectorAll(".driver");

let filterList = [f4Images, f3Images, f1Images, driverImages];

let f4Button = document.querySelector("#f4Button"), f3Button = document.querySelector("#f3Button"),
f1Button = document.querySelector("#f1Button"), driverButton = document.querySelector("#driverButton");

let allButton = document.querySelector("#all");

allButton.addEventListener("click", () => {
    for(let i = 0; i < driverImages.length; i++) {
        driverImages[i].classList.remove("hidden");
    }
    for(let i = 0; i < f1Images.length; i++) {
        f1Images[i].classList.remove("hidden");
    }
    for(let i = 0; i < f3Images.length; i++) {
        f3Images[i].classList.remove("hidden");
    }
    for(let i = 0; i < f4Images.length; i++) {
        f4Images[i].classList.remove("hidden");
    }
    
});

f4Button.addEventListener("click", () => {
    for(let i = 0; i < driverImages.length; i++) {
        let cur = driverImages[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f1Images.length; i++) {
        let cur = f1Images[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f3Images.length; i++) {
        let cur = f3Images[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f4Images.length; i++) {
        f4Images[i].classList.remove("hidden");
    }
    
});

f3Button.addEventListener("click", () => {
    for(let i = 0; i < driverImages.length; i++) {
        let cur = driverImages[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f1Images.length; i++) {
        let cur = f1Images[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f4Images.length; i++) {
        let cur = f4Images[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f3Images.length; i++) {
        f3Images[i].classList.remove("hidden");
    }
});

f1Button.addEventListener("click", () => {
    for(let i = 0; i < driverImages.length; i++) {
        let cur = driverImages[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f4Images.length; i++) {
        let cur = f4Images[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f3Images.length; i++) {
        let cur = f3Images[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f1Images.length; i++) {
        let cur = f1Images[i];
        cur.classList.remove("hidden");
    }
});

driverButton.addEventListener("click", () => {
    for(let i = 0; i < f4Images.length; i++) {
        let cur = f4Images[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f1Images.length; i++) {
        let cur = f1Images[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < f3Images.length; i++) {
        let cur = f3Images[i];
        if(cur.classList != "hidden") {
            cur.classList.add("hidden");
        }
    }
    for(let i = 0; i < driverImages.length; i++) {
        let cur = driverImages[i];
        cur.classList.remove("hidden");
    }
});
