import React from 'react';


export default class Stateful extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
      startTime: null,
      endTime: null
    }
  }
  componentWillMount() {
    console.log("HELLO STATEFUL")
    console.log(this.state.count)
  }
  componentDidMount() {
    this.setState({startTime: new Date(), count:1})
  }
  componentWillUnmount() {
    console.log("UNMOUNT STATEFUL")
    console.log(this.state.count)
  }
  shouldComponentUpdate(newProps, newState) {
    if(newState.count <= 25) {
      console.log("UPDATE STATEFUL")
      this.setState({count:this.state.count+1})
      return true;
    }
    this.props.setStatefulResult({
      count:this.state.count,
      startTime:this.state.startTime,
      endTime: new Date()
    })
    this.props.setShowStateful(false)
    return false;
  }
  render() {
    return (
      <div>
        <h2>STATEFUL:{this.state.count}</h2>
      </div>
    )
  }
}
