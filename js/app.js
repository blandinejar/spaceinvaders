//  Créer des élements pour grille 8X8 AVEC boucle + ajout DOM


var pxsize=0;
function drawgrid(gridsize, pxsize) {

    for (index = 0; index < gridsize; index++) {
        var pixelLigneElem = document.createElement('div');
        pixelLigneElem.className = 'pixelligneclass';
        console.log(pxsize);
        // pixelLigneElem.style.height = `${pxsize} px`;
        // pixelLigneElem.style.width = `${pxsize} px`;
        // console.log(pixelLigneElem);

        var divPixel = document.querySelector('.container');
        divPixel.appendChild(pixelLigneElem);
        console.log(divPixel);


        for (i = 0; i < gridsize; i++) {
            var pixelColonneElem = document.createElement('div');
            pixelColonneElem.className = 'pixelcolonneclass';
            var test = document.getElementsByClassName('pixelcolonneclass');
            pixelColonneElem.style.height = pxsize + 'px';
            pixelColonneElem.style.width = pxsize + 'px';

            pixelColonneElem.classList.add('greypixel');

            pixelColonneElem.addEventListener('click', function (event) {
                // event.target.style.backgroundColor = 'pink';
                if (event.target.classList.contains('greypixel')) {
                    event.target.classList.remove('greypixel');
                    event.target.classList.add('pinkpixel');
                } else {
                    event.target.classList.remove('pinkpixel');
                    event.target.classList.add('greypixel');
                }
            });

            pixelLigneElem.appendChild(pixelColonneElem);
            // console.log(divPixel);

        }

    }

}



// drawgrid(8);


// POINT3
var myForm = document.querySelector('.configuration');
var myInput = document.createElement('input');
myInput.className = 'input'
myInput.type = 'number';
myInput.placeholder = 'Taille de la grille';
myInput.min = '0';
myInput.max = '30';
myForm.appendChild(myInput);

var pixelSize = document.createElement('input');
pixelSize.className = 'input';
pixelSize.type = 'number';
pixelSize.placeholder = 'Taille des pixels';
myForm.appendChild(pixelSize);

var button = document.createElement('button');
button.id = 'button';
button.textContent = 'Valider';
myForm.appendChild(button);



// Bloquer le submit qui refresh
myForm.addEventListener('submit', function(event) {

    event.preventDefault();
    console.log('on a pas rechargé la page');

    
    console.log('Voilà ce que j\'ai dans le champ taille de la grille :', event.target[0].value);
    console.log('Voilà ce que j\'ai dans le champ taille de pixels :', event.target[1].value);

    pxsize = event.target[1].value;
    // return myInput.value;
    // newGrid(divId);

    newGrid();
    drawgrid(event.target[0].value, event.target[1].value);
    //on peut accéder aux différents éléments composant ce formulaire en utilisant 
    // event.target comme si c'était un tableau
    //event.target[0] donne accès au 1er élément, ici le champ nom
    //event.target[1] donne accès au champ prénom

});

function newGrid() {
    //je cible l'élément à vider à partir de son id fourni en argument
    var target = document.querySelector('.container');
    //je vide la div en mettant sa propriété innerHTML à chaine vide
    target.innerHTML = '';
}