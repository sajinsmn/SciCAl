body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 400px;
  background: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  overflow: hidden;
}

.display {
  background: #333;
  color: #fff;
  padding: 15px;
  text-align: right;
}

.display .history {
  font-size: 14px;
  color: #bbb;
  min-height: 20px;
}

.display .result {
  font-size: 28px;
  font-weight: bold;
  min-height: 40px;
}

.keys {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 6px;
  padding: 10px;
  background: #d9d9d9;
}

.key {
  padding: 15px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: background 0.2s;
}

.key:hover {
  background: #e0e0e0;
}

.key:active {
  background: #ccc;
}

.key.op {
  background: #b0bec5;
  color: #000;
  font-weight: bold;
}

.key.fn {
  background: #cfd8dc;
  color: #000;
}

.key.wide {
  grid-column: span 2;
}

.key.tall {
  grid-row: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: #546e7a;
  color: #fff;
}
