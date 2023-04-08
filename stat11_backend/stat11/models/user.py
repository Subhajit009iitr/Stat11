from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.CharField(max_length=255, unique=True, blank=False, null=False)
    photo = models.ImageField(max_length=255, blank=True, null=True, default=None)
    date_joined = models.DateField(auto_now_add=True)
