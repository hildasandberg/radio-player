import React from "react"

class Station extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stations: []
    }
  }

componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json)
      this.setState({
        stations: json.channels
      })
    })
  }

render() {
    if (this.state.stations.length > 0) {
      return (
        <div className="stationHolder" style={{ backgroundColor: `#${this.state.stations[0].color}` }}>
          <div className="logoHolder">
            <div className="logoImg" style={{ backgroundImage: `url(${this.state.stations[0].image})` }} />
          </div>

          <div className="playerHolder">
            <div className="stationInfo">
              {this.state.stations[0].tagline}
            </div>
            <audio className="audioHolder" controls>
              <source src={this.state.stations[0].liveaudio.url} type="audio/ogg" />
            </audio>
          </div>
        </div>
      )
    } else {
      return (
        <div className="stationHolder">Laddar sidan</div>
      )
    }
  }
}

export default Station
