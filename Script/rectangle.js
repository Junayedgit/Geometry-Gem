function rectangleCalculator() {
    // rectangle Width
    const rectangleWidthInput = document.getElementById('ractangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const Width = parseFloat(rectangleWidthText);
    // console.log(Width);

    // Rectangle Length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const Length = parseFloat(rectangleLengthText);
    // console.log(Length);

    // Calculation
    const area = Width * Length;
    // Display
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
    console.log('Area of Rectangle', area);

}