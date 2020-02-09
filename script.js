  for(var i = 0;i < 64;i++)
  {
  document.querySelector(".groupe").appendChild(document.querySelector(".cube").cloneNode(true));
  }

  var lesCubes = document.querySelectorAll(".cube");
  for (var i = 0; i < lesCubes.length; i++)
  {
  lesCubes[i].addEventListener("mouseover",function(e){
  e.currentTarget.style.transform = "translateZ(20em) rotateX(500deg)";
  setTimeout(function () {
  e.currentTarget.style.transform = "translateZ(0em) rotateX(0deg)"; }, 3000);
  });
  }

  function nombreAleatoire(min,max)
  {
  var interval = max - min;
  var aleatoire = (Math.floor(Math.random() * (interval + 1))) + min;
  return aleatoire;
  }

/*function mouvementCube() {
  setInterval(function() {
    for (var i = 0; i < lesCubes.length; i++) {
      var em = nombreAleatoire(-20, 10);
      lesCubes[i].style.transform = "translateZ(" + em + "em)";
    }
  }, 3000);
}

  mouvementCube();*/
