
const removeFromArray = function (array, ...args) {

  const newArray = [];

  array.forEach((item) => {
  
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

module.exports = removeFromArray;



function removeElement(array, ...args){
  let newArray =[];
  
  array.forEach((item) => {  if(!args.includes(item)){newArray.push(item);}  } )

}
