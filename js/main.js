function nextScreen(num) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const next = document.getElementById(`screen${num}`);
  if (next) {
    next.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}