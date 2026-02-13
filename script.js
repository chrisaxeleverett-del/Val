// 1. CONFIGURATION - Match these exactly to your filenames!
const successImg = "IMAGES/P yes.png"; 

const noImages = [
    "IMAGES/p.png", 
    "IMAGES/p2.png", 
    "IMAGES/p4.png", 
    "IMAGES/p3.png"
];

const noTexts = [
    "Are you sure? 🥺",
    "You are making me sad... 😭",
    "You are breaking my heart! 💔",
    "This is illegal behavior! 😤"
];

// 2. SELECTORS
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const folderBtn = document.getElementById("go-to-folders");
const mainImage = document.getElementById("display-image");
const questionText = document.getElementById("question");
const subText = document.getElementById("sub-text");

let noClickCount = 0;

// 3. NO BUTTON LOGIC
if (noBtn) {
    noBtn.addEventListener("click", () => {
        // As long as we haven't hit the 4th click yet...
        if (noClickCount < noImages.length) {
            // Change the image and the main text based on the count
            mainImage.src = noImages[noClickCount];
            questionText.innerText = noTexts[noClickCount];

            // Make the Yes button grow
            const currentFont = parseFloat(window.getComputedStyle(yesBtn).fontSize);
            yesBtn.style.fontSize = (currentFont + 15) + "px";
            
            noClickCount++;
        }

        // On the last click (4th click)
        if (noClickCount >= 4) {
            noBtn.style.display = "none"; // Hide the No button
            subText.innerText = "I've hidden the No button, so you're stuck with Yes! ✨";
        }
    });
}

// 4. YES BUTTON LOGIC
if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        mainImage.src = successImg; 
        questionText.innerText = "Yay! Best Valentine ever! ❤️";
        subText.innerText = "I have something for you...";
        
        // Hide the original buttons
        yesBtn.style.display = "none";
        if (noBtn) noBtn.style.display = "none";
        
        // Show the pulsing "Go to Surprises" button
        folderBtn.style.display = "block";
    });
}

// 5. REDIRECT TO FOLDERS
if (folderBtn) {
    folderBtn.addEventListener("click", () => {
        window.location.href = "folders.html";
    });
}