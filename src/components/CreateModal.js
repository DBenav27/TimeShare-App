import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import CreateLifeEventForm from '../components/CreateLifeEventForm'


const CreateModal = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {

    return (
      <div className="modalarea">
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Create Event
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>

          <Modal.Header closeButton>
            <Modal.Title>
              Create Life Event
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <CreateLifeEventForm
              currentUser= {this.props.currentUser}
              createLifeEvent={this.props.createLifeEvent}
              close = {this.close}
            />
          </Modal.Body>

          <Modal.Footer className="modalfooter">
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
});


export default CreateModal;
