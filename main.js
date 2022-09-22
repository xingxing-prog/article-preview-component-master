const share = document.querySelector(".share");
const popup = document.querySelector(".popup");
const icon = document.getElementById("icon-share");

share.addEventListener('click',()=>{

    popup.style.visibility = "visible";
    share.style.backgroundColor= "hsl(217, 19%, 35%)";
    icon.style.fill = "white";
    icon.classList.add("inside");
  
})