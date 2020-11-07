function fn1() {
    document.getElementById("search-input1").value += "jhdfjkhfkjds"
    console.log("fdsfs")
}

document.getElementById("search-input1").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        alert("No sé qué hacer, aún no he desarrollado esta función D: umu Pero puedo mostrarte el texto que ingresaste uwu: \n" + document.getElementById("search-input1").value)
    }
});