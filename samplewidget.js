(function () {

  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      :host {
        display: block;
        border: 2px solid #4CAF50;
        padding: 16px;
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #f9fff9;
      }
    </style>
    <div id="content"></div>
  `;

  class HelloWidget extends HTMLElement {

    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._props = {};
    }

    onCustomWidgetBeforeUpdate(changedProperties) {
      this._props = { ...this._props, ...changedProperties };
    }

    onCustomWidgetAfterUpdate(changedProperties) {
      if ("text" in changedProperties) {
        this._shadowRoot.getElementById("content").innerText =
          changedProperties.text;
      }
    }
  }

  customElements.define(
    "com-sample-hellowidget",
    HelloWidget
  );

})();
