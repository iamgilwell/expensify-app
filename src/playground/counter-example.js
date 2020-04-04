class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10)

    if (!isNaN(count)) {
      this.setState(() => ({ count }))
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

  }
  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
    //this.setState({
    //   count: 0
    // });
    // this.setState({
    //   count: this.state.count + 1
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}


ReactDOM.render(<Counter />, document.getElementById("app"));
// const user = {
//   name: 'Gilwell Muhati',
//   age: 30,
//   location: 'New York'
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {user.location}</p>;
//   }
// }

// let count = 0;
// const someId = 'myidhere';
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   // Subtract 1 from count - rerender
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   // Set count to 0 and rerender
//   count = 0;
//   renderCounterApp();
//   console.log('Reset');
// };

// const templateTwo = (
//   <div>
//     <h1>Counter: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>Reset</button>
//   </div>
// );

// // Challenge
// // Make a button with "-1" -  setup minusOne function and register - log "minusOne"
// // Make reset button "reset" -  setup reset function - log "reset"

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
