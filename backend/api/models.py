from django.db import models
from django.contrib.auth.models import User


class MedicalProfile(models.Model):
    BLOOD_GROUP_CHOICES = {
        "A+": "A+",
        "A-": "A-",
        "B+": "B+",
        "B-": "B-",
        "AB+": "AB+",
        "AB-": "AB-",
        "O+": "O+",
        "O-": "O-"
    }
    GENDER_CHOICES = {
        "M": "Male",
        "F": "Female",
        "O": "Other"
    }
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, blank=True)
    bloodgroup = models.CharField(max_length=2, choices=BLOOD_GROUP_CHOICES)
    age = models.IntegerField()
    gender = models.CharField(choices=GENDER_CHOICES)
    allergies = models.ArrayField(model.CharField(max_length=20, blank=True))
    height = models.DecimalField()
    weight = models.DecimalField()
    patient_id = models.PositiveIntegerField()

    def add_visit(self):
        Visit.objects.create(user=self)

    def add_disease(self):
        Disease.objects.create(user=self)


class Visit(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    location = models.TextField()
    user = models.ForeignKey(
        to=MedicalProfile, related_name="visits", on_delete=models.CASCADE)


class Disease(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50)
    description = models.TextField()
    user = models.ForeignKey(
        to=MedicalProfile, related_name="disease", on_delete=models.CASCADE)
