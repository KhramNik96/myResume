// Модальные окна
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

// Данные для модалов (можно расширить)
const projectsData = {
  project1: {
    title: 'Оптимизация отдела продаж',
    text: 'В рамках этого проекта я проанализировал текущие процессы, внедрил новые KPI и обучил команду. Результат: увеличение конверсии на 30% за 6 месяцев.'
  },
  project2: {
    title: 'Внедрение CRM',
    text: 'Автоматизировал обработку заявок, интегрировал аналитику и создал дашборды. Проект охватил 20+ клиентов, сократив время отклика на 50%.'
  }
};

// Обработчики для открытия модалов
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('open-modal')) {
    const modalId = e.target.dataset.modal;
    if (projectsData[modalId]) {
      modalTitle.textContent = projectsData[modalId].title;
      modalText.textContent = projectsData[modalId].text;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    }
  }
});

// Закрытие модала
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close') || e.target.classList.contains('modal')) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
});

// Переключение темы
document.addEventListener('DOMContentLoaded', () => {
  // Если хотите кнопку по умолчанию, добавьте id="theme-toggle" в HTML
  // Для демо: создаём кнопку динамически
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle';
  toggleBtn.textContent = 'Переключить тему';
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });
});
