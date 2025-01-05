document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
        projectName: document.getElementById('projectName').value,
        sectorIndustry: document.getElementById('sectorIndustry').value,
        projectLocation: document.getElementById('projectLocation').value,
        budget: document.getElementById('budget').value,
        environmentalMetrics: {
            carbonEmissions: {
                baseline: document.getElementById('carbonEmissions').value,
                projectedReductions: document.getElementById('projectedReductions').value
            },
            energyUsage: {
                renewable: document.getElementById('energyUsageRenewable').value,
                nonRenewable: document.getElementById('energyUsageNonRenewable').value
            }
        },
        socialMetrics: {
            jobCreation: document.getElementById('jobCreation').value
        },
        governanceMetrics: {
            compliance: document.getElementById('compliance').value
        },
        financialMetrics: {
            expectedROI: document.getElementById('expectedROI').value
        },
        supportingDocuments: document.getElementById('supportingDocuments').files
    };

    console.log('Form Data Submitted:', formData);
    // Here you can add code to send the formData to your server or process it as needed
});
