window.addEventListener("keydown", function (e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;//stop the function from running all together
    audio.currentTime=0;//rewind to the start
    audio.play()
    key.classList.add("playing")


    const keys=this.document.querySelectorAll(".key")
    keys.forEach(key=> key.addEventListener("transitionend", removeTransition));

    function removeTransition(e){
        if (e.propertyName !== "transform") return;// skip if itsn't a transform
        this.classList.remove("playing")
    }

   
})