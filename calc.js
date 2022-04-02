let op;
const setOp = newOp => {
  op = newOp
};

function func() {
  let result;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  if (result = num1 / 0) {
    alert('На ноль делить нельзя!')
  }
  document.getElementById("result").innerHTML = result;
}