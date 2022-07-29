function Vendeur(nom, categorie, email, numeroTel)
{
    this.nom = nom;
    this.categorie = categorie;
    this.email = email;
    this.numeroTel = numeroTel;
}



function ajouterVendeur()
{
    var nom = document.getElementById('nom').value;
    var categorie = document.getElementById('categorie').value;
    var email = document.getElementById('email').value;
    var numeroTel = document.getElementById('numeroTel').value;

    var regex = /[a-zA-Z0-9_@\.\-]/;

    if(regex.test(nom) && !nom.match(/\S/))
    {
        sessionStorage.setItem('nom', nom);
    }else{
        alert ("Le champs est vide ou ne respecte pas les conditions demandées.")
    }

    if(regex.test(categorie) && !categorie.match(/\S/))
    {
        sessionStorage.setItem('categorie', categorie);
    }else{
        alert ("Le champs est vide ou ne respecte pas les conditions demandées.")
    }

    if(regex.test(email) && !email.match(/\S/))
    {
        sessionStorage.setItem('email', email);
    }else{
        alert ("Le champs est vide ou ne respecte pas les conditions demandées.")
    }

    if(numeroTel.match(/[0-9]/) && !numeroTel.match(/\S/))
    {
        sessionStorage.setItem('numeroTel', numeroTel);
    }else{
        alert ("Le champs est vide ou ne respecte pas les conditions demandées.")
    }
  
}

ajouterVendeur();












