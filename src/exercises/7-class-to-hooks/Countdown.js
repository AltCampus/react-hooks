import React from "react"

class Countdown extends React.Component {
  timer = null

  state = {
    seconds: 0
  }

  componentDidMount() {
    this.setupCountdown(this.props.startTime)
  }

  setupCountdown(startTime) {
    this.setState({ seconds: startTime })
    if (startTime > 0) {
      this.timer = setInterval(() => {
        if (this.state.seconds > 0) {
          this.setState(state => ({
            seconds: state.seconds - 1
          }))
        } else {
          clearInterval(this.timer)
        }
      }, 1000)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.startTime !== prevProps.startTime) {
      clearInterval(this.timer)
      this.setupCountdown(this.props.startTime)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return <div>{this.state.seconds}</div>
  }
}

export default Countdown
