document.addEventListener('DOMContentLoaded', function() {
    // Global Collapsible Section Handling
    initializeCollapsibleSections();

    function initializeCollapsibleSections() {
        const collapsibleSections = document.querySelectorAll('.dashboard-section');

        collapsibleSections.forEach(section => {
            section.addEventListener('click', function() {
                const content = this.querySelector('.content');

                // Check if the section is already active
                if (this.classList.contains('active')) {
                    content.style.maxHeight = null;
                    this.classList.remove('active');
                } else {
                    // Expand the section
                    content.style.maxHeight = content.scrollHeight + "px";
                    this.classList.add('active');
                }
            });
        });
    }
});
