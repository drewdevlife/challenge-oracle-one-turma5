const criptografar = document.getElementById("criptografar");
const descriptografar = document.getElementById("descriptografar");
const copiar = document.getElementById("copiar");

const textDefault = document.querySelector(".container-text-default");
const textResult = document.querySelector(".container-context-resultado");
const text = document.querySelector(".text-message-resultado");

criptografar.addEventListener("click", () => {
  let input = document.getElementById("inputCriptografar").value;

  const validacao = /([A-ZáéíóúÁÉÍÓÚãÃàèìòùÀÈÌÒÙ\d$@$!%*?&])/gm.test(input);
  if (!validacao && input.length > 0) {
    const mapObj = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
    };
    input = input.replace(/e|i|a|o|u/gm, (matched) => {
      return mapObj[matched];
    });

    quitarAlerta();
    mostrarResultado();

    text.textContent = input;
  } else {
    mostrarAlerta();
  }
});

descriptografar.addEventListener("click", () => {
  let input = document.getElementById("inputCriptografar").value;

  const validacao = /([A-ZáéíóúÁÉÍÓÚ\d$@$!%*?&])/gm.test(input);
  if (!validacao && input.length > 0) {
    const mapObj = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u",
    };
    input = input.replace(/enter|imes|ai|ober|ufat/gm, (matched) => {
      return mapObj[matched];
    });

    quitarAlerta();
    mostrarResultado();

    text.textContent = input;
  } else {
    mostrarAlerta();
  }
});

copiar.addEventListener("click", () => {
  let copiado = text.textContent;

  navigator.clipboard.writeText(copiado).then(() => {
    window.setTimeout(() => {
      copiar.textContent = "Copiar";
      copiar.classList.remove("btn-copiado");
    }, 2000);
  });
});

const mostrarResultado = () => {
  textDefault.style.display = "none";
  textResult.style.display = "flex";
};
const quitarAlerta = () => {
  const alert = document.querySelector(".alert-disabled");
  const alertText = document.querySelector(".text-descriptografar");
  alertText.classList.remove("text-descriptografar-alert");
  alert.classList.remove("alert-actived");
};
const mostrarAlerta = () => {
  const alertText = document.querySelector(".text-descriptografar");
  const alert = document.querySelector(".alert-disabled");
  alert.classList.add("alert-actived");
  alertText.classList.add("text-descriptografar-alert");
};
