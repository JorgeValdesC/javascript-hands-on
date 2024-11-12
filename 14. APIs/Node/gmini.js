const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "YOUR_API_KEY"; // Reemplaza con tu clave de API

async function main() {
    const generativeAi = new GoogleGenerativeAI({
        apiKey,
        model: "gemini-pro",
    });

    const response = await generativeAi.generateText({
        prompt: "Hola, ¿cómo estás?",
    });

    console.log(response.result);
}

main(); 