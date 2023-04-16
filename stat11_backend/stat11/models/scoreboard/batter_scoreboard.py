from django.db import models
from django.utils.translation import gettext_lazy as _
from ..player import Player
from ..team import Team
from ...constants.batter_statuses import ( BATTER_STATUSES, YET_TO_BAT )
from ...constants.wicket_types import ( WICKET_TYPES, BOWLED )

class BatterScoreboard(models.Model):
    team=models.ForeignKey(Team, on_delete=models.CASCADE)
    player=models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player')
    runs=models.IntegerField(default=0)
    balls=models.IntegerField(default=0)
    fours=models.IntegerField(default=0)
    sixes=models.IntegerField(default=0)
    status=models.CharField(max_length=16, choices=BATTER_STATUSES, default=YET_TO_BAT)
    bowled_out_by=models.ForeignKey(Player, on_delete=models.CASCADE, related_name='bowled_out_by', null=True, blank=True)
    wicket_taker=models.ForeignKey(Player, on_delete=models.CASCADE, related_name='wicket_taker', null=True, blank=True)
    wicket_type=models.CharField(max_length=16, choices=WICKET_TYPES, default=BOWLED)
    entry_time=models.TimeField(null=True, blank=True)
    exit_time=models.TimeField(null=True, blank=True)
