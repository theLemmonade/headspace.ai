const moment = require("moment");
module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    shouldRender: (date) => {
let createdDate = moment(date).add(1, "hours");
let currentDate = moment()
if(createdDate > currentDate){
  return true;
}else{
  return false;
}

    }
}