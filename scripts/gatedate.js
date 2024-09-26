const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



/* Courses data */
const classesGrid = document.getElementById("classesGrid");

const showAllButton = document.getElementById("show-all");
const showCseButton = document.getElementById("show-cse");
const showWddButton = document.getElementById("show-wdd");

/all/
function renderCourses(filterFn) {
    classesGrid.innerHTML = ''; // Clear existing courses
    courses.forEach((cos) => {
      if (filterFn(cos)) {
        const courseContainer = document.createElement("div");
        const element = document.createElement("span");
        
        element.className = "class";
        courseContainer.className="Coursecontainer";
        if (cos.completed) {
          element.classList.add("completed");
          
        }
        element.innerHTML = `${cos.subject} ${cos.number}`;
        
        
        
     
        classesGrid.appendChild(element);
      }
    });
  }

  /* Event listeners */
  showAllButton.addEventListener("click", () => {
    renderCourses(() => true);
  });

  showCseButton.addEventListener("click", () => {
    renderCourses(cos => cos.subject === 'CSE');
  });

  showWddButton.addEventListener("click", () => {
    renderCourses(cos => cos.subject === 'WDD');
  });

  // Initially show all courses
  renderCourses(() => true);

//* Footer */
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
const lastmodified = document.lastModified;

document.getElementById("lastmodified").innerHTML =
  "Last Modification " + Date(lastmodified);


/*total courses*/

function calculateTotalCredits() {
  const total_Credits = courses.reduce((accumulater, course) => accumulater + course.credits, 0);

  document.getElementById("totalcredit").innerText = total_Credits;
  
}
calculateTotalCredits()

/*coursework grid*/
courses.forEach(course=>{
  const card = document.createElement("div");
  card.className = "courseWorkCard";
  if (course.completed) {
    card.classList.add("completed");
    
  }
  const title = document.createElement("h4");
  const coursecard = document.createElement("p");
const credits = document.createElement("p");
  title.innerHTML =  course.title;
  coursecard.innerHTML = `${course.subject} ${course.number}`;
  credits.innerHTML = `credits : ${course.credits}`;
  card.appendChild(title)
  card.appendChild(coursecard);
  card.appendChild(credits);

  const coursesList = [
    { key: 1, course: 'WDD130', taken: true },
    { key: 2, course: 'WDD131', taken: true },
    { key: 3, course: 'CSE111', taken: true },
    {key: 4, course: 'CSEPC11O', taken: true},
    {key: 5, course: 'CIT111', taken: true},
    {key: 6, course: 'CSE210', taken: false},
    {key: 7, course: 'GS170', taken: false},
    {key: 8,course: 'WDD231', taken: false},

  ];
  
  const transformedCourses = courses.filter((course) => course.taken);

  const courseList = document.getElementById('course-list');
  
  transformedCourses.forEach((course) => {
      const listItem = document.createElement('li');
      listItem.textContent = course.course;
      courseList.appendChild(listItem);
  });

  const classesGrid = document.getElementById('classesGrid');

// Function to render courses
function renderCourses(coursesToShow) {
  classesGrid.innerHTML = '';
  coursesToShow.forEach((course) => {
    const courseHTML = `
      <div class="course ${course.taken ? 'taken' : 'not-taken'}">
        ${course.course}
      </div>
    `;
    classesGrid.insertAdjacentHTML('beforeend', courseHTML);
  });
}

// Event listeners for buttons
document.getElementById('show-all').addEventListener('click', () => {
  renderCourses(coursesList);
});

document.getElementById('show-cse').addEventListener('click', () => {
  const cseCourses = coursesList.filter((course) => course.course.startsWith('CSE'));
  renderCourses(cseCourses);
});

document.getElementById('show-wdd').addEventListener('click', () => {
  const wddCourses = coursesList.filter((course) => course.course.startsWith('WDD'));
  renderCourses(wddCourses);
});

// Initial render
renderCourses(coursesList);

  
  console.log(transformedCourses);
  document.getElementById("courseWorkGrid").appendChild(card)
})

const checkbox = document.getElementById('check');
const menu = document.querySelector('.menu');

checkbox.addEventListener('change', () => {
  menu.classList.toggle('active');
});
const navigation = document.getElementById('navigation')
const hamburger = document.getElementById('hamburger')

hambuger.addEventListener('click', ()=>{
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
