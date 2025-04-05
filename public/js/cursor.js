document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (cursor && follower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        document.querySelectorAll('a, button, input, .clickable').forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-active');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-active');
            });
        });
    }
});