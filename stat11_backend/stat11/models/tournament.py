from django.db import models

class Tournament(models.Model):
    name=models.CharField
    start=models.DateField
    end=models.DateField