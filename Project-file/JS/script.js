// Toggle between subscription plans: Single, Double, Try Once
document.querySelectorAll('input[name="plan"]').forEach(input => {
  // Listen for changes when a plan radio button is selected
  input.addEventListener('change', () => {
    // First, hide all plan detail sections
    document.querySelectorAll('.plan-details').forEach(d => d.classList.remove('active'));

    // Show only the selected plan's details by matching its ID
    if (input.id === 'singlePlan') {
      document.getElementById('singleDetails').classList.add('active');
    } else if (input.id === 'doublePlan') {
      document.getElementById('doubleDetails').classList.add('active');
    } else if (input.id === 'tryOncePlan') {
      document.getElementById('tryOnceDetails').classList.add('active');
    }
  });
});


// Accordion behavior for the "Our Collection" section
document.querySelectorAll('.accordion').forEach(acc => {
  // When an accordion item is clicked
  acc.addEventListener('click', () => {
    // Toggle 'active' class to style the accordion open/closed
    acc.classList.toggle('active');

    // Find the <p> tag inside the accordion (if any)
    const p = acc.querySelector('p');

    // Toggle visibility of the paragraph
    if (p) {
      p.style.display = p.style.display === 'block' ? 'none' : 'block';
    }
  });
});
