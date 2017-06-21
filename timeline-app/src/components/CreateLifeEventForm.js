// src/components/CreateTodoForm.js
import React, {Component} from 'react';
import { database } from '../utils/firebase';
import {Modal, Button, Icon} from 'react-materialize'


// inside src/components/CreateLifeEventForm.js
class CreateLifeEventForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        title: '',
        content: ''
      }

      this.ref = database.ref('/timeline');
    }

    componentWillUnmount() {
      this.ref.off();
    }

    handleSubmit(e) {
      e.preventDefault();
      console.log('title: ', this.state.title, 'content: ', this.state.content);
      //
      // if (!this.props.currentUser) {
      //   // @todo Return error message
      //   console.log('User not logged in');
      //   return;
      // }
      // if (!this.state.title || !this.state.content) {
      //   // @todo Return error message
      //   console.log('Missing data');
      //   return;
      // }

      this.ref.push({
        // user: {
        //   uid: this.props.currentUser.uid,
        //   photoURL: this.props.currentUser.photoURL,
        //   displayName: this.props.currentUser.displayName
        // },
        title: this.state.title,
        content: this.state.content,
        // This allows us to return data in desc order in Firebase
        '.priority':  0 - Date.now()
      });

      this.setState({
        title: '',
        content: ''
      })


    }

    render() {
      return (
        <Modal
	header='Create New Life Event'
	trigger={
		  <Button waves='light'>MODAL</Button>
	}>

              <form onSubmit={ this.handleSubmit.bind(this) } className="form-add-lifeEvent">
                <div className="row">
                  <input
                    onChange={ e => { this.setState({ title: e.target.value }) } }
                    value={ this.state.title }
                    className="form-control"
                    rows="3"
                    placeholder="Meaningful life event" />
                </div>
                <div className="row">
                  <textarea
                    onChange={ e => { this.setState({ content: e.target.value }) } }
                    value={ this.state.content }
                    className="form-control"
                    type="text"
                    placeholder="Description of life event"></textarea>
                </div>

                  <button className="btn btn-primary">Add Life Event</button>

              </form>

        </Modal>
      );
    }
  }

export default CreateLifeEventForm
