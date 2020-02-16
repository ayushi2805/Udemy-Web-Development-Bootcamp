window.onload = function(){
    var p1Button = document.getElementById("p1");
    var p2Button = document.getElementById("p2");
    var p1Display = document.getElementById("p1Display");
    var p2Display = document.getElementById("p2Display");
    var reset = document.getElementById("reset");
    var numInput = document.querySelector("input");
    var target = document.querySelector("p span");
    var p1Score = 0;
    var p2Score = 0;
    var gameOver = false;
    var winningScore = 5;

    p1Button.addEventListener("click", function(){
        if(!gameOver){
            p1Score++;
            if(p1Score === winningScore){
                p1Display.classList.add("a");
                gameOver = true;
            }
            p1Display.textContent = p1Score;
        }
    })

    p2Button.addEventListener("click", function(){
        if(!gameOver){
            p2Score++;
            if(p2Score === winningScore){
                p2Display.classList.add("a");
                gameOver = true;
            }
            p2Display.textContent = p2Score;
        }
    })

    reset.addEventListener("click", function(){
        p1Score = 0;
        p1Display.textContent = 0;
        p2Score = 0;
        p2Display.textContent = 0;
        gameOver = false;
        p1Display.classList.remove("a");
        p2Display.classList.remove("a");
    })

    numInput.addEventListener("change", function(){
        target.textContent = Number(numInput.value);
        winningScore = Number(numInput.value);
    })

}