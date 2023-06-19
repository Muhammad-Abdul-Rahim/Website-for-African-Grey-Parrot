function searchRedirect(event) {
  event.preventDefault(); // Prevent form submission

  // Get the search input value
  const searchInput = document.getElementById('searchInput').value.toLowerCase();

  // Perform logic based on the search input
  if (searchInput === 'apple') {
    window.location.href = 'Fruits.html'; // Redirect to the fruits webpage
  } else if (searchInput === 'banana') {
    window.location.href = 'fruits.html'; // Redirect to the fruits webpage
  } else if (searchInput === 'carrot') {
    window.location.href = 'vegetables.html'; // Redirect to the vegetables webpage
  } else {
    // Handle other search cases or display a message
    alert('No results found. Please try again.');
  }
}

function highlightSearchWord() {
  const searchInput = document.getElementById('searchInput');
  const content = document.body.innerHTML;
  const searchTerm = searchInput.value;

  const highlightedContent = content.replace(new RegExp(`(${searchTerm})`, 'gi'), '<span class="highlight">$1</span>');
  document.body.innerHTML = highlightedContent;
}