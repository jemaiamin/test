let etudiants=[];
let btnValide;
let btndelete;
let btndetails;
function afficherTableau(){
    let tbody = document.querySelector("tbody");
    let newHTML = "";
    for(i=0;i<etudiants.length;i++)
    {
        newHTML += "<tr>";
        newHTML += "<td>"+etudiants[i].Nom+" "+etudiants[i].Prenom+"</td>";
        newHTML += "<td>"+etudiants[i].Email+"</td>";
        newHTML += "<td>"+etudiants[i].Moyenne+"</td>";
        newHTML += "<td><button type='button' onclick='details(`${i-1}`)'><img src='serch.png' width='30'/></button></td>";
        newHTML += "<td><button type='button' onclick='effacer(`${i-1}`)'><img src='delete.png' width='30'/></button></td>";
        newHTML += "</tr>";
    }
    tbody.innerHTML=newHTML;
}
function ajouterEtudiant(){
    //collecter les donnees du formulaire 
    const NomVal=document.getElementById("Nom").value;
    const PrenomVal=document.getElementById("Prenom").value;
    const emailVal=document.getElementById("email").value;
    const classeVal=document.getElementById("inputGroupSelect01").value;
    const note1Val=document.getElementById("note1").value;
    const note2Val=document.getElementById("note2").value;
    const note3Val=document.getElementById("note3").value;
    var Moyenne=(parseInt(note1Val)+parseInt(note2Val)+parseInt(note3Val))/3;
    //creer un nouvel objet livre
    const newetudiant = new etudiant (NomVal,PrenomVal,emailVal,classeVal,parseInt(Moyenne),note1Val,note2Val,note3Val);
    //ajouter les nouveau livre au tableau livre 
   etudiants.push(newetudiant);
    console.table(etudiants);
    //rafraichir l'affichage du tableau html
    afficherTableau();
    }
    function init(){
        btnValide=document.getElementById("Submit");
        btnValide.addEventListener("click",ajouterEtudiant);
        //btndetails=document.getElementById("ab");
        //btndetails.addEventListener("click", details(i));
    }
    function details(j) {
        alert(
            "Classe : " + etudiants[j].classe +
            ", Note 1 : " + etudiants[j].note1 +
            ", Note 2 : " + etudiants[j].note2 +
            ", Note 3 : " + etudiants[j].note3
        );
    }
    function effacer(j){
        etudiants.splice(j, 1);
        afficherTableau();
        console.log(j);
        console.table(etudiants);
    }
    function main(){
        init();
        afficherTableau();
        }
        window.addEventListener("load",main);//main est une fonction de callback
