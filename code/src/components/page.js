import React from "react"
import Station from "./station.js"

class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stations: []
    }
  }

componentDidMount() {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
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
        <div className="page">

          <div className="playerPage">

            {this.state.stations.slice(0, 3).map((item) => {
              return <Station
                radioName={item.name}
                radioUrl={item.liveaudio.url}
                radioTag={item.tagline}
                radioImg={item.image}
                radioCol={item.color} />
            })}

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

export default Page
