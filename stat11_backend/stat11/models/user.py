from django.db import models

class User(models.Model):
    username=models.CharField(unique=True)
    first_name=models.CharField
    last_name=models.CharField
    email=models.CharField(unique=True)
    password=models.CharField
    is_superuser=models.BooleanField
    is_admin=models.BooleanField
    photo=models.ImageField
    date_joined=models.DateField
