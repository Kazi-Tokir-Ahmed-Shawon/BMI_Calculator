const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
reset = document.querySelector(".reset");

function calculateBMI() {
	const weight = parseFloat(weightInput.value);
	const height = parseFloat(heightInput.value) / 100;
	const bmi = weight / (height * height);
	result.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
	
	if (bmi < 18.5) {
		showResult('Underweight: <span>' + bmi + '</span>', "#fda04a78");
	  } else if (bmi >= 18.5 && bmi < 24.9) {
		showResult(`Normal: <span>${bmi}</span>`, "#00ff7778");
	  } else if (bmi >= 25.0 && bmi < 29.9) {
		showResult(`Overweight: <span>${bmi}</span>`, "#1530ff78");
	  } else {
		showResult(`Obese: <span>${bmi}</span>`, "#ff151578");
	  }
	  reset.style.display = "block";
	
}

function showResult(val, color) {
	result.style.backgroundColor = color;
	return (result.innerHTML = val);
  }

calculateBtn.addEventListener("click", calculateBMI);

reset.addEventListener("click", () => {
  document.querySelector("form").reset();
  reset.style.display = "none";
  result.style.display = "none";
});