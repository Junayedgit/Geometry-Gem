function parallelogramCalculator() {
    // Parallelgram Base
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base)

    // Parallelgram Height
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramBaseInput.value;
    const height = parseFloat(parallelogramBaseText);
    console.log(height);

    // Calculation of the Area
    const area = base * height;
    console.log('Area of the Parallelgram', area);

    // display

}