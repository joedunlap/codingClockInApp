    // Function to handle form submission
    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const form = document.getElementById('codingSessionForm');
        const formData = new FormData(form);

        try {
            // Send POST request to Express backend
            const response = await fetch('/api/v1/logs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.get('username'),
                    description: formData.get('description')
                })
            });

            // Check if request was successful
            if (!response.ok) {
                throw new Error('Failed to log coding session');
            }

            // Clear form fields after successful submission
            form.reset();
            // Refresh the coding session logs
            loadCodingSessionLogs();
        } catch (error) {
            console.error('Error logging coding session:', error);
            // Handle error (e.g., display error message to user)
        }
    };

    // Add event listener to the form for form submission
    document.getElementById('codingSessionForm').addEventListener('submit', handleFormSubmit);

    // Function to load coding session logs
    const loadCodingSessionLogs = async () => {
        // Fetch coding session logs from backend
        // Update HTML to display the logs
    };

    // Load coding session logs when page loads
    window.addEventListener('load', loadCodingSessionLogs);
