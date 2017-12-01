function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.length; i++) {
  	console.log("Salida de consola 1:" + i)
    if (selectObject[i]) {
      console.log("******Salida de consola 1:" + selectObject[i])
      numberSelected++;
    }
  }
  return numberSelected;
}

howMany(process.argv);