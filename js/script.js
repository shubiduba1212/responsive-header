const menu = document.querySelector('.menu');
const sns = document.querySelector('.sns');
const toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  sns.classList.toggle('active');
})

