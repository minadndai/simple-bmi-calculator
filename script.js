function calc() {

    let userHeight = Number(document.getElementById("inputHeight").value);
    let userWeight = Number(document.getElementById("inputWeight").value);
    let userBmi = userWeight / (userHeight/100 * userHeight/100);
    let calculation = userBmi.toFixed(2);

    // Set userHeight and userWeight variables as the values in the corresponding input fields, and then change them 
    // into Number format. Then calculate the BMI using the formula, and convert the result to 2 decimal points and set
    // it as "calculation" variable.
    
    if(calculation > 0) {

        if(calculation < 18.5) {
            document.getElementById("text").innerHTML = "Your BMI is " + calculation + ", you are underweight!";
        } else if(calculation >= 18.5 && calculation < 25) {
            document.getElementById("text").innerHTML = "Your BMI is " + calculation + ", you are healthy!";
        } else {
            document.getElementById("text").innerHTML = "Yout BMI is " + calculation + ", you are overweight!";
        }
    
    }else {
        document.getElementById("text").innerHTML = "Please enter your height and weight in numbers";
    }
}

// Use IF/Else conditions to check the calculation variable value. Then find the element ID "text" and change it 
// according to each condition by using innerHTML.


// Future additions: consider adding Male/Female selection, switching between cm/kg to ft and in/lb, suggesting healthy
// range of weight, adding image/Animation, and adding sliders.