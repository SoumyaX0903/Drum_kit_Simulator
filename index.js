var x=document.querySelectorAll(".set button");
for(var i=0;i<x.length;i++)
{
    x[i].addEventListener("click",function(){
        var ob=this.innerHTML;
        soundeffect(ob);
        animate(ob);
    });
}
document.addEventListener("keypress",function(e)
{
    var ob=e.key;
    soundeffect(ob);
    animate(ob);
});
function soundeffect(ob)
{
    var au;
        switch(ob)
        {
            case "w":au=new Audio("sounds/crash.mp3");au.play();break;
            case "s":au=new Audio("sounds/kick-bass.mp3");au.play();break;
            case "a":au=new Audio("sounds/snare.mp3");au.play();break;
            case "d":au=new Audio("sounds/tom-1.mp3");au.play();break;
            case "j":au=new Audio("sounds/tom-2.mp3");au.play();break;
            case "k":au=new Audio("sounds/tom-3.mp3");au.play();break;
            case "l":au=new Audio("sounds/tom-4.mp3");au.play();break;
            default:console.log("wrong!");break;
        }
}
function animate(ob)
{
    var x=document.querySelector("."+ob);
    x.classList.add("pressed");
    setTimeout(() => {
        x.classList.remove("pressed");
    }, 80);
}