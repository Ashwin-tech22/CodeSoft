let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// ✅ Keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || key === '.') {
    appendValue(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    event.preventDefault(); // prevent form submission if inside a form
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
