export default function (event_List = [], action) {
  
console.log(action.newEvent);

  if (action.type === 'eventData'){
    return action.event
  } else if (action.type === 'newEvent'){
    var event_ListCopy= [...event_List]
    event_ListCopy.push(action.newEvent)
    return event_ListCopy
  } else {
    return event_List
  }

}
