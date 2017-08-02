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

        bindGlobal();
    }

    function bindGlobal() {
        element.addEventListener('click', function () {
            event.stopPropagation();
            hide();
        });

        element.getElementsByClassName('filter')[0].addEventListener('click', function () {
            event.stopPropagation();
        });


        Mousetrap.bind(['command+k', 'ctrl+k', 'command+j', 'ctrl+j'], function (e) {
            deactivateAll();
            show();
            return false;
        });


        list.on('searchComplete', function () {
            var activeElements = document.querySelectorAll('#' + id + ' .active');
            if (activeElements.length !== 1) {
                deactivateAll();
            }
        });
    }

    function bindShow() {

        Mousetrap.bind(['backspace'], function (e) {
            deactivateAll();
        });

        Mousetrap.bind(['esc', '`'], function (e) {
            hide();
            return false;
        });

        Mousetrap.bind(['up'], function (e) {
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

        Mousetrap.bind(['down', 'tab'], function (e) {
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

        Mousetrap.bind(['enter'], function (e) {
            element.getElementsByTagName('a')[activeIndex].click();
            return false;
        });
    }

    function show() {
        Mousetrap.bind(['esc', '`'], function (e) {
            hide();
            return false;
        });
        bindShow();
        element = document.getElementById('jumper');
        activeIndex = 0;
        element.style.visibility = 'visible';
        element.getElementsByClassName('filter')[0].classList.remove('animated', 'zoomOut');
        element.getElementsByClassName('filter')[0].classList.add('animated', 'zoomIn');
        element.getElementsByClassName('mousetrap')[0].focus();
        element.getElementsByTagName('a')[0].classList.add('active');
        document.body.classList.add('do-not-scroll');
    }

    function hide() {
        Mousetrap.unbind(['esc', '`', 'backspace', 'up', 'down', 'tab', 'enter']);
        document.body.classList.remove('do-not-scroll');
        var element = document.getElementById('jumper');
        element.getElementsByClassName('filter')[0].classList.remove('animated', 'zoomIn');
        element.getElementsByClassName('filter')[0].classList.add('animated', 'zoomOut');
        setTimeout(function () {
            var element = document.getElementById('jumper');
            element.style.visibility = 'hidden';
        }, 100);
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
