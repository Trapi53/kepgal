function init() {
  const ARTICLEELEM = document.querySelectorAll("article");
  for (let index = 0; index < kepLista.lenght; index++) {
    ARTICLEELEM[0].innerHTML += `<div> <img src='${kepLista[index]} alt=""`;
  }
  kepLista.src="kepek/kep2.jpg"
}
