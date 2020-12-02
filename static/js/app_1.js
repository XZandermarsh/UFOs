// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out any existing data before pulling in new data
    tbody.html("");

    // Loop through each object in the data, then append a row and cells for each value in the row
    data.forEach((dataRow) => {

        //Append a row to the table body where the new data will go
        let row = tbody.append("tr");

        //Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);

        });

    });
    
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;
    
    // Check if a data was entered and if so, filter the data using that date
    if (date) {
        
        filterData = filterData.filter(row => row.datetime === date);

    }

    // Call the buildTable function using the newly filtered data (or the original data if no date filters were entered)
    buildTable(filterData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

