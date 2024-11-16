document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Define the pool of images
    const imagePool = [
      "hero-1.jpg", "hero-2.jpg", "hero-3.jpg", "hero-4.jpg",
      "hero-5.jpg", "hero-6.jpg", "hero-7.jpg", "hero-8.jpg",
      "hero-9.jpg", "hero-10.jpg", "hero-11.jpg", "hero-12.jpg",
      "hero-13.jpg", "hero-14.jpg", "hero-15.jpg", "hero-16.jpg",
      "hero-17.jpg", "hero-18.jpg", "hero-19.jpg", "hero-20.jpg",
      "hero-21.jpg", "hero-22.jpg", "hero-23.jpg", "hero-24.jpg",
      "hero-25.jpg", "hero-26.jpg", "hero-27.jpg", "hero-28.jpg",
      "hero-29.jpg", "hero-30.jpg", "hero-31.jpg", "hero-32.jpg"
    ];

    // Step 2: Shuffle the image pool
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
    shuffleArray(imagePool);

    // Step 3: Assign images to slots
    const imageSlots = document.querySelectorAll(".js-screens-wall__list-item img");
    imageSlots.forEach((slot, index) => {
      if (index < imagePool.length) {
        const imageUrl = `img/assets/hero/${imagePool[index]}`;
        slot.setAttribute("data-src", imageUrl);
        slot.setAttribute("alt", `Image ${index + 1}`);
      }
    });
  });