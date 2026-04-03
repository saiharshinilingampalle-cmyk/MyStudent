// Section navigation
function showSection(id) {
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}

// File Upload Logic
function uploadFile(inputId) {
    let input = document.getElementById(inputId);
    let files = input.files;

    if (files.length === 0) {
        alert("Please select a file!");
        return;
    }

    let statusId = inputId === "resumeUpload" ? "resumeStatus" : "certStatus";
    let status = document.getElementById(statusId);

    let fileNames = [];
    for (let i = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
    }

    status.innerHTML = "Uploaded: " + fileNames.join(", ");
}