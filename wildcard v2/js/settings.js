document.addEventListener('DOMContentLoaded', function() {
    const privacyForm = document.getElementById('privacy-settings-form');

    loadSettings();

    privacyForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const dataSharing = document.getElementById('data-sharing').value;
        const notifications = document.getElementById('notifications').value;

        const settings = {
            dataSharing: dataSharing,
            notifications: notifications
        };

        localStorage.setItem('settings', JSON.stringify(settings));
        alert('Settings saved successfully.');
    });

    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem('settings'));
        if (settings) {
            document.getElementById('data-sharing').value = settings.dataSharing;
            document.getElementById('notifications').value = settings.notifications;
        }
    }
});
