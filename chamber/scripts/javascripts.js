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
//* Footer */
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
const lastmodified = document.lastModified;

document.getElementById("lastmodified").innerHTML =
  "Last Modification " + Date(lastmodified);



  const navigation = document.getElementById('navigation')
const hamburger = document.getElementById('hamburger')

const hambuger=addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  navigation.classList.toggle('active');

})

function handleNav() {
	if(!nav.classList.contains('navigation--active')){
		nav.classList.add('navigation--active')
		hamburger.classList.add('hamburger--active')
	} else {
		nav.classList.remove('navigation--active')
		hamburger.classList.remove('hamburger--active')
	}
}


// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = 'e09f19d8ab2beffd71068cab9b257ae2';
const myLat = '18.680920638925773';
const myLong = '-34.00274806951326'

//url
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=${mykey}%units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            // displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    console.log('hello')
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].Description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.waether[0].icon}02d.png`
myGraphic.setAttribute('SRC', iconsrc)
myGraphic.setAttribute('alt', data.weather[0].description )


}



apiFetch();


// 3-Day Forecast
const forecastUrl = `(https://api.openweathermap.org/data/2.5/weather?q={Capetown, mfuleni},{7100}&appid={apiKey})`;
fetch(forecastUrl)
    .then(response => response.json())
    .then(forecastData => {
        const forecastContainer = document.getElementById('forecast-container');
        forecastData.list.slice(0, 3).forEach(forecast => {
            const forecastHtml = `
            <div>
              <h4>${new Date(forecast.dt * 1000).toLocaleDateString()}</h4>
              <p>Temperature: ${forecast.main.temp}°C</p>
            </div>
          `;
            forecastContainer.innerHTML += forecastHtml;
        });
    })


const navigationlinks = document.querySelector('.navigation');
const screenWidth = window.innerWidth;

if (screenWidth <= 768) {
  navigationlinks.style.display = 'none';
} else {
  navigationlinks.style.display = 'block';
}

       

      //members
      const jsonData = 'chamber-members.json'; // Replace with JSON data source
      const spotlightsContainer = document.getElementById('spotlights');
      
      fetch(jsonData)
        .then(response => response.json())
        .then(data => {
          const silverGoldMembers = data.members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
          const randomMembers = silverGoldMembers.sort(() => Math.random() - 0.5).slice(0, 3);
          
          randomMembers.forEach(member => {
            const spotlightHtml = `
              <div>
                <h3>${member.companyName}</h3>
                <img src="${member.logo}" alt="${member.companyName}">
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p><a href="${member.website}">Website</a></p >
          <p>Membership Level: ${member.membershipLevel}</p>
        </div>
      `;
      spotlightsContainer.innerHTML += spotlightHtml;
    });
  });
