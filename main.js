
  let resultElement = document.getElementById('result');

  function appendToResult(value) {
    resultElement.textContent += value;
  }

  function clearResult() {
    resultElement.textContent = '';
  }

  function calculateResult() {
    try {
      resultElement.textContent = eval(resultElement.textContent);
    } catch (error) {
      resultElement.textContent = 'Error';
    }
  }
