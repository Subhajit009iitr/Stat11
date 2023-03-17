from django.db import models
from .user import User

class Typeofplayer(models.TextChoices):
    batter= 'batter',('Batter')
    bowler= 'bowler',('Bowler')

class Player(models.Model):
    person=models.ForeignKey(User,on_delete=models.CASCADE)
    created_on=models.DateField
    type=models.CharField(choices=Typeofplayer)

