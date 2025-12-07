const range = (start = 1, end = 10, step = 1) => {
  const array = [];
  if (step == 0) throw new Error("step can not be 0");
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = end; i >= start; i += step) {
      array.push(i);
    }
  }
  return array;
};
console.log(range(2, 6, 2));
console.log(range(22, 64, -2));

const sum = (arr = []) => {
  let result = 0;
  for (let i of arr) {
    result += i;
  }
  return result;
};

console.log(sum(range(2, 6)));
console.log(sum(range(22, 64)));

// ================================ sum & range ===================================

const reverseArray = (arr) => {
  const array = [];
  let i = arr.length - 1;
  while (i >= 0) {
    array.push(arr[i]);
    i--;
  }
  return array;
};
console.log(reverseArray(range(22, 64, -2)));

// =============================== reverseArray ====================================

const arrayToList = (arr, counter = 0) => {
  return {
    value: arr[counter],
    rest: counter == arr.length - 1 ? null : arrayToList(arr, counter + 1),
  };
};

console.log(arrayToList(range(2, 6)));

const listToArray = (list) => {
  const array = [];

  const destructer = (nestedList) => {
    array.push(nestedList.value);
    if (!nestedList.rest) return;
    destructer(nestedList.rest);
  };
  destructer(list);
  return array;
};

console.log(listToArray(arrayToList(range(2, 6))));

//================================= array to list & reverse =========================
