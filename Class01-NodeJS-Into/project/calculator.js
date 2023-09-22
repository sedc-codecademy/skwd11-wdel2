const calculator = (numberOne, numberTwo, operand) => {
  switch (true) {
    case operand === "+":
      return numberOne + numberTwo;
    case operand === "*":
      return numberOne * numberTwo;
    case operand === "-":
      return numberOne - numberTwo;
    case operand === "/":
      return numberOne / numberTwo;
    default:
      break;
  }
};

// DEFAULT EXPORT
export default calculator;
