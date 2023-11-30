var textarea = document.querySelector('textarea')

function f0(e) {
    let size = e.value;
    textarea.style.fontSize = size + "px";
}

function f1(e) {
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontWeight = "bold";
        e.classList.add("active");

    }
}
function f2(e) {
    if (textarea.style.fontStyle == "italic") {
        textarea.style.fontStyle= "normal";
        e.classList.remove("active");
    }
    else {
        textarea.style.fontStyle= "italic";
        e.classList.add("active");

    }
}
function f3(e) {
    if (textarea.style.textDecoration== "underline") {
        textarea.style.textDecoration= "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textDecoration= "underline";
        e.classList.add("active");

    }
}


function f4(e) {
    textarea.style.textAlign = "left";
}
function f5(e) {
    textarea.style.textAlign = "center";
}
function f6(e) {
    textarea.style.textAlign = "right";
}
  


function f7(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform= "lowercase";
        e.classList.remove("active");
    }
    else {
        textarea.style.textTransform= "uppercase";
        e.classList.add("active");

    }
    }

function f8(e){
    textarea.style.fontWeight = "normal";
    textarea.style.fontStyle = "normal";
    textarea.style.textDecoration = "none";
    textarea.style.textAlign= "left";
    textarea.style.textTransform= "lowercase";
    // textarea.value = "";
}


function f9(e){
    textarea.style.color = e.value;
}