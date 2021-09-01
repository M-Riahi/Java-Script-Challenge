// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Build Table Function
function buildTable(data){
    // First, clear out existing data
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// Hnadleclick function
function handleClick(){
    d3.event.preventDefault() // prevent the form from refreshing the page
    
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a date was entered and filter data based on date
    if (date){
        // Apply filter to the table data to only keep the 
        // rows where the datetime value matches the filter value
        filterData = filterData.filter((row) => row.datetime === date);

    }

    buildTable(filterData);
}



d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);
