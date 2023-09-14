// Function to show a specific page
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    const page = document.getElementById(pageId);
    page.style.display = 'block';
}

// Event listeners for navigation links
document.querySelector('nav').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const pageId = e.target.getAttribute('href').substring(1);
        showPage(pageId);
    }
});

// Show the dashboard by default
showPage('dashboard');
