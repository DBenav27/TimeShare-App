import $ from 'jquery'

class LifeEventModel {
  static all(){
    let request = $.ajax({
      url: "https://timeline--app.herokuapp.com/lifeevents",
      method: 'GET'
    })
    return request
  }

  static create(newLifeEvent) {
    let request = $.ajax({
      url: "https://timeline--app.herokuapp.com/lifeevents",
      method: 'POST',
      data: newLifeEvent
    })
    return request
  }

  static delete(id){
    let request = $.ajax({
      url: "https://timeline--app.herokuapp.com/lifeevents/" + id,
      method: 'DELETE'
    })
    return request
  }

  static update(updatedLifeEvent, id){
    let request = $.ajax({
      url: `https://timeline--app.herokuapp.com/lifeevents/${id}`,
      method: 'PUT',
      data: updatedLifeEvent
    })
    return request
  }

}

export default LifeEventModel
