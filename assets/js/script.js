window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    var li = nav.querySelectorAll('.lien')
    if (window.scrollY > 50) { // Vous pouvez ajuster la valeur ici pour déterminer à quelle position le changement doit se produire
        nav.style.backgroundColor = 'rgb(245, 235, 220)'; // Couleur de fond de la navbar lorsque vous faites défiler vers le bas
        li.forEach(function (item) {
            item.style.color = 'rgb(80, 35, 20);'; // Changez cette valeur en la couleur que vous souhaitez pour les liens
        });
    } else {
        nav.style.backgroundColor = 'transparent'; // Couleur de fond par défaut lorsque vous remontez en haut de la page
        li.forEach(function (item) {
            item.style.color = '#ffff'; // Couleur par défaut des liens
        });
    }
});
