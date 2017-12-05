import React from "react"

class NewsFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newsItems: []
    }
  }

 componentDidMount() {
   fetch("https://news-site.com/news").then((response) => {
     return response.json()
  }).then((json) => {
    this.setState({
      newsItems: json.newsItems
    })
  })
  }

 render() {
   if (this.state.newsItems.length > 0) {
     return <div>Recent news: {this.state.newsItems[0]}</div>
   } else {
     return <div>Loading...</div>
   }
  }
  } 
