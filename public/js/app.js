const app = {

    buttons: document.getElementsByTagName('button'),
    images: document.getElementsByTagName('img'),

    init: function() {
        console.log('init');

        for (button of app.buttons) {
            button.addEventListener('click', app.buttonsHandler);
        };
        window.addEventListener('resize', app.resizeHandler);
    },

    buttonsHandler: function(e) {

        var target = e.target;

        if(target.matches('.active')) {
            document.getElementById('weaknesses').style.display = 'none';
            target.classList.remove('active');
            return true;
        };
        
        document.getElementById('weaknesses').style.display = 'block';

        for (button of app.buttons) {
            button.classList.remove('active');
        };

        for (image of app.images) {
            image.classList.remove('selected');
        };

        target.classList.add('active');
        var typeName = e.target.dataset.typeName;
        var image = document.getElementById(typeName);
        image.classList.add('selected');

        var weaknesses = JSON.parse(e.target.dataset.typeWeaknesses)
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

        if (window.matchMedia("(max-width: 812px)").matches) {
            
            var weaknessesDiv = document.getElementById('weaknesses');
            target.after(weaknessesDiv);

            var destinationTop = target.getBoundingClientRect().top + window.scrollY;
            console.log(destinationTop);
            window.scrollTo({
                top: destinationTop,
                left: 0,
                behavior: 'smooth'
              });
        }

    },

    resizeHandler: function(e) {
        if (window.matchMedia("(min-width: 813px)").matches) {
            target = document.getElementById('types');
            var weaknessesDiv = document.getElementById('weaknesses');
            target.after(weaknessesDiv);
        }
        if (window.matchMedia("(max-width: 812px)").matches) {
            target = document.querySelector('.active');
            var weaknessesDiv = document.getElementById('weaknesses');
            if (target) {
            target.after(weaknessesDiv);
            };
        }
    }

}

app.init();