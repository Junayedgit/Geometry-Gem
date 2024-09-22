function triangleCalculate() {
    // Triangle Base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const Base = parseFloat(triangleBaseText)
    // console.log(Base);

    // Triangle Height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const Height = parseFloat(triangleHeightText);
    // console.log(Height);

    // Calculation
    const area = 0.5 * Base * Height;

    // display
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area
    console.log('Area of the Triangle', area);
}