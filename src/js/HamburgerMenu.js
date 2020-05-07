class HamburgerMenu {
    constructor(hamburgerElement) {

        this.hamburger = document.querySelector(hamburgerElement);
        this.list = document.querySelector(".menu__list");

        this.createHamburgerMenu();
        this.hamburger.addEventListener("click", () => this.openClose());
        this.list.addEventListener("click", (e) => this.navigateToSection(e));
    }

    createHamburgerMenu(){
        let dc = document.createDocumentFragment();

        for(let i=1; i <= 6; i++){
            let span=document.createElement("span");
            span.classList.add("hamburger__half-line");
            dc.appendChild(span);
        };
        this.hamburger.appendChild(dc);
    }

    openClose() {
        this.hamburger.classList.toggle("open");
        this.list.classList.toggle("menu__list--hamburger-active");
    }

    navigateToSection(e) {
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior: "smooth"});

        hamburger.openClose()
    }
}

export default HamburgerMenu;