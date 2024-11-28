let currentSection = 1;

document.addEventListener('DOMContentLoaded', () => {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentSection = parseInt(button.dataset.section);
            clearResults();
        });
    });

    // Calculate button
    document.getElementById('calculateBtn').addEventListener('click', () => {
        const values = {
            pregnant: parseInt(document.getElementById('pregnant').value) || 0,
            severe: parseInt(document.getElementById('severe').value) || 0,
            general: parseInt(document.getElementById('general').value) || 0
        };

        const results = calculateResults(values, currentSection === 1);
        displayResults(results, currentSection === 1);
    });

    // Clear button
    document.getElementById('clearBtn').addEventListener('click', clearResults);
});