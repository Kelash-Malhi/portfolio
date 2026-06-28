// DOM Element Nodes
const achievementGrid = document.getElementById("achievement-grid");
const projectGrid = document.getElementById("project-grid");
const educationList = document.getElementById("education-list");
const booksList = document.getElementById("books-list");
const moviesList = document.getElementById("movies-list");
const skillsGrid = document.getElementById("skills-grid");
const backToTopBtn = document.getElementById("backToTop");
const copyEmailBtn = document.getElementById("copyEmailBtn");
const yearElement = document.getElementById("year");

// Technical Skills Dataset
const coreSkills = [
  "Python Computing", "SQL", "Data Modeling", "Power BI", 
  "Tableau Dashboards", "Exploratory Data Analysis (EDA)", 
  "Data Storytelling", "Statistical Methods", "Data Structures & Algorithms (DSA)"
];

const achievements = [
  { type: "heading", text: "GLOBAL ANALYTICS & CAREER SPECIALIZATIONS" },
  {
    title: "Google AI Essentials — Professional Certificate",
    description: "The ultimate credential awarded by Google upon successful architecture and execution of all 7 core AI engineering tracks. Validated full-scale professional competence in deploying predictive pipelines, multi-modal generative assets, advanced structured prompting, and localized application system integrations.",
    media: "assets/certificates/gcc0.jpg",
    mediaType: "image",
    link: "https://coursera.org/share/683255306b27c0a5d90d0325720cfdeb",
    isMaster: true
  },
  {
    title: "Google AI Certificate 1: AI Fundamentals",
    description: "Mastered core artificial intelligence paradigms, exploring machine learning operational cycles, neural network concepts, and structural data frameworks while evaluating data ethics, algorithmic bias, and security protocols.",
    media: "assets/certificates/gcc1.jpg",
    mediaType: "image",
    link: "https://coursera.org/share/f5bb64381d94e87a31fb857c4bac553a",
    series: "google-ai"
  },
  {
    title: "Google AI Certificate 2: AI for Brainstorming and Planning",
    description: "Leveraged advanced large language models (LLMs) to construct high-velocity project pipelines, map product architecture ideas, and optimize technical workflows for software development models.",
    media: "assets/certificates/gcc2.jpg",
    mediaType: "image",
    link: "https://coursera.org/share/32907afbb403e47a1f532d4ee142872f",
    series: "google-ai"
  },
  {
    title: "Google AI Certificate 3: AI for Research and Insights",
    description: "Deployed specialized cognitive AI nodes to ingest dense unstructured data, optimize semantic search patterns, run market intelligence queries, and synthesize complex technical documentation.",
    media: "assets/certificates/gcc3.jpg",
    mediaType: "image",
    link: "https://coursera.org/share/90747a953542262e8d14feb469570a34",
    series: "google-ai"
  },
  {
    title: "Google AI Certificate 4: AI for Writing and Communicating",
    description: "Engineered precise prompt engineering structures to draft corporate technical specs, automate complex communication channels, and refine product onboarding documentation.",
    media: "assets/certificates/gcc4.jpg",
    mediaType: "image",
    link: "https://coursera.org/share/355601c1199d073ae8831c17fffdb87c",
    series: "google-ai"
  },
  {
    title: "Google AI Certificate 5: AI for Content Creation",
    description: "Explored generative modeling pipelines for asset production, mapping multi-modal algorithms to generate high-end visual design frameworks and digital product documentation assets.",
    media: "assets/certificates/gcc5.jpg",
    mediaType: "image",
    link: "https://coursera.org/share/62add493d8520e51eb0c915f5ac5b39d",
    series: "google-ai"
  },
  {
    title: "Google AI Certificate 6: AI for Data Analysis",
    description: "Applied machine learning optimization models to automate raw dataset cleansing, execute automated exploratory data analysis (EDA), and build predictive statistical workflows for business intelligence.",
    media: "assets/certificates/gcc6.jpg",
    mediaType: "image",
    link: "https://coursera.org/share/2baa4ec89d5c21d22667c62290f6bcf3",
    series: "google-ai"
  },
  {
    title: "Google AI Certificate 7: AI for App Building",
    description: "Architected and deployed AI-driven software nodes, focusing on integrating large language models (LLMs) and automated analytical engines into functional application backend systems to maximize runtime utility.",
    media: "assets/certificates/gcc7.jpg",
    mediaType: "image",
    link: "https://coursera.org/share/2779e4f1f4990d5bd0cb92871139d9ba",
    series: "google-ai"
  },
  {
    title: "AI For Everyone — DeepLearning.AI",
    description: "Foundational conceptual framework under Andrew Ng, focusing on machine learning project workflows, data strategy infrastructure, and neural networking lifecycles.",
    media: "assets/certificates/dlai.png",
    mediaType: "image",
    link: "https://coursera.org/share/5f98f220105e53c1b0f01619fc300329"
  },
   { type: "heading", text: "COMPUTATIONAL ALGORITHMS & CORE ENGINEERING" },
  {
    title: "Python Development & Engineering Certificate",
    description: "Completed an intensive development track covering object-oriented structures, algorithms, and computational efficiency pipelines authorized by PITP-Muet.",
    media: "assets/certificates/pitpc.png",
    mediaType: "image",
    link: "assets/certificates/pitpc.png"
  },
   {
    title: "The Data Science Profession — University of London",
    description: "Analyzed case studies on standard pipelines, production requirements, statistical methodologies, and structural communication models in institutional analytics groups.",
    media: "assets/certificates/uol.png",
    mediaType: "image",
    link: "https://coursera.org/share/d13f57cc23662629c44f9743ab428729"
  },
  {
    title: "Data Science Foundations",
    description: "Earned a foundational certification from Great Learning Academy covering core data science concepts, exploratory data analysis methodology, and introductory analytical modeling.",
    media: "assets/certificates/dsf.jpg",
    mediaType: "image",
    link: "https://www.mygreatlearning.com/certificate/VWVHSWEO?referrer_code=GLMLKL6WCY4FW"
  },

  
  { type: "heading", text: "DIVERSE TECHNICAL FOUNDATIONS & INTERDISCIPLINARY STUDIES" },
  {
    title: "Front End Development - HTML",
    description: "Acquired essential web architecture skills through Great Learning Academy, mastering semantic HTML structure, document object mapping, and responsive markup layouts.",
    media: "assets/certificates/html.jpg",
    mediaType: "image",
    link: "https://www.mygreatlearning.com/certificate/XICBMPQE?referrer_code=GLMLKL6WCY4FW"
  }
];

