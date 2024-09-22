function rhombusCalculator() {
    //  Diagonal-1
    const rhombusDiagonal1Input = document.getElementById('rhombus-diagonal-1');
    const rhombusDiagonal1Text = rhombusDiagonal1Input.value;
    const diagonal1 = parseFloat(rhombusDiagonal1Text);
    console.log(diagonal1)

    // Diagonal-2
    const rhombusDiagonal2Input = document.getElementById('rhombus-diagonal-2');
    const rhombusDiagonal2Text = rhombusDiagonal2Input.value;
    const diagonal2 = parseFloat(rhombusDiagonal2Text);
    console.log(diagonal2)

    // Calculation The Area
    const area = 0.5 * diagonal1 * diagonal2;


    // Display
    const RhombusArea = document.getElementById('rhombus-area');
    RhombusArea.innerText = area;
    console.log('Area of The Rhombus', area);
}