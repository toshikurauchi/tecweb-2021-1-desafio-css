document.addEventListener("DOMContentLoaded", function () {
  const body = document.getElementsByTagName("body")[0];
  const detalhes = document.getElementById("detalhes");
  const tituloSerie = detalhes.getElementsByClassName("titulo-serie")[0];
  const descricaoSerie = detalhes.getElementsByClassName("descricao-serie")[0];
  const linksSeries = document.getElementsByClassName("serie-link");

  for (let i = 0; i < linksSeries.length; i++) {
    const linkSerie = linksSeries[i];
    linkSerie.onclick = (evento) => {
      evento.preventDefault();

      // Pega elemento clicado
      let elemento = evento.target;
      if (elemento.tagName.toUpperCase() === "IMG")
        elemento = elemento.parentNode;

      const titulo = elemento.getAttribute("data-titulo");
      const descricao = elemento.getAttribute("data-descricao");
      const imgFundo = elemento
        .getElementsByTagName("img")[0]
        .getAttribute("src");

      tituloSerie.innerHTML = titulo;
      descricaoSerie.innerHTML = descricao;
      body.style[
        "background-image"
      ] = `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0) 50%), url("${imgFundo}")`;
    };
  }
});
