import React from "react"

class Station extends React.Component {

render() {
    return (
      <div className="stationHolder" style={{ backgroundColor: `#${this.props.radioCol}` }}>
        <div className="logoHolder">
          <div className="logoImg" style={{ backgroundImage: `url(${this.props.radioImg})` }} />
        </div>

        <div className="playerHolder">
          <div className="stationInfo">
            {this.props.radioTag}
          </div>
          <audio className="audioHolder" controls>
            <source src={this.props.radioUrl} type="audio/ogg" />
          </audio>
        </div>
      </div>
    )
  }
}

export default Station
