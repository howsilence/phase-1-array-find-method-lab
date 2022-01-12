// code your solution here
const records = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"}]
// function isWin(record){
//   return record.result === "W"
// };

const superbowlWin = records => {
  const found = records.find((element)=>{
    return element.result === "W"
    })    
  return found ? found.year : undefined
  }
// const finder = records.find((element) => {return result === "W"})
// function superbowlWin(){
//   return finder.year
// }
