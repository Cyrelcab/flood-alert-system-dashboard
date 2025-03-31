function updateClock() {
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateString = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    const timeString = now.toLocaleTimeString();
    document.getElementById('date').textContent = dateString;
    document.getElementById('clock').textContent = timeString;
  }
  setInterval(updateClock, 1000);
  updateClock();