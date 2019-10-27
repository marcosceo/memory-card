const gameButton = (() => {
  const module = {};

    module.style = () => {
      const $head = document.querySelector("head");
      const $style = document.createElement("style");

      $style.textContent = `
        .game-button {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          position: absolute;
          bottom: 20px;
          left: calc(50% - 40px);
          background-color: #2ed573;
          border: 3px solid #fffcee;
          color: #fffcee;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 1.05em;
          cursor: pointer;
          box-shadow: 0 4px 8px #3a4042;
          transition: opacity 200ms linear;
        }  

        .game-button.-disable {
          opacity: 0;
        }
      `;
      $head.insertBefore($style, null);
    };

    module.render = function(content) {
      module.style();

    return`
      <button class="game-button" >${content}</button>
    `;
  };

  return {
    render: module.render
  }
})();