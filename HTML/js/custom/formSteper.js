let currentStep = 1;
const totalSteps = 4;

function nextStep() {
  const currentElement = document.getElementById(`step-${currentStep}`);
  const nextElement = document.getElementById(`step-${currentStep + 1}`);

  if (nextElement) {
    currentElement.classList.remove('active');
    nextElement.classList.add('active');
    currentStep++;
    updateContainerHeight();
  }
}

function validateAndNextStep(step) {
  const stepElement = document.getElementById(`step-${step}`);
  const inputs = stepElement.querySelectorAll('input[type="radio"]');
  const errorElement = document.getElementById(`error-step-${step}`);

  // Check if at least one radio button is selected
  const isValid = Array.from(inputs).some(input => input.checked);

  if (isValid) {
    errorElement.classList.add('d-none'); // Hide error message
    nextStep(); // Move to the next step
  } else {
    errorElement.classList.remove('d-none'); // Show error message
  }
}

function updateContainerHeight() {
  const container = document.querySelector('.form-container');
  const activeStep = document.querySelector('.form-step.active');
  if (activeStep) {
    container.style.height = activeStep.offsetHeight + 'px';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const firstStep = document.querySelector('.form-step');
  if (firstStep) {
    firstStep.classList.add('active');
    updateContainerHeight();
  }
});
