document.getElementById("biodataForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let profilePicURL = "";
    let details = {};

    formData.forEach((value, key) => {
        if (key === "profilePicture" && value.name) {
            profilePicURL = URL.createObjectURL(value);
        } else {
            details[key] = value;
        }
    });

    let cvContent = `
        <html>
        <head>
            <title>CV - ${details.fullName}</title>
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                    padding: 20px;
                    max-width: 800px;
                    margin: auto;
                    background: #f4f4f4;
                }
                .cv-container {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 20px;
                }
                .profile-pic {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 15px;
                }
                .profile-pic img {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    border: 3px solid #2575fc;
                }
                .section {
                    margin-bottom: 15px;
                }
                .section h3 {
                    background: #2575fc;
                    color: white;
                    padding: 8px;
                    border-radius: 5px;
                    font-size: 18px;
                }
                .details p {
                    margin: 5px 0;
                    font-size: 16px;
                    color: #555;
                }
            </style>
        </head>
        <body>
            <div class="cv-container">
                <h2>${details.fullName}</h2>
                ${profilePicURL ? `<div class="profile-pic"><img src="${profilePicURL}" alt="Profile Picture"></div>` : ""}
                
                <div class="section">
                    <h3>Personal Information</h3>
                    <div class="details">
                        <p><strong>Date of Birth:</strong> ${details.dob}</p>
                        <p><strong>Gender:</strong> ${details.gender}</p>
                        <p><strong>Marital Status:</strong> ${details.maritalStatus}</p>
                        <p><strong>Nationality:</strong> ${details.nationality}</p>
                        <p><strong>Contact:</strong> ${details.contact}</p>
                        <p><strong>Email:</strong> ${details.email}</p>
                        <p><strong>Address:</strong> ${details.address}</p>
                    </div>
                </div>

                <div class="section">
                    <h3>Educational Background</h3>
                    <div class="details">
                        <p><strong>Highest Qualification:</strong> ${details.qualification}</p>
                        <p><strong>Institution Name:</strong> ${details.institution}</p>
                        <p><strong>Year of Passing:</strong> ${details.year}</p>
                        <p><strong>CGPA/Percentage:</strong> ${details.cgpa}</p>
                    </div>
                </div>
                </div>
            </div>
        </body>
        </html>
    `;

    let newPage = window.open();
    newPage.document.write(cvContent);
});
