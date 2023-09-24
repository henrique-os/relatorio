document.addEventListener("click", (e) => {
  if (e.target.id === "btn-change-values") {
    e.preventDefault();
    setValues();
  }
  if (e.target.id === "btn-copy-data") {
    e.preventDefault();
    copiarConteudo();
  }
});
function setValues() {
  const eta1 = document.getElementById("input-eta1").value;
  const eta2 = Number(document.getElementById("input-eta2").value);
  const eta3 = Number(document.getElementById("input-eta3").value);
  const cisterna = String(document.getElementById("input-cisterna").value);
  const turbAguaTratada = String(
    document.getElementById("input-turbidez-agua-tratada").value
  );
  const turbAguaBruta = String(
    document.getElementById("input-turbidez-agua-bruta").value
  );
  const cloro = String(document.getElementById("input-cloro").value);
  const inputPhBruto = String(document.getElementById("input-ph-bruto").value);

  document.getElementById("vazao-eta1").textContent = eta1;
  document.getElementById("vazao-eta2").textContent = eta2;
  document.getElementById("vazao-eta3").textContent = eta3;
  document.getElementById("cisterna").textContent = cisterna;
  document.getElementById("turbidez-agua-tratada").textContent =
    turbAguaTratada;
  document.getElementById("turbidez-agua-bruta").textContent = turbAguaBruta;
  document.getElementById("cloro-agua-tratada").textContent = cloro;
  document.getElementById("ph-agua-bruta").textContent = inputPhBruto;
  document.getElementById("total-captado").textContent =
    Number(eta1) + Number(eta2) + Number(eta3);
}

function copiarConteudo() {
  const conteudo = document.querySelector(".content-msg");
  const elementHidden = document.createElement("textarea");
  console.log(elementHidden);
  console.log(conteudo);
  elementHidden.value = String(conteudo.textContent);
  document.body.appendChild(elementHidden);
  elementHidden.select();
  document.execCommand("copy");
  document.body.removeChild(elementHidden);
  alert("Sucess!");
}
