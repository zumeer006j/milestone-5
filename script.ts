document.getElementById("resumeForm")?.addEventListener("submit", function(event: Event) {
    event.preventDefault();

    // Getting the form values
    const resumeURL = (document.getElementById("resume url") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('expertness') as HTMLTextAreaElement).value;


    // Generate a unique path based on the user's name
    const uniquePath = `/resume/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'))}`;

    // Creating a shareable link (assuming the current host is the base URL)
    const shareableLink = `${window.location.origin}${uniquePath}`;

    // Display the resume details
    const resumeHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${resumeURL}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;
    (document.getElementById("resumeOutput") as HTMLElement).innerHTML = resumeHTML;

    // Display the shareable link
    const linkHTML = `
        <h3>Shareable Link:</h3>
        <p><a href="${shareableLink}" target="_blank">${shareableLink}</a></p>
    `;
    (document.getElementById("shareableLinkOutput") as HTMLElement).innerHTML = linkHTML;
});
