async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    return members;
  }
  
  function displayMembers(members, isGridView = true) {
    const container = document.getElementById('membersContainer');
    container.innerHTML = '';
    container.className = isGridView ? 'card-grid' : 'list-view';
  
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('card');
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
            <img src="images/${member.image}" alt="${member.name}" width="100">
        `;
        container.appendChild(memberCard);
    });
  }
  
  function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Member';
    }
  }
  
  let isGridView = true;
  
  function toggleView() {
    isGridView = !isGridView;
    fetchMembers().then(members => displayMembers(members, isGridView));
  }
  
  // Initial fetch and display of members in grid view
  fetchMembers().then(members => displayMembers(members));
  
  // Display current year and last modification date in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
  
  // Navigation toggle functionality

  const bar = document.getElementById('bar');
  const close = document.getElementById('close');
  const nav =document.getElementById('navbar');

  if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })

  }

  if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })

  }

  // JavaScript to toggle the navbar visibility
document.getElementById('bar').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('active');
});
  
// Select the elements
const hamburgerMenu = document.getElementById('bar');
const navbar = document.querySelector('.navbar');
const closeButton = document.getElementById('close');

// Toggle the navbar when the hamburger icon is clicked
hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close the navbar when the close button is clicked
closeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action
    navbar.classList.remove('active'); // Hide navbar
});

  
  // Weather API variables
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  
  const myKey = 'e09f19d8ab2beffd71068cab9b257ae2';
  const myLat = '18.680920638925773';
  const myLong = '-34.00274806951326';
  
  // Weather API URL
  const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
  
  async function apiFetch() {
    try {
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
  }
  
  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    captionDesc.innerHTML = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
  }
  
  // 3-Day Forecast
  const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=Capetown,7100&appid=${myKey}`;
  
  fetch(forecastUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(forecastData => {
        const forecastContainer = document.getElementById('forecast-container');
        const forecastHtml = `
            <div>
                <h4>${new Date(forecastData.dt * 1000).toLocaleDateString()}</h4>
                <p>Temperature: ${forecastData.main.temp}°C</p>
                <p>Weather: ${forecastData.weather[0].description}</p>
            </div>
        `;
        forecastContainer.innerHTML = forecastHtml;
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
  
  // Spotlight members
  const jsonData = 'chamber-members.json';
  const spotlightsContainer = document.getElementById('spotlights');
  
  fetch(jsonData)
    .then(response => response.json())
    .then(data => {
        const silverGoldMembers = data.members.filter(member => 
            member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold'
        );
        const randomMembers = silverGoldMembers.sort(() => Math.random() - 0.5).slice(0, 3);
        
        randomMembers.forEach(member => {
            const spotlightHtml = `
                <div>
                    <h3>${member.companyName}</h3>
                    <img src="${member.logo}" alt="${member.companyName}">
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <p><a href="${member.website}">Website</a></p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                </div>
            `;
            spotlightsContainer.innerHTML += spotlightHtml;
        });
    });
  
  // Modal functionality
  document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    timestampField.value = new Date().toISOString();
  
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
  
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetModal = document.querySelector(trigger.getAttribute('href'));
            targetModal.style.display = 'flex';
        });
    });
  
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });
  
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
  });