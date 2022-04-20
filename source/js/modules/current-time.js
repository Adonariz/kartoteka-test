function showCurrentTime() {
  const main = document.querySelector('main');
  const refresh = 1000;

  const container = document.createElement('div');
  const clock = document.createElement('div');

  clock.classList.add('text');
  clock.style.cssText = `
    color: white;
    padding: 1rem;
  `;

  container.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2rem;
  `;

  main.appendChild(container);
  container.appendChild(clock);

  function updateClock() {
    const time = new Date();

    clock.textContent = `Текущее время: ${time.toLocaleTimeString('ru-RU', {hour12: false})}`;
  }

  setInterval(updateClock, refresh);
}

export default showCurrentTime;
