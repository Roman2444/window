const tabs = (headerSelector, tabselector, contentSelector, activeClass, display = "block") => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabselector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    };

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
           (target.classList.contains(tabselector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabselector.replace(/\./, '')))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;