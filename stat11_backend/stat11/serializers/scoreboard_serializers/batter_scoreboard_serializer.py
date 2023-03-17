from rest_framework import serializers
from ...models.scoreboard.batter_scoreboard import BatterScoreboard
from ...serializers.player_serializer import PlayerNestedSerializer
from ...serializers.team_serializer import TeamNestedSerializer

class BatterScoreboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = BatterScoreboard
        fields = '__all__'

class BatterScoreboardNestedSerializer(serializers.ModelSerializer):
    team = TeamNestedSerializer()
    player = PlayerNestedSerializer()
    bowled_out_by = PlayerNestedSerializer()
    wicket_taker = PlayerNestedSerializer()
    class Meta:
        model = BatterScoreboard
        fields = '__all__'