document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            const formMessage = document.getElementById('formMessage');

            nameError.classList.add('hidden');
            emailError.classList.add('hidden');
            messageError.classList.add('hidden');
            formMessage.classList.add('hidden');
            formMessage.classList.remove('text-green-600', 'text-red-500');

            if (nameInput.value.trim() === '') {
                nameError.classList.remove('hidden');
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                emailError.classList.remove('hidden');
                isValid = false;
            }

            if (messageInput.value.trim() === '') {
                messageError.classList.remove('hidden');
                isValid = false;
            }

            if (isValid) {
                formMessage.textContent = 'Message sent successfully!';
                formMessage.classList.remove('hidden');
                formMessage.classList.add('text-green-600');
                contactForm.reset();
            } else {
                formMessage.textContent = 'Please correct the errors in the form.';
                formMessage.classList.remove('hidden');
                formMessage.classList.add('text-red-500');
            }
        });
    }
});
