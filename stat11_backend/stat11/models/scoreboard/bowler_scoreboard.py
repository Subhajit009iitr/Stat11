from django.db import models
from django.utils.translation import gettext_lazy as _
from ..player import Player
from ..team import Team

class StatusOfBowler(models.TextChoices):
    BOWLING = 'bowling', _('Bowling')
    IDLE = 'idle', _('Idle')

class BowlerScoreboard(models.Model):
    team=models.ForeignKey(Team, on_delete=models.CASCADE)
    player=models.ForeignKey(Player, on_delete=models.CASCADE)
    runs=models.IntegerField()
    balls=models.IntegerField()
    wickets=models.IntegerField()
    maidens=models.IntegerField()
    status=models.CharField(max_length=10, choices=StatusOfBowler.choices, default=StatusOfBowler.IDLE)
    entry_time=models.TimeField()
    exit_time=models.TimeField()

