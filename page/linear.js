function solveEquations() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    var d = parseFloat(document.getElementById('d').value);
    var e = parseFloat(document.getElementById('e').value);
    var f = parseFloat(document.getElementById('f').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e) || isNaN(f)) {
        document.getElementById('solution').innerHTML = "Please enter valid coefficients for all variables.";
        return;
    }

    var stepsHTML = "<h2>Solution Steps:</h2>";
    stepsHTML += "Given Equations:<br>";
    stepsHTML += a + "x + " + b + "y = " + c + "<br>";
    stepsHTML += d + "x + " + e + "y = " + f + "<br>";

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e) || isNaN(f)) {
        document.getElementById('solution').innerHTML = "Please enter valid coefficients for all variables.";
        return;
    }

    var determinant = a * e - b * d;

    var stepsHTML = "<h2>Solution Steps:</h2>";
    stepsHTML += "Determinant (ad - bc) = " + determinant + "<br>";

    if (determinant === 0) {
        if ((a / d === b / e) && (c / f === b / e)) {
            stepsHTML += "The equations have infinitely many solutions.";
        } else {
            stepsHTML += "The equations have no solution.";
        }
    } else {
        stepsHTML += "Step 1: Multiply the first equation by " + e + " and the second equation by " + b + "<br>";
        var eq1 = a + "x + " + b + "y = " + c;
        var eq2 = d + "x + " + e + "y = " + f;
        stepsHTML += "    " + e + "(" + eq1 + ")<br>";
        stepsHTML += "    " + b + "(" + eq2 + ")<br>";
        var eq1Step = (a * e) + "x + " + (b * e) + "y = " + (c * e);
        var eq2Step = (d * b) + "x + " + (e * b) + "y = " + (b * f);
        stepsHTML += "    " + eq1Step + "<br>";
        stepsHTML += "    " + eq2Step + "<br><br>";
        stepsHTML += "Step 2: Subtract the second equation from the first<br>";
        stepsHTML += "    (" + eq1Step + ") - (" + eq2Step + ")<br>";
        var eqFinal = ((a * e) - (d * b)) + "x = " + ((c * e) - (b * f));
        stepsHTML += "    " + eqFinal + "<br><br>";

        stepsHTML += "Step 3: Solve for x<br>";
        var x = ((c * e) - (b * f)) / determinant;
        stepsHTML += "    x = " + x + "<br><br>";

        stepsHTML += "Step 4: Substitute x into one of the original equations to solve for y<br>";
        stepsHTML += "    " + eq1 + "<br>";
        var y = (c - (a * x)) / b;
        stepsHTML += "    y = " + y + "<br><br>";

        document.getElementById('solution').innerHTML = "Solution:<br>x = " + x + "<br>y = " + y;
    }

    document.getElementById('steps').innerHTML = stepsHTML;
}
