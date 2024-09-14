var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Getting the form values
    var resumeURL = document.getElementById("resume url").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('expertness').value;
    // Generate a unique path based on the user's name
    var uniquePath = "/resume/".concat(encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-')));
    // Creating a shareable link (assuming the current host is the base URL)
    var shareableLink = "".concat(window.location.origin).concat(uniquePath);
    // Display the resume details
    var resumeHTML = "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(resumeURL, "</p>\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
    document.getElementById("resumeOutput").innerHTML = resumeHTML;
    // Display the shareable link
    var linkHTML = "\n        <h3>Shareable Link:</h3>\n        <p><a href=\"".concat(shareableLink, "\" target=\"_blank\">").concat(shareableLink, "</a></p>\n    ");
    document.getElementById("shareableLinkOutput").innerHTML = linkHTML;
});
