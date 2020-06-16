const app = {

    buttons: document.getElementsByTagName('button'),
    images: document.getElementsByTagName('img'),
    init: function() {
        console.log('init');
        console.log(app.buttons);
        for (button of app.buttons) {
            button.addEventListener('click', app.buttonsHandler);
        };
        window.addEventListener('resize', app.resizeHandler);
    },
    buttonsHandler: function(e) {
        console.log('clicked');
        for (button of app.buttons) {
            button.classList.remove('active');
        };
        for (image of app.images) {
            image.classList.remove('selected');
        };
        
        console.log(e.target);
        var target = e.target;
        target.classList.add('active');
        console.log(e.target.dataset.typeName);
        var typeName = e.target.dataset.typeName;
        var image = document.getElementById(typeName);
        image.classList.add('selected');

        console.log(e.target.dataset.typeWeaknesses);
        var weaknesses = JSON.parse(e.target.dataset.typeWeaknesses)
        console.log(weaknesses);
        var list = document.getElementById('typeList');
        list.innerHTML = '';
        var choice = document.getElementById('choice');

        if (weaknesses.length == 1) {
            choice.innerText = "Against this type, you should choose Pokémon which type is:";
        } else {
            choice.innerText = "Against this type, you should choose Pokémon which types are:";
        };

        for (weakness of weaknesses) {
            var li = document.createElement('li');
            li.innerText = weakness;
            li.classList.add(weakness);
            list.appendChild(li);
        }

        if (window.matchMedia("(max-width: 425px)").matches) {
            console.log('small indeed');
            var weaknessesDiv = document.getElementById('weaknesses');
            target.after(weaknessesDiv);
        }

    },

    resizeHandler: function(e) {
        if (window.matchMedia("(min-width: 426px)").matches) {
            target = document.getElementById('types');
            console.log(target);
            var weaknessesDiv = document.getElementById('weaknesses');
            console.log(target.parentNode);
            target.after(weaknessesDiv);
        }
        if (window.matchMedia("(max-width: 425px)").matches) {
            target = document.querySelector('.active');
            console.log(target);
            var weaknessesDiv = document.getElementById('weaknesses');
            console.log(target.parentNode);
            target.after(weaknessesDiv);
        }
    }

}

app.init();