from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField


class MedicalProfile(models.Model):
    APLUS = "AP"
    AMINUS = "AN"
    BPLUS = "BP"
    BMINUS = "BN"
    ABPLUS = "ABP"
    ABMINUS = "ABN"
    OPLUS = "OP"
    OMINUS = "ON"
    MALE = "M"
    FEMALE = "F"
    OTHER = "O"
    BLOOD_GROUP_CHOICES = [
        (APLUS, "A+"),
        (AMINUS, "A-"),
        (BPLUS, "B+"),
        (BMINUS, "B-"),
        (ABPLUS, "AB+"),
        (ABMINUS, "AB-"),
        (OPLUS, "O+"),
        (OMINUS, "O-")
    ]
    GENDER_CHOICES = [
        (MALE, "Male"),
        (FEMALE, "Female"),
        (OTHER, "Other")
    ]
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, blank=True)
    bloodgroup = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES)
    age = models.IntegerField()
    gender = models.CharField(choices=GENDER_CHOICES)
    allergies = ArrayField(models.CharField(max_length=20, blank=True))
    height = models.DecimalField(decimal_places=2, max_digits=5)
    weight = models.DecimalField(decimal_places=2, max_digits=5)
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


class Appointments(models.Model):
    GENERAL_CHECKUP = "GC"
    SPECIAL_CON = "SC"
    FOLLOWUP = "FU"
    VACCINATION = "VC"
    PRESCRIPTIONREN = "PRS"
    LABTEST = "LT"
    OTHER = "OTH"
    CONSULTATION_TYPE = [
        (GENERAL_CHECKUP, "General Check-up"),
        (SPECIAL_CON, "Specialist Consultation"),
        (FOLLOWUP, "Follow-up Visit"),
        (VACCINATION, "Vaccination"),
        (PRESCRIPTIONREN, "Prescription Renewal"),
        (LABTEST, "Laboratory Tests"),
        (OTHER, "Other")
    ]
    date = models.DateTimeField(auto_now_add=True)
    time = models.CharField(max_length=50)
    consultation = models.CharField(choices=CONSULTATION_TYPE)
    user = models.ForeignKey(
        to=MedicalProfile, related_name="appointments", on_delete=models.CASCADE)
