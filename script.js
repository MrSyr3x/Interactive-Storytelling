/*
 * JavaScript Logic for Interactive Storytelling
 * Story Title: The Trial of Arjuna's Bow
 * Theme: Indian Mythology / Mahabharata-inspired Quest
 */

// --- 1. Story Data Structure (The Trial of Arjuna's Bow) ---
const storyData = {
    // STARTING POINT
    "start": {
        text: "You stand at the edge of the **Royal Arena** of Hastinapur. The challenge is set: String the mighty **Gandiva** (Arjuna's Bow) and strike the eye of a _wooden fish_ revolving high above, visible only by its reflection in the **water pot** below. Two paths lead to the bow:",
        choices: [
            { text: "Take the path through the Garden of Meditation (Seek Wisdom).", next: "path_dharma" },
            { text: "Go straight to the Archery Pavilion (Seek Skill).", next: "path_skill" }
        ]
    },

    // BRANCH 1A: PATH OF DHARMA (WISDOM)
    "path_dharma": {
        text: "The path is quiet. You encounter an _aged Brahmin_ (a sage) who asks, 'What is the purpose of this **Trial**?' You realize he is testing your understanding of **Dharma** (duty).",
        choices: [
            { text: "Answer: 'To win the prize and gain fame.' (Selfish motive)", next: "ending_brahmin_fail" },
            { text: "Answer: 'To perform my duty as a warrior, without attachment to the result.' (Right motive)", next: "brahmin_success" }
        ]
    },

    "brahmin_success": {
        text: "The Sage smiles, gifting you a **sacred thread** (a focus charm). He warns you of the illusion (**Maya**) that clouds the archer's sight. You continue to the bow.",
        choices: [
            { text: "Proceed to string the Gandiva.", next: "string_bow" },
            { text: "Seek advice from the onlookers at the pavilion first.", next: "ending_distracted" }
        ]
    },
    
    // BRANCH 1B: PATH OF SKILL
    "path_skill": {
        text: "You reach the **Archery Pavilion** where the mighty **Gandiva** rests. As you approach, a _jealous rival_ challenges you to a quick, unnecessary duel to test your focus.",
        choices: [
            { text: "Accept the duel to prove your superiority.", next: "duel_fail" },
            { text: "Politely refuse, stating your focus is only on the main Trial.", next: "duel_success" }
        ]
    },

    "duel_fail": {
        text: "You win the duel easily, but the exertion leaves your drawing arm shaking. You have wasted your strength and focus on **Krodha** (anger/jealousy).",
        choices: [
            { text: "Attempt to string the bow immediately, despite the shaking.", next: "string_fail" },
            { text: "Sit and meditate briefly to restore focus.", next: "string_bow" }
        ]
    },

    "duel_success": {
        text: "You wisely conserve your energy, showing **Samyama** (self-control). The rival is impressed and leaves. You approach the **Gandiva** refreshed and ready.",
        choices: [
            { text: "Proceed to string the Gandiva.", next: "string_bow" },
            { text: "Examine the water pot for any signs of a trap.", next: "ending_cautious" }
        ]
    },

    // BRANCH 2: STRINGING THE BOW
    "string_bow": {
        text: "The **Gandiva** is incredibly heavy. You must now string it. Your previous actions determine your **strength** and **focus**.",
        choices: [
            { text: "Focus solely on the wood, not your reflection (Apply the Brahmin's advice/Samyama).", next: "focus_test" },
            { text: "Focus on your own reflection in the water to gauge your form.", next: "string_fail" }
        ]
    },
    
    "string_fail": {
        text: "You strain and lose your balance! The bow string slips, snapping back and grazing your drawing arm. You are injured and must withdraw.",
        choices: [
            { text: "Withdraw from the trial to tend your wound.", next: "ending_skill_fail" },
            { text: "Try again, ignoring the pain and injury.", next: "ending_hubris" }
        ]
    },

    // BRANCH 3: THE FINAL SHOT
    "focus_test": {
        text: "You successfully string the bow! Now, you draw the arrow. The revolving **wooden fish** is visible only in the water's reflection. The **Ruler** asks, 'What do you see?'",
        choices: [
            { text: "Answer: 'I see the fish, the water, and the whole arena.' (Lack of focus)", next: "shot_fail" },
            { text: "Answer: 'I see only the eye of the fish.' (Perfect focus)", next: "shot_success" }
        ]
    },
    
    "shot_fail": {
        text: "The Ruler sighs, 'Your mind is scattered.' The **arrow misses** the eye and shatters the wooden fish's tail. You have failed the test of focus.",
        choices: [
            { text: "Accept the failure with humility.", next: "ending_humble_fail" },
            { text: "Demand a second chance, blaming the light.", next: "ending_hubris" }
        ]
    },

    "shot_success": {
        text: "The Ruler nods, 'Then strike!' You release the arrow. It flies with blinding speed, guided by a singular purpose, piercing the eye of the fish!",
        choices: [
            { text: "Claim the victory and the prize offered by the court.", next: "ending_success" },
            { text: "Thank the Sage for the sacred thread and leave silently.", next: "ending_silent_success" }
        ]
    },

    // --- ENDINGS ---
    "ending_brahmin_fail": {
        text: "The Sage shakes his head, saying, 'One who seeks only the fruit of the action is unfit for great duty.' He leads you back to the start. **Status: DHARMA_FAIL_RESTART.**",
        choices: []
    },
    "ending_distracted": {
        text: "You try to collect advice, but the crowd's noise is overwhelming. You spend too long, and another skilled archer strings the **Gandiva** first. **Status: DISTRACTION_TIMEOUT.**",
        choices: []
    },
    "ending_cautious": {
        text: "You spend five minutes checking for traps, wasting your peak energy. The crowd grows impatient, and your **focus is lost**. You decide to withdraw rather than face ridicule. **Status: CAUTION_OVERLOAD.**",
        choices: []
    },
    "ending_skill_fail": {
        text: "You withdraw from the trial, the injury a mark of your haste. The crowd murmurs its disappointment. **Status: PHYSICAL_FAILURE.**",
        choices: []
    },
    "ending_hubris": {
        text: "You demand a retry, but the Ruler finds your arrogance (Ahankara) insulting. You are disqualified and escorted from the arena. **Status: AHANKARA_DISQUALIFIED.**",
        choices: []
    },
    "ending_humble_fail": {
        text: "You accept your failure, recognizing your own lack of focus. You learn a valuable lesson, which is itself a great victory. **Status: LEARNING_SUCCESS.**",
        choices: []
    },
    "ending_success": {
        text: "The crowd roars! You have won the trial! The Ruler bestows upon you a magnificent title and the grand prize. **Status: VICTORY_GLORY. Success.**",
        choices: []
    },
    "ending_silent_success": {
        text: "You achieve victory, but your true reward is the realization of perfect focus. You silently leave the arena, carrying only the lesson, having achieved true **Moksha** (liberation/purpose). **Status: VICTORY_MOKSHA. Success.**",
        choices: []
    },
};


