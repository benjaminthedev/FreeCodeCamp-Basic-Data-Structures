//All notes

const disruptedDates = []; //placeholder to collect dates

fetch.data.foreach(disruption => {
  disruption.startTimeDate, disruptionEndDate
  ...workout the dates in between and push to a const or something?
  
    const disrupionDateRange = [dates, dates, moreDates] 
   
  disruptionDateRange.foreach(date => {
    if date doesn't exist in disruptedDates then...
    disruptedDates.push(date);
  })
})


//Foreach

  //fetchDisruptionsState.data.forEach(element => {
  //console.log(element);
  // console.log('This is the START - ', disruptionTimeWindow.start);
  //console.log('This is the ID - ', element.id);
  //empty array
  //const dateRange = [];
  //Loop over all dates in a forEach
  // dateRange.forEach(date => {
  //   //This forEach is producing nothing....
  //   console.log('NEW start date', date.start);
  //   //Push on to dateRange arr
  //   dateRange.push(date.start);
  //   console.log('dates forEach working?');
  // });
  //Whats in our arr?
  //console.log('What is in our arr? - ', dateRange);
  //});

  // fetchDisruptionsState.data.forEach(whatDate => {
  //   console.log(`This is the start date {whatDate.disruptionTimeWindow}`);
  //   console.log(`This is the start date {whatDate.end}`);
  //   console.log(whatDate);
  // });