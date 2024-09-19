// settings.js

// Profile settings
const profileSettings = {
    name: "Vynaa Valerie",
    description: "Developer | Creator | Ai Engineer",
    profileImageUrl: "https://widipe.com/file/AVcO2vcXz5gM.png"
};

// Social media links
const socialLinks = {
    facebook: "https://www.vynaachan-api.shop",
    whatsapp: "https://www.vynaachan-api.shop",
    instagram: "https://www.vynaachan-api.shop",
    telegram: "https://www.vynaachan-api.shop"
};

// Projects
const projects = [
    {
        imageUrl: "https://widipe.com/file/2snxi8OQ5ROL.png",
        link: "https://www.vynaachan-api.shop",
        title: "Project 1"
    },
    {
        imageUrl: "https://widipe.com/file/1Fp7KERetYBv.png",
        link: "https://www.vynaachan-api.shop",
        title: "Project 2"
    }
];

// Skills
const skills = [
    {
        imageUrl: "https://widipe.com/file/kvPGZgSUck4j.png",
        title: "Node"
    },
    {
        imageUrl: "https://widipe.com/file/0hUhiU0P02CT.png",
        title: "JS"
    }
];

// Update profile
function updateProfile() {
    document.querySelector(".profile h1").textContent = profileSettings.name;
    document.querySelector(".profile p").textContent = profileSettings.description;
    document.querySelector(".profile img").src = profileSettings.profileImageUrl;
}

// Update social buttons
function updateSocialButtons() {
    const buttons = document.querySelectorAll(".social-button");
    buttons[0].href = socialLinks.facebook;
    buttons[1].href = socialLinks.whatsapp;
    buttons[2].href = socialLinks.instagram;
    buttons[3].href = socialLinks.telegram;
}

// Update projects
function updateProjects() {
    const projectContainer = document.querySelector(".projects");
    projectContainer.innerHTML = ''; // Clear existing projects
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}">
            <a href="${project.link}">${project.title}</a>
        `;
        projectContainer.appendChild(projectElement);
    });
}

// Update skills
function updateSkills() {
    const skillsContainer = document.querySelector(".skills-list");
    skillsContainer.innerHTML = ''; // Clear existing skills
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = `
            <img src="${skill.imageUrl}" alt="${skill.title}">
            <p>${skill.title}</p>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

// Initialize settings
function initializeSettings() {
    updateProfile();
    updateSocialButtons();
    updateProjects();
    updateSkills();
}

// Run the initialization
initializeSettings();
