# Incubyte Chandrayaan 3 - Applying Test-Driven Development (TDD)

## What is Test-Driven Development (TDD)?

Test-Driven Development (TDD) is a powerful software development methodology that emphasizes writing tests before writing the actual code. It is a core part of the Agile development process and is known for its ability to enhance code quality, maintainability, and overall development efficiency.

## Setting Up the TDD Environment

In this project, we employ the popular Jest testing framework in conjunction with JavaScript. Setting up the TDD environment involves a few straightforward steps:

1. Initialize an NPM project:
$ npm init

2. Install Chai Mocha:
$ npm install chai
$ npm install mocha

3. For run the file
$ npx mocha test/Spacecraft.test.js;    


## About the Chandrayaan 3 Project

The primary objective of the Chandrayaan 3 project is to calculate the coordinates and final direction of Chandrayaan 3 based on a set of given commands, initial coordinates, and starting direction. We employ the Test-Driven Development (TDD) approach to achieve this goal.

**Example**:

Consider the following scenario:

- Commands: ["f", "r", "u", "b", "l"]
- Starting Position: (0, 0, 0)
- Initial Direction: N

Output:

- "f" - (0, 1, 0) - N
- "r" - (0, 1, 0) - E
- "u" - (0, 1, 0) - U
- "b" - (0, 1, -1) - U
- "l" - (0, 1, -1) - W

Final Position: (0, 1, -1)
Final Direction: W

## Functions Used

1. `leftTurn`: Shifts the direction to the left.
2. `rightTurn`: Shifts the direction to the right.
3. `upTurn`: Shifts the direction upwards.
4. `downTurn`: Shifts the direction downwards.
5. `forward`: Moves the spacecraft forward based on its direction.
6. `backward`: Moves the spacecraft backward based on its direction.
7. `Spcecraft`: The main function that executes the provided commands and tracks the final state of Chandrayaan 3.

We conduct unit testing for each of these functions to validate their correctness.

## Benefits of Test-Driven Development (TDD)

The TDD approach offers several advantages:

- Ensures continuous testing, reducing the introduction of bugs or regressions.
- Acts as living documentation, showcasing code usage and expected behavior.
- Provides immediate feedback, allowing developers to catch errors early in the development process.

With TDD, we create a multitude of test cases, ensuring the program's accuracy and reliability as it evolves.
