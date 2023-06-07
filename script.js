function OpenNav(NavName) {
    var i;
    var x = document.getElementsByClassName("Nav");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(NavName).style.display = "block";  

    PathBeranda = document.getElementById('PathBeranda');
    PathCari = document.getElementById('PathCari');
    PathBuat = document.getElementById('PathBuat');
    Path = document.getElementById('Path');

    if (NavName === "Beranda") {
      PathBeranda.style.fill = "black";
      Pathcari.style.fill = "none";
      PathBuat.style.fill = "none";
      Path.style.fill = "none";
    } 
    if (NavName === "Cari" ){
      PathBeranda.style.fill = "none";
      Pathcari.style.fill = "black";
      PathBuat.style.fill = "none";
      Path.style.fill = "none";
    }
    if (NavName === "Buat") {
      PathBeranda.style.fill = "none";
      Pathcari.style.fill = "none";
      PathBuat.style.fill = "black";
      Path.style.fill = "none";
    }
  }


  /* bagian profile */
  function OpenTabProfile(NavProfil) {
  var i;
  var x = document.getElementsByClassName("Nav1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(NavProfil).style.display = "block";

  var buttonPostingan = document.getElementById("ButtonPostingan");
  var buttonDitandai = document.getElementById("ButtonDitandai");

  var SvgPostingan = document.getElementById('SvgPostingan');
  var SvgDitandai = document.getElementById('SvgDitandai');

  if (NavProfil === "Postingan") {
    buttonPostingan.style.borderBottom = "1px solid black";
    buttonDitandai.style.borderBottom = "none";
    SvgPostingan.style.color = "rgb(0, 0, 0)";
    SvgDitandai.style.color = "rgb(115, 115, 115)";
    
  } else if (NavProfil === "Ditandai") {
    buttonPostingan.style.borderBottom = "none";
    buttonDitandai.style.borderBottom = "1px solid black";
    SvgPostingan.style.color = "rgb(115, 115, 115)";
    SvgDitandai.style.color = "rgb(0, 0, 0)";
  }
}


  function resizeInput(inputId) {
    const input = document.getElementById(inputId);
    input.style.width = input.value.length + "ch";
  }
  