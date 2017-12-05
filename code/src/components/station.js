import React from "react"

class Station extends React.Component {

handleMetaDataLoad = () => {
  this.setState({
    ready: true
  })
}

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
        <audio className="audioHolder" controls onLoadedMetadata={this.handleMetaDataLoad}>
          <source src={this.props.radioUrl} type="audio/ogg" />
        </audio>
      </div>
    </div>
  )
}
}

export default Station
