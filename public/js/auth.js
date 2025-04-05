document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication logic (in real app, this would be server-side)
    if (email.includes('admin@edufutur') && password === 'admin123') {
        window.location.href = 'admin/dashboard.html';
    } 
    else if (email.includes('faculty@edufutur') && password === 'faculty123') {
        window.location.href = 'faculty/dashboard.html';
    }
    else if (email.includes('student@edufutur') && password === 'student123') {
        window.location.href = 'student/dashboard.html';
    }
    else {
        alert('Invalid credentials. Try:\nAdmin: admin@edufutur.edu/admin123\nFaculty: faculty@edufutur.edu/faculty123\nStudent: student@edufutur.edu/student123');
    }
});