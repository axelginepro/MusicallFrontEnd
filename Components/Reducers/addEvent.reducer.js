export default function (addEvent = [], action) {

console.log('addEventReducer', action.newEvent);

  if (action.type === 'newEvent'){
    var addEventCopy= [...addEvent]
    addEventCopy.push(action.newEvent)
    return addEventCopy
  }
  return addEvent
}
