$(document).ready(function(){
  $('.slider').slick({
    dots: true, // Показывать точки для навигации
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость перехода в мс
    slidesToShow: 4, // Количество видимых слайдов
    slidesToScroll: 3, // Количество слайдов при скролле
    autoplay: false, // Автоматическое переключение
    autoplaySpeed: 2000 // Задержка перед автоматическим переключением
  });
});
