document.addEventListener("DOMContentLoaded", function() {
    const threatIntelligence = document.getElementById("threat-intelligence-content");
    const vulnerabilityReport = document.getElementById("vulnerability-report-content");

    function updateThreatIntelligence() {
        threatIntelligence.innerHTML = "New threat intelligence data: Updated vulnerability in XYZ system.";
    }

    function updateVulnerabilityReport() {
        vulnerabilityReport.innerHTML = "New vulnerability report: Critical vulnerability found in ABC software.";
    }

    setInterval(updateThreatIntelligence, 2000);
    setInterval(updateVulnerabilityReport, 5000);
});
