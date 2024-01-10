const radioButtons = document.querySelectorAll('input[name="addFreq"]');
const resultTotal = document.getElementById("total result");
const resultContribution = document.getElementById("contribution result");
const resultInterest = document.getElementById("interest result");

function calculate(_startAmount, _afterTime, _returnRate, _addAmount) {
  let _addFreq = 1;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      _addFreq = Number(radioButton.value);
      break;
    }
  }

  let _endAmount;
  _endAmount = _startAmount;

  for (let i = 0; i < _afterTime * _addFreq; i++) {
    _endAmount = _endAmount * (1 + _returnRate / 100 / _addFreq) + _addAmount;
  }

  let _contributed = _startAmount + _addAmount * _addFreq * _afterTime;
  let _roundAmount = Math.round(100 * _endAmount) / 100;
  let _interest = Math.round(100*(_roundAmount - _contributed))/100;

  resultTotal.innerHTML =
    "Total: \u20AC " +
    _roundAmount
      .toString()
      .replaceAll(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  resultContribution.innerHTML =
    "Contributed: \u20AC " +
    _contributed
      .toString()
      .replaceAll(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  resultInterest.innerHTML =
    "Interest: \u20AC " +
    _interest
      .toString()
      .replaceAll(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
