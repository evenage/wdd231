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

/* Hamburger Menu*/
const hamburger = document.querySelector("#burger-menu");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

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


  document.getElementById("courseWorkGrid").appendChild(card)
})

