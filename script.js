function validateSyntax() {
    let input = document.getElementById('petInput').value;
    
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    const RegExp = /^pet_\d{4}[a-zA-Z]+$/;


    if (RegExp.test(input)) {
        result = 'Valid Syntax.';
    } else {
        result = 'Invalid Syntax.'
    }

            document.getElementById('result').innerText = result;
}


