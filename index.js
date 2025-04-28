let btns = document.querySelectorAll(".btn")
let equals = document.querySelector("#equals")
let screen = document.querySelector("#screen")
let clear = document.querySelector("#clear")

btns.forEach(function(btns){
    btns.addEventListener("click", function(){
        console.log(btns.id);
        let inputs = [btns.id]   
        console.log(inputs)
        screen.textContent = btns.id
    })
})

equals.addEventListener("click", function(){
    console.log("answer")
    screen.textContent = "answer"
   
})

clear.addEventListener("click", function(){
screen.textContent = ""
console.log("screen cleared")
})