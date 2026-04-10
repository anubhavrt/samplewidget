(function () {

  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        font-family: "Segoe UI", Arial, sans-serif;
        box-sizing: border-box;
      }

      .card {
        width: 100%;
        height: 100%;
        padding: 20px;
        border-radius: 12px;
        background: linear-gradient(135deg, #e3f2fd, #ffffff);
        border: 1px solid #cfd8dc;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
      }

      .text {
        font-size: 18px;
        font-weight: 600;
        color: #2c3e50;
        line-height: 1.4;
        word-break: break-word;
      }
    </style>

    <div class="card">
      <div id="content" class="text"></div>
    </div>
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
``
