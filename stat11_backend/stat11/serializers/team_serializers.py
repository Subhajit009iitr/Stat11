from rest_framework import serializers
from ..models.team import Team
from ..serializers.match_serializer import MatchNestedSerializer
from ..serializers.player_serializer import PlayerNestedSerializer

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class TeamNestedSerializer(serializers.ModelSerializer):
    match = MatchNestedSerializer()
    players = PlayerNestedSerializer(many=True)
    class Meta:
        model = Team
        fields = '__all__'        