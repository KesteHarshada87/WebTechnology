// ===================== SPEAKERS DATA =====================
const speakers = [
    {
        name: "Narendra Modi",
        image: "modi.jpg",
        speech: `
India stands at the forefront of the AI revolution.
Our mission is AI for all and AI for inclusive growth.

Through the India AI Mission, we are building computing infrastructure,
supporting startups, and empowering research institutions.

AI will transform governance, healthcare, agriculture, and education.
India will lead in ethical and responsible AI innovation.
        `
    },
    {
        name: "Sam Altman",
        image: "sam.jpg",
        speech: `
Artificial Intelligence is the most transformative technology of our generation.

India has one of the strongest developer ecosystems globally.
Innovation happening here will shape future global AI systems.

Collaboration between Indian institutions and global labs
will define the next era of Artificial General Intelligence.

Responsible AI safety must always remain a priority.
        `
    },
    {
        name: "Sundar Pichai",
        image: "sundar.jpg",
        speech: `
AI is more powerful than electricity in its long-term impact.

India's digital public infrastructure is world-leading.
The next phase is AI-powered solutions for healthcare,
education, climate sustainability, and smart cities.

India's youth and developer talent will power the global AI future.
        `
    },
    {
        name: "Demis Hassabis",
        image: "demis.jpg",
        speech: `
At DeepMind, our goal is to build AI that helps solve the biggest scientific
and social challenges humans face — from climate, medicine and complex
decision-making systems.

AI research must be done ethically and with a global collaboration vision,
so its benefits can reach every society and every person.
        `
    },
    {
        name: "Bill Gates",
        image: "gates.jpg",
        speech: `
Artificial Intelligence has extraordinary potential to improve people's lives —
especially in health, agriculture, education and climate technology.

India's AI ecosystem represents a diverse and powerful engine for inclusive
innovation. With public-private partnerships and research, AI can create
new opportunities for all age groups.
        `
    }
];

// ===================== INNOVATIONS DATA =====================
const innovations = [
    "India AI Mission – National AI infrastructure initiative.",
    "AI-powered Digital Health Mission for predictive healthcare.",
    "Agriculture AI – Smart crop monitoring and yield prediction.",
    "AI in Smart Cities for traffic & safety optimization.",
    "ISRO AI systems for satellite analytics and space missions.",
    "Indian language AI translation models for regional access."
];

// ===================== INDIAN AI APPS =====================
const apps = [
    {
        name: "Bhashini",
        image: "bhashini.png",
        description: "Government AI platform for Indian language translation.",
        link: "https://bhashini.gov.in"
    },
    {
        name: "Krutrim AI",
        image: "krutrim.png",
        description: "Indian multilingual AI research and model tools.",
        link: "https://www.olakrutrim.com/ai-studio"
    },
    {
        name: "DigiYatra",
        image: "digiyatra.png",
        description: "AI-powered facial recognition for airports.",
        link: "https://digiyatra.com"
    },
    {
        name: "Sarvam AI",
        image: "sarvam.png",
        description: "Indian generative AI foundation model startup.",
        link: "https://www.sarvam.ai"
    },
    {
        name: "Zoho AI",
        image: "zoho.png",
        description: "AI tools integrated into Zoho business software.",
        link: "https://www.zoho.com/ai/"
    }
];

// ===================== DOM ELEMENTS =====================
const speakerContainer = document.getElementById("speakerContainer");
const innovationContainer = document.getElementById("innovationContainer");
const appContainer = document.getElementById("appContainer");

const innovationBtn = document.getElementById("innovationBtn");
const backBtn = document.getElementById("backBtn");

const homeSection = document.getElementById("homeSection");
const innovationSection = document.getElementById("innovationSection");

const speechSection = document.getElementById("speechSection");
const speechTitle = document.getElementById("speechTitle");
const speechText = document.getElementById("speechText");

// ===================== CREATE SPEAKER CARDS =====================
speakers.forEach(speaker => {

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = "images/" + speaker.image;

    const name = document.createElement("h3");
    name.textContent = speaker.name;

    card.appendChild(img);
    card.appendChild(name);

    card.addEventListener("click", function () {
        speechSection.style.display = "block";
        speechTitle.textContent = "🎤 What " + speaker.name + " Said:";
        speechText.textContent = speaker.speech;
        speechSection.scrollIntoView({ behavior: "smooth" });
    });

    speakerContainer.appendChild(card);
});

// ===================== CREATE INNOVATION CARDS =====================
innovations.forEach(item => {

    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = item;

    innovationContainer.appendChild(card);
});

// ===================== CREATE APP CARDS =====================
apps.forEach(app => {

    const card = document.createElement("div");
    card.classList.add("card", "app-card");

    const img = document.createElement("img");
    img.src = "images/" + app.image;

    const name = document.createElement("h3");
    name.textContent = app.name;

    const desc = document.createElement("p");
    desc.textContent = app.description;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(desc);

    card.addEventListener("click", function () {
        window.open(app.link, "_blank");
    });

    appContainer.appendChild(card);
});

// ===================== NAVIGATION EVENTS =====================
innovationBtn.addEventListener("click", function () {
    homeSection.style.display = "none";
    innovationSection.style.display = "block";
});

backBtn.addEventListener("click", function () {
    innovationSection.style.display = "none";
    homeSection.style.display = "block";
});