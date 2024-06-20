var pages = document.getElementsByClassName('page');
for(var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = (pages.length - i);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Add click event listeners to flip pages
  var pages = document.getElementsByClassName('page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].pageNum = i + 1;
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
  
  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
      navigateLeft();
    } else if (event.key === "ArrowRight") {
      navigateRight();
    }
  });
  
  function navigateLeft() {
    var currentPage = document.querySelector('.flipped');
    if (currentPage && currentPage.previousElementSibling && currentPage.previousElementSibling.classList.contains('page')) {
      currentPage.classList.remove('flipped');
      currentPage.previousElementSibling.classList.remove('flipped');
    }
  }
  
  function navigateRight() {
    var currentPage = document.querySelector('.flipped');
    if (currentPage && currentPage.nextElementSibling && currentPage.nextElementSibling.classList.contains('page')) {
      currentPage.classList.add('flipped');
      currentPage.nextElementSibling.classList.add('flipped');
    }
  }
  
});
