// Получаем все ссылки на странице
const links = document.querySelectorAll('a[href^="#"]')

// Добавляем обработчик событий на каждую ссылку
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Отменяем стандартное поведение ссылки
    event.preventDefault()

    // Получаем ID раздела на странице из атрибута href ссылки
    const id = link.getAttribute('href')

    // Находим элемент с указанным ID на странице
    const section = document.querySelector(id)

    // Вычисляем положение раздела на странице относительно верхнего края
    const sectionTop = section.offsetTop

    // Вычисляем высоту меню навигации
    const navHeight = document.querySelector('nav').offsetHeight

    // Вычисляем положение, на которое нужно прокрутить страницу
    const scrollPosition = sectionTop - navHeight

    // Прокручиваем страницу к указанному положению с плавной анимацией
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    })
  })
})
