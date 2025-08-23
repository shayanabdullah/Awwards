const nextbtn = document.querySelector('.next-btn')
const video = document.querySelector('.hero-video')

const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4' ]

let index = 0;

nextbtn.addEventListener("click", function(){
    index+= 1
     video.src = movieList[index]

     if (index===3){
        index = -1;
     }
})



// Observe all elements with these classes
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view'); // optional (re-animate on scroll)
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.autoBlur, .autoTakeFull, .autoDispaly')
  .forEach(el => observer.observe(el));

