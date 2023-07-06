// JSON data (replace with your own)
fetch('test_database.json')
  .then(response => response.json())
  .then(data => {
    // Access and use the JSON data here
    console.log(data);

    const searchBar = document.getElementById("searchBar");
    const resultsContainer = document.getElementById("results");

    searchBar.addEventListener("input", function () {
      const searchTerm = searchBar.value.toLowerCase();

      // Filter the JSON data
      const filteredData = data.game.filter(function (item) {
        return (
          item.name.toLowerCase().includes(searchTerm) ||
          item.platform.toLowerCase().includes(searchTerm) ||
          item.release.toLowerCase().includes(searchTerm) ||
          item.company.toLowerCase().includes(searchTerm)
        );
      });

      // Display the results
      resultsContainer.innerHTML = "";

      filteredData.forEach(function (item) {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>ID:</strong> ${item.id}<br>
          <strong>Name:</strong> ${item.name}<br>
          <strong>Platform:</strong> ${item.platform}<br>
          <strong>Release:</strong> ${item.release}<br>
          <strong>Company:</strong> ${item.company}<br>
          <hr>
        `;
        resultsContainer.appendChild(li);
      });
    });
  })
  .catch(error => {
    // Handle any error that occurred during the fetch
    console.error('Error:', error);
  });
