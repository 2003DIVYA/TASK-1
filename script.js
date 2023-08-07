function convertToFahrenheit() {
    let celsiusInput = document.getElementById("celsius");
    let resultElement = document.getElementById("result");

    if (celsiusInput.value === "") {
        resultElement.textContent = "Please enter a valid temperature in Celsius.";
        return;
    }

    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    resultElement.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
}
