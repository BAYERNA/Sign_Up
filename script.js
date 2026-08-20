document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');

    const showError = (input, message) => {
        const errorElement = document.getElementById(`${input.id}Error`);
        input.classList.add('error');
        errorElement.textContent = message;
    };

    const clearError = (input) => {
        const errorElement = document.getElementById(`${input.id}Error`);
        input.classList.remove('error');
        errorElement.textContent = '';
    };

    const validateEmail = (emailStr) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(emailStr);
    };

    const validatePassword = (pass) => {
        return pass.length >= 8;
    };

    // Real-time validation
    [fullName, email, password, confirmPassword].forEach(input => {
        input.addEventListener('input', () => clearError(input));
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Name validation
        if (fullName.value.trim() === '') {
            showError(fullName, '이름을 입력해주세요');
            isValid = false;
        }

        // Email validation
        if (!validateEmail(email.value)) {
            showError(email, '유효한 이메일 주소를 입력해주세요');
            isValid = false;
        }

        // Password validation
        if (!validatePassword(password.value)) {
            showError(password, '비밀번호는 최소 8자 이상이어야 합니다');
            isValid = false;
        }

        // Confirm Password validation
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, '비밀번호가 일치하지 않습니다');
            isValid = false;
        }

        if (isValid) {
            // Simulate API call
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                // Show success state (simple alert for demo)
                alert('회원가입이 완료되었습니다! 환영합니다, ' + fullName.value + '님');
                form.reset();
            }, 1500);
        }
    });
});
