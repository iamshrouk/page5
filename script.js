document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profile-icon');
    const changePasswordIcon = document.getElementById('change-password-icon');

    // تحديد أيقونة النشطة عند النقر
    profileIcon.addEventListener('click', () => {
        profileIcon.classList.add('active');
        changePasswordIcon.classList.remove('active');
    });

    changePasswordIcon.addEventListener('click', () => {
        changePasswordIcon.classList.add('active');
        profileIcon.classList.remove('active');
    });
});