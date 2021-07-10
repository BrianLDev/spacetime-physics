// Hide the results when page first loaded/reloaded
document.addEventListener('DOMContentLoaded', hideResults);

// Listen for submit event (note that submit "bubbles up" to parent loan-form element)
document.getElementById('loan-form').addEventListener('submit', beginResults);

// Hide results
function hideResults() {
  document.getElementById('results').hidden = true;
  document.getElementById('loading').style.display = 'none';
}

// Begin Results Process
function beginResults(e) {
  hideResults();
  // show loader
  document.getElementById('loading').style.display = 'block';
  // then calculate results after timeout
  setTimeout(calculateResults, 500);

  e.preventDefault();
}

// Calculate Results
function calculateResults() {
  // UI Variables
  const time1 = document.getElementById('time1');
  const dist1 = document.getElementById('dist1');
  const interval1 = document.getElementById('interval1');
  const time2 = document.getElementById('time2');
  const dist2 = document.getElementById('dist2');
  const interval2 = document.getElementById('interval2');

  hideResults();

  // TODO: CALCULATE RESULTS

  // unhide results UI
  document.getElementById('results').hidden = false;

  // Display results
  
  // Validate then display results
  if (true) { // TODO: REPLACE TRUE WITH VALIDATION

  } else {
    showError('Error: Please double check values');
  }
}

// Show Error
function showError(error) {
  hideResults();
  
  // Get elements from UI
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Create a div
  const errorDiv = document.createElement('div');

  // Add class
  errorDiv.className = 'alert alert-danger';  // bootstrap classes for alert

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000); // 3000ms = 3s
}

function clearError() {
  document.querySelector('.alert').remove();
}