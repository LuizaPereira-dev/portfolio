const typedTextElement = document.getElementById("typing");

const text = "Bem-vindo ao meu portfólio";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typedTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

typeEffect();