// --- 2. Core Logic and State Management (Unchanged) ---
let currentSegmentId = 'start';
let history = []; 

const storyTextElement = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');
const goBackButton = document.getElementById('go-back-button');
const restartButton = document.getElementById('restart-button');

/**
 * Loads and displays a new segment of the story.
 * @param {string} segmentId - The ID of the story segment to load.
 */
function loadStorySegment(segmentId) {
    const segment = storyData[segmentId];

    if (!segment) {
        console.error("Story segment not found:", segmentId);
        storyTextElement.innerHTML = "Error: Story segment not found."; 
        choicesContainer.innerHTML = '';
        return;
    }

    // Update story text with a smooth transition
    storyTextElement.style.opacity = '0';
    setTimeout(() => { 
        // Use innerHTML to render bold/italic tags
        storyTextElement.innerHTML = segment.text; 
        storyTextElement.style.opacity = '1';
    }, 200);

    // Clear old choices
    choicesContainer.innerHTML = '';

    // Generate new choice buttons
    segment.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'm3-button filled-button choice-button';
        button.textContent = choice.text;
        button.addEventListener('click', () => {
            history.push(currentSegmentId);
            currentSegmentId = choice.next;
            loadStorySegment(currentSegmentId);
            updateNavigationButtons();
        });
        choicesContainer.appendChild(button);
    });

    // Handle endings (segments with no choices)
    if (segment.choices.length === 0) {
        choicesContainer.style.display = 'none';
        goBackButton.style.display = 'none'; 
    } else {
        choicesContainer.style.display = 'flex';
    }
}

/**
 * Manages the visibility and state of the navigation buttons.
 */
function updateNavigationButtons() {
    if (history.length > 0 && storyData[currentSegmentId].choices.length > 0) {
        goBackButton.style.display = 'inline-flex'; 
    } else {
        goBackButton.style.display = 'none';
    }
}

/**
 * Event listener for the 'Go Back' button.
 */
goBackButton.addEventListener('click', () => {
    if (history.length > 0) {
        const prevSegmentId = history.pop();
        currentSegmentId = prevSegmentId;
        loadStorySegment(currentSegmentId);
        updateNavigationButtons();
    }
});

/**
 * Event listener for the 'Restart' button.
 */
restartButton.addEventListener('click', () => {
    history = [];
    currentSegmentId = 'start';
    loadStorySegment(currentSegmentId);
    updateNavigationButtons();
});

// --- 3. Initialize the Story ---
loadStorySegment(currentSegmentId);