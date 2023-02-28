let celsius, fahrenheit = 73;

// Não há fração em js usando o Math portanto usamos uma divisão conforme orientado em doc https://www.javascript.com/learn/numbers#:~:text=Fractions%20don%27t%20exist%20in,just%20like%20with%20a%20calculator.&text=Improper%20fractions%20use%20the%20division%20operator%20in%20the%20same%20way.
celsius = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit} fahrenheit é o mesmo que ${celsius.toFixed(0)} em celsius.`)