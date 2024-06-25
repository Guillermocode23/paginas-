// scripts.js

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar mensaje introductorio
    displayMessage('Bot','¡Hola! Soy un chatbot. Puedes preguntarme sobre nuestro horario, servicios o cómo contactarnos.');

    // Agregar evento al botón de enviar
    document.getElementById('send-btn').addEventListener('click', sendMessage);
    document.getElementById('user-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Función para enviar mensaje del usuario
    function sendMessage() {
        var userInput = document.getElementById('user-input').value;
        if (userInput.trim() !== '') {
            displayMessage('Usuario', userInput);
            document.getElementById('user-input').value = '';
            generateBotResponse(userInput);
        }
    }

    // Función para mostrar mensaje del chatbot
    function displayMessage(sender, message) {
        var chatOutput = document.getElementById('chat-output');
        var messageElement = document.createElement('div');
        messageElement.textContent = sender + ': ' + message;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    // Función para generar respuesta del chatbot
    function generateBotResponse(userInput) {
        var botMessage = '';

        if (userInput.includes('horario') || userInput.includes('abierto')) {
            botMessage = 'Nuestro horario de atención es de lunes a viernes de 8 AM a 6 PM y los sabados de 8 AM a 4 PM.';
        } else if (userInput.includes('servicios') || userInput.includes('ofrecen')) {
            botMessage = 'Ofrecemos material de costruccion,recogemos escombro y hacemos mantenimiento.';
        } else if (userInput.includes('contactarnos') || userInput.includes('teléfono')) {
            botMessage = 'Puedes contactarnos al teléfono  55 9099 3076 ';
        } else {
            botMessage = 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?';
        }

        displayMessage('Bot', botMessage);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('chatbot').style.display = 'none';
    });
});
