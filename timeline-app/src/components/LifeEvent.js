// src/components/Todo.js
import React, {Component} from 'react'
import EditLifeEventForm from './EditLifeEventForm'

class LifeEvent extends Component {
  render() {
    return (
      <div className="lifeEvent card col-md-6">
        <img className="card-img-top center-block img-frame" src={ this.props.data.photo }></img>
          <span className="glyphicon glyphicon-plus-sign pull-right"></span>
          <div className="card-block">
            <h2 className="card-title">{ this.props.data.title }</h2>
            <span className="pull-left" >06/22/2013</span><span className="pull-right">rating: { this.props.data.userRating }</span><br />
              <p className="content">{ this.props.data.content }</p>

              <span className="cardfooter postdate pull-left">Posted on { this.props.data.postDate }</span>
              <span className="cardfooter pull-right ">Tag: { this.props.data.tags } </span><br/><hr/>
              <button
                className='btn btn-danger'
                onClick={() => this.props.onDeleteLifeEvent(this.props.data)}>
                Delete!
              </button>
          </div>
        </div>
    );
  }
}

export default LifeEvent
