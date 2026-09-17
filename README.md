# Student Management System

A full-stack web application for managing student records using HTML, CSS, JavaScript, Django REST Framework, and SQLite.

## Project Overview

The Student Management System provides a simple web-based interface to manage student information.

The application supports complete CRUD operations:

- Create student records
- Read and view student records
- Update student records
- Delete student records
- Search student records

The system also includes client-side and server-side validation, REST APIs, database integration, error handling, and API testing using Postman.

## Problem Statement

Managing student information manually can be time-consuming and may result in duplicate records, incorrect data entry, and difficulty in retrieving or updating information.

This project provides a centralized web-based solution for storing and managing student records efficiently.

## Objectives

- Implement a complete full-stack CRUD application.
- Develop RESTful APIs for student management.
- Store student information in a database.
- Implement frontend and backend validation.
- Prevent duplicate register numbers and email addresses.
- Provide search functionality.
- Test REST APIs using Postman.
- Maintain the project using Git and GitHub.

## Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Django
- Django REST Framework

### Database
- SQLite

### Tools
- Visual Studio Code
- Postman
- Git
- GitHub
- Live Server

## Features

- Add new students
- View all students
- Edit student details
- Delete student records
- Search student records
- Form validation
- Email validation
- Phone number validation
- Academic year validation
- Duplicate register number prevention
- Duplicate email prevention
- REST API integration
- Backend error handling
- Responsive user interface

## Student Details

The system stores the following information:

| Field | Description |
|---|---|
| ID | Unique student identifier |
| Name | Student name |
| Register Number | Unique register number |
| Department | Student department |
| Year | Academic year (1–4) |
| Email | Student email address |
| Phone | 10-digit phone number |

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students/` | Get all students |
| POST | `/api/students/` | Create a student |
| GET | `/api/students/{id}/` | Get a specific student |
| PUT | `/api/students/{id}/` | Update a student |
| PATCH | `/api/students/{id}/` | Partially update a student |
| DELETE | `/api/students/{id}/` | Delete a student |

### Base URL

```text
http://127.0.0.1:8000/api/


Validation
Frontend Validation
Name must contain at least 2 characters.
Register number must contain at least 3 characters.
Department must contain at least 2 characters.
Year must be between 1 and 4.
Email must have a valid format.
Phone number must contain exactly 10 digits.
Backend Validation

Django and Django REST Framework validate:

Required fields
Email format
Year range
Phone number format
Duplicate register numbers
Duplicate email addresses

Project Structure

Student-Management-System/
│
├── backend/
├── frontend/
├── students/
├── docs/
│   ├── Project_Report.md
│   ├── diagrams/
│   └── screenshots/
│
├── venv/
├── db.sqlite3
├── manage.py
├── requirements.txt
├── .gitignore
└── README.md


Installation and Execution
1. Clone the Repository
git clone https://github.com/Mayuka25/Student-Management-System.git
cd Student-Management-System
2. Create Virtual Environment
python -m venv venv
3. Activate Virtual Environment

For Windows PowerShell:

venv\Scripts\Activate.ps1
4. Install Dependencies
pip install -r requirements.txt
5. Apply Migrations
python manage.py migrate
6. Start Backend Server
python manage.py runserver

The backend will run at:

http://127.0.0.1:8000/
7. Start Frontend

Open:

frontend/index.html

using the Live Server extension in Visual Studio Code.

Testing

The application was tested using:

Browser-based CRUD testing
Postman API testing
Invalid input testing
Duplicate value testing
Missing field testing
Invalid student ID testing
Backend unavailable testing
Database verification

The detailed testing results are available in:

docs/Project_Report.md
Documentation

The complete project report is available here:

docs/Project_Report.md

It contains:

Project overview
Problem statement
Objectives
Scope
Technology stack
System requirements
System architecture
Database design
ER diagram
REST API documentation
CRUD operations
Validation
Testing
Challenges and solutions
Future enhancements
Installation instructions
Conclusion
GitHub Repository

https://github.com/Mayuka25/Student-Management-System

Future Enhancements
User authentication
Role-based access
Attendance management
Marks management
Advanced filtering
CSV/PDF export
Cloud deployment
MySQL/PostgreSQL support
Conclusion

The Student Management System demonstrates the development of a complete full-stack CRUD web application with frontend, backend REST APIs, database integration, validation, testing, and version control.