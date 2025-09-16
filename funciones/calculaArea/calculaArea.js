let length;     //el nombre debe ser igual al del id del html
let width;
let area;

function calculaArea(){
    length = parseFloat(document.getElementById('length').value); 
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
