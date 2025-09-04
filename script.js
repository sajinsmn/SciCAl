(() => {
return ${e};
`);
return fn(Math, degMode);
}catch(err){
return 'Error';
}
}


function applyFunction(name){
switch(name){
case 'sqrt': expr = `Math.sqrt(${expr||'0'})`; break;
case 'ln': expr = `Math.log(${expr||'1'})`; break;
case 'log': expr = `Math.log10(${expr||'1'})`; break;
case 'sin': expr = `sin(${expr||'0'})`; break;
case 'cos': expr = `cos(${expr||'0'})`; break;
case 'tan': expr = `tan(${expr||'0'})`; break;
case 'pi': expr += 'Math.PI'; break;
case 'e': expr += 'Math.E'; break;
case 'rand': expr += 'rand()'; break;
case 'factorial': expr = `factorial(${expr||'0'})`; break;
case 'pow': expr += '**'; break; // user will add exponent
default: break;
}
updateDisplay();
}


buttons.forEach(btn => {
btn.addEventListener('click', () => {
const v = btn.getAttribute('data-value');
const act = btn.getAttribute('data-action');
const fn = btn.getAttribute('data-fn');


if(v) { expr += v; updateDisplay(); return; }
if(act){
if(act==='clear'){ expr=''; updateDisplay(); return; }
if(act==='back'){ expr = expr.slice(0,-1); updateDisplay(); return; }
if(act==='equals'){
// evaluate safely
const res = safeEval(expr);
history.textContent = expr + ' =';
expr = (typeof res === 'number' && !Number.isNaN(res)) ? String(Number.parseFloat(res.toPrecision(12))) : String(res);
updateDisplay();
return;
}
if(act==='paren'){
// smart parentheses: add '(' if last char is operator or empty, else ')' if unmatched
const opens = (expr.match(/\(/g)||[]).length;
const closes = (expr.match(/\)/g)||[]).length;
if(expr==='' || /[+\-*/(]$/.test(expr)) expr += '(';
else if(opens>closes) expr += ')';
else expr += '(';
updateDisplay();
return;
}
}
if(fn){ applyFunction(fn); }
});
});


// keyboard support
window.addEventListener('keydown', (ev) => {
if(ev.key === 'Enter'){
document.querySelector('[data-action=equals]').click();
ev.preventDefault();
return;
}
if(ev.key === 'Backspace') { document.querySelector('[data-action=back]').click(); ev.preventDefault(); return; }
const allowed = '0123456789.+-*/%()';
if(allowed.includes(ev.key)) { expr += ev.key; updateDisplay(); }
if(ev.key === 'd' || ev.key === 'D') { degMode = true; document.getElementById('degRad').textContent = 'DEG'; }
if(ev.key === 'r' || ev.key === 'R') { degMode = false; document.getElementById('degRad').textContent = 'RAD'; }
});


// toggle deg/rad
document.getElementById('degRad').addEventListener('click', () => {
degMode = !degMode;
document.getElementById('degRad').textContent = degMode? 'DEG' : 'RAD';
});


// init
updateDisplay();
})();
