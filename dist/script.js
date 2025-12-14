// ======== Step 1 ====== atch all element
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const generateColorBtn = document.getElementById("generateColorBtn");
const popup = document.getElementById("successPopup");
const btnIcon = document.querySelector("i");
// ======== Step 2 ====== generateColor RGB Color
const generateColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
};
// ======== Step 3 ====== Update  Created Color
const updateColor = () => {
    const color = generateColor();
    colorBox.style.backgroundColor = color;
    colorCode.innerText = color;
};
// ======== Step 4 ====== copy color code and shoe popUp
const copyColorCode = () => {
    const text = colorCode.innerText;
    navigator.clipboard.writeText(text)
        .then(() => {
        // show icon
        btnIcon.className = "fa-solid fa-check";
        // Show Popup
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
            btnIcon.className = "fa-solid fa-copy";
        }, 2000);
    });
};
// ======== Step 5 ====== EventListeners======
generateColorBtn.addEventListener("click", updateColor);
copyButton.addEventListener("click", copyColorCode);
document.addEventListener("DOMContentLoaded", updateColor);
export {};
//# sourceMappingURL=script.js.map