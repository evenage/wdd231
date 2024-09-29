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


const navigationlinks = document.querySelector('.navigation');
const screenWidth = window.innerWidth;

if (screenWidth <= 768) {
  navigationlinks.style.display = 'none';
} else {
  navigationlinks.style.display = 'block';
}

