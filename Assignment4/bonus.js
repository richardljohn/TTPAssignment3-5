/*
BONUS: Create an HTML page with a form that asks the user to input the value of a sphere's radius. 
Write Javascript that gives them back the volume of the sphere. 
*/

const B = document.getElementById('calculateVolume');
B.onclick = function(){
    const pi = 3.141592653589793238;
    let vol = document.getElementById('volume');
    let rad = document.getElementById('r').value;
    let rCubed = Math.pow(rad, 3);
    vol.innerText = "Volume of Sphere: " + 4/3 * rCubed * pi;
}