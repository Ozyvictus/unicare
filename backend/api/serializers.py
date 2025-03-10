from django.contrib.auth.models import User
from rest_framework import serializers
from .models import MedicalProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class MedicalProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalProfile
        fields = ["first_name", "last_name", "bloodgroup", "age",
                  "gender", "allergies", "height", "weight", "patient_id"]
