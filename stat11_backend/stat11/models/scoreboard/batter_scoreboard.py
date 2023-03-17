from django.db import models
from django.utils.translation import gettext_lazy as _
from ..player import Player
from ..team import Team
from ...constants.batter_statuses import ( BATTER_STATUSES, YET_TO_BAT )
from ...constants.wicket_types import ( WICKET_TYPES, BOWLED )

class BatterScoreboard(models.Model):
    team=models.ForeignKey(Team, on_delete=models.CASCADE)
    player=models.ForeignKey(Player, on_delete=models.CASCADE, related_name='player')
    runs=models.IntegerField()
    balls=models.IntegerField()
    fours=models.IntegerField()
    sixes=models.IntegerField()
    status=models.CharField(max_length=16, choices=BATTER_STATUSES, default=YET_TO_BAT)
    bowled_out_by=models.ForeignKey(Player, on_delete=models.CASCADE, related_name='bowled_out_by')
    wicket_taker=models.ForeignKey(Player, on_delete=models.CASCADE, related_name='wicket_taker')
    wicket_type=models.CharField(max_length=16, choices=WICKET_TYPES, default=BOWLED)
    entry_time=models.TimeField()
    exit_time=models.TimeField()
