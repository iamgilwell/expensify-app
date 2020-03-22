// VisibilityToggle - render, constructor, handleToggleVisbility
// visibility -> false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisbility = this.handleToggleVisbility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisbility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
      console.log(this.state);
    });
  }
  render() {
    return (
      <div>
        <h1> Visibility Toggle </h1>
        <button onClick={this.handleToggleVisbility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details, you can now see</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// let visibility = false;
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide Details' : 'Show Details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details, you can now see</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();
