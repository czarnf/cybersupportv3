document.addEventListener('DOMContentLoaded', function() {
    const incidentForm = document.getElementById('incident-report-form');
    const incidentHistory = document.getElementById('incident-history');

    loadIncidentHistory();

    incidentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const incidentType = document.getElementById('incident-type').value;
        const incidentDescription = document.getElementById('incident-description').value;

        const incidentEntry = {
            type: incidentType,
            description: incidentDescription,
            date: new Date().toLocaleString()
        };

        saveIncident(incidentEntry);
        addIncidentToHistory(incidentEntry);
        incidentForm.reset();
    });

    function loadIncidentHistory() {
        const incidents = JSON.parse(localStorage.getItem('incidents')) || [];
        incidents.forEach(incident => addIncidentToHistory(incident));
    }

    function saveIncident(incident) {
        const incidents = JSON.parse(localStorage.getItem('incidents')) || [];
        incidents.push(incident);
        localStorage.setItem('incidents', JSON.stringify(incidents));
    }

    function addIncidentToHistory(incident) {
        const incidentItem = document.createElement('div');
        incidentItem.classList.add('incident-item');
        incidentItem.innerHTML = `
            <p><strong>${incident.type}</strong>: ${incident.description}</p>
            <p><em>Date:</em> ${incident.date}</p>
        `;
        incidentHistory.appendChild(incidentItem);
    }
});
