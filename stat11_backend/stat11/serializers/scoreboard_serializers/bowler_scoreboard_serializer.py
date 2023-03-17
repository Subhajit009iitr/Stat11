from rest_framework import serializers
from ...models.scoreboard.bowler_scoreboard import BowlerScoreboard
from ...serializers.player_serializer import PlayerNestedSerializer
from ...serializers.team_serializer import TeamNestedSerializer

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