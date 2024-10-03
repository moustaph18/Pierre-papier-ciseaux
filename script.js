const AllBtn = document.querySelectorAll("button");
let resultat = document.querySelector("#resultat");
let user=document.querySelector("#choix-utilisateur");
let Ordi=document.querySelector("#choix-Ordi");
AllBtn.forEach(allbtn=>allbtn.addEventListener('click',(e)=>{
    resultat.innerText="";
   console.log(e.target.id);
   let choixUtil = e.target.id; 
   user.innerHTML=`<img src="${choixUtil}.jpg">`
   let choix = Math.floor(Math.random() * 3) + 1;
   console.log(choix);
   function choixMachine() {
        if (choix==1) {
            Ordi.innerHTML=`<img src="Pierre.jpg">`
            if (choixUtil ==="Pierre") {
                console.log("Egalite");
                resultat.innerText="Egalite!";
            }else if(choixUtil ==="Ciseau"){
                console.log("Perdu !");
                resultat.innerText="Perdu!";
            }else if(choixUtil ==="Papier"){
                console.log("Gagne !");
                resultat.innerText="Gagne!";
            }
        }else if (choix==2) {
        Ordi.innerHTML=`<img src="Papier.jpg">`
        if (choixUtil ==="Papier") {
            console.log("Egalite");
            resultat.innerText="Egalite !";
        }else if(choixUtil ==="Ciseau"){
            console.log("Gagne !");
            resultat.innerText="Gagne!";
        }else if(choixUtil ==="Pierre"){
            console.log("Perdu !");
            resultat.innerText="Perdu!";
        }
        }else if (choix==3) {
        Ordi.innerHTML=`<img src="Ciseau.jpg">`
        if (choixUtil ==="Ciseau") {
            console.log("Egalite !");
            resultat.innerText="Egalite!";
        }else if(choixUtil ==="Papier"){
            console.log("Perdu!");
            resultat.innerText="Perdu!";
        }else if(choixUtil ==="Pierre"){
            console.log("gagne !");
            resultat.innerText="Gagne!";
        }
        }
   }
   choixMachine();
}));
