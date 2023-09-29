const len = document.querySelectorAll(".drum").length

for(i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click" , function()
    {
        const button = this.innerHTML;
        makeSound(button);
        addAnimation(button);
    })
}
document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    addAnimation(event.key);
})
function makeSound(button)
{
    switch(button)
    {
        case 'w' || 'w' : 
            const tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case 'a' || 'A' : 
            const tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case 's' || 'S' : 
            const tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case 'd' || 'D' : 
            const tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case 'j' || 'J' : 
            const snare = new Audio("snare.mp3");
            snare.play();
            break;
        case 'k' || 'K' : 
            const kick = new Audio("crash.mp3");
            kick.play();
            break;
        case 'l' || 'L' : 
            const kick_bass = new Audio("kick-bass.mp3");
            kick_bass.play();
            break;
        default : breaak;
    }
}

function addAnimation(key)
{
    const activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
