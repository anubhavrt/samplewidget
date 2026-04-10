(function () {

  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      :host {
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        box-sizing: border-box;
      }

      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    </style>

    <iframe
      src="https://infosys-nextlevel-wc2plf2z.eu10.sapdas.cloud.sap/webclient/standalone/sap_digital_assistant"
      loading="lazy"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    ></iframe>
  `;

  class HelloWidget extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: "open" })
          .appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define(
    "com-sample-simplewidget-v9",
    HelloWidget
  );

})();
