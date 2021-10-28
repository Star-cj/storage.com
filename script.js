//project for putting information to localstorage and into array, making the cancel button to appear and disappear

const add = document.querySelector(".add");
const cancel = document.querySelector(".cancel");
displayValues();  //to call the function anytime its refreshed


add.addEventListener("click", function (e) {
	e.preventDefault();
	let key = document.getElementById("key").value;
	let values = document.getElementById("values").value;
	if (key !== "" && values !== "") {
		localStorage.setItem(key, values);
		document.getElementById("key").value = "";
		values = document.getElementById("values").value = "";
		displayValues();
		cancel.style.display = "block";

	} else {
		alert("Input the information required!")
	};		
	const array = {
		"key": key,
		"values": values
	}
	ray.push(array);
	console.log("The array: ", ray);
});

cancel.addEventListener("click", function (e) {
	e.preventDefault();
	localStorage.clear();
	cancel.style.display = "none";
});

function displayValues() {
	let data = ""
	for (let i = 0; i < localStorage.length; i++) {
		data += "<tr><td>" + (i + 1) + "</td><td>" + localStorage.key(i) + "</td><td>" + localStorage.getItem(localStorage.key(i)) + "</td></tr>";
	}
	document.querySelector("tbody").innerHTML = data;
}