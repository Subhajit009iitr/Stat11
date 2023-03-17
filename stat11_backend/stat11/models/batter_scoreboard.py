from django.db import models
from .player import Player
from .team import Team


class StatusofBatter(models.TextChoices):
    yet_to_bat= 'yet to bat', ('Yet to Bat')
    batting= 'batting', ('Batting')
    not_out= 'not out', ('Not out')
    out= 'out', ('Out')

class Batter_scoreboard(models.Model):
    team=models.ForeignKey(Team,on_delete=models.CASCADE)
    player=models.ForeignKey(Player,on_delete=models.CASCADE)
    runs=models.IntegerField
    balls=models.IntegerField
    fours=models.IntegerField
    sixes=models.IntegerField
    status=models.CharField(choices=StatusofBatter)
    bowled_out_by=models.ForeignKey(Player,on_delete=models.CASCADE)
    wicket_taker=models.ForeignKey(Player,on_delete=models.CASCADE)
    entry_time=models.TimeField
    exit_time=models.TimeField
