var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//forEach()
villes.forEach(function(element){
    console.log(element);
    });

//every()
var contientA = function(element, index, array) {
    return element.indexOf('a') >= 0;
}
var lettreADansToutesLesVilles = villes.every(contientA);
console.log("lettreADansToutesLesVilles = " + lettreADansToutesLesVilles)

//some()
var contientTiret = function(element, index, array) {
    return element.indexOf('-') > 0;
}
var auMoinsUneVilleAvecUnTiret = villes.some(contientTiret);
console.log("auMoinsUneVilleAvecUnTiret = " + auMoinsUneVilleAvecUnTiret);

//filter()
var sansTiretSansEspace = function(element, index, array) {
    return element.indexOf('-') == -1 && element.indexOf(' ') == -1;
}
var villesSansTiretSansEspace = villes.filter(sansTiretSansEspace);
villesSansTiretSansEspace.forEach(function(element){
    console.log(element);
    });

//Chainer les Fonctions
var terminantParS = function(element, index, array){
    return element.charAt(element.length -1) == 's';
}
var villeTerminantParS = new Array();

villeTerminantParS = villes.filter(terminantParS);

var villesMajusculeSeTerminantParS = new Array(); 

villeTerminantParS.forEach(function(element){
    villesMajusculeSeTerminantParS.push(element.toUpperCase());
        });

villesMajusculeSeTerminantParS.forEach(function(element){
    console.log(element);
})