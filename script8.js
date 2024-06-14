function muestraRes() {
	const numeroDia= parseInt(document.getElementById('numeroDia').value);
	let nombreMes;

	switch (numeroDia){
		case 1:
		nombreDia="RESPUESTA: La química es la ciencia que estudia las sustancias y sus interacciones, en los que se producen cambios tanto en la materia como en la energía. A través de las investigaciones que se han ido realizando, hemos podido comprender (y crear) moléculas y materiales cada vez más complejos";
		break;
		case 2:
		nombreDia="RESPUESTA: Química inorgánica, Química orgánica, Bioquímica, Química analítica.";
		break;
		case 3:
		nombreDia="RESPUESTA: La química es una ciencia que tiene por finalidad no sólo descubrir, sino también, y sobre todo, crear, ya que es el arte de hacer compleja la materia. Para captar la lógica de la reciente evolución de la química, hay que retroceder en el tiempo y dar un salto atrás de unos cuatro mil millones de años";
		break;
		case 4:
		nombreDia="RESPUESTA: Esta disciplina tiene un papel protagónico en la vida cotidiana, está presente en los alimentos, cosméticos, combustibles, tratamiento de aguas, textiles, en la minería, construcción, medicina, farmacia, productos industriales, medio ambiente, entre muchos otros más. Como ejemplo abordaremos algunos de los mencionados.";
		break;
		case 5:
		nombreDia="RESPUESTA: La química alimenta los nuevos productos esenciales de la vida cotidiana. La química innovadora mantiene el mundo en movimiento, resuelve desafíos y hace realidad nuevas posibilidades. Es esencial… está detrás de todo lo que hacemos.";
		break;
		case 6:
		nombreDia="RESPUESTA: La ciencia química surge antes del siglo XVII a partir de los estudios de alquimia po-pulares entre muchos de los científicos de la época. Se considera que los principios básicos de la química se recogen por primera vez en la obra del científico británico Robert Boyle: TheScepticalChymist (1661).";
		break;
		case 7:
		nombreDia="RESPUESTA: Si bien ambas químicas estudian los enlaces químicos y moleculares, la diferencia radica en los elementos que estudian. Mientras la química orgánica estudia compuestos basados en carbono e hidrógeno, la química inorgánica se ocupa del resto de elementos químicos";
		break;
		default:
		nombreDia="RESPUESTA: Numero no valido. Por favor,introduce un numero entre 1 y 7";
		break;
	}
	document.getElementById('result').textContent=nombreDia;
}
