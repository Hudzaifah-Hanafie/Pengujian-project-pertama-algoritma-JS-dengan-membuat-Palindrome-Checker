const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const divResult = document.getElementById('result');

const isPalindrome = (text) => {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    if (cleaned === reversed) {
        return divResult.innerText = `${text} is a palindrome`;
    } else {
        return divResult.innerText = `${text} is not a palindrome`;
    }
};

checkBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (textInput.value.trim() === "") {
        alert("Please input a value");
    }
    isPalindrome(textInput.value);
});