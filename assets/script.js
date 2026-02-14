const achievementGrid = document.getElementById("achievement-grid");
const projectGrid = document.getElementById("project-grid");
const educationList = document.getElementById("education-list");
const yearElement = document.getElementById("year");

// This dataset stores achievement items that are controlled from the admin/code side.
const achievements = [
  {
    title: "Python Developer Certificate",
    description: "Completed a two month intensive Python development course offered by PITP-Muet.",
    media: "assets/Certificates/Certificate2.jpeg",
    mediaType: "image",
    link: "assets/Certificates/Certificate2.jpeg"
  },
  {
    title: "AI For Everyone",
    description: "an online Introductory course authorized by DeepLearning.AI and offered through Coursera.",
    media: "assets/Certificates/Certificate.png",
    mediaType: "image",
    link: "https://coursera.org/share/5f98f220105e53c1b0f01619fc300329"
  },
  {
    title: "The Data Science Profession – Student View",
    description: "an online course authorized by University of London and offered through Coursera.",
    media: "assets/Certificates/Certificate1.png",
    mediaType: "image",
    link: "https://coursera.org/share/5f98f220105e53c1b0f01619fc300329"
  }
];

// This dataset stores project cards with live URLs for customers to open and explore.
const projects = [
  {
    title: "Library Management System",
    description: "A Python-based system to manage library operations like book checkout, return, and inventory tracking.",
    url: "https://example.com"
  },
  {
    title: "Number Guessing Game",
    description: "A simple number guessing game built with Python.",
    url: "https://github.com/Kelash-Malhi/number_guessing_game"
  }
  
];

// This dataset stores education details to display academic timeline entries.
const education = [
  {
    degree: "B.Sc. in Data Science",
    institute: "University Of Sindh Jamshoro",
    year: "2025 - 2028"
  },
  {
    degree: "Higher Secondary",
    institute: "Paradise Public School & College Umerkot",
    year: "2022 - 2024"
  },
  {
    degree: "Secondary",
    institute: "Paradise Public School & College Umerkot",
    year: "2020 - 2022"
  }
];

// This function creates a reusable card element with 3D hover interaction structure.
function createCardShell() {
  const card = document.createElement("article");
  card.className = "card tilt-card";
  return card;
}

// This function renders all achievements as premium display-only cards.
function renderAchievements() {
  achievementGrid.innerHTML = "";

  achievements.forEach((item) => {
    const card = createCardShell();
    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    if (item.mediaType === "image") {
      const image = document.createElement("img");
      image.src = item.media;
      image.alt = `${item.title} preview`;
      card.appendChild(image);
    }

    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View certificate ↗";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);
    achievementGrid.appendChild(card);
  });
}

// This function renders project cards where each card opens the live project URL.
function renderProjects() {
  projectGrid.innerHTML = "";

  projects.forEach((project) => {
    const card = createCardShell();
    const heading = document.createElement("h3");
    heading.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open repository ↗";

    card.appendChild(heading);
    card.appendChild(description);
    card.appendChild(link);
    projectGrid.appendChild(card);
  });
}

// This function renders education records in a read-only timeline component.
function renderEducation() {
  educationList.innerHTML = "";

  education.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    item.innerHTML = `<h3>${entry.degree}</h3><p>${entry.institute}</p><p>${entry.year}</p>`;
    educationList.appendChild(item);
  });
}

// This function applies interactive mouse-driven 3D tilt animation to all portfolio cards.
function enableCardTiltAnimation() {
  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 14;
      const rotateX = (0.5 - (y / rect.height)) * 14;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

// This function initializes all read-only portfolio sections and shared UI values.
function initializePortfolio() {
  renderAchievements();
  renderProjects();
  renderEducation();
  enableCardTiltAnimation();
  yearElement.textContent = new Date().getFullYear();
}

initializePortfolio();
