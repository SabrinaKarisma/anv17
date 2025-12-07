// app.js
document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo');
    
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            // Efek lucu: Tambah animasi kucing saat klik foto
            alert('Meow! Foto ini lucu sekali! 🐱');
            // Atau bisa tambah modal untuk zoom, tapi untuk sederhana, cukup alert
        });
    });
    
    // Animasi sederhana untuk gallery
    const gallery = document.querySelector('.gallery');
    gallery.style.opacity = 0;
    setTimeout(() => {
        gallery.style.transition = 'opacity 1s ease';
        gallery.style.opacity = 1;
    }, 500);
});