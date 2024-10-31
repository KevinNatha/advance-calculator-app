document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button:not(.theme-toggle)");
    const themeToggle = document.querySelector('.theme-toggle');
    const calculator = document.querySelector('.calculator');

    buttons.forEach(button => {
        button.addEventListener("click", () => handleButtonClick(button));
    });

    themeToggle.addEventListener('click', () => {
        calculator.classList.toggle('theme-dark');
    });

    function handleButtonClick(button) {
        const value = button.dataset.value;

        if (value === "C") {
            display.textContent = "";
        } else if (value === "=") {
            calculate();
        } else {
            // Menambahkan value ke display
            display.textContent += value === "sqrt" ? "Math.sqrt(" :
                                   value === "^2" ? "Math.pow(" :
                                   value === "pi" ? "Math.PI" :
                                   value === "e" ? "Math.E" :
                                   value === "sin" ? "Math.sin(" :
                                   value === "cos" ? "Math.cos(" :
                                   value === "tan" ? "Math.tan(" :
                                   value; // Tetap menggunakan value yang ada
        }
    }

    function calculate() {
        try {
            // Ganti semua koma menjadi titik untuk evaluasi
            const expression = display.textContent.replace(/,/g, '.');
            const result = eval(expression.replace(/Math.sqrt/g, "Math.sqrt")
                                           .replace(/Math.pow/g, "Math.pow"));
            display.textContent = result;
        } catch (error) {
            display.textContent = "Error";
        }
    }
});
