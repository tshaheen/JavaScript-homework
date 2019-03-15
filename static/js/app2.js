// from data.js
var tableData = data;
var tbody = d3.select("tbody"); 

// YOUR CODE HERE!
console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");
//     Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// data.forEach(function(ufoReport) {
//   console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = tbody.append("td");
//   });
// });

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
function BuildTable(dateFilter){
  tbody.html("");
  dateFilter.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = tbody.append("td");
    cell.text(value);
  });
});
}
BuildTable(tableData)

var dateButton = d3.select("#filter-btn");

dateButton.on("click", function(){
event.preventDefault()  
var dateInput = d3.select("#datetime").property("value");

var filterData = tableData;

filterData = filterData.filter(row => row.datetime === dateInput)

BuildTable(filterData)
})

