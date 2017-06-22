// src/components/Todo.js
import React, {Component} from 'react'
import EditLifeEventForm from './EditLifeEventForm'

class LifeEvent extends Component {
  render() {
    return (
      <div className="lifeEvent card col-md-6">
        <img className="card-img-top center-block img-frame" src={ this.props.data.photo }></img>
        <img className="imgdash" src="images/dashline.png"></img>

          <div className="card-block">
            <h2 className="card-title">{ this.props.data.title }</h2>
            <h5 className="" >{ this.props.data.eventDate }</h5><span className="pull-center">rating: { this.props.data.userRating }</span><br />
              <p className="content">{ this.props.data.content }</p>

              <span className="cardfooter postdate pull-left">Posted on { this.props.data.postDate }</span>
              <span className="cardfooter pull-right ">Tag: { this.props.data.tags } </span><br/><hr/>

              <p>
                <a className="btn btn-info editbtn" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  EDIT
                </a>
              </p>
              <div className="collapse hideedit" id="collapseExample">
                <div className="card card-block">
                  <EditLifeEventForm
                            lifeEvent={this.props.data}
                            onUpdateLifeEvent={this.props.onUpdateLifeEvent}
                        />
                </div>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => this.props.onDeleteLifeEvent(this.props.data)}>
                  Delete
                </button>
              </div>


          </div>
        </div>
    );
  }
}

export default LifeEvent
