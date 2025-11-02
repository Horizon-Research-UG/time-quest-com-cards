// Global variables
let currentLevel = 1;
let currentQuestions = [];
let usedQuestions = new Set();

// DOM elements
const levelSelection = document.getElementById('levelSelection');
const questionDisplay = document.getElementById('questionDisplay');
const questionText = document.getElementById('questionText');
const currentLevelText = document.getElementById('currentLevelText');
const newQuestionBtn = document.getElementById('newQuestionBtn');
const changeLevelBtn = document.getElementById('changeLevelBtn');
const backBtn = document.getElementById('backBtn');
const additionalQuestions = document.getElementById('additionalQuestions');
const additionalQuestionsList = document.getElementById('additionalQuestionsList');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    showLevelSelection();
});

// Event listeners
function setupEventListeners() {
    // Level selection
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
        card.addEventListener('click', function() {
            const level = parseInt(this.dataset.level);
            selectLevel(level);
        });
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Button listeners
    newQuestionBtn.addEventListener('click', getRandomQuestion);
    changeLevelBtn.addEventListener('click', showLevelSelection);
    backBtn.addEventListener('click', showLevelSelection);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            showLevelSelection();
        } else if (e.key === ' ' || e.key === 'Enter') {
            if (!questionDisplay.classList.contains('hidden')) {
                e.preventDefault();
                getRandomQuestion();
            }
        }
    });
}

// Level selection
function selectLevel(level) {
    currentLevel = level;
    currentQuestions = questions[`level${level}`] || [];
    usedQuestions.clear(); // Reset used questions when changing level
    
    if (currentQuestions.length === 0) {
        alert('Keine Fragen für dieses Level verfügbar.');
        return;
    }
    
    showQuestionDisplay();
    getRandomQuestion();
}

// Show level selection screen
function showLevelSelection() {
    levelSelection.classList.remove('hidden');
    questionDisplay.classList.add('hidden');
    
    // Add entrance animation
    setTimeout(() => {
        const levelCards = document.querySelectorAll('.level-card');
        levelCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 50);
}

// Show question display screen
function showQuestionDisplay() {
    levelSelection.classList.add('hidden');
    questionDisplay.classList.remove('hidden');
    
    // Update level indicator
    const levelNames = {
        1: 'Level 1 - Kontaktaufnahme',
        2: 'Level 2 - Smalltalk',
        3: 'Level 3 - Tiefe Gespräche',
        4: 'Level 4 - Authentizität',
        5: 'Level 5 - Verbundenheit'
    };
    
    currentLevelText.textContent = levelNames[currentLevel] || `Level ${currentLevel}`;
    
    // Show additional questions for Level 1
    if (currentLevel === 1 && questions.level1Additional) {
        showAdditionalQuestions();
    } else {
        additionalQuestions.classList.add('hidden');
    }
}

// Get random question
function getRandomQuestion() {
    if (!currentQuestions || currentQuestions.length === 0) {
        questionText.textContent = 'Keine Fragen verfügbar für dieses Level.';
        return;
    }
    
    // Reset if all questions have been used
    if (usedQuestions.size >= currentQuestions.length) {
        usedQuestions.clear();
        showNotification('Alle Fragen wurden gezeigt. Die Liste wird zurückgesetzt.');
    }
    
    // Get available questions
    const availableQuestions = currentQuestions.filter((_, index) => !usedQuestions.has(index));
    
    if (availableQuestions.length === 0) {
        questionText.textContent = 'Alle Fragen für dieses Level wurden bereits gezeigt.';
        return;
    }
    
    // Select random question
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];
    
    // Find original index and mark as used
    const originalIndex = currentQuestions.indexOf(selectedQuestion);
    usedQuestions.add(originalIndex);
    
    // Display question with animation
    animateQuestionChange(selectedQuestion);
    
    // Update button text based on remaining questions
    const remainingQuestions = currentQuestions.length - usedQuestions.size;
    if (remainingQuestions > 0) {
        newQuestionBtn.textContent = `Neue Frage (${remainingQuestions} übrig)`;
    } else {
        newQuestionBtn.textContent = 'Liste zurücksetzen';
    }
}

// Animate question change
function animateQuestionChange(newQuestion) {
    const questionCard = document.querySelector('.question-card');
    
    // Fade out
    questionCard.style.opacity = '0';
    questionCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        questionText.textContent = newQuestion;
        
        // Fade in
        questionCard.style.transition = 'all 0.4s ease';
        questionCard.style.opacity = '1';
        questionCard.style.transform = 'translateY(0)';
    }, 200);
}

// Show additional questions for Level 1
function showAdditionalQuestions() {
    if (!questions.level1Additional) return;
    
    additionalQuestions.classList.remove('hidden');
    additionalQuestionsList.innerHTML = '';
    
    questions.level1Additional.forEach((question, index) => {
        const li = document.createElement('li');
        li.textContent = question;
        li.style.animationDelay = `${index * 0.1}s`;
        additionalQuestionsList.appendChild(li);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(102, 126, 234, 0.9);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add some interactive features
function addInteractiveFeatures() {
    // Add particle effect on level selection
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
        card.addEventListener('click', function(e) {
            createClickEffect(e.target, e.clientX, e.clientY);
        });
    });
}

// Create click effect
function createClickEffect(element, x, y) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(102, 126, 234, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        left: ${x - rect.left - 25}px;
        top: ${y - rect.top - 25}px;
        width: 50px;
        height: 50px;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Initialize interactive features when DOM is loaded
document.addEventListener('DOMContentLoaded', addInteractiveFeatures);