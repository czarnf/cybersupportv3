document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();

    function initializeDashboard() {
        initializeCollapsibleSections();
        fetchAndDisplayThreatIntelligence();
        fetchAndDisplayVulnerabilityData();
        loadOSMonitoring();
        loadDeviceUsageMonitoring();
        loadEncryptionStatus();
        loadNetworkHealth();
    }

    function initializeCollapsibleSections() {
        const collapsibleSections = document.querySelectorAll('.dashboard-section');

        collapsibleSections.forEach(section => {
            const header = section.querySelector('h2');
            header.addEventListener('click', function() {
                section.classList.toggle('active');
                const content = section.querySelector('.content');
                content.style.maxHeight = section.classList.contains('active') ? content.scrollHeight + 'px' : null;
            });
        });
    }

    function fetchAndDisplayThreatIntelligence() {
        const threatIntelligenceElement = document.getElementById('threat-intelligence-content');
        threatIntelligenceElement.innerHTML = '<p>Loaded threat intelligence data.</p>'; // Replace with actual data fetching logic
    }

    function fetchAndDisplayVulnerabilityData() {
        const vulnerabilityReportElement = document.getElementById('vulnerability-report-content');
        vulnerabilityReportElement.innerHTML = '<p>Loaded vulnerability data.</p>'; // Replace with actual data fetching logic
    }

    function loadOSMonitoring() {
        const ctx = document.getElementById('osChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Windows', 'Linux', 'macOS', 'Others'],
                datasets: [{
                    label: 'Operating Systems Distribution',
                    data: [50, 30, 15, 5],
                    backgroundColor: ['blue', 'green', 'gray', 'orange']
                }]
            },
            options: {
                responsive: true
            }
        });
    }

    function loadDeviceUsageMonitoring() {
        const ctx = document.getElementById('deviceChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Desktops', 'Laptops', 'Mobile Devices', 'Tablets'],
                datasets: [{
                    label: 'Number of Devices',
                    data: [120, 80, 200, 50],
                    backgroundColor: ['blue', 'green', 'red', 'purple']
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function loadEncryptionStatus() {
        const ctx = document.getElementById('encryptionChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Encrypted', 'Unencrypted'],
                datasets: [{
                    label: 'Encryption Status',
                    data: [75, 25],
                    backgroundColor: ['green', 'red']
                }]
            },
            options: {
                responsive: true
            }
        });
    }

    function loadNetworkHealth() {
        const ctx = document.getElementById('networkHealthChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Uptime', 'Latency', 'Packet Loss', 'Throughput'],
                datasets: [{
                    label: 'Network Health Metrics',
                    data: [99, 30, 1, 70],
                    backgroundColor: ['green', 'orange', 'red', 'blue']
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
