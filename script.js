document.addEventListener('DOMContentLoaded', function () {

    // Most Used Tags
    const ctxBar = document.getElementById('tagsBarChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Restaurant', 'Cafe', 'Music', 'Photobooth', 'Chill'],
            datasets: [{
                label: 'Total Uses',
                data: [27, 14, 17, 4, 11],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Approved/Rejected User Submissions
    const ctxPie = document.getElementById('submissionsPieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Approved', 'Rejected', 'Pending Review'],
            datasets: [{
                data: [65, 20, 15],
                backgroundColor: [
                    'rgb(0, 255, 55)',
                    'rgb(255, 0, 0)',
                    'rgb(255, 183, 0)'
                ],
                borderColor: [
                    'rgb(0, 255, 55)',
                    'rgb(255, 0, 0)',
                    'rgb(255, 183, 0)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Coin Flip & Spin The Wheel Usage
    const ctxLine = document.getElementById('usageLineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Coin Flip',
                    data: [45, 52, 38, 60, 75, 90, 85],
                    borderColor: 'rgb(0, 183, 255)',
                    backgroundColor: 'rgb(0, 183, 255)',
                },
                {
                    label: 'Spin The Wheel',
                    data: [20, 25, 22, 35, 45, 65, 55],
                    borderColor: 'rgb(188, 255, 64)',
                    backgroundColor: 'rgb(188, 255, 64)',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});