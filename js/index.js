

function ControlPanel(){

    var myDiv = document.getElementById("smile")

    var lang = document.getElementById("lang").value
    var hgt = document.getElementById("hgt").value
    var abg = document.getElementById("abg").value
    var brrd = document.getElementById("brrd").value
    

    myDiv.style.width = lang
    myDiv.style.height = hgt
    myDiv.style.background = abg
    myDiv.style.borderRadius = brrd

    // console.log(lang)
    // console.log(hgt)
    // console.log(abg)
    // console.log(brrd)

}