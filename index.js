//console.dir(document)<-vypíše do konzole dokument//
console.dir(document)

const nadpisJedna=document.getElementById("nadpis1") //vybere podle id//
console.log(nadpisJedna)
nadpisJedna.style.backgroundColor="#AA63CD"

const ostatniNadpis=document.getElementsByClassName("nadpisy") //vybere podle clasy//
console.log(ostatniNadpis)
for(var i=0;i<ostatniNadpis.length;i++){
    ostatniNadpis[i].style.color="blue"
}

const byTagName=document.getElementsByTagName("h1") //vybere podle určitého tagu//
console.log(byTagName)

const selektor=document.querySelector(".nadpisy")  //spojení všech ostatních a vybírá první na řadě//
console.log(selektor)

const selektorAll=document.querySelectorAll(".nadpisy") //spojení všech ostatních a vybírá všechny elementy se stejou classou/id//
console.log(selektorAll)
