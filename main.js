const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const toggle = item.querySelector(".faq-toggle");

  if (item.classList.contains("is-open") && answer) {
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  }

  button?.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("is-open");

      const otherAnswer = otherItem.querySelector(".faq-answer");
      const otherToggle = otherItem.querySelector(".faq-toggle");

      if (otherAnswer) {
        otherAnswer.style.maxHeight = "0px";
      }

      if (otherToggle) {
        otherToggle.textContent = "+";
      }
    });

    if (!isOpen) {
      item.classList.add("is-open");

      if (answer) {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }

      if (toggle) {
        toggle.textContent = "−";
      }
    }
  });
});
