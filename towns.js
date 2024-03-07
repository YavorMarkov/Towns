$(document).ready(function() {
	$('#btnDelete').click(deleteTown)

	$('#btnAdd').click(addTown);
	
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

function addTown() {
    let townName = $('#townNameForAdd').val(); // Get the value from the new input field
    $('#townNameForAdd').val(''); // Clear the input field
    $('#towns').append($('<option>').text(townName)); // Append the new town to the select element
    $('#result').text(townName + " added."); // Display a message indicating the town was added
}
