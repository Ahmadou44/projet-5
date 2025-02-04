var produit = document.getElementsByClassName("box")
for (let i = 0; i < produit.length; i++) {
    let bntPlus = produit[i].children[4].children[2]
    let nombre = produit[i].children[4].children[1]
    let total = produit[i].children[3].children[1]
    let prixUnitaire = produit[i].children[2].children[1]
    let bntmoins = produit[i].children[4].children[0]
    let prixU = parseInt(prixUnitaire.innerText)
    let qty = parseInt(nombre.innerText)
    let bntlick = produit[i].children[5].children[0].children[0]
    let deletebnt = produit[i].children[5].children[1].children[0]
    bntPlus.addEventListener("click", function () {
        qty++
        nombre.innerText = qty
        total.innerText = prixU * qty
        somme ()
    })
    bntmoins.addEventListener("click", function () {
        qty--
        nombre.innerText = qty
        total.innerText = prixU * qty
        somme ()
    })
    bntlick.addEventListener("click", function () {
        if (bntlick.style.color === 'red') {
            bntlick.style.color = "black"
        } else {
            bntlick.style.color = "red"
        }
    })
    let box=produit[i]
    if(box){
        deletebnt.addEventListener("click",function(){
            box.remove()
        })
    }
}
let tot=document.getElementById("tyu")

function somme (){
    let sum=0
    let price=document.getElementsByClassName("price")
    for(let i=0;i<price.length;i++){
        let toto=parseInt(price[i].innerText)
        sum=sum+toto
    }
    tot.innerHTML=sum
}