const projects = [
  { type: "heading", text: "DATA SCIENCE & ANALYTICAL DASHBOARDS" },
  {
    title: "Interactive Storytelling Portfolio Dashboard",
    description: "Designed a structural interface implementing critical information hygiene principles from 'Storytelling with Data'. Built to display core analytical metrics and insights with clean spatial design.",
    url: "https://kelash-malhi.github.io/portfolio/"
  },
  {
    title: "Automated Library Management & Log Engine",
    description: "An algorithmic inventory framework built with Python to model transactional records, automate inventory state tracking, and optimize log lookups using structured files.",
    url: "https://github.com/Kelash-Malhi/Library-Management-System.git"
  },
  {
    title: "Smart Learning Pipeline Router Tool",
    description: "A contextual data redirection utility designed to dynamically optimize user paths into specific educational content distribution pipelines based on query metrics.",
    url: "https://github.com/Kelash-Malhi/Smart-Learning-Playlist-Redirect-Tool.git"
  },
  { type: "heading", text: "DATA CONVERSION & TEXT COMPUTING UTILITIES" },
  {
    title: "S---S DotDash (Morse Pipeline Converter)",
    description: "An algorithmic processing tool constructed to parse alpha characters and compress them into standard alternate transmission signals (Morse syntax structures) bi-directionally.",
    url: "https://github.com/Kelash-Malhi/S---S_DotDash"
  },
  {
    title: "L337 C0D3 Alpha Parser",
    description: "A dictionary-mapped encoding system developed to translate native characters into complex alphanumeric representations, managing computational mapping lookups dynamically.",
    url: "https://github.com/Kelash-Malhi/L337-C0D3"
  },
  {
    title: "Statistical Unicode Emoji Encoder",
    description: "A string mapping matrix utility mapped to safely transform semantic string text sequences directly into precise visual unicode glyph maps.",
    url: "https://github.com/Kelash-Malhi/TextEmoji"
  },
  {
    title: "ASCII Matrix Converter Engine",
    description: "A clean translation framework focused on processing structural raw string input parameters into explicit standardized integer ASCII array representations.",
    url: "https://github.com/Kelash-Malhi/ASCII"
  },
  { type: "heading", text: "PRODUCT INTERFACES & AUTOMATION WALLPAPERS" },
  {
    title: "Precious Time Epoch Wallpaper",
    description: "An interactive, low-latency client-side engine running dynamic countdown matrices utilizing modular temporal data calculations to display fluid chronological metrics.",
    url: "https://github.com/Kelash-Malhi/PreciousTime/"
  },
  {
    title: "The Secret Cryptographic Hub Portal",
    description: "A centralized dashboard hosting a full suit of string parsers and signal matrices (ASCII/LEET/MORSE) bundled into a high-performance, single glassmorphism UI portal.",
    url: "https://kelash-malhi.github.io/secret/"
  }
];

