document.addEventListener('DOMContentLoaded', function() {
  var pages = document.getElementsByClassName('page');
  
  // Set z-index for pages
  for (var i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (i % 2 === 0) {
      page.style.zIndex = (pages.length - i);
    }
    page.pageNum = i + 1;  // Store page number
  }
  // Add click event listeners to flip pages
  for (var i = 0; i < pages.length; i++) {
    pages[i].onclick = function() {
      if (this.pageNum % 2 === 0) {
        this.classList.remove('flipped');
        this.previousElementSibling.classList.remove('flipped');
      } else {
        this.classList.add('flipped');
        this.nextElementSibling.classList.add('flipped');
      }
    };
  }

  // Keydown event listener for left/right navigation
  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
      navigateLeft();
    } else if (event.key === "ArrowRight") {
      navigateRight();
    }
  });

  // Navigate left function (to un-flip the page)
  function navigateLeft() {
    var flippedPages = document.querySelectorAll('.flipped');
    if (flippedPages.length > 0) {
      var lastFlippedPage = flippedPages[flippedPages.length - 1];
      if (lastFlippedPage) {
        lastFlippedPage.classList.remove('flipped');
        if (lastFlippedPage.previousElementSibling) {
          lastFlippedPage.previousElementSibling.classList.remove('flipped');
        }
      }
    }
  }

  // Navigate right function (to flip the page)
  function navigateRight() {
    var flippedPages = document.querySelectorAll('.flipped');
    var nextPage = (flippedPages.length > 0)
      ? flippedPages[flippedPages.length - 1].nextElementSibling
      : pages[0];

    if (nextPage && nextPage.classList.contains('page')) {
      nextPage.classList.add('flipped');
      if (nextPage.nextElementSibling) {
        nextPage.nextElementSibling.classList.add('flipped');
      }
    }
  }
});
