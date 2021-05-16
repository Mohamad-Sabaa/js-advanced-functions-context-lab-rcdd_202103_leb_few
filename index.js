/* Your Code Here */
function createEmployeeRecord(emp) {
  return {
    firstName: emp[0],
    familyName: emp[1],
    title: emp[2],
    payPerHour: emp[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arr) {
  return arr.map(emp => createEmployeeRecord(emp))
  return createEmployeeRecord(emp)
}

function createTimeInEvent (dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    date,
    hour: parseInt(hour)
  })
  return this;
}

 function createTimeOutEvent(dateStamp) {
   let [date, hour] = dateStamp.split(' ')
   this.timeOutEvents.push({
     type: "TimeOut",
     date,
     hour: parseInt(hour)
   })
   return this;
 }

 function hoursWorkedOnDate(date) {
   let timeIn = this.timeInEvents.find(e => e.date === date)
   let timeOut = this.timeOutEvents.find(e => e.date === date)
   return (timeOut.hour - timeIn.hour) / 100;
 }

 function wagesEarnedOnDate(date){
   let pay = hoursWorkedOnDate.call(this, date) * this.payPerHour;
   return parseInt(pay);
 }

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(e => e.firstName === firstName)
}

function calculatePayroll(arrOfEmployee) {
  return arrOfEmployee.reduce((acc, cur) => {
    return acc + allWagesFor.call(cur)
  }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
