function add(){
  var area=
      Number(document.getElementById("FN").value)*
   Number(document.getElementById("FN").value);
  document.getElementById("area").innerHTML=area;
  var peri=
      Number(document.getElementById("FN").value)*4;
   
  document.getElementById("peri").innerHTML=peri;
}