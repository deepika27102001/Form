function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });
    
    if (screenId === 'review') {
        document.getElementById('summary-name').textContent = document.querySelector('#personal-info-form input[type="text"]').value || '[Name]';
        document.getElementById('summary-email').textContent = document.querySelector('#personal-info-form input[type="email"]').value || '[Email]';
        document.getElementById('summary-expertise').textContent = document.querySelector('#professional-details-form select').value || '[Expertise]';
        document.getElementById('summary-experience').textContent = document.querySelector('#professional-details-form input[type="number"]').value || '[Experience]';
        
        const daysAvailable = [];
        const checkboxes = document.querySelectorAll('#availability-form input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                daysAvailable.push(checkbox.nextSibling.textContent.trim());
            }
        });
        const timeSlot = document.querySelector('#availability-form select').value || '[Time Slot]';
        document.getElementById('summary-availability').textContent = `${daysAvailable.join(', ')}: ${timeSlot}`;
    }
    
    document.getElementById(screenId).style.display = 'block';
}