const booksRead = [
  {
    title: "Storytelling with Data",
    author: "Cole Nussbaumer Knaflic",
    status: "In Pipeline (Active)",
    desc: "Analyzing visual cognition mechanics, cognitive load reduction, and structural data visualization frameworks to design high-impact corporate analytical dashboards."
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    status: "In Pipeline (Active)",
    desc: "Exploring vertical progress models, monopoly frameworks, and architectural thinking required to build technology-driven value paradigms from scratch."
  },
  {
    title: "The Power of Discipline",
    author: "Daniel Walter",
    status: "In Pipeline (Active)",
    desc: "Studying neural focus habits, operational consistency algorithms, and methods to eliminate compounding digital distractions for high-performance engineering routines."
  },
  {
    title: "White Nights",
    author: "Fyodor Dostoevsky",
    status: "In Pipeline (Active)",
    desc: "Delving into classical psychological sub-texts and analytical human behavior mapping to complement data storytelling with deep empathy and narrative structure."
  }
];

const moviesMedia = [
  {
    title: "Iron Man & The J.A.R.V.I.S. Paradigm",
    genre: "Artificial General Intelligence (AGI)",
    desc: "Driven by a deep technical obsession with the J.A.R.V.I.S. infrastructure framework, evaluating its multi-modal computer vision pipelines, edge telemetry grids, and automated decision-making clusters.",
    isJarvis: true
  },
  {
    title: "The Social Network (2010)",
    genre: "Algorithmic Scaling & Data Architecture",
    desc: "Observed the deployment of dynamic graphing algorithms, database architecture optimization, and high-velocity infrastructure scaling within early-stage technical platform lifecycles."
  },
  {
    title: "Moneyball (2011)",
    genre: "Predictive Modeling & Sports Analytics",
    desc: "Analyzed empirical data systems, regression analysis models, and statistical optimization over traditional intuition to maximize asset value under strict resource constraints."
  },
  {
    title: "The Social Dilemma (2020)",
    genre: "Data Ethics & Algorithmic Optimization",
    desc: "Studied the behavioral analytics feedback loops, predictive user engineering, and big-data optimization models driving modern large-scale personalization algorithms."
  }
];

const education = [
  {
    degree: "B.Sc. in Data Science",
    institute: "University Of Sindh Jamshoro",
    year: "2025 - 2028"
  },
  {
    degree: "Higher Secondary Certification",
    institute: "Paradise Public School & College Umerkot",
    year: "2022 - 2024"
  },
  {
    degree: "Secondary School Certification",
    institute: "Paradise Public School & College Umerkot",
    year: "2020 - 2022"
  }
];

function createCardShell() {
  const card = document.createElement("article");
  card.className = "card tilt-card";
  return card;
}

function renderSkills() {
  if (!skillsGrid) return;
  skillsGrid.innerHTML = "";
  coreSkills.forEach(skill => {
    const span = document.createElement("span");
    span.className = "skill-badge";
    span.textContent = skill;
    skillsGrid.appendChild(span);
  });
}

function renderAchievements() {
  if (!achievementGrid) return;
  achievementGrid.innerHTML = "";
  
  const seriesCounters = {};
  // Compute true total sub-modules before processing items
  const subModules = achievements.filter(x => x.series && !x.isMaster);
  const totalSubModules = subModules.length;

  achievements.forEach((item) => {
    if (item.type === "heading") {
      const sectionTitle = document.createElement("h2");
      sectionTitle.textContent = item.text;
      sectionTitle.className = "project-section-heading";
      achievementGrid.appendChild(sectionTitle);
      return;
    }
    
    const card = createCardShell(); 

    if (item.series && !item.isMaster) {
      card.classList.add("gcc-ai-minimal-card");
      
      if (!seriesCounters[item.series]) {
        seriesCounters[item.series] = 0;
      }
      
      const currentIdx = seriesCounters[item.series];
      
      if (currentIdx === 0) {
        card.classList.add("gcc-ai-node-first");
      } else if (currentIdx === totalSubModules - 1) {
        card.classList.add("gcc-ai-node-last");
      } else {
        card.classList.add("gcc-ai-node-mid");
      }
      
      seriesCounters[item.series]++;
      item.moduleNumber = seriesCounters[item.series];
    } 
    else if (item.isMaster) {
      card.classList.add("gcc-ai-standalone-card");
    }

    if (item.mediaType === "image") {
      const image = document.createElement("img");
      image.src = item.media;
      image.alt = `${item.title} preview`;
      card.appendChild(image);
    }

    const infoDiv = document.createElement("div");
    
    if (item.isMaster) {
      const cyberTag = document.createElement("span");
      cyberTag.className = "cyber-tag-master";
      cyberTag.innerHTML = "<i class='fas fa-trophy'></i> GOOGLE PROFESSIONAL CERTIFICATE";
      infoDiv.appendChild(cyberTag);
    }
    else if (item.series && !item.isMaster) {
      const cyberTag = document.createElement("span");
      cyberTag.className = "cyber-tag-node";
      cyberTag.innerHTML = `GOOGLE CAREER CERTIFICATE 0${item.moduleNumber}`;
      infoDiv.appendChild(cyberTag);
    }

    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.description;
    
    infoDiv.appendChild(title);
    infoDiv.appendChild(description);
    card.appendChild(infoDiv);

    const link = document.createElement("a");
    link.href = item.link;
    if(item.link && item.link !== "#") {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.innerHTML = "Verify Credentials <i class='fas fa-external-link-alt'></i>";
    } else {
        link.innerHTML = "Completed <i class='fas fa-check-circle'></i>";
    }

    card.appendChild(link);
    achievementGrid.appendChild(card);
  });
}

