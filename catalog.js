function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) {
    return 0;
  }

  const fee = Math.max(Math.round(daysLate * ratePerDay), 1);
  return Math.min(fee, 20);
}

module.exports = { isValidLoan, calculateLateFee };
