var fruta = "mango";
var fruta2 = "manzana";
var fruta3 =  "fresas";
var frutas = ["sandia",9439479,true];
var sancocho = [
    "papa",
    false,
    8732,
    function(){
        return "Hola desde funcion";},
        ["cebolla",23232,true]
]


var frutas = ["sandia", "mango","manzana"];
frutas.push("fresas");
frutas.unshift("manzana");
var dato = frutas.shift();
var rango = [frutas.slice(0,1), frutas.slice(2,3)];
document.write("dato:"+ (frutas.length)+"<br>");
document.write("dato:"+ frutas+"<br>");
document.write("dato: "+ dato + "<br>");


var frutas = [];
var numero = parseInt(prompt("Digite numeros de frutas"));
for (var i=0; i < numero; i++){
    frutas [i] = prompt("Digite nombre de la fruta"+"<br>");
}
for (var j =0; j < frutas.length; j++){
    document.write("fruta: " + frutas[j]);
}
frutas.forEach(( dato, pos)=>{
    document.write("fruta "+pos+": "+dato+"<br>")
})

var num1 = [3,45,22,52,21,32];
var num2 = [5,13,65,12,87,36];
var suma1=0;
var suma2=0;
for (var x =0; x < num1.length; x++){
    document.write(num1[x]+" + "+num2[x]+" = "+(num1[x]+num2[x])+ "<br>");
    suma1 += num1[x];
    suma2 += num2[x];
} 
document.write(suma1+" + "+suma2+" = "+(suma1+suma2));
