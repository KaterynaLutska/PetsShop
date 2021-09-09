window.onload = function () {
  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classList.contains("menu__arrow")) {
        targetElement.closest(".menu__item").classList.toggle("_hover");
      }
      if (
        !targetElement.closest(".menu__item") &&
        document.querySelectorAll(".menu__item._hover").length > 0
      ) {
        _removeClasses(
          document.querySelectorAll(".menu__item._hover"),
          "_hover"
        );
      }
    }
    if (targetElement.classList.contains("search-form__icon")) {
      document.querySelector(".search-form").classList.toggle("_active");
    } else if (
      !targetElement.closest(".search-form") &&
      document.querySelectorAll(".search-form._active")
    ) {
      document.querySelector(".search-form").classList.remove("_active");
    }
    if (targetElement.classList.contains("products__more")) {
      getProducts(targetElement);
      e.preventDefault();
    }

    if (targetElement.classList.contains("actions-product__button")) {
      const productId = targetElement.closest(".item-product").dataset.pid;
      addToCart(targetElement, productId);
      e.preventDefault();
    }
    if (
      targetElement.classList.contains(".cart-header__icon") ||
      targetElement.closest(".cart-header__icon")
    ) {
      if (document.querySelector(".cart-list").children.length > 0) {
        document.querySelector(".cart-header").classList.toggle("_active");
      }
      e.preventDefault();
    } else if (
      !targetElement.closest(".cart-header") &&
      !targetElement.classList.contains("actions-product__button")
    ) {
      document.querySelector(".cart-header").classList.remove("_active");
    }

    if (targetElement.classList.contains("cart-list__delete")) {
      const productId =
        targetElement.closest(".cart-list__item").dataset.cartPid;
      updateCart(targetElement, productId, false);
      e.preventDefault();
    }
  }
};
