export default function(filter = {}, action) {
  if (action.type === 'save_filter') {
    console.log(action);
    var filterCopy = {...filter} ;
    if (action.price1 === false && action.price2 === false) {


    filterCopy.style1 = action.style1 === true ?  'Rock' : false;
    filterCopy.style2 = action.style2 === true ? 'Jazz' : false;
    filterCopy.style3 = action.style3 === true ? 'Variété' : false;
    filterCopy.style4 = action.style4 === true ? 'Rap' : false;
    filterCopy.style5 = action.style5 === true ? 'Reggae' : false;
    filterCopy.style6 = action.style6 === true ? 'Electro' : false;
    filterCopy.style7 = action.style7 === true ? 'World Music' : false;
    filterCopy.style8 = action.style8 === true ? 'Metal' : false;
    filterCopy.style9 = action.style9 === true ? 'Pop' : false;
    filterCopy.price1 = action.price1 === false ? action.price1 = true : false ;
    filterCopy.price2 = action.price2 === false ? action.price2 = true : false;

  }

    filterCopy.style1 = action.style1 === true ?  'Rock' : false;
    filterCopy.style2 = action.style2 === true ? 'Jazz' : false;
    filterCopy.style3 = action.style3 === true ? 'Variété' : false;
    filterCopy.style4 = action.style4 === true ? 'Rap' : false;
    filterCopy.style5 = action.style5 === true ? 'Reggae' : false;
    filterCopy.style6 = action.style6 === true ? 'Electro' : false;
    filterCopy.style7 = action.style7 === true ? 'World Music' : false;
    filterCopy.style8 = action.style8 === true ? 'Metal' : false;
    filterCopy.style9 = action.style9 === true ? 'Pop' : false;
    filterCopy.price1 = action.price1;
    filterCopy.price2 = action.price2;
    filterCopy.date = action.date

    return filterCopy

  }
  return filter
}
