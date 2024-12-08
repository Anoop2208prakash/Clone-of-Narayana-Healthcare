let generatedOTP;

function showInput(type) {
    // Hide both input fields initially
    document.getElementById('mobile-input').style.display = 'none';
    document.getElementById('email-input').style.display = 'none';

    // Reset button colors
    document.getElementById('mobile-btn').style.backgroundColor = 'white';
    document.getElementById('email-btn').style.backgroundColor = 'white';

    // Show the corresponding input field and change button color
    if (type === 'mobile') {
        document.getElementById('mobile-input').style.display = 'block';
        document.getElementById('mobile-btn').style.backgroundColor = '#A2AAAD';
    } else if (type === 'email') {
        document.getElementById('email-input').style.display = 'block';
        document.getElementById('email-btn').style.backgroundColor = '#A2AAAD';
    }

    // Show the "Send OTP" button
    document.getElementById('send-otp-btn').style.display = 'block';

    // Hide the OTP input field initially
    document.getElementById('otp-container').style.display = 'none';
}

function sendOTP() {
    const mobileInput = document.getElementById('mobile-input').value;
    const emailInput = document.getElementById('email-input').value;

    // Validate that either the mobile number or email is entered
    if (mobileInput || emailInput) {
        // Generate a random 4-digit OTP
        generatedOTP = Math.floor(1000 + Math.random() * 9000);
        
        // Display the OTP in an alert box
        alert("Your OTP is: " + generatedOTP);

        // Show the OTP input field for verification
        document.getElementById('otp-container').style.display = 'block';
    } else {
        alert("Please enter a valid mobile number or email address to receive an OTP.");
    }
}

function verifyOTP() {
    const userOTP = document.getElementById('otp-input').value;

    if (userOTP == generatedOTP) {
        showDialog();
    } else {
        alert("Invalid OTP. Please try again.");
    }
}

function showDialog() {
    document.getElementById('dialog').style.display = 'flex';
}

function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
    window.location.href = "index.html";
}
