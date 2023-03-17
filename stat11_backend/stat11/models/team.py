from django.db import models
from .match import Match

class Team(models.Model):
    match=models.ForeignKey(Match,on_delete=models.CASCADE)
    name=models.CharField(unique=True)
    players=models.ManyToManyField
    flag=models.ImageField
