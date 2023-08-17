class Billete
  {
    constructor(v,c)
      {
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;
        this.imagen.src= imagenes[this.valor];
      }
  }

var imagenes = [];

imagenes [50]= "50pesos.jpg";
imagenes [20]= "20pesos.jpg";
imagenes [10]= "10euros.jpg";

var caja = [];
caja.push(new Billete(50,100));
caja.push(new Billete(20,100));
caja.push(new Billete(10,100));

var entregado = [];
var dinero ;
var papeles = 0;
var div = 0;

var b = document.getElementById('Retirar');
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");
function entregarDinero()
  {
    var t = document.getElementById("cantidad");
    dinero= parseInt(t.value);
    for (var bi of caja)
      {
        if (dinero > 0)
          {
            div = Math.floor(dinero/ bi.valor);
            if (div > bi.cantidad)
              {
                papeles = bi.cantidad;
              }
            else
              {
                papeles= div;
              }

            entregado.push(new Billete (bi.valor, papeles));
            dinero= dinero -(bi.valor * papeles);
          }
      }
    if (dinero > 0)
      {
        resultado.innerHTML += "no tengo dinero";
      }
    else
      {
        for (var e of entregado)
          {
            if (e.cantidad > 0)
              {
                resultado.innerHTML += e.cantidad +"billetes $" + e.valor +"<br/>" ;
                for (var i = 0; i < e.cantidad; i++)
                  {
                    resultado.innerHTML += "<img src=" + e.imagen.src + " />" +"<br/>";
                  }
                  resultado.innerHTML += "<hr />";
                  contar();

              }
          }
      }
  }

  function contar()
{
	total = 0
	for (var tot of caja)
	{
		total = total + tot.valor * tot.cantidad;
	}
}