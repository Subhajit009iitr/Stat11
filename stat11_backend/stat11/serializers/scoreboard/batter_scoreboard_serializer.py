from rest_framework import serializers
from ...models.scoreboard.batter_scoreboard import BatterScoreboard


class BatterScoreboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = BatterScoreboard
        fields = '__all__'
        