from rest_framework import serializers
from ..models.team import Team
from .match_serializers import MatchSerializer
from .player_serializers import PlayerNestedSerializer, PlayerNameRestrictedSerializer

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class TeamNestedSerializer(serializers.ModelSerializer):
    match = MatchSerializer()
    players = PlayerNestedSerializer(many=True)
    class Meta:
        model = Team
        fields = '__all__'   

class TeamNestedRestrictedSerializer(serializers.ModelSerializer):
    match = MatchSerializer()
    players = PlayerNameRestrictedSerializer(many=True)
    class Meta:
        model = Team
        fields = '__all__'      