from django.db import models
from .player import Player
from .team import Team

class StatusofBowler(models.TextChoices):
        bowling= 'bowling', ('Bowling')
        idle= 'idle', ('Idle')

class Bowler_scoreboard(models.Model):
    team=models.ForeignKey(Team,on_delete=models.CASCADE)
    player=models.ForeignKey(Player,on_delete=models.CASCADE)
    runs=models.IntegerField
    balls=models.IntegerField
    wickets=models.IntegerField
    maidens=models.IntegerField
    status=models.CharField(choices=StatusofBowler)
    entry_time=models.TimeField
    exit_time=models.TimeField

