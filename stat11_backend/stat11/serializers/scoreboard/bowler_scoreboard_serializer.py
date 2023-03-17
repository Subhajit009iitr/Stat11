from rest_framework import serializers
from ...models.scoreboard.bowler_scoreboard import BowlerScoreboard


class BowlerScoreboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = BowlerScoreboard
        fields = '__all__'
        