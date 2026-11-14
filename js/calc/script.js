let display = document.getElementById("display");

// console.log(display.value = "hello")

const clear = () => {
  display.value = "";
};

const seven = () => {
  // if the value is 0 then we need to clear it before adding the new value

  if (display.value == "0") {
    display.value = "";
    display.value += "7";
  } else {
    display.value += "7";
  }
};

const eight = () => {
  if (display.value == "0") {
    display.value = "";
    display.value += "8";
  } else {
    display.value += "8";
  }
};

const nine = () => {
  if (display.value == "0") {
    display.value = "";
    display.value += "9";
  } else {
    display.value += "9";
  }
};

const six = () => {
  if (display.value == "0") {
    display.value = "";
    display.value += "6";
  } else {
    display.value += "6";
  }
};

const five = () => {
  if (display.value == "0") {
    display.value = "";
    display.value += "5";
  } else {
    display.value += "5";
  }
};

const four = () => {
  if (display.value == "0") {
    display.value = "";
    display.value += "4";
  } else {
    display.value += "4";
  }
};

const three = () => {
  if (display.value == "0") {
    display.value = "";
    display.value += "3";
  } else {
    display.value += "3";
  }
};

const two = () => {
  if (display.value == "0") {
    display.value = "";
    display.value += "2";
  } else {
    display.value += "2";
  }
};

const one = () => {
  if (display.value == "0") {
    display.value = "";
    display.value += "1";
  } else {
    display.value += "1";
  }
};

const zero = () => {
  if (display.value == "0") {
    display.value = "";
    display.value += "0";
  } else {
    display.value += "0";
  }
};

const doublezero = () => {
  if (display.value == "0") {
    display.value = "";
    display.value += "00";
  } else {
    display.value += "00";
  }
};

const multiply = () => {
  display.value += "*";
};

const divide = () => {
  display.value += "/";
};

const minus = () => {
  display.value += "-";
};

const dot = () => {
  display.value += ".";
};

const plus = () => {
  display.value += "+";
};

const equal = () => {
  display.value = eval(display.value);
};

const backspace = () => {
  display.value = display.value.slice(0, -1);
};

const percent = () => {
  display.value += "%";
};
