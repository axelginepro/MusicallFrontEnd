export default function(eventLike = [], action) {
  if (action.type == 'eventLiked') {
    console.log("eventLikeReducer", action);
    var eventLikeCopy = [...eventLike]
    if(eventLikeCopy.length === 0) {
      eventLikeCopy.push(action.eventLike)
      return eventLikeCopy;
    } else {
      for (e of eventLikeCopy) {
        if (e.eventId == action.eventLike.eventId) {
          var index = eventLikeCopy.indexOf(e)
          eventLikeCopy.splice(index, 1)
          console.log("B", eventLikeCopy);
          return eventLikeCopy;
        }
      }
      eventLikeCopy.push(action.eventLike)
      console.log("C", eventLikeCopy)
      return eventLikeCopy;
    }
  }
  return eventLike;
};
