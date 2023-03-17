from django.db import models

class Tournament(models.Model):
    name=models.CharField(max_length=255)
    start=models.DateField(blank=True, null=True)
    end=models.DateField(blank=True, null=True)