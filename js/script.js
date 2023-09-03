document.addEventListener("DOMContentLoaded", function(event) { 
  const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
      const header = accordion.querySelector('.accordion-header');
      const content = accordion.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      accordion.classList.toggle('active');
    });
  });


  const resumeBtn = document.getElementById("resumeBtn");
  const githubBtn = document.getElementById("githubBtn");
  const githubBtn2 = document.getElementById("githubBtn2");
  const linkedinBtn = document.getElementById("linkedinBtn");

  resumeBtn.addEventListener("click", function() {
    window.open('/pdf/JuanDelaTorreCV.pdf', '_blank');
  });

  githubBtn.addEventListener("click", function() {
    window.open('https://github.com/Juan1541', '_blank');
  });

  githubBtn2.addEventListener("click", function() {
    window.open('https://github.com/Juan1541', '_blank');
  });

  linkedinBtn.addEventListener("click", function() {
    window.open('https://www.linkedin.com/in/juan-de-la-torre-978207248/', '_blank');
  });

});