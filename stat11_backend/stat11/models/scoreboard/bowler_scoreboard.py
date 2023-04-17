from django.db import models
from django.utils.translation import gettext_lazy as _
from ..player import Player
from ..team import Team
from ...constants.bowler_statuses import ( BOWLER_STATUSES, IDLE )

class StatusOfBowler(models.TextChoices):
    BOWLING = 'bowling', _('Bowling')
    IDLE = 'idle', _('Idle')

class BowlerScoreboard(models.Model):
    team=models.ForeignKey(Team, on_delete=models.CASCADE)
    player=models.ForeignKey(Player, on_delete=models.CASCADE)
    runs=models.IntegerField(default=0)
    balls=models.IntegerField(default=0)
    wickets=models.IntegerField(default=0)
    maidens=models.IntegerField(default=0)
    status=models.CharField(max_length=10, choices=BOWLER_STATUSES, default=IDLE)
    entry_time=models.TimeField(null=True, blank=True)
    exit_time=models.TimeField(null=True, blank=True)

