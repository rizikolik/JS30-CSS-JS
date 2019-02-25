const inputs =document.querySelectorAll(".controls input");
inputs.forEach(input=> input.addEventListener("change",eventhandler));

function eventhandler(){
    const suffix=this.dataset.sizing||"";
    console.log(this.name)
    document.documentElement.style.setProperty(`--${this.name}`,this.value +suffix);
}

