from django.db import models
from .tournament import Tournament

class Match(models.Model):
    tournament=models.ForeignKey(Tournament,on_delete=models.CASCADE)
    created_on=models.DateField
    date=models.DateField
    time=models.TimeField
    overs_no=models.IntegerField
    location=models.CharField



