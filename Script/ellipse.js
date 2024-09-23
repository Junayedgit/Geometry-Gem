function ellipseCalculator() {
    // Ellipse a-axis
    const ellipseAInput = document.getElementById('ellipse-a-axis');
    const ellipseAText = ellipseAInput.value;
    const a = parseFloat(ellipseAText);
    console.log(a);

    // Ellipse b-axis
    const ellipseBInput = document.getElementById('ellipse-b-axis');
    const ellipseBText = ellipseBInput.value;
    const b = parseFloat(ellipseBText);
    console.log(b);

    // Calculation of the Ellipse Area
    const area = Math.PI * a * b;
    console.log(area);

    // display 
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;
}