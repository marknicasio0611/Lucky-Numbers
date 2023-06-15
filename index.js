function generateLuckyNumbers() {
    var minNumber = 1;
    var maxNumber = 42;
    var numberOfNumbers = 6;
    var luckyNumbers = [];

    // Generate random numbers
    for (var i = 0; i < numberOfNumbers; i++) {
      var randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      luckyNumbers.push(randomNum);
    }

    var luckyNumbersElement = document.getElementById("lucky-numbers");
    luckyNumbersElement.textContent = luckyNumbers.join(", ");
  }