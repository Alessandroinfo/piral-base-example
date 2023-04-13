class Header extends HTMLElement{
  constructor() {
    super();
    // Component logic and functionality
    const shadowRoot = this.attachShadow({mode: 'open'});
    const template = document.createElement('template');
    template.innerHTML = `
            <style>
                .header{
                background-color: aquamarine;
                padding: 2em;
                }
            </style>
            <div class="header">
                <slot></slot>
                Header
            </div>
            `;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define("header-nav", Header);
