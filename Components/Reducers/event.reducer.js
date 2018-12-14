export default function (event_List = [], action) {
  if (action.type === 'eventData'){
    return action.event
  } else {
    return event_List
  }
}
