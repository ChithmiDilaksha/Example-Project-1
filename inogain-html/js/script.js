document.addEventListener('DOMContentLoaded', function () {
    // Password field toggle
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;

        // Toggle the icon
        if (type === 'password') {
            togglePassword.classList.remove('bx-show'); // or any class you use for the 'hide' icon
            togglePassword.classList.add('bxs-lock-alt'); // 'lock' icon
        } else {
            togglePassword.classList.remove('bxs-lock-alt'); // 'lock' icon
            togglePassword.classList.add('bx-show'); // or any class you use for the 'show' icon
        }
    });

    // Confirm Password field toggle
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const confirmPasswordInput = document.getElementById('confirm_password');

    toggleConfirmPassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
        confirmPasswordInput.type = type;

        // Toggle the icon
        if (type === 'password') {
            toggleConfirmPassword.classList.remove('bx-show'); // or any class you use for the 'hide' icon
            toggleConfirmPassword.classList.add('bxs-lock-alt'); // 'lock' icon
        } else {
            toggleConfirmPassword.classList.remove('bxs-lock-alt'); // 'lock' icon
            toggleConfirmPassword.classList.add('bx-show'); // or any class you use for the 'show' icon
        }
    });
});
