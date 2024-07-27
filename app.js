
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');
    const maxLength = 50;

    const updateCharCount = () => {
        const textLength = textInput.value.length;
        const remaining = maxLength - textLength;

        charCount.textContent = `Всего символов: ${textLength} / Осталось символов: ${remaining}`;

        if (textLength > maxLength) {
            textInput.value = textInput.value.substring(0, maxLength);
            charCount.textContent = `Всего символов: ${maxLength} / Осталось символов: 0`;
        }
    };

    updateCharCount();
    textInput.addEventListener('input', updateCharCount);
});

