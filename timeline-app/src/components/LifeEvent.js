// src/components/Todo.js
import React, {Component} from 'react'
import EditLifeEventForm from './EditLifeEventForm'

class LifeEvent extends Component {




  render() {
    console.log(this.props)
    return (
      <div className="card col-md-6 lifeEvent">
        <img className="card-img-top center-block img-frame" src={ this.props.data.photo } />


        <div className="card-block lifeEvent">
          <p data-lifeEvents-index={this.props.data._id}
               className="lifeEvent-title">{ this.props.data.title }
          </p>
          <p className="lifeEvent-content card-text">{ this.props.data.content }</p>
          <EditLifeEventForm
            lifeEvent={this.props.data}
            onUpdateLifeEvent={this.props.onUpdateLifeEvent}
          />
          <button
                className='btn btn-xs btn-danger'
                onClick={() => this.props.onDeleteLifeEvent(this.props.lifeEvent)}>
                  Delete
          </button>
        </div>

      </div>
    );
  }
}

export default LifeEvent
