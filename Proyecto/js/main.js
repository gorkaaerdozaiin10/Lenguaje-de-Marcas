window.addEventListener('load', () => {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: false,
    draggable: true,
    arrows: {
      prev: '.button-prev',
      next: '.button-next',
    },
    dots: '.dots',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          draggable: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true,
  verticalCentered: false,
  menu: '#menu',
  anchors: ['inicio', 'final'],
  navigation: true,
  navigationTooltips: ['Inicio', 'Final'],
  slidesNavigation: true,
});

Swal.fire({
  icon: 'question',
  title: 'Bienvenido!',
  text:
    'Quieres aceptar todas nuestras políticas? Haz clic en leer más para obtener más información',
  showCloseButton: true,
  confirmButtonColor: '#81C784',
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      icon: 'success',
      toast: true,
      position: 'bottom',
      html: '<i class="far fa-laugh-beam"></i>',
      title: 'Gracias por tu tiempo!',
      width: '25em',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }
});
