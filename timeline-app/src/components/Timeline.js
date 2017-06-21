// src/components/Tineline.js
import React, {Component} from 'react'
import LifeEvent from './LifeEvent'
import { database, firebaseListToArray } from '../utils/firebase'


class Timeline extends Component {
  render() {
    let lifeEventsArray = this.props.lifeEvents.map(lifeEvent => {
      return <LifeEvent
        key={ lifeEvent._id }
        data={ lifeEvent }
        onUpdateLifeEvent={this.props.onUpdateLifeEvent}
        onDeleteLifeEvent={this.props.onDeleteLifeEvent}
        />
    });

    return (
      <div className="lifeEvents">
        <div className="col-md-9 timeline-card timeline">

        { lifeEventsArray }

        </div>
        <div className="col-md-3">
          <div className="row">
            <img id="arrow-line" src="images/theline.png"/>
            <div className="col-md-1 date" id="date">
              <img className="timelinecirle" src="images/timelinecircle.png" />
              <h4 className="timelinedate">01/01/2017</h4>
            </div>

          </div>
        </div>


      </div>
      
    );
  }
}

export default Timeline;
