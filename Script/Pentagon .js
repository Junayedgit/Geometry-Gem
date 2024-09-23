function pentagonCalculator() {
    // Pentagon Perimeter
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
    const pentagonPerimeterText = pentagonPerimeterInput.value;
    const perimeter = parseFloat(pentagonPerimeterText);
    console.log(perimeter);

    // Pentagon Base
    const pentagonBaseInput = document.getElementById('pentagon-base');
    const pentagonBaseText = pentagonBaseInput.value;
    const base = parseFloat(pentagonBaseText);
    console.log(base);


    // calculation of the pentagon area
    const area = 0.5 * perimeter * base;
    console.log(area);

    // display
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;
}