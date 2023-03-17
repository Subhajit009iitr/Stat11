from django.db import models
from django.utils.translation import gettext_lazy as _
from ..player import Player
from ..team import Team


class StatusOfBatter(models.TextChoices):
    YET_TO_BAT = 'yet_to_bat', _('Yet to Bat')
    BATTING = 'batting', _('Batting')
    NOT_OUT = 'not_out', _('Not Out')
    OUT = 'out', _('Out')

class WicketTypes(models.TextChoices):
    BOWLED = 'bowled', _('Bowled')
    CATCH = 'catch', _('Catch')
    RUN_OUT = 'run_out', _('Run Out')
    LBW = 'lbw', _('LBW')
    STUMPED = 'stumped', _('Stumped')

class BatterScoreboard(models.Model):
    team=models.ForeignKey(Team, on_delete=models.CASCADE)
    player=models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player')
    runs=models.IntegerField()
    balls=models.IntegerField()
    fours=models.IntegerField()
    sixes=models.IntegerField()
    status=models.CharField(max_length=16, choices=StatusOfBatter.choices, default=StatusOfBatter.YET_TO_BAT)
    bowled_out_by=models.ForeignKey(Player, on_delete=models.CASCADE, related_name='bowled_out_by')
    wicket_taker=models.ForeignKey(Player, on_delete=models.CASCADE, related_name='wicket_taker')
    wicket_type=models.CharField(max_length=16, choices=WicketTypes.choices, default=WicketTypes.BOWLED)
    entry_time=models.TimeField()
    exit_time=models.TimeField()
