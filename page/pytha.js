function calculate() {
    var sideA = parseFloat(document.getElementById('side-a').value);
    var sideB = parseFloat(document.getElementById('side-b').value);

    if (!isNaN(sideA) && !isNaN(sideB)) {
        var result = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
        var calculationSteps = 'c = √(' + sideA + '² + ' + sideB + '²) = √(' + Math.pow(sideA, 2) + ' + ' + Math.pow(sideB, 2) + ') ≈ ' + result.toFixed(5);
        document.getElementById('result').innerHTML = calculationSteps;
    } else {
        document.getElementById('result').innerHTML = "Please enter valid numbers for Side A and Side B.";
    }
}
