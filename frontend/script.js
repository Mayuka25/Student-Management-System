// Django REST API URL
const API_URL = "http://127.0.0.1:8000/api/students/";

// Get HTML elements
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");
const searchInput = document.getElementById("searchInput");
const message = document.getElementById("message");
const emptyMessage = document.getElementById("emptyMessage");
const submitBtn = document.getElementById("submitBtn");


// Store students
let students = [];


// Load students when page opens
loadStudents();


// ===============================
// GET - Fetch Students
// ===============================

async function loadStudents() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch students");
        }

        students = await response.json();

        displayStudents(students);

    } catch (error) {

        console.error(error);

        showMessage(
            "Unable to connect to the server. Make sure Django is running.",
            "error"
        );
    }
}


// ===============================
// DISPLAY STUDENTS
// ===============================

function displayStudents(data) {

    studentTableBody.innerHTML = "";

    if (data.length === 0) {

        emptyMessage.style.display = "block";

        return;
    }

    emptyMessage.style.display = "none";


    data.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.register_number}</td>
            <td>${student.department}</td>
            <td>${student.year}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>

            <td>
                <button
                    class="edit-btn"
                    onclick="editStudent(${student.id})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteStudent(${student.id})">
                    Delete
                </button>
            </td>
        `;

        studentTableBody.appendChild(row);

    });
}


// ===============================
// POST - Add Student
// ===============================

studentForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const registerNumber = document.getElementById("register_number").value.trim();
    const department = document.getElementById("department").value.trim();
    const year = parseInt(document.getElementById("year").value);
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();


    // ===============================
    // FRONTEND VALIDATION
    // ===============================

    if (name.length < 2) {
        showMessage("Name must contain at least 2 characters.", "error");
        return;
    }

    if (registerNumber.length < 3) {
        showMessage("Please enter a valid register number.", "error");
        return;
    }

    if (department.length < 2) {
        showMessage("Please enter a valid department.", "error");
        return;
    }

    if (![1, 2, 3, 4].includes(year)) {
        showMessage("Year must be between 1 and 4.", "error");
        return;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        showMessage("Phone number must contain exactly 10 digits.", "error");
        return;
    }


    // ===============================
    // STUDENT DATA
    // ===============================

    const studentData = {

        name: name,

        register_number: registerNumber,

        department: department,

        year: year,

        email: email,

        phone: phone
    };


    // ===============================
    // SEND DATA TO DJANGO
    // ===============================

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(studentData)
        });


        if (!response.ok) {

            const errorData = await response.json();

            console.log(errorData);

            throw new Error("Failed to add student");
        }


        showMessage(
            "Student added successfully!",
            "success"
        );


        studentForm.reset();

        loadStudents();


    } catch (error) {

        console.error(error);

        showMessage(
            "Unable to add student. Check the entered details.",
            "error"
        );
    }

});

// ===============================
// DELETE - Delete Student
// ===============================

async function deleteStudent(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this student?");


    if (!confirmDelete) {
        return;
    }


    try {

        const response = await fetch(
            `${API_URL}${id}/`,
            {
                method: "DELETE"
            }
        );


        if (!response.ok) {
            throw new Error("Failed to delete student");
        }


        showMessage(
            "Student deleted successfully!",
            "success"
        );


        loadStudents();


    } catch (error) {

        console.error(error);

        showMessage(
            "Unable to delete student.",
            "error"
        );
    }
}


// ===============================
// PUT - Edit Student
// ===============================

async function editStudent(id) {

    const student = students.find(student => student.id === id);

    if (!student) {
        return;
    }

    // Show edit section
    const editSection = document.getElementById("editSection");

    editSection.style.display = "block";

    // Fill the form with existing student data
    document.getElementById("editId").value = student.id;
    document.getElementById("editName").value = student.name;
    document.getElementById("editRegisterNumber").value = student.register_number;
    document.getElementById("editDepartment").value = student.department;
    document.getElementById("editYear").value = student.year;
    document.getElementById("editEmail").value = student.email;
    document.getElementById("editPhone").value = student.phone;

    // Scroll to edit form
    editSection.scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// UPDATE STUDENT
// ===============================

const editForm = document.getElementById("editForm");

editForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const id = document.getElementById("editId").value;

    const name = document.getElementById("editName").value.trim();
    const registerNumber =
        document.getElementById("editRegisterNumber").value.trim();
    const department =
        document.getElementById("editDepartment").value.trim();
    const year =
        parseInt(document.getElementById("editYear").value);
    const email =
        document.getElementById("editEmail").value.trim();
    const phone =
        document.getElementById("editPhone").value.trim();


    // Validation

    if (name.length < 2) {
        showEditMessage("Name must contain at least 2 characters.");
        return;
    }

    if (registerNumber.length < 3) {
        showEditMessage("Please enter a valid register number.");
        return;
    }

    if (department.length < 2) {
        showEditMessage("Please enter a valid department.");
        return;
    }

    if (![1, 2, 3, 4].includes(year)) {
        showEditMessage("Year must be between 1 and 4.");
        return;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showEditMessage("Please enter a valid email address.");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        showEditMessage("Phone number must contain exactly 10 digits.");
        return;
    }


    const updatedStudent = {

        name: name,

        register_number: registerNumber,

        department: department,

        year: year,

        email: email,

        phone: phone
    };


    try {

        const response = await fetch(
            `${API_URL}${id}/`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(updatedStudent)
            }
        );


        if (!response.ok) {

            const errorData = await response.json();

            console.log(errorData);

            throw new Error("Failed to update student");
        }


        showMessage(
            "Student updated successfully!",
            "success"
        );


        // Hide edit form
        document.getElementById("editSection").style.display = "none";

        // Reload records
        loadStudents();


    } catch (error) {

        console.error(error);

        showEditMessage(
            "Unable to update student."
        );
    }

});


// ===============================
// CANCEL EDIT
// ===============================

document.getElementById("cancelEditBtn").addEventListener("click", function() {

    document.getElementById("editSection").style.display = "none";

});


// ===============================
// EDIT MESSAGE
// ===============================

function showEditMessage(text) {

    const editMessage =
        document.getElementById("editMessage");

    editMessage.textContent = text;

    editMessage.style.color = "red";

}

// ===============================
// SEARCH
// ===============================

searchInput.addEventListener("input", function() {

    const searchText =
        searchInput.value.toLowerCase().trim();


    const filteredStudents =
        students.filter(student =>

            student.name.toLowerCase().includes(searchText) ||

            student.register_number
                .toLowerCase()
                .includes(searchText) ||

            student.department
                .toLowerCase()
                .includes(searchText) ||

            student.email
                .toLowerCase()
                .includes(searchText)
        );


    displayStudents(filteredStudents);

});


// ===============================
// MESSAGE
// ===============================

function showMessage(text, type) {

    message.textContent = text;

    if (type === "success") {

        message.style.color = "green";

    } else {

        message.style.color = "red";
    }


    setTimeout(() => {

        message.textContent = "";

    }, 3000);
}