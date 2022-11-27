const compoundInterestCalculator = document.getElementById(
  "CompoundInterestCalculator"
);
const initialBalance = document.getElementById("InitialBalance");
const interestRate = document.getElementById("InterestRate");
const year = document.getElementById("Years");
const monthlyContribution = document.getElementById("MonthlyContribution");
const result = document.getElementById("Result");

function formatMoney(number) {
  return number.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
}

// Form Validation and submission
compoundInterestCalculator.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    initialBalance.value === "" ||
    interestRate.value === "" ||
    year.value === ""
  ) {
    alert("Complete All Fields");
  } else {
    calculateCompoundInterest();
  }
});

function calculateCompoundInterest() {
  // add Fade Effect
  result.classList.add("fade");
  setTimeout(function () {
    result.classList.remove("fade");
  }, 1000);

  if (monthlyContribution.value === "") {
    return (result.innerHTML = compoundInterest(
      initialBalance.value,
      interestRate.value,
      year.value
    ));
  } else {
    return (result.innerHTML = compoundInterestWithContribution(
      initialBalance.value,
      interestRate.value,
      year.value,
      monthlyContribution.value
    ));
  }
}

function compoundInterest(principleAmount, interestRate, years) {
  //   A = P(1 + r / n) ^ nt;
  return formatMoney(
    principleAmount * Math.pow(1 + interestRate / 100 / 12, 12 * years)
  );
}

// CI with contribution

function compoundInterestWithContribution(
  principleAmount,
  interestRate,
  years,
  monthlyContribution
) {
  return formatMoney(
    principleAmount * Math.pow(1 + interestRate / 100 / 12, 12 * years) +
      (monthlyContribution *
        (Math.pow(1 + interestRate / 100 / 12, 12 * years) - 1)) /
        (interestRate / 100 / 12)
  );
}
