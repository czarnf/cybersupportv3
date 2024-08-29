document.addEventListener("DOMContentLoaded", function() {
    const threats = [
        { type: "SQL Injection", severity: "high", description: "SQL Injection attempt detected." },
        { type: "Phishing", severity: "medium", description: "Phishing email flagged." },
        { type: "DDoS", severity: "critical", description: "DDoS attack in progress." }
    ];

    function detectThreats() {
        const threat = threats[Math.floor(Math.random() * threats.length)];
        const alertContainer = document.getElementById("alert-container");
        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alert");

        if (threat.severity === "critical") {
            alertDiv.classList.add("alert-danger");
        } else if (threat.severity === "high") {
            alertDiv.classList.add("alert-warning");
        } else {
            alertDiv.classList.add("alert-success");
        }

        alertDiv.textContent = `${threat.type}: ${threat.description}`;
        alertContainer.appendChild(alertDiv);

        setTimeout(() => alertDiv.remove(), 2000);
    }

    setInterval(detectThreats, 5000);
});
