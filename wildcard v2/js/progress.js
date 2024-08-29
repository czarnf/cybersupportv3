document.addEventListener("DOMContentLoaded", function() {
    // Example of progress tracking, you can expand on this for more detailed tracking
    const completedModules = JSON.parse(localStorage.getItem('completedModules')) || [];

    // Mark completed modules
    completedModules.forEach(module => {
        const btn = document.querySelector(`button[onclick="startQuiz('${module}')"]`);
        if (btn) {
            btn.textContent = "Completed";
            btn.disabled = true;
        }
    });
});

function completeModule(moduleId) {
    // Mark the module as completed and save to local storage
    let completedModules = JSON.parse(localStorage.getItem('completedModules')) || [];
    if (!completedModules.includes(moduleId)) {
        completedModules.push(moduleId);
        localStorage.setItem('completedModules', JSON.stringify(completedModules));
    }
}
