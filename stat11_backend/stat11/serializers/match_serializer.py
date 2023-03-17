from rest_framework import serializers
from ..models.match import Match
from ..serializers.tournament_serializer import TournamentSerializer

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'

class MatchNestedSerializer(serializers.ModelSerializer):
    tournament = TournamentSerializer()
    class Meta:
        model = Match
        fields = '__all__'    