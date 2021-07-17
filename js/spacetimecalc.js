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
  const UItime1 = document.getElementById('time1');
  const UIdist1 = document.getElementById('dist1');
  const UIinterval1 = document.getElementById('interval1');
  const UItime2 = document.getElementById('time2');
  const UIdist2 = document.getElementById('dist2');
  const UIinterval2 = document.getElementById('interval2');

  hideResults();

  // TODO: ALLOW CALCULATION FOR OTHER VARIABLES BESIDES SPACETIME INTERVAL USING SWITCH BUTTONS

  // Assign input to variables
  const spdLightMS = 299792458;   // speed of light in meters/second
  const time1 = parseFloat(UItime1.textContent);
  const dist1 = parseFloat(UIdist1.textContent);
  const interval1 = parseFloat(UIinterval1.textContent);
  const time2 = parseFloat(UItime2.textContent);
  const dist2 = parseFloat(UIdist2.textContent);
  const interval2 = parseFloat(UIinterval2.textContent);

  // Validate input
  if (isFinite(time1) && isFinite(dist1) && isFinite(time2) && isFinite(dist2)) {

  }

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