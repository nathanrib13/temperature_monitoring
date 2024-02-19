function gerarTemperatura(){
    const temperaturaCelsius = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

    document.getElementById("celsius").textContent = temperaturaCelsius;
    document.getElementById("fahrenheit").textContent = temperaturaFahrenheit;

    // Adicionar a temperatura gerada ao histórico
    const historico = document.getElementById("historico");
    const novoItem = document.createElement("li");
    novoItem.textContent = "Celsius: " + temperaturaCelsius + "°C, Fahrenheit: " + temperaturaFahrenheit + "°F";
    historico.appendChild(novoItem);
}