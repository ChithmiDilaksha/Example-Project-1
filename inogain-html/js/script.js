document.addEventListener('DOMContentLoaded', function () {
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
  });