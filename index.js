var icon = document.getElementById("icon")
var sidenav = document.getElementById("sidenav")
var x = document.getElementById("x")

icon.addEventListener("click",function(){
         sidenav.style.right=0
})

x.addEventListener("click",function(){
    sidenav.style.right="-50%"
})