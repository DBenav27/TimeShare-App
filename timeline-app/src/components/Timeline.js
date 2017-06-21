// src/components/Tineline.js
import React, {Component} from 'react'
import LifeEvent from './LifeEvent'


class Timeline extends Component {


  render() {
    var newEventArray = this.props.lifeEvents.map( event => {
      return event
    })

    if(typeof newEventArray[4] === Object){
      console.log("argh!");
    }

    let lifeEventsArray = this.props.lifeEvents.map(lifeEvent => {
      return
      <LifeEvent
        key={ lifeEvent._id }
        data={ lifeEvent }
        uid={ lifeEvent['_uid']}
        onUpdateLifeEvent={this.props.onUpdateLifeEvent}
        onDeleteLifeEvent={this.props.onDeleteLifeEvent}
      />
    });
    //console.log(this.props.lifeEvents[5].uid)

    return (
      <section className="col-md-8 col-sm-12 timeline">
        {/* {this.props.currentUser.uid} === {this.props.lifeEvents.uid} ? */}
        { lifeEventsArray }
      </section>
    );
  }
}

export default Timeline;
