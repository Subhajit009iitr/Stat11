from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    photo = models.ImageField(max_length=255, blank=True, null=True)
    is_admin = models.BooleanField(default=False)
    date_joined = models.DateField(auto_now_add=True)
