var ball = document.querySelector("#ball");
var topRod = document.getElementById("topRod");
var bottomRod = document.getElementById("bottomRod");
var topBorder = topRod.getBoundingClientRect().bottom - 1;
var bottomBorder = bottomRod.getBoundingClientRect().top - 24
console.log(topBorder, bottomBorder);
var verticalSpeed = 2;
var horizontalSpeed = 2;
var currentScore = 0;
var currentHighest = localStorage.getItem("high-score");
var move = function () {
    var currentTop = ball.getBoundingClientRect().top;
    var currentLeft = ball.getBoundingClientRect().left;

    if (currentTop <= topBorder || currentTop > bottomBorder) {
        var rodLeft = topRod.getBoundingClientRect().left;
        var rodRight = rodLeft + 200;
        var ballLeft = ball.getBoundingClientRect().left;
        currentScore++;
        if (ballLeft + 24 < rodLeft || (ballLeft) > rodRight) {
            clearInterval(stop);
            window.alert("your score is " + currentScore);
            if (currentScore > currentHighest) {
                localStorage.setItem("high-score", currentScore);
            }
        }
        verticalSpeed *= -1;
    }

    if (currentLeft + 24 >= visualViewport.width  || currentLeft <= 0) {
        horizontalSpeed *= - 1;
    }
    currentTop += verticalSpeed;
    currentLeft += horizontalSpeed;
    
    // console.log(currentPos);
    ball.style.top = currentTop + "px";
    ball.style.left = currentLeft + "px";
    // console.log(ball.style.top);
}

document.addEventListener('keydown', function (event) {
    console.log("key pressed!")
    if (event.code === 'ArrowLeft') {
        console.log("arrow left pressed!")
        if (topRod.getBoundingClientRect().left >= 0) {
            topRod.style.left = (topRod.getBoundingClientRect().left - 35) + "px";
            bottomRod.style.left = (bottomRod.getBoundingClientRect().left - 35) + "px";

        }
    }
    else if (event.code === 'ArrowRight') {
        console.log("arrow right pressed!")

        if (topRod.getBoundingClientRect().right <= visualViewport.width) {
            topRod.style.left  = (topRod.getBoundingClientRect().left + 35) + "px";
            bottomRod.style.left  = (bottomRod.getBoundingClientRect().left + 35) + "px";

        }
    }
});



window.alert("current highest score is " + currentHighest);
var stop = setInterval(move, 10);