function renderProjects() {
  if (!projectGrid) return;
  projectGrid.innerHTML = "";
  projects.forEach((project) => {
    if (project.type === "heading") {
      const sectionTitle = document.createElement("h2");
      sectionTitle.textContent = project.text;
      sectionTitle.className = "project-section-heading";
      projectGrid.appendChild(sectionTitle);
      return;
    }
    const card = createCardShell();
    
    const infoDiv = document.createElement("div");
    const heading = document.createElement("h3");
    heading.textContent = project.title;
    const description = document.createElement("p");
    description.textContent = project.description;
    
    infoDiv.appendChild(heading);
    infoDiv.appendChild(description);
    card.appendChild(infoDiv);

    const link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = "Review Architecture <i class='fas fa-code-branch'></i>";

    card.appendChild(link);
    projectGrid.appendChild(card);
  });
}

function renderLearningHub() {
  if (booksList) {
    booksList.innerHTML = "";
    booksRead.forEach((book) => {
      const div = document.createElement("div");
      div.className = "sub-item";
      const statusColor = book.status.includes("Active") ? "var(--secondary)" : "var(--primary)";
      
      div.innerHTML = `
        <div class="learning-header">
          <h4>${book.title}</h4>
          <span class="learning-status" style="color: ${statusColor};">${book.status}</span>
        </div>
        <p class="learning-author">By ${book.author}</p>
        <p class="learning-desc">${book.desc}</p>
      `;
      booksList.appendChild(div);
    });
  }

  if (moviesList) {
    moviesList.innerHTML = "";
    moviesMedia.forEach((movie) => {
      const div = document.createElement("div");
      
      if (movie.isJarvis) {
        div.className = "sub-item jarvis-highlight-node";
        div.innerHTML = `
          <div class="jarvis-badge">
            <i class="fas fa-satellite-dish"></i> JARVIS_CORE
          </div>
          <div class="jarvis-title-row">
            <i class="fas fa-atom"></i>
            <h4>${movie.title}</h4>
          </div>
          <p class="jarvis-sub">[ INSPIRATIONAL ANCHOR & SYSTEM ANALYSIS ]</p>
          <p class="jarvis-desc">
            <span>[OBSESSION_LOG]</span> ${movie.desc}
          </p>
        `;
      } else {
        div.className = "sub-item";
        div.innerHTML = `
          <h4>${movie.title}</h4>
          <p class="learning-author">Genre: ${movie.genre}</p>
          <p class="learning-desc">${movie.desc}</p>
        `;
      }
      moviesList.appendChild(div);
    });
  }
}

function renderEducation() {
  if (!educationList) return;
  educationList.innerHTML = "";
  education.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    item.innerHTML = `<h3>${entry.degree}</h3><p class="timeline-inst">${entry.institute}</p><p class="timeline-year">${entry.year}</p>`;
    educationList.appendChild(item);
  });
}

// Highly optimized declarative 3D Card Hover Interaction using custom properties instead of constant JS paint re-evaluations
function enableCardTiltAnimation() {
  const cards = document.querySelectorAll(".tilt-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = (0.5 - (y / rect.height)) * 10;
      
      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
      card.style.setProperty("--ty", `-4px`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--rx", `0deg`);
      card.style.setProperty("--ry", `0deg`);
      card.style.setProperty("--ty", `0px`);
    });
  });
}

function setupResumePopup() {
  const modal = document.getElementById("resume-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const resumeTriggers = document.querySelectorAll(".resume-trigger");

  if (!modal || !closeBtn) return;

  resumeTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

function setupInteractionListeners() {
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("kelashhamthani2.0@gmail.com").then(() => {
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = "<i class='fas fa-check'></i> Copied!";
        copyEmailBtn.classList.add("copied-success");
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
          copyEmailBtn.classList.remove("copied-success");
        }, 2000);
      });
    });
  }
}

function initializePortfolio() {
  renderSkills();
  renderAchievements();
  renderProjects();
  renderLearningHub();
  renderEducation();
  enableCardTiltAnimation();
  setupInteractionListeners();
  setupResumePopup();
  
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", initializePortfolio);
