  // UI Variables
  const UIrefFrameCount = document.getElementById('ref-frame-count');
  const UIrefFrame1 = document.getElementById('ref-frame-1')
  const UIrefFrame2 = document.getElementById('ref-frame-2')
  const UItime1 = document.getElementById('time1');
  const UIdist1 = document.getElementById('dist1');
  const UIinterval1 = document.getElementById('interval1');
  const UItime2 = document.getElementById('time2');
  const UIdist2 = document.getElementById('dist2');
  const UIinterval2 = document.getElementById('interval2');

// Listen for page loaded/reloaded, and show/hide certain areas of the page
document.addEventListener('DOMContentLoaded', initializePage);

// // Listen for reference frame selection
// UIrefFrameCount.addEventListener('submit', toggleRefFrame2)

// Listen for submit event (note that submit "bubbles up" to parent submit-form element)
document.getElementById('input-form').addEventListener('submit', beginResults);

// Initialize the page and show/hide certain areas
function initializePage() {
  UIinterval1.disabled = true;
  UIinterval2.disabled = true;
  UIrefFrame2.hidden = true;
  hideResults();
}

// Toggle show/hide reference frame 2
function toggleRefFrame2() {
  UIrefFrame2.hidden = !UIrefFrame2.hidden;
}

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

  hideResults();  // hide results while they're being calculated

  // TODO: ALLOW CALCULATION FOR OTHER VARIABLES BESIDES SPACETIME INTERVAL USING SWITCH BUTTONS

  // Assign input to variables
  const speedLightMperS = 299792458;   // speed of light in meters/second
  const speedLightMperNs = 0.299792458;   // speed of light in meters/nanoseconds
  let time1 = parseFloat(UItime1.value);
  let dist1 = parseFloat(UIdist1.value);
  let interval1 = parseFloat(UIinterval1.value);
  let time2 = parseFloat(UItime2.value);
  let dist2 = parseFloat(UIdist2.value);
  let interval2 = parseFloat(UIinterval2.value);

  // Validate input for ref frame 1 and calc the interval
  if (isFinite(time1) && isFinite(dist1)) {
    let timeMeters = time1 * speedLightMperNs;  // convert time to meters
    timeMeters *= timeMeters; // square the time value
    let spaceMeters = dist1 * dist1;  // square the distance value
    interval1 = timeMeters - spaceMeters; // subtract space squared from time squared
    interval1 = Math.sqrt(interval1);   // take square root for final spacetime interval

    // display the spacetime interval
    UIinterval1.value = interval1.toFixed(4);
    // TODO: show step by step process for calculating ST interval, then display results
    // document.getElementById('results').hidden = false;

  } else {
    showError(`Error: Please double check values ${time1}, ${dist1}`);

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