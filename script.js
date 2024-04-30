var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link")
  }

  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


const navBar = document.querySelector(".nav");
const navButton = document.querySelector(".nav-toggle");

// Hamburger Navigation
function toggleNavigation() {
  if (navBar.classList.contains("is-open")) {
    navBar.classList.remove("is-open");
  } else {
    navBar.classList.add("is-open");
  }
}

navButton.addEventListener("click", toggleNavigation);


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyK-cgUxrA65n4_Ip3MmqArzvjPrJNiK3MvXsY-dNNWrYWwQp691yzn0AGB8cDiQYZS/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })




  const skillsSection = document.getElementById('skills');

  function fillSkillBars() {
      const skills = skillsSection.querySelectorAll('.skill-level');
      skills.forEach(skill => {
          const width = parseInt(skill.style.getPropertyValue('--width'));
          let currentWidth = 0;
          const interval = setInterval(() => {
              if (currentWidth >= width) {
                  clearInterval(interval);
              } else {
                  currentWidth++;
                  skill.style.width = currentWidth + '%';
              }
          }, 10);
      });
  }

  function observeSkillsSection() {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  fillSkillBars();
                  observer.disconnect();
              }
          });
      });
      observer.observe(skillsSection);
  }

  observeSkillsSection();



 