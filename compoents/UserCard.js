function parseDom(arg) {
    const objE = document.createElement("div");
    objE.innerHTML = arg;
    return objE;
}
class UserCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'closed'});
        shadow.appendChild(parseDom(this.render()));
    }

    render() {
        let style = `<style>
                    .container{
                        background: #26a2ff;
                    }
                </style>`;

        let html = `<div class="container">
                <p class="name">User Name</p>
                <p class="email">yourmail@some-email.com</p>
                <button class="button">Follow</button>
            </div>`;
        let js = ``;
        return style + html + js
    }
}

window.customElements.define('user-card', UserCard);
