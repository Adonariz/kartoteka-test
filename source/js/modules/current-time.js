function showCurrentTime() {
  const main = document.querySelector('main');
  const refresh = 1000;

  const clock = document.createElement('div');

  clock.classList.add('text');
  clock.style.cssText = `
    color: white;
    position: absolute;
    bottom: 10px;
    right: 100px;
  `;

  main.appendChild(clock);

  function updateClock() {
    const time = new Date();

    clock.textContent = `Текущее время: ${time.toLocaleTimeString('ru-RU', {hour12: false})}`;
  }

  setInterval(updateClock, refresh);
}

export default showCurrentTime;
