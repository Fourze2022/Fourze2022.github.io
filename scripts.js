function sendMail() {
    // Mendapatkan nilai dari masing-masing field
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var subjectField = document.getElementById("subject");
    var messageField = document.getElementById("message");
  
    // Mendapatkan nilai dari masing-masing field
    var name = nameField.value;
    var email = emailField.value;
    var subject = subjectField.value;
    var message = messageField.value;
  
    // Fungsi validasi
    function validateField(value, fieldName) {
      if (!value) {
        // Jika field kosong, tampilkan pesan kesalahan
        document.getElementById(fieldName + "Error").style.display = "block";
        return false;
      } else {
        // Jika field diisi, sembunyikan pesan kesalahan (jika sebelumnya ditampilkan)
        document.getElementById(fieldName + "Error").style.display = "none";
          
        // Validasi khusus untuk field name (hanya huruf)
        if (fieldName === "name") {
          var namePattern = /^[A-Za-z\s]+$/;
          if (!namePattern.test(value)) {
            document.getElementById(fieldName + "Error").style.display = "block";
            return false;
          }
        }
        return true;
      }
    }
  
    // Melakukan validasi untuk masing-masing field
    var isNameValid = validateField(name, "name");
    var isEmailValid = validateField(email, "email");
    var isSubjectValid = validateField(subject, "subject");
    var isMessageValid = validateField(message, "message");
  
    // Memeriksa apakah semua field valid
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      // Semua field valid, lanjutkan dengan pengiriman email
      var params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
  
      const serviceID = "service_esx8em6"; // Ganti dengan service ID Anda
      const templateID = "template_6juld4s"; // Ganti dengan template ID Anda
  
      emailjs
        .send(serviceID, templateID, params)
        .then((response) => {
          // Reset the form and show a success message
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          document.getElementById("successMessage").style.display = "block";
          console.log(response);
        })
        .catch((error) => console.log(error));
    } else {
      // Tidak semua field valid, jangan lanjutkan dengan pengiriman email
    }
}