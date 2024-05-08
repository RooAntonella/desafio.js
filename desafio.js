const jugadorUno = {
    nombre: "Marce",
    habilidades: {
      ataque: 70,
      velocidad: 30,
      vida: 83,
      magia: 120,
    },
    articulos: ["espada", "escudo", "varita"],
  };
  
  const jugadorDos = {
    nombre: "Flor",
    habilidades: {
      ataque: 73,
      velocidad: 30,
      vida: 80,
      magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
  };
     var contadorPuntosJug1 = 0;
     var contadorPuntosJug2 = 0;
     var ganador;
  
    if (jugadorUno.ataque > jugadorDos.ataque) {
      contadorPuntosJug1 = contadorPuntosJug1 + 1;
    } else if (jugadorDos.ataque > jugadorUno.ataque) {
      contadorPuntosJug2 = contadorPuntosJug2 + 1;
    } else {
      contadorPuntosJug1++;
      contadorPuntosJug2++;
    }
 
    if (jugadorUno.velocidad > jugadorDos.velocidad) {
      contadorPuntosJug1 = contadorPuntosJug1 + 1;
    } else if (jugadorDos.velocidad > jugadorUno.velocidad) {
      contadorPuntosJug2 = contadorPuntosJug2 + 1;
    } else {
      contadorPuntosJug1++;
      contadorPuntosJug2++;
    }
 

  if (jugadorUno.vida > jugadorDos.vida) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (jugadorDos.vida > jugadorUno.vida) {
    contadorPuntosJug2 = contadorPuntosJug2 + 1;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
 
  
  if (jugadorUno.magia > jugadorDos.magia) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (jugadorDos.magia > jugadorUno.magia) {
    contadorPuntosJug2 = contadorPuntosJug2 + 1;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }

  

  if (jugadorUno.articulos.length > jugadorDos.articulos.length) {
    contadorPuntosJug1 = contadorPuntosJug1 + 2;
  } else if (jugadorDos.articulos.length > jugadorUno.articulos.length) {
    contadorPuntosJug2 = contadorPuntosJug2 + 2;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
    
   var resultado = { 
    [jugadorUno.nombre]: contadorPuntosJug1,
    [jugadorDos.nombre]: contadorPuntosJug2,
    ganador: contadorPuntosJug1 > contadorPuntosJug2 ? jugadorUno.nombre : contadorPuntosJug2 > contadorPuntosJug1 ? jugadorDos.nombre : "empate",
  };
  
  console.log(resultado);
