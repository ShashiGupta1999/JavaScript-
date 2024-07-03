class Complex{
    #real;
    #imaginary;

    constructor(real=0, imaginary=0){
        this.#real = parseFloat(real);
        this.#imaginary = parseFloat(imaginary);
    }

    //Method to add two complex no
    add(otherComplex){
        let real = this.#real + otherComplex.#real;
        let imaginary = this.#imaginary + otherComplex.#imaginary;
        return new Complex(real, imaginary)
    }

      //Method to subtract two complex no
      sub(otherComplex){
        let real = this.#real - otherComplex.#real;
        let imaginary = this.#imaginary - otherComplex.#imaginary;
        return new Complex(real, imaginary)
    }

    static parse(input){
        let parts = input.split('+');
        if(parts.length !== 2){
            throw new Error('invalid input format')
        }
        let real = parseFloat(parts[0]);
        let imaginary = parseFloat(parts[1]);
        if(isNaN(real) || isNaN(imaginary)){
            throw new Error('invalid format,use numbers')
        }
        return new Complex(real, imaginary)

    }
    //Method to display
    Display(){
        console.log(`${this.#real} + ${this.#imaginary}i`)
    }
}

//Example
const complex1 = new Complex(2,3)
const complex2 = new Complex(-1,4)

console.log('Complex 1:')
complex1.Display();
console.log('Complex 2:')
complex2.Display();

//perform add & display
const sum = complex1.add(complex2)
console.log('Sum')
sum.Display();

//perform sub & display
const subtract = complex1.sub(complex2)
console.log('Subtract')
subtract.Display();

// Parse user input and display parsed complex number
try {
    const userInput = '5+2.5';
    console.log(`Parsing input "${userInput}"...`);
    const parsedComplex = Complex.parse(userInput);
    console.log('Parsed Complex:');
    parsedComplex.Display();
} catch (error) {
    console.log('Error:', error.message);
}