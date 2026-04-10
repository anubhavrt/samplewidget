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
        background-color: #FFC107;
      }

      #content {
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: bold;
      }

      button {
        padding: 6px 12px;
        font-size: 14px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        background-color: #4CAF50;
        color: white;
      }

      button:hover {
        background-color: #43a047;
      }
    </style>

    <div id="content"></div>
    <button id="btn">Click Here</button>
  `;

  class HelloWidget extends HTMLElement {

    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._props = {};

      this._shadowRoot
        .getElementById("btn")
        .addEventListener("click", () => {
          this._shadowRoot.getElementById("content").innerText =
            "Button was clicked!";
        });
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
    "com-sample-simplewidget-v3",
    HelloWidget
  );

})();
