const fillCups = function(amount) {
  amount.sort((a, b) => a - b);
  if (amount[2] > amount[1] + amount[0]) {
      return amount[2];
  }
  return Math.floor((amount[0] + amount[1] + amount[2] + 1) / 2);
};
