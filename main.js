const Dynamic = document.querySelector('.second-section');
const humburg = document.querySelector('.hamburger');
const popup = document.querySelector('#menupopup');
const body = document.getElementById('body');
humburg.addEventListener('click', () => {
  popup.style.display = 'flex';
  body.style.position = 'fixed';
});
popup.addEventListener('click', () => {
  popup.style.display = 'none';
  body.style.position = 'relative';
});

const Projects = [
  {
    name: 'Weather App',
    description: 'A simple app that allows users to search results of temperatures around the globe',
    description1: 'A simple app that allows users to search results of temperatures around the globe A weather app that pulls from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide. Built with JavaScript. this project was made to help determine temperatures, wind speed and humidity of any given area. it makes you know upcomming conditions and how to prepare.',
    featuredImage: 'img/tonic4.png',
    details: {
      DName: 'Weather',
      dot1: ' ',
      skill: 'Front End Dev',
      dot2: ' ',
      year: '2022',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JavaScript',
    },
    liveVersionLink: 'https://quavo19.github.io/WeatherApp/',
    source: 'https://github.com/quavo19/WeatherApp',
  },
  {
    name: 'ShowTime',
    description: 'this project known as TV-Shows, allows users to browse through a collection of films, provided by a movie API. Users are able to like and comment on the movies they view.',
    description1: 'this project known as TV-Shows, allows users to browse through a collection of films, provided by a movie API. Users are able to like and comment on the movies they view.',
    featuredImage: 'img/tonic.png',
    details: {
      DName: 'TvShows',
      dot1: ' ',
      skill: 'Front end',
      dot2: ' ',
      year: '2023',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JavaScript',
    },
    liveVersionLink: 'https://quavo19.github.io/TV-Shows/dist/',
    source: 'https://github.com/quavo19/TV-Shows',
  },
  {
    name: 'BookStore',
    description: 'A React-based web app designed for storing book information. It provides a user-friendly interface to easily add, edit and manage a book collection.',
    description1: 'This is a simple application, created using React, that serves a specific purpose - to store books. Books are a treasure trove of knowledge and information, and for book lovers, keeping track of their collection can be a daunting task. This is where this application comes in handy. With its user-friendly interface and intuitive design, this application makes it easy to keep track of your books and organize your collection. Whether you are an avid reader, a student, or a researcher, this application is an ideal tool to help you manage and keep track of the books you own.',
    featuredImage: 'img/bookstore.png',
    details: {
      DName: 'Store',
      dot1: ' ',
      skill: 'Frontend',
      dot2: ' ',
      year: '2023',
    },
    technologies: {
      first: 'React',
      second: 'Redux',
      third: 'API',
    },
    liveVersionLink: 'https://bookstore-zy4w.onrender.com/',
    source: 'https://github.com/quavo19/bookstore',
  },
  {
    name: 'Math Time',
    description: 'This is a simple application made with react that is intended to be used for mathematical calculations.',
    description1: "This is a simple yet powerful application built using React, designed specifically for performing mathematical calculations. Mathematics is an essential part of our daily lives and is used in a variety of fields and industries, from finance and economics to engineering and physics. This application aims to make mathematical calculations easier and more accessible, regardless of the user's level of mathematical knowledge or experience.",
    featuredImage: 'img/maths.png',
    details: {
      DName: 'Maths',
      dot1: ' ',
      skill: 'Frontend',
      dot2: ' ',
      year: '2023',
    },
    technologies: {
      first: 'React',
      second: 'Redux',
      third: 'API',
    },
    liveVersionLink: 'https://mathstimes.onrender.com/',
    source: 'https://github.com/quavo19/Math-Magician',
  },
  {
    name: 'Map The world',
    description: 'A powerful and intuitive web application. Powered by the Rest Country API, Matrics Map brings to life the fascinating world of population distribution in a visually appealing and easy-to-use interface',
    description1: "A powerful and intuitive web application. Powered by the Rest Country API, Matrics Map brings to life the fascinating world of population distribution in a visually appealing and easy-to-use interface. Whether you're a researcher, student, or just curious about the world, Matrics Map has something to offer. Explore data for countries around the world, delving deeper into their regions, native names, area, capitals, and more. With Matrics Map, the journey of discovery is just a few clicks away. Get started today and broaden your horizons with the power of Matrics Map",
    featuredImage: 'img/map.png',
    details: {
      DName: 'Maps',
      dot1: ' ',
      skill: 'Frontend',
      dot2: ' ',
      year: '2023',
    },
    technologies: {
      first: 'React',
      second: 'Redux',
      third: 'API',
    },
    liveVersionLink: 'https://mathstimes.onrender.com/',
    source: 'https://github.com/quavo19/Math-Magician',
  },
  {
    name: 'Organizer',
    description: 'This web app is used to organize tasks, a user can make a list of todos, mark them as complete and delete them',
    description1: 'This web application is designed to help users organize and manage their tasks more efficiently. It provides a platform for users to create a list of tasks, also known as "to-dos," and keep track of their progress. With this application, users can take control of their tasks and stay on top of their responsibilities, making it easier to achieve their goals and meet their deadlines.',
    featuredImage: 'img/todolist.png',
    details: {
      DName: 'To-dos',
      dot1: ' ',
      skill: 'Frontend',
      dot2: ' ',
      year: '2023',
    },
    technologies: {
      first: 'HTML',
      second: 'CSS',
      third: 'ES6&Webpack',
    },
    liveVersionLink: 'https://quavo19.github.io/Todo-List/dist/',
    source: 'https://github.com/quavo19/Todo-List',
  },
  {
    name: 'ShopIt',
    description: 'An e-commerce website that sells a unique item, users are able to add items to cart',
    description1: 'An e-commerce website that sells a unique item, users are able to add items to cart',
    featuredImage: 'img/tonic2.png',
    details: {
      DName: 'E commerce',
      dot1: ' ',
      skill: 'Front end',
      dot2: ' ',
      year: '2023',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JavaScript',
    },
    liveVersionLink: 'https://quavo19.github.io/SHOP-IT/dist',
    source: 'https://github.com/quavo19/SHOP-IT',
  },
];
Projects.forEach((Project) => {
  const content = `
  <header class="tonic">
  <div class="col-1"> <img id = "img"src="${Project.featuredImage}" alt="image of card"></div>
  <div class="tonic-2">
      <div class="greet" id = "greet">
          <h1 class="name">${Project.name}</h1>
          <div class="line"><img id="closer1"  src="img/vector1.png" alt="icon-png"></div>
      </div>
      <div class="col-2">
          <div class="canopy">
              <h1>${Project.details.DName}</h1>
          </div>
          <div class="light">
              <span class="dot"></span>
          </div>
          <div class="light">
              <h1 class="row">${Project.details.skill}</h1>
          </div>
          <div class="light">
              <span class="dot"></span>
          </div>
          <div class="light">
              <h1 class="row">${Project.details.year}</h1>
          </div>
      </div>
      <div class="col-3">
          <p class="dos">${Project.description}
          </p>
          <p class="card-description">${Project.description1}</p>
      </div>
      <div class="col-4">
          <ul class="skill">
              <li><a href="">${Project.technologies.first}</a></li>
              <li><a href="">${Project.technologies.second}</a></li>
              <li><a href="">${Project.technologies.third}</a></li>
          </ul>

      </div> 
      <div class = "line-container"><span class = "liner"></span></div>
      <div class="col-5">
              <div class="two">
              <a href="#body">See Project</a>
              </div>
      </div>
      <div class="card-actions">
        
      </div>
  </div>

</header>
  `;
  Dynamic.innerHTML += content;
});
const Display = document.querySelectorAll('.tonic');
Display.forEach((Element) => {
  const description1 = Element.children[1].children[2].children[1];
  const closeBTN = Element.children[1].children[0].children[1];
  const cardActionElement = Element.children[1].children[6];
  description1.style.display = 'none';
  closeBTN.style.display = 'none';
  cardActionElement.style.display = 'none';
});

