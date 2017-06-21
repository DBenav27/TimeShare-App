// src/containers/TodosContainer.js
import React, {Component} from 'react'
import LifeEventModel from '../models/LifeEvent'
import Timeline from '../components/Timeline'
import CreateLifeEventForm from '../components/CreateLifeEventForm'
import { auth } from '../utils/firebase'

class TimelineContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      lifeEvents: [],
      currentUser: auth.currentUser
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    LifeEventModel.all().then( (res) => {
      this.setState ({
        lifeEvents: res.lifeEvents
      })
    })
  }
  createLifeEvent(newLifeEvent) {
    LifeEventModel.create(newLifeEvent).then( (res) => {
      console.log('created life event', res)
      let lifeEvents = this.state.lifeEvents
      let newTimeline = lifeEvents.push(res)
      this.setState({newTimeline})
    })
  }
  deleteLifeEvent(lifeEvent) {
    console.log('deleting lifeEvent', lifeEvent)
    LifeEventModel.delete(lifeEvent).then( (res) => {
        let lifeEvents = this.state.lifeEvents.filter(function(lifeEvent) {
          return lifeEvent._id !== res._id
        });
        this.setState({lifeEvents})
    })
  }
  updateLifeEvent(updatedLifeEvent, id) {
    LifeEventModel.update(updatedLifeEvent, id).then( (res) => {
      console.log(res);
      let updatedLifeEvents = this.state.lifeEvents.map( (lifeEvent) => {
        return lifeEvent
      });
      updatedLifeEvents.forEach( (item) => {
        if(item._id === id){
          item = updatedLifeEvent
        }
      })
      this.setState({updatedLifeEvents})
    })
  }

  render(){
    return (
      <div className='timelineContainer'>
        {
          (this.state.currentUser != null) ?
          <CreateLifeEventForm
            currentUser={this.state.currentUser}
            onCreateLifeEvent={this.createLifeEvent.bind(this)} /> :
          <section className="col-md-4 col-sm-12 add-event">Log in to add a life event</section>
        }
        <Timeline
          currentUser={this.state.currentUser}
          lifeEvents={this.state.lifeEvents}
          onDeleteLifeEvent={this.deleteLifeEvent.bind(this)}
          onUpdateLifeEvent={this.updateLifeEvent.bind(this)}
        />
      </div>
    )
  }
}

export default TimelineContainer
