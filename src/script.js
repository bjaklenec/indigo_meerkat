$(".slider-main_component").each(function (index) {
  const Swiper = new Swiper($(this).find(".Swiper")[0], {
    slidesPerView: "auto"
  });
});
