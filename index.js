function Vendeur(nom, categorie, email, tel)
{
    this.nom = nom;
    this.categorie = categorie;
    this.email = email;
    this.tel = tel;
}



function ajouterVendeur()
{
    var nom = document.getElementById('nom').value;
    var categorie = document.getElementById('categorie').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;

    var regexString = /[a-zA-Z0-9]/;
    var regexEmail = /[a-zA-Z@]/;
    var regexTel = /[0-9]/;

    if(regexString.test(nom) && nom.match(/\S/))
    {
        sessionStorage.setItem('nom', nom);
        sessionStorage.setItem('categorie', categorie);
        
        alert("Ok");
    }else{
        alert ("Le champs est vide ou ne respecte pas les conditions demandées.");
    }

    if(regexEmail.test(email) && email.match(/\S/))
    {
        sessionStorage.setItem('email', email);
    }else{
        alert ("Le champs du mail est vide ou ne respecte pas les conditions demandées.");
    }

    if(regexTel.test(tel) && tel.match(/\S/))
    {
        sessionStorage.setItem('tel', tel);
    }else{
        alert ("Le champs du téléphone est vide ou ne respecte pas les conditions demandées.");
    }
}














