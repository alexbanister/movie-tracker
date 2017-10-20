export const options = {
  infinite: false,
  accessibility: true,
  arrows: true,
  variableWidth: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 300, settings:
      { slidesToShow: 1 }
  }, {
    breakpoint: 600, settings:
      { slidesToShow: 2 }
  }, {
    breakpoint: 800, settings:
      { slidesToShow: 2 }
  }, {
    breakpoint: 1000, settings:
      { slidesToShow: 4 }
  }, {
    breakpoint: 1200, settings:
      { slidesToShow: 5 }
  }]
};
