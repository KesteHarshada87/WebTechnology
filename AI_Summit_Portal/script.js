const container = document.getElementById("speakersContainer");

// ✅ Fetch speakers data
async function loadSpeakers() {
  try {
    const response = await fetch("speakers.json");  // Fetch (Promise)
    const speakers = await response.json();         // Convert to JSON

    displaySpeakers(speakers);
  } catch (error) {
    console.error("Error loading speakers:", error);
  }
}

// ✅ Display speakers
function displaySpeakers(speakers) {
  speakers.forEach((speaker) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${speaker.img}">
      <h3>${speaker.name}</h3>
    `;

    // ✅ Event handling
    card.addEventListener("click", () => {
      showSpeech(speaker.quote);
    });

    container.appendChild(card);
  });
}

// ✅ Show speech
function showSpeech(text) {
  let speechBox = document.getElementById("speechBox");

  if (!speechBox) {
    speechBox = document.createElement("div");
    speechBox.id = "speechBox";
    speechBox.className = "speech-box";
    document.querySelector(".section").appendChild(speechBox);
  }

  speechBox.innerHTML = `"${text}"`;
}

// ✅ Navigation
function goToInnovations() {
  window.location.href = "innovations.html";
}

// Load data when page loads
loadSpeakers();