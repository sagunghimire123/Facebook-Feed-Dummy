document.addEventListener("DOMContentLoaded", () => {

    const likeButtons = document.querySelectorAll(".post-actions span:first-child");

    likeButtons.forEach((likeButton) => {
        likeButton.addEventListener("click", () => {

            const popup = document.createElement("div");
            popup.className = "popup-like";
            popup.textContent = "👍";

            const buttonRect = likeButton.getBoundingClientRect();
            const parentRect = likeButton.parentElement.getBoundingClientRect();
            popup.style.left = `${buttonRect.left - parentRect.left}px`;
            popup.style.top = `${buttonRect.top - parentRect.top - 20}px`;

            likeButton.parentElement.appendChild(popup);

            setTimeout(() => {
                popup.classList.add("animate");
            }, 10);

            setTimeout(() => {
                popup.remove();
            }, 600);

            likeButton.classList.toggle("liked");
            if (likeButton.classList.contains("liked")) {
                likeButton.style.color = "red";
            } else {
                likeButton.style.color = "inherit";
            }
        });
    });
});
