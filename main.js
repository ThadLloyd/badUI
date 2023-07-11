
const error = () => {
	const checkboxOne = document.getElementById('checkbox-1');
	const checkboxErrorOne = document.getElementById('checkbox-1-error');
	const checkboxTwo = document.getElementById('checkbox-2');
	const checkboxErrorTwo = document.getElementById('checkbox-2-error');
	const checkboxThree = document.getElementById('checkbox-3');
	const checkboxErrorThree = document.getElementById('checkbox-3-error');
	const checkboxFour = document.getElementById('checkbox-4');
	const checkboxErrorFour = document.getElementById('checkbox-4-error');

	if (checkboxOne.checked == true) {
		setTimeout( () => {
			checkboxErrorOne.style.visibility = "visible";
			checkboxOne.checked = false;
			setTimeout( () => {
				checkboxErrorOne.style.visibility = "hidden";
			}, 500);
		}, 350);
	} else {
		checkboxErrorOne.style.visibility = "hidden";
	}
	
	if (checkboxTwo.checked == true) {
		setTimeout( () => {
			checkboxErrorTwo.style.visibility = "visible";
			checkboxTwo.checked = false;
			setTimeout( () => {
				checkboxErrorTwo.style.visibility = "hidden";
			}, 500);
		}, 350);
	} else {
		checkboxErrorTwo.style.visibility = "hidden";
	}

	if (checkboxThree.checked == true) {
		setTimeout( () => {
			checkboxErrorThree.style.visibility = "visible";
			checkboxThree.checked = false;
			setTimeout( () => {
				checkboxErrorThree.style.visibility = "hidden";
			}, 500);
		}, 350);
	} else {
		checkboxErrorThree.style.visibility = "hidden";
	}

	if (checkboxFour.checked == true) {
		setTimeout( () => {
			checkboxErrorFour.style.visibility = "visible";
			checkboxFour.checked = false;
			setTimeout( () => {
				checkboxErrorFour.style.visibility = "hidden";
			}, 500);
		}, 350);
	} else {
		checkboxErrorFour.style.visibility = "hidden";
	}

}

document.getElementById('checkbox-1').addEventListener('click', error);
document.getElementById('checkbox-2').addEventListener('click', error);
document.getElementById('checkbox-3').addEventListener('click', error);
document.getElementById('checkbox-4').addEventListener('click', error);
