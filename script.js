//Funcion genera el color hexadecimal aleatorio.
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//Codigo mejorado
//const color ="#"+Math.floor(Math.random()*16777215).toString(16);

//Funcion para cambiar el nombre del body
const cambiarColor = () => {
    const nuevoColor=getRandomColor();
    document.body.style.backgroundColor = nuevoColor;
        console.log(nuevoColor);
    
    }

