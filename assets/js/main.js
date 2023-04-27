$("#resultado-escala").html("");

$(document).ready(function () {
  $(document).on("change", "#origen", function () {
    mostrarEscalas();
  });

  $(document).on("change", "#destino", function () {
    mostrarEscalas();
  });

  $(document).on("input", "#fecha-origen", function () {
    mostrarEscalas();
  });

  $(document).on("input", "#fecha-destino", function () {
    mostrarEscalas();
  });

  function mostrarEscalas() {
    var origen = $("option:selected", "#origen").text();
    var destino = $("option:selected", "#destino").text();
    var fechaOrigen = $("#fecha-origen").val();
    var fechaDestino = $("#fecha-destino").val();

    var muestraMensaje =
      origen !== "Seleccione" &&
      destino !== "Seleccione" &&
      fechaOrigen !== "" &&
      fechaDestino !== "";

    console.log(origen);
    console.log(destino);
    var siTieneEscala =
      (origen == "Chicago, USA" && destino == "Venecia, IT") ||
      (origen == "Boston, USA" && destino == "Paris, FR");

    if (muestraMensaje) {
      var mensajeEscala = siTieneEscala
        ? "¡Ojo! Tu vuelo tiene una escala"
        : "Tu vuelo no tiene una escala";
      $("#resultado-escala").html(mensajeEscala);

      $("#origen-reactivo").html(origen);
      $("#destino-reactivo").html(destino);

      $("#fecha-origen-reactivo").html(fechaOrigen);
      $("#fecha-destino-reactivo").html(fechaDestino);
    }
  }
});
