from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator


class Student(models.Model):
    name = models.CharField(max_length=100)

    register_number = models.CharField(
        max_length=20,
        unique=True
    )

    department = models.CharField(max_length=50)

    year = models.IntegerField(
        validators=[
            MinValueValidator(1),
            MaxValueValidator(4)
        ]
    )

    email = models.EmailField(unique=True)

    phone = models.CharField(
        max_length=10,
        validators=[
            RegexValidator(
                regex=r'^[0-9]{10}$',
                message='Phone number must contain exactly 10 digits.'
            )
        ]
    )

    def __str__(self):
        return self.name