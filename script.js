function lista() {
  var Peliculas = [
    {
      Numero: "1",
      Titulo: "Misión de rescate",
      Duracion: "99M",
      Direccion: "Sam Hargrave",
      Anio: "2020",
      Imagen: "001.png",
    },
    {
      Numero: "2",
      Titulo: "A ciegas",
      Duracion: "89M",
      Direccion: "Susanne Bier",
      Anio: "2018",
      Imagen: "002.png",
    },
    {
      Numero: "3",
      Titulo: "Spenser Confidential",
      Duracion: "85M",
      Direccion: "Peter Berg",
      Anio: "2020",
      Imagen: "003.png",
    },
    {
      Numero: "4",
      Titulo: "Escuadron 6",
      Duracion: "83M",
      Direccion: "Michael Bay",
      Anio: "2019",
      Imagen: "004.png",
    },
    {
      Numero: "5",
      Titulo: "Misterio a bordo",
      Duracion: "73M",
      Direccion: "Kyle Newacheck",
      Anio: "2019",
      Imagen: "005.png",
    },
    {
      Numero: "6",
      Titulo: "El irlandés",
      Duracion: "64M",
      Direccion: "Martin Scorsese",
      Anio: "2019",
      Imagen: "006.png",
    },
    {
      Numero: "7",
      Titulo: "Triple frontera",
      Duracion: "63M",
      Direccion: "J,C, Chandor",
      Anio: "2019",
      Imagen: "007.png",
    },
    {
      Numero: "8",
      Titulo: "La otra Missy",
      Duracion: "59M",
      Direccion: "Happy Madison",
      Anio: "2020",
      Imagen: "008.png",
    },
    {
      Numero: "9",
      Titulo: "El hoyo",
      Duracion: "56M",
      Direccion: "SGalder Gaztelu Urrutia",
      Anio: "2019",
      Imagen: "009.png",
    },
    {
      Numero: "10",
      Titulo: "La cita perfecta",
      Duracion: "48M",
      Direccion: "Chris Nelseon",
      Anio: "2019",
      Imagen: "010.png",
    },
  ];

  var PeliculasHtml = [];
  for (var i = 0; i < Peliculas.length; i++) {
    var p = Peliculas[i];
    var peliculaHtml = "";
    peliculaHtml +=
      "<h3>" + p.Numero + ". " + p.Titulo + " (" + p.Duracion + ") " + "</h3>";
    peliculaHtml +=
      "<p>" + "Dirección: " + p.Direccion + " / " + p.Anio + "</p>";
    peliculaHtml += " <img src='imagenes/" + p.Imagen + "'>";
    peliculaHtml += "<hr>";
    PeliculasHtml.push(peliculaHtml);
  }

  document.getElementById("demo").innerHTML = PeliculasHtml.join("");
}
