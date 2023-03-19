function saklarRK() {
    
    let toggle1 = document.getElementById("toggle-1");
    let toggle2 = document.getElementById("toggle-2");
    let toggle3 = document.getElementById("toggle-3");
    let toggle4 = document.getElementById("toggle-4");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");

    if (toggle1.checked) {
        lampu1.src = "/images/on.gif"
    } else {
        lampu1.src = "/images/off.gif"
    }

    if (toggle2.checked) {
        lampu2.src = "/images/on.gif"
    } else {
        lampu2.src = "/images/off.gif"
    }

    if (toggle3.checked) {
        lampu3.src = "/images/on.gif"
    } else {
        lampu3.src = "/images/off.gif"
    }

    if (toggle4.checked) {
        lampu4.src = "/images/on.gif"
    } else {
        lampu4.src = "/images/off.gif"
    }
}