const modalBtn = document.getElementsByClassName('two');
const projectModal = document.getElementById('project-modal');
Projects.forEach((modal, index) => {
  const modalTitle = modal.name;
  const modalDescription = modal.description1;
  const modalImage = modal.featuredImage;
  const modalLiveLink = modal.liveVersionLink;
  const modalSourceLink = modal.source;
  const modalId = index;
  for (let i = 0; i < modalBtn.length; i += 1) {
    modalBtn[i].addEventListener('click', () => {
      body.style.position = 'fixed';
      if (i === modalId) {
        projectModal.style.display = 'block';
        const modalVisible = ` <div id="mod" class="modal-content">
        <div class="modal-header">
              <h3 class="modal-title">
              ${modalTitle}
              </h3>
              <span class="close">
              <p id="closer">+</p>
              </span>
            </div>
        <div class="modal-card">
          <img
            src="${modalImage}"
            class="modal-image"
            alt="${modalTitle}"
          />
          <div class="modal-text">
            <ul class="modal-tags categories">
            <div class="col-4">
          <ul class="skill">
              <li><a href="">${Projects[i].technologies.first}</a></li>
              <li><a href="">${Projects[i].technologies.second}</a></li>
              <li><a href="">${Projects[i].technologies.third}</a></li>
              
          </ul>

      </div> 
            </ul>
            <p class="modal-description">
             ${modalDescription}
            </p>
              <div class="card-actions">

      <div class = "view">
        <div class="actions"><a  href="${modalLiveLink}"target="_blank">See Live</a><img src="img/card-live.png"/></div></div>
        <div class="actions"><a  href="${modalSourceLink}"target="_blank">See Source</a><img src="img/github.png"/></div></div>
      </div>
  </div>
          </div>
        </div>
      </div>`;

        projectModal.style.display = 'block';
        projectModal.innerHTML = modalVisible;

        // close the modal
        const closeModal = document.getElementsByClassName('close');
        for (let j = 0; j < closeModal.length; j += 1) {
          closeModal[j].addEventListener('click', () => {
            projectModal.style.display = 'none';
            body.style.position = 'relative';
          });
          // close the modal when user clicks anywhere outside
          window.onclick = function clickedOutside(event) {
            if (event.target === projectModal) {
              projectModal.style.display = 'none';
            }
          };
        }
      }
    });
  }
});

const lock = document.querySelectorAll('#closer1');
lock.forEach((Element) => {
  Element.addEventListener('click', () => {
    window.location.reload();
  });
});

//  form validation
const form = document.getElementById('form');
const input = document.getElementById('mail');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = input.value.trim();
  const regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!regex.test(email)) {
    errorElement.textContent = 'Email must be in lower case only';
  } else {
    form.submit();
  }
});

// store data for later
const NameData = document.querySelector('.name-input');
const EmailData = document.querySelector('#mail');
const TextData = document.querySelector('.msg-input');
form.addEventListener('submit', () => {
  const Data = {
    Name: NameData.value,
    Email: EmailData.value,
    Text: TextData.value,
  };
  localStorage.setItem('data', JSON.stringify(Data));
});

const AutoFiller = localStorage.getItem('data');
if (AutoFiller) {
  const DataStored = JSON.parse(localStorage.getItem('data'));
  NameData.value = DataStored.Name;
  EmailData.value = DataStored.Email;
  TextData.value = DataStored.Text;
}