// Fetch only the menu bar from aboutMe.html
fetch('index.html')
  .then(response => response.text())
  .then(data => {
    // Create a temporary element to hold the fetched content
    const tempElement = document.createElement('div');
    tempElement.innerHTML = data;

    // Extract the menu bar content by targeting its ID
    const menuBarContent = tempElement.querySelector('#menu-bar');

    // Insert the menu bar content into the 'header-container' div
    document.getElementById('header-container').appendChild(menuBarContent);
  })
  .catch(error => console.error(error));


// Get all menu items
// Add click event listeners to each menu item
function navigateTo(url) {
  window.location.href = url;
}

function expandSearchField() {
  const searchField = document.getElementById('toSearch');
  if (searchField.style.width === '200px') {
    searchField.style.width = '45px'; // Set the default width to 100px
  } else {
    searchField.style.width = '200px';
    
 // Change the width to 200px when clicking the button
  }
}


