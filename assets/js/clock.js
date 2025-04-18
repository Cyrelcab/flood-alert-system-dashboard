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

// clock.js
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}