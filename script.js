let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');


window.addEventListener('scroll', function(){
    var value = window.scrollY;

    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 7 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
})



// Tambahkan kode JavaScript kalian di file ini


const buttons = document.querySelectorAll('.button');
const articles = document.querySelectorAll('.port-card');

// Tambahkan event listener untuk setiap button filter
  buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Hapus class active dari semua button
    buttons.forEach(btn => btn.classList.remove('active'));
    // Tambahkan class active pada button yang di klik
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    // Tampilkan artikel sesuai dengan kategori yang di klik
    articles.forEach(card => {
      if (category === 'all' || category === card.getAttribute('data-category')) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

