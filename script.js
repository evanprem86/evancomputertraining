
document.getElementById('admissionForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};

  formData.forEach((value, key) => {
    if (key === 'photo') {
      data[key] = value.name || 'No photo';
    } else {
      data[key] = value;
    }
  });

  localStorage.setItem('evan_admission_form', JSON.stringify(data));
  alert('Application submitted successfully!');
  this.reset();
});
