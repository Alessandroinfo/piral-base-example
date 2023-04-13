class MfComponent extends HTMLElement {

    constructor() {
        super();
    }

    handler = (ev) => {
        this.render(ev.detail.components);
    };

    render(components = []) {
        const newComponents = components.slice(this.children.length);

        newComponents.forEach((componentName) => {
            const element = document.createElement(componentName);
            this.appendChild(element);
        });
    }

    connectedCallback() {
        const name = this.getAttribute("name");
        const components = window.componentRegistry[name] || [];

        this.render(components);
        window.addEventListener("component-changed", this.handler);
    }

    disconnectedCallback() {
        this.innerHTML = "";
        window.removeEventListener("component-changed", this.handler);
    }
}

customElements.define("mf-component", MfComponent);
