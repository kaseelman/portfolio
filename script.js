document.addEventListener('DOMContentLoaded', () => {
    // Contact button functionality
    const contactButton = document.getElementById('contactButton');
    
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            const email = 'kas.eelman@gmail.com';
            
            // Check if device is mobile
            if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                // Open email client on mobile
                window.location.href = `mailto:${email}`;
            } else {
                // Copy to clipboard on desktop
                navigator.clipboard.writeText(email).then(() => {
                    // Create success message
                    const successMsg = document.createElement('div');
                    successMsg.className = 'copy-success';
                    successMsg.textContent = '(EMAIL COPIED)';
                    document.body.appendChild(successMsg);
                    
                    // Show the message
                    requestAnimationFrame(() => {
                        successMsg.classList.add('show');
                    });
                    
                    // Remove the message
                    setTimeout(() => {
                        successMsg.classList.remove('show');
                        setTimeout(() => successMsg.remove(), 300);
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy email:', err);
                });
            }
        });
    }

    // Add theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
