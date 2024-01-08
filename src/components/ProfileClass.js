import React, { useEffect } from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  componentDidMount() {
    // Best suited for API calls
    // This method is invoked right after first render and only once in component life cycle
    // Two phases of rendering
    //1) => Rendering Phase: Pure and has no side effects. May be paused, aborted or restarted by React.
    //JSX is loaded to dom
    // 2) => Commit Phase => Actual updating to DOM
    //Can work with DOM, run side effects, schedule updates.
    //**React here batches up all childern of components into render phase and commit Phase
  }
  componentDidUpdate() {
    // This method will be invoked from second render or every rerender of component this method is invoked
    // multiple times in component lifeCycle.
  }
  componentWillUnmount() {
    /*
    //this mehod is invoked right before unmounting a component from dom
    // usecase is when we want to clear out our setInterval or setTimeout
    // in useEffect this can be acheived by writing return inside function.
    //Example
    useEffect(() => {
      const timer = setInterval(() => {
        console.log("In Profile Class");
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }, []);
     */
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>name: {this.props.name}</h1>
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          SetCount
        </button>
      </div>
    );
  }
}

export default Profile;
