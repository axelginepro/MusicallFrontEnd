export default function(filter = {}, action) {
  if (action.type === 'save_filter') {
    console.log('je suis dans ton Q', action);
    var filterCopy = {...filter} ;
    filterCopy.style1 = action.style1;
    filterCopy.price1 = action.price1;
    return filterCopy
  }
  return filter
}
