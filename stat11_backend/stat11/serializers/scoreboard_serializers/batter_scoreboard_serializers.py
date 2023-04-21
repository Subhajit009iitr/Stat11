from rest_framework import serializers
from ...models.scoreboard.batter_scoreboard import BatterScoreboard
from ..player_serializers import PlayerNestedSerializer, PlayerNameRestrictedSerializer
from ..team_serializers import TeamNestedSerializer, TeamNestedRestrictedSerializer

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

class BatterScoreboardNestedRestrictedSerializer(serializers.ModelSerializer):
    team = TeamNestedRestrictedSerializer()
    player = PlayerNameRestrictedSerializer
    bowled_out_by = PlayerNameRestrictedSerializer
    wicket_taker = PlayerNameRestrictedSerializer
    class Meta:
        model = BatterScoreboard
        fields = '__all__'