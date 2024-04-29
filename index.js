let data = '';
 fetch("info.txt")
 .then(response => response.text())
 .then(TEXT => {
    data = TEXT; // assign the result to data
    console.log(data); // now you can log the data here, after it's been assigned
});
