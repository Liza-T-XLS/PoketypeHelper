const app = {
    init: function() {
        console.log('init');
        var buttons = document.getElementsByTagName('button');
        console.log(buttons);
        for (button of buttons) {
            button.addEventListener('click', app.buttonsHandler);
        }
    },
    buttonsHandler: function(e) {
        console.log('clicked');
        console.log(e.target);
        console.log(e.target.dataset.typeName);
        console.log(e.target.dataset.typeWeaknesses);
        var parse = JSON.parse(e.target.dataset.typeWeaknesses)
        console.log(parse);
        var list = document.getElementById('typeList');
        list.innerHTML = '';
        for (pars of parse) {
            var li = document.createElement('li');
            li.innerText = pars;
            list.appendChild(li);
        }

    }

}

app.init();