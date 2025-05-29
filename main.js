document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".rating-form");
  const elOuterContainer = document.querySelector(".outer-container");
  const elThankyouComponent = document.querySelector(".thank-you-component");
  const submitButton = form.querySelector(".js-submit-button");
  const ratingInputs = form.querySelectorAll('input[name="rating"]');
  let elRatingValue = document.querySelector(".js-rating-value");

  let thankYouHeight = elThankyouComponent.scrollHeight;
  elOuterContainer.style.height = `${thankYouHeight}px`;

  // Enable button when any radio is selected
  ratingInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if ([...ratingInputs].some((input) => input.checked)) {
        submitButton.disabled = false;
      }
    });
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    elThankyouComponent.classList.add("show");
    elRatingValue.textContent = document.querySelector(
      'input[name="rating"]:checked'
    ).value;
  });
});
