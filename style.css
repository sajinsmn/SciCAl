const resultEl = document.getElementById("result");
const historyEl = document.getElementById("history");
let expression = "";

function updateDisplay(){
  resultEl.textContent = expression || "0";
}

function factorial(n){
  if(n < 0) return NaN;
  if(n === 0) return 1;
  return n * factorial(n-1);
}

document.querySelectorAll(".key").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if(value){
      expression += value;
      updateDisplay();
    }
    else if(action){
      switch(action){
        case "clear":
          expression="";
          historyEl.textContent="";
          updateDisplay();
          break;
        case "del":
          expression = expression.slice(0,-1);
          updateDisplay();
          break;
        case "equals":
          try{
            let exp = expression.replace(/π/g, Math.PI);
            exp = exp.replace(/√/g,"Math.sqrt");
            exp = exp.replace(/sin/g,"Math.sin");
            exp = exp.replace(/cos/g,"Math.cos");
            exp = exp.replace(/tan/g,"Math.tan");
            exp = exp.replace(/log/g,"Math.log10");
            exp = exp.replace(/ln/g,"Math.log");
            exp = exp.replace(/exp/g,"Math.exp");
            exp = exp.replace(/(\\d+)\\!/g,(m,n)=>factorial(parseInt(n)));
            exp = exp.replace(/(\\d+)\\^(\\d+)/g,(m,a,b)=>`Math.pow(${a},${b})`);

            let ans = eval(exp);
            historyEl.textContent = expression + " =";
            expression = ans.toString();
            updateDisplay();
          }catch(err){
            resultEl.textContent = "Error";
          }
          break;
        case "sqrt":
          expression += "√(";
          updateDisplay();
          break;
        case "pow":
          expression += "^";
          updateDisplay();
          break;
        case "pi":
          expression += "π";
          updateDisplay();
          break;
        case "fact":
          expression += "!";
          updateDisplay();
          break;
        case "sin":
        case "cos":
        case "tan":
        case "log":
        case "ln":
        case "exp":
          expression += action + "(";
          updateDisplay();
          break;
      }
    }
  });
});
