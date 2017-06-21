// src/components/Todo.js
import React, {Component} from 'react'
import EditLifeEventForm from './EditLifeEventForm'

class LifeEvent extends Component {
  render() {
    return (
      <div className="row lifeEvent">
        <div className="col-md-11 col-sm-11 lifeEvent-text">
          <blockquote>
            <p className="lifeEvent-content"> EVENT DATE: <br /> { this.props.data.eventDate }</p>
            <p className="lifeEvent-content"> POST DATE: <br /> { this.props.data.postDate }</p>
            <p className="lifeEvent-title"> TITLE: <br /> { this.props.data.title }</p>
            <p className="lifeEvent-content"> PUBLIC?: <br /> { this.props.data.isPublic }</p>
            <p className="lifeEvent-content"> CONTENT: <br /> { this.props.data.content }</p>
            <p className="lifeEvent-content"> TAGS: <br /> { this.props.data.tags }</p>
            <p className="lifeEvent-content"> PHOTO: <br /> { this.props.data.photo }</p>
            <p className="lifeEvent-content"> USER RATING: <br /> { this.props.data.userRating }</p>

            <EditLifeEventForm
                lifeEvent={this.props.data}
                onUpdateLifeEvent={this.props.onUpdateLifeEvent}
            />

            <button
                className='btn btn-danger'
                onClick={() => this.props.onDeleteLifeEvent(this.props.data)}>
                Delete!
            </button>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default LifeEvent
