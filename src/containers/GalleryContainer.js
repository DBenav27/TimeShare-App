import React, {Component} from 'react'
import LifeEventModel from '../models/LifeEvent'
import Gallery from '../components/Gallery'
import { auth } from '../utils/firebase'

let GAL_EVENTS = []

class GalleryContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      lifeEvents: [],
      currentUser: auth.currentUser
    }
  }

  componentDidMount(){
    //this is dumb
    this.fetchData()
    this.fetchData()
  }


  fetchData(){
    LifeEventModel.allGallery().then( (res) => {
      GAL_EVENTS = res.lifeEvents
      this.setState ({
        lifeEvents: res.lifeEvents,
        currentUser: auth.currentUser
      })
    })
  }

  render(){
    return (
      <Gallery
        lifeEvents={GAL_EVENTS}
      />
    )
  }
}

export default GalleryContainer
