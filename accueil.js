let afficherVendeur = () => {

    const nom = document.getElementById('nom');
    const categorie = document.getElementById('categorie');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');

    const storageNom = sessionStorage.getItem('nom'); 
    const storageCategorie = sessionStorage.getItem('categorie'); 
    const storageEmail = sessionStorage.getItem('email'); 
    const storageTel = sessionStorage.getItem('tel'); 
    

    nom.innerHTML = storageNom;
    categorie.innerHTML = storageCategorie;
    email.innerHTML = storageEmail;
    tel.innerHTML = storageTel;
}

afficherVendeur();


function Bien(nom, description, prix, image){
    this.nom = nom;
    this.description = description;
    this.prix = prix;
    this.image = image;
}

let Bien1 = new Bien('Hache d\'arme anti weeb', 'Une arme VERSATILE pour exterminer les weebs quelque soit la situation.', '50000 acier', 'https://pm1.narvii.com/6513/d1a9e083b284f0ec25ffc3f78da5c9058455442e_hq.jpg');

let Bien2 = new Bien('Casse Tête', 'BONK!', '200 QI', "https://darksouls3-fr.wiki.fextralife.com/file/Dark-Souls-3/large_club.png");

let afficherBien = () => {
    const nom = document.getElementById('produit');
    const description = document.getElementById('description');
    const prix = document.getElementById('prix');
    const image = document.getElementById('img');

    nom.innerHTML = Bien1.nom;
    description.innerHTML = Bien1.description;
    prix.innerHTML = Bien1.prix;
    image.src = Bien1.image;
}

afficherBien();