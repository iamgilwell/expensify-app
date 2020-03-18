const user = {
  name: 'Gilwell Muhati',
  age: 30,
  location: 'New York'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {user.location}</p>;
  }
}

let count = 0;
const someId = 'myidhere';
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  // Subtract 1 from count - rerender
  count--;
  renderCounterApp();
};
const reset = () => {
  // Set count to 0 and rerender
  count = 0;
  renderCounterApp();
  console.log('Reset');
};

const templateTwo = (
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);

// Challenge
// Make a button with "-1" -  setup minusOne function and register - log "minusOne"
// Make reset button "reset" -  setup reset function - log "reset"

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
