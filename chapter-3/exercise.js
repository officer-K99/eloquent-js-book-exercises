const min = (num1, num2) => (num1 < num2 ? num1 : num1 > num2 ? num2 : "equal");

console.log(min(2, 4));
console.log(min(6, 5));
console.log(min(2, 2));

// ===================================== min function ==============================

const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
};

console.log(power(3, 4));

// ===================================== power function =============================

const countBs = (value) => {
  const string = value.trim();
  let result = 0;
  for (let i of string) {
    if (i === "B") result++;
  }
  console.log(
    `there ${result > 1 ? "are: " : "is: "}${result} Bs in your string`
  );
};

countBs("i go to Bed by Bus");

const countChar = (value, char) => {
  const string = value.trim();
  let result = 0;
  for (let i of string) {
    if (i === char) result++;
  }
  console.log(
    `there ${result > 1 ? "are: " : "is: "}${result} ${char} in your string`
  );
};

countChar("i go to Bed by Bus", "u");

// ======================================== count char function =============================
