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
    name: 'ShopIt',
    description: 'An advanced e-commerce platform specializing in the sale of unique items, where users can seamlessly browse products, add their desired choices to the cart, and proceed to checkout. In addition to a user-friendly shopping experience.',
    description1: 'An advanced e-commerce platform specializing in the sale of unique items, where users can seamlessly browse products, add their desired choices to the cart, and proceed to checkout. In addition to a user-friendly shopping experience, the platform offers an added advantage for customers: the capability to track the status and location of their orders in real-time using a dedicated order ID, ensuring transparency and peace of mind for every purchase.',
    featuredImage: 'img/tonic2.png',
    details: {
      DName: 'E commerce',
      dot1: ' ',
      skill: 'Front end',
      dot2: ' ',
      year: '2023',
    },
    technologies: {
      first: 'React',
      second: 'Express',
      third: 'Node',
    },
    liveVersionLink: 'https://deyarah.onrender.com/',
    source: 'https://github.com/quavo19/DnC',
  },
  // {
  //   name: 'Weather App',
  //   description: 'A simple app that allows users to search results of temperatures around the globe',
  //   description1: 'A simple app that allows users to search results of temperatures around the globe A weather app that pulls from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide. Built with JavaScript. this project was made to help determine temperatures, wind speed and humidity of any given area. it makes you know upcomming conditions and how to prepare.',
  //   featuredImage: 'img/tonic4.png',
  //   details: {
  //     DName: 'Weather',
  //     dot1: ' ',
  //     skill: 'Front End Dev',
  //     dot2: ' ',
  //     year: '2022',
  //   },
  //   technologies: {
  //     first: 'Html',
  //     second: 'Css',
  //     third: 'JavaScript',
  //   },
  //   liveVersionLink: 'https://quavo19.github.io/WeatherApp/',
  //   source: 'https://github.com/quavo19/WeatherApp',
  // },
  {
    name: 'Hall Register',
    description: 'This project is a web application that allows for the management of tenants, enabling administrators to view, edit, and delete tenant profiles, and allowing tenants to view their profile and dues status.',
    description1: 'This project serves as a robust tenant management web application tailored specifically for housing administrators to efficiently oversee and manage tenant profiles within a housing community or institution. The system prioritizes security and data integrity; thus, before any tenant can access their individual profiles, view their dues status, or access other related functionalities, they must first be registered and authorized by an admin. Once successfully registered, tenants are provided with a secure environment where they can log in, update their personal details, view any dues or payments, and even change their password to ensure their data remains confidential and secure. The platform is designed to streamline administrative tasks while providing tenants with a user-friendly interface to manage their housing needs.',
    featuredImage: 'img/hallregister.png',
    details: {
      DName: 'NavroHall',
      dot1: ' ',
      skill: 'Full-Stack',
      dot2: ' ',
      year: '2023',
    },
    technologies: {
      first: 'React',
      second: 'Css',
      third: 'Ruby',
    },
    liveVersionLink: 'https://navrohall.netlify.app/',
    source: 'https://github.com/quavo19/hostel-management-frontend',
  },
  {
    name: 'Avtar Chat',
    description: 'The frontend of our chat application boasts a sleek, user-friendly interface where users can effortlessly engage in real-time conversations, while also enjoying a dynamic Stories feature reminiscent of Snapchat',
    description1: 'The frontend of our chat application boasts a sleek, user-friendly interface where users can effortlessly engage in real-time conversations, while also enjoying a dynamic Stories feature reminiscent of Snapchat, allowing them to share ephemeral photo, video and Voice Notes(which will be translated into AI videos)  updates that capture moments from their day, all seamlessly integrated for an engaging social experience.',
    featuredImage: 'img/ethora.jpeg',
    details: {
      DName: 'Avtar Chat',
      dot1: ' ',
      skill: 'Frontend',
      dot2: ' ',
      year: '2023',
    },
    technologies: {
      first: 'React-Native',
      second: 'TypeScript',
      third: 'Ethora',
    },
    liveVersionLink: 'https://www.loom.com/share/b7b0d501e9d9455f9d2ab95860eba65d?sid=5a9f2401-bfe7-4468-946a-e4f5e8dfb42a',
    source: 'https://github.com/quavo19/ethora',
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
