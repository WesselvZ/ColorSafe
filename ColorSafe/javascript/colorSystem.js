window: onload = function () {
    var showRed = document.getElementById("red");
    var showGreen = document.getElementById("green");
    var showBlue = document.getElementById("blue");
    var background = document.getElementById("body");
    var red = 255;
    var green = 255;
    var blue = 255;
    var b1 = document.getElementById("b4");
    var b2 = document.getElementById("b5");
    var b3 = document.getElementById("b6");
    var b4 = document.getElementById("b1");
    var b5 = document.getElementById("b2");
    var b6 = document.getElementById("b3");
    b1.onmousedown = function () {
        timeout = setInterval(function () {
            if (red >= 0 && red <= 254) {
                red += 1;
                colorSet();
                hexCode();
            }
        }, 60);
        return false;
    }
    b1.onmouseup = function () {
        clearInterval(timeout);
        return false;
    }
    b1.onmouseout = function () {
        clearInterval(timeout);
        return false;
    }
    b2.onmousedown = function () {
        timeout = setInterval(function () {
            if (green >= 0 && green <= 254) {
                green += 1;
                colorSet();
                hexCode();
            }
        }, 60);
        return false;
    }
    b2.onmouseup = function () {
        clearInterval(timeout);
        return false;
    }
    b2.onmouseout = function () {
        clearInterval(timeout);
        return false;
    }
    b3.onmousedown = function () {
        timeout = setInterval(function () {
            if (blue >= 0 && blue <= 254) {
                blue += 1;
                colorSet();
                hexCode();
            }
        }, 60);
        return false;
    }
    b3.onmouseup = function () {
        clearInterval(timeout);
        return false;
    }
    b3.onmouseout = function () {
        clearInterval(timeout);
        return false;
    }
    b4.onmousedown = function () {
        timeout = setInterval(function () {
            if (red >= 1 && red <= 255) {
                red -= 1;
                colorSet();
                hexCode();
            }
        }, 60);
        return false;
    }
    b4.onmouseup = function () {
        clearInterval(timeout);
        return false;
    }
    b4.onmouseout = function () {
        clearInterval(timeout);
        return false;
    }
    b5.onmousedown = function () {
        timeout = setInterval(function () {
            if (green >= 1 && green <= 255) {
                green -= 1;
                colorSet();
                hexCode();
            }
        }, 60);
        return false;
    }
    b5.onmouseup = function () {
        clearInterval(timeout);
        return false;
    }
    b5.onmouseout = function () {
        clearInterval(timeout);
        return false;
    }
    b6.onmousedown = function () {
        timeout = setInterval(function () {
            if (blue >= 1 && blue <= 255) {
                blue -= 1;
                colorSet();
                hexCode();
            }
        }, 60);
        return false;
    }
    b6.onmouseup = function () {
        clearInterval(timeout);
        return false;
    }
    b6.onmouseout = function () {
        clearInterval(timeout);
        return false;
    }
    var hexCode = function () {
        if (red <= 15) {
            var redHex = 0 + R.toString(16);
        } else {
            var redHex = R.toString(16);
        }
        if (green <= 15) {
            var greenHex = 0 + G.toString(16);
        } else {
            var greenHex = G.toString(16);
        }
        if (blue <= 15) {
            var blueHex = 0 + B.toString(16);
        } else {
            var blueHex = B.toString(16);
        }
        bHex.innerHTML = "<p>#" + RHex + GHex + BHex + "</p>";
    }
    var colorSet = function () {
        showRed.innerHTML = "<p>Red = " + red + "</p>"
        showGreen.innerHTML = "<p>Green = " + green + "</p>"
        showBlue.innerHTML = "<p>Blue = " + blue + "</p>"
        background.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    }
}