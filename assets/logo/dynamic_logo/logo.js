document.querySelectorAll('.column').forEach(column => {
    // Add hover event listeners
    column.addEventListener('mouseover', () => {
        const originalHeight = parseInt(column.style.height, 10);
        column.style.height = `${originalHeight + 30}px`; // Increase height on hover
    });

    column.addEventListener('mouseout', () => {
        const originalHeight = parseInt(column.style.height, 10);
        column.style.height = `${originalHeight - 30}px`; // Return to original height on mouseout
    });
});