document.addEventListener('DOMContentLoaded', function() {
    const reportForm = document.getElementById('generate-report-form');
    const reportList = document.getElementById('report-list');

    loadReports();

    reportForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const reportType = document.getElementById('report-type').value;
        const reportPeriod = document.getElementById('report-period').value;

        const reportEntry = {
            type: reportType,
            period: reportPeriod,
            date: new Date().toLocaleString(),
            id: 'report-' + Date.now()
        };

        saveReport(reportEntry);
        addReportToList(reportEntry);
        reportForm.reset();
    });

    function loadReports() {
        const reports = JSON.parse(localStorage.getItem('reports')) || [];
        reports.forEach(report => addReportToList(report));
    }

    function saveReport(report) {
        const reports = JSON.parse(localStorage.getItem('reports')) || [];
        reports.push(report);
        localStorage.setItem('reports', JSON.stringify(reports));
    }

    function addReportToList(report) {
        const reportItem = document.createElement('div');
        reportItem.classList.add('report-item');
        reportItem.innerHTML = `
            <p><strong>${report.type}</strong>: ${report.period}</p>
            <p><em>Date:</em> ${report.date}</p>
            <button class="btn export-btn" data-id="${report.id}">Export</button>
        `;
        reportList.appendChild(reportItem);

        reportItem.querySelector('.export-btn').addEventListener('click', function() {
            exportReport(report);
        });
    }

    function exportReport(report) {
        const reportData = `Type: ${report.type}\nPeriod: ${report.period}\nDate: ${report.date}`;
        const blob = new Blob([reportData], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${report.type}-${report.date}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
});
