const details = document.querySelectorAll(".details");

details.forEach((detail) => {
    detail.children[0].addEventListener("click", () => {
        if (detail.open) {
            detail.open = false;
        } else if (!detail.open) {
            detail.open = true;
        }
    });
    detail.addEventListener("click", () => {
  
        if (detail.open) {
            detail.open = false;

        } else if (!detail.open) {
            detail.open = true;
        }
    });
});
