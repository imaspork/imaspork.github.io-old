var island_names = ['Teyamal','Rameda','Theonil','Modric','Ginburrey','Randis','Serca','Baeza','Daton','Netnume','Oben','Dunde','Eberdeen','Albresser','Barater','Teste','Almai','Kuit','Padix','Arita','Lisz','Louruve','Staren','Marka','Narvo','Angie','Invernen','Balvege','Duch','Eveto','Mariveno','Tulu','Orffs','Luivano','Lema','Ephde Rune','Paratama','Weita','Baremi','Al-Naha','Ajir','Racid','Kanvera','Arakil','Beiruwa','Taramura','Ostra','Iliya','Tinberra','Lerao','Portanen','Shasha','Rosevan','Pujara','Delinghart','Pilava','Sokota','Riyed','Tigris','Esfah','Orisha','Boa','Shirna','Halmad','Kashuma']

var shiproute = []
var islandCountMaroon = 0;
var islandCountWheat = 0;
var islandCountGreen = 0;
var islandCountDarkTurquoise = 0;
var islandCountDarkOrchid = 0;
var islandCountDarkOliveGreen = 0;
var islandCountDarkOrange = 0;
var islandCountHotPink = 0;
var islandCountDarkMagenta = 0;


document.querySelector('.island').addEventListener("click", function(e) {
    document.querySelector('#Island-Teyamal').style.color = "Maroon";
})

document.querySelector('#pick-Maroon').addEventListener("click", function(e) {

    window.colorValue = "Maroon";

    console.log(colorValue)
})

document.querySelector('#pick-Diarrhea').addEventListener("click", function(e) {

    window.colorValue = "Wheat";

    console.log(colorValue)
})

document.querySelector('#pick-green').addEventListener("click", function(e) {

    window.colorValue = "green";
    

    console.log(colorValue)
})

document.querySelector('#pick-DarkTurquoise').addEventListener("click", function(e) {

    window.colorValue = "DarkTurquoise";
    

    console.log(colorValue)
})

document.querySelector('#pick-DarkOrchid').addEventListener("click", function(e) {

    window.colorValue = "DarkOrchid";
    

    console.log(colorValue)
})

document.querySelector('#pick-DarkOliveGreen').addEventListener("click", function(e) {

    window.colorValue = "DarkOliveGreen";
    

    console.log(colorValue)
})

document.querySelector('#pick-DarkOrange').addEventListener("click", function(e) {

    window.colorValue = "DarkOrange";
    

    console.log(colorValue)
})

document.querySelector('#pick-HotPink').addEventListener("click", function(e) {

    window.colorValue = "HotPink";
    

    console.log(colorValue)
})

document.querySelector('#pick-clear').addEventListener("click", function(e) {

    window.location.reload();
})

document.querySelector('#pick-tier5').addEventListener("click", function(e) {

    window.colorValue = "DarkMagenta";
    

    console.log(colorValue)
})

document.querySelector('#pick-eraser').addEventListener("click", function(e) {

    window.colorValue = "Eraser";
    

    console.log(colorValue)
})

window.addEventListener('click', function(event) {
    
    const target = event.target;
    if(target.tagName !== 'DIV') {
        return; // not a <div>, stop the function
    } else if (window.colorValue == "green") {


        window.islandCountGreen = islandCountGreen + 1;
        const color = target.style.color;
        target.style.color = colorValue;
    
        document.getElementById(target.id).textContent = `[${islandCountGreen}]` + target.textContent;
    
    } else if (window.colorValue == "Wheat") {
        window.islandCountWheat = islandCountWheat + 1;
        const color = target.style.color;
        target.style.color = colorValue;
        document.getElementById(target.id).textContent = `[${islandCountWheat}]` + target.textContent;

    } else if (window.colorValue == "Maroon") {
        window.islandCountMaroon = islandCountMaroon + 1;
        const color = target.style.color;
        target.style.color = colorValue;
        document.getElementById(target.id).textContent = `[${islandCountMaroon}]` + target.textContent;

    } else if (window.colorValue == "DarkMagenta") {
        window.islandCountDarkMagenta = islandCountDarkMagenta + 1;
        const color = target.style.color;
        target.style.color = colorValue;
        document.getElementById(target.id).textContent = `[${islandCountDarkMagenta}]` + target.textContent;

    } else if (window.colorValue == "DarkTurquoise") {
        window.islandCountDarkTurquoise = islandCountDarkTurquoise + 1;
        const color = target.style.color;
        target.style.color = colorValue;
        document.getElementById(target.id).textContent = `[${islandCountDarkTurquoise}]` + target.textContent;

    } else if (window.colorValue == "DarkOrchid") {
        window.islandCountDarkOrchid = islandCountDarkOrchid + 1;
        const color = target.style.color;
        target.style.color = colorValue;
        document.getElementById(target.id).textContent = `[${islandCountDarkOrchid}]` + target.textContent;

    } else if (window.colorValue == "DarkOliveGreen") {
        window.islandCountDarkOliveGreen = islandCountDarkOliveGreen + 1;
        const color = target.style.color;
        target.style.color = colorValue;
        document.getElementById(target.id).textContent = `[${islandCountDarkOliveGreen}]` + target.textContent;

    } else if (window.colorValue == "DarkOrange") {
        window.islandCountDarkOrange = islandCountDarkOrange + 1;
        const color = target.style.color;
        target.style.color = colorValue;
        document.getElementById(target.id).textContent = `[${islandCountDarkOrange}]` + target.textContent;

    } else if (window.colorValue == "HotPink") {
        window.islandCountHotPink = islandCountHotPink + 1;
        const color = target.style.color;
        target.style.color = colorValue;
        document.getElementById(target.id).textContent = `[${islandCountHotPink}]` + target.textContent;
    } else if (window.colorValue == "Eraser") {

        const color = target.style.color;
        target.style.color = "White";
        document.getElementById(target.id).textContent = target.textContent.slice(3);
    }
    
})