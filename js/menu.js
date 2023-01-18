(function(){
    const showMenuButtons = Array.from( document.querySelectorAll('[href="#leftNav"]') );
    const closeMenuButton = document.getElementById('leftNavClose');
    const menu = document.getElementById('leftNav');
    const showMenu = function(evt) {
        menu.classList.add('left-nav--active');

        document.body.addEventListener('click', hideMenu);
        showMenuButtons.forEach(button => {
            button.removeEventListener('click', showMenu);
        });

        evt.preventDefault();
        evt.stopPropagation();
    };
    const hideMenu = function(evt) {
        if( evt.target === closeMenuButton || !Array.from(menu.childNodes).includes( evt.target ) ) {
            menu.classList.remove('left-nav--active');

            document.body.removeEventListener('click', hideMenu);
            showMenuButtons.forEach(button => {
                button.addEventListener('click', showMenu);
            });
        }
    };

    showMenuButtons.forEach(button => {
        button.addEventListener('click', showMenu);
    });

    closeMenuButton.addEventListener('click', hideMenu);
}());
