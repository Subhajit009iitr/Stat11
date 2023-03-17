from rest_framework import serializers
from ...models.scoreboard.bowler_scoreboard import BowlerScoreboard
from ..player_serializers import PlayerNestedSerializer
from ..team_serializers import TeamNestedSerializer

class BowlerScoreboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = BowlerScoreboard
        fields = '__all__'

class BowlerScoreboardNestedSerializer(serializers.ModelSerializer):
    team = TeamNestedSerializer()
    player = PlayerNestedSerializer()
    class Meta:
        model = BowlerScoreboard
        fields = '__all__'