document.addEventListener('DOMContentLoaded', function() {
    loadThreats();
    setupFilterForm();
    setupThreatChart();

    function loadThreats() {
        const apiUrl = 'https://api.threat-intelligence.com/realtime'; // Example API endpoint
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayThreats(data);
            })
            .catch(error => console.error('Error fetching threat data:', error));
    }

    function displayThreats(threats) {
        const threatFeed = document.getElementById('threat-feed');
        threatFeed.innerHTML = '';
        threats.forEach(threat => {
            const li = document.createElement('li');
            li.textContent = `${threat.time}: ${threat.type} - ${threat.severity} - ${threat.description}`;
            threatFeed.appendChild(li);
        });
    }

    function setupFilterForm() {
        const form = document.getElementById('threat-filter-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const type = document.getElementById('threat-type').value;
            const severity = document.getElementById('threat-severity').value;
            filterThreats(type, severity);
        });
    }

    function filterThreats(type, severity) {
        // Implement API call with filter parameters
        console.log(`Filtering threats by type: ${type}, severity: ${severity}`);
    }

    function setupThreatChart() {
        const ctx = document.getElementById('threatChart').getContext('2d');
        const threatChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Malware', 'Phishing', 'DDoS'],
                datasets: [{
                    label: 'Number of Threats',
                    data: [10, 15, 5],
                    backgroundColor: ['red', 'orange', 'green']
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
