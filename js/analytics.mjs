export class Event {
  //event type: click or view
  //page: link
  //entity: article/project/talk
  constructor(eventType, page, entity) {
    this.eventType = eventType;
    this.page = page;
    this.entity = entity;
  }
}

//const obj= new Event("click","link","article")
//for(let i in obj){
  //console.log(obj[i])
//}

class WebsiteAnalytics {
  constructor(events) {
    this.events = events;
  }
  //(2)write a function to store the events
  pushEvent(event) {
    return this.events.push(event);
  }
  

  /**
   * (3)Function to count the number of events of a specific type based on the entity
   * //@param {*} eventType
   * //@param {*} entity
   */
  countEvents(eventType, entity){
    let count=0
    for (let i in this.events){
      if (this.events[i].eventType == eventType && this.events[i].entity==entity){
        count=count+1
      }
    }
    return count
  }
  countEventsLinks(eventType, entity, page){
    let count=0
    for (let i in this.events){
      if (this.events[i].eventType == eventType && this.events[i].entity==entity && this.events[i].page==page){
        count=count+1
      }
    }
    return count
  }
}
// const e1= new Event("click","gbyus","article")
// const e2=new Event("view","udli","project")
// const e3= new Event("click","yujj","article")
const analysis= new WebsiteAnalytics([])
// console.log(analysis)
// analysis.pushEvent(e2)
// analysis.pushEvent(e3)

export default analysis
  

