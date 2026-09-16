# Student Management System

A full-stack CRUD-based Student Management System developed using HTML, CSS, JavaScript, Django REST Framework, and SQLite.

## Features

- Add student records
- View student records
- Update student details
- Delete student records
- Search student records
- Frontend validation
- REST API integration
- SQLite database

## Technologies Used

- HTML
- CSS
- JavaScript
- Python
- Django
- Django REST Framework
- SQLite
- Postman
- Git and GitHub

## API Endpoints

| Operation | Method | Endpoint |
|---|---|---|
| Create | POST | `/api/students/` |
| Read | GET | `/api/students/` |
| Read One | GET | `/api/students/{id}/` |
| Update | PUT/PATCH | `/api/students/{id}/` |
| Delete | DELETE | `/api/students/{id}/` |

## How to Run

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver