(function () {
    var id;
    var element;
    var list;
    var activeIndex = 0;

    function Jump(size) {
        id = 'jumper';
        element = document.getElementById(id);

        list = new List(id, {
            valueNames: ['index'],
            page: size
        });

        bind();
    }

    function bind() {
        Mousetrap.bind(['command+k', 'ctrl+k', 'command+j', 'ctrl+j'], function (e) {
            deactivateAll();
            show();
            return false;
        });

        Mousetrap(element).bind(['backspace'], function (e) {
            deactivateAll();
        });

        Mousetrap(element).bind(['esc', '`'], function (e) {
            hide();
            return false;
        });

        Mousetrap(element).bind(['up'], function (e) {
            var numberOfResults = size();
            var previousIndex = activeIndex;
            if (activeIndex === 0) {
                activeIndex = numberOfResults - 1;
            } else {
                activeIndex--;
            }
            deactive(previousIndex);
            activate(activeIndex);
            return false;
        });

        Mousetrap(element).bind(['down', 'tab'], function (e) {
            var numberOfResults = size();
            var previousIndex = activeIndex;
            if ((activeIndex + 1) >= numberOfResults) {
                activeIndex = 0;
            } else {
                activeIndex++;
            }
            deactive(previousIndex);
            activate(activeIndex);
            return false;
        });

        Mousetrap(element).bind(['enter'], function (e) {
            element.getElementsByTagName('a')[activeIndex].click();
            return false;
        });

        list.on('searchComplete', function () {
            deactivateAll();
        });
    }

    function show() {
        element = document.getElementById('jumper');
        activeIndex = 0;
        element.style.display = 'block';
        element.getElementsByClassName('mousetrap')[0].focus();
        element.getElementsByTagName('a')[0].classList.add('active');
        document.body.classList.add('do-not-scroll');
    }

    function hide() {
        document.body.classList.remove('do-not-scroll');
        var elementById = document.getElementById('jumper');
        elementById.style.display = 'none';
        activeIndex = 0;
    }

    function size() {
        return element.getElementsByTagName('a').length;
    }

    function activate(index) {
        element.getElementsByTagName('a')[index].classList.add('active')
    }

    function deactive(index) {
        element.getElementsByTagName('a')[index].classList.remove('active')
    }

    function deactivateAll() {
        var activeElements = document.querySelectorAll('#' + id + ' .active');

        [].forEach.call(activeElements, function (el) {
            el.classList.remove('active');
        });

        if (element.getElementsByTagName('a').length > 0) {
            element.getElementsByTagName('a')[0].classList.add('active');
        }
        activeIndex = 0;
    }

    window.Jump = Jump;
})();
