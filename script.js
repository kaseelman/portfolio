document.addEventListener('DOMContentLoaded', () => {
    // Contact button functionality (header)
    const contactButton = document.getElementById('contactButton');
    const workExperience = document.querySelector('.work-experience-section');
    const seeMoreButton = document.querySelector('.see-more-button:not(.contact-action)');
    const contactAction = document.querySelector('.contact-action');
    
    // Email handling function
    const handleEmailAction = () => {
        const email = 'kas.eelman@gmail.com';
        
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = `mailto:${email}`;
        } else {
            navigator.clipboard.writeText(email).then(() => {
                const successMsg = document.createElement('div');
                successMsg.className = 'copy-success';
                successMsg.textContent = '(EMAIL COPIED)';
                document.body.appendChild(successMsg);
                
                requestAnimationFrame(() => {
                    successMsg.classList.add('show');
                });
                
                setTimeout(() => {
                    successMsg.classList.remove('show');
                    setTimeout(() => successMsg.remove(), 300);
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        }
    };

    // Add click handlers for both contact buttons
    if (contactButton) contactButton.addEventListener('click', handleEmailAction);
    if (contactAction) contactAction.addEventListener('click', handleEmailAction);

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // See more button functionality
    if (seeMoreButton) {
        seeMoreButton.addEventListener('click', function() {
            // Show work experience section
            workExperience.classList.add('show');
            
            // Move contact button after work experience section
            workExperience.after(contactAction);
            
            // Hide the see more button
            this.style.display = 'none';
            
            // Temporarily hide contact button
            contactAction.style.opacity = '0';
            
            // Scroll to work experience
            workExperience.scrollIntoView({ behavior: 'smooth' });
            
            // Show contact button after work experience animation
            setTimeout(() => {
                contactAction.style.opacity = '1';
                contactAction.style.marginTop = '2rem';
                contactAction.style.marginBottom = '2rem';
                contactAction.style.transition = 'opacity 0.3s ease-out';
            }, 500);
        });
    }
});
