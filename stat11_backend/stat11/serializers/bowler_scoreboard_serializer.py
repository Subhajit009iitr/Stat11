from dataclasses import fields
from rest_framework import serializers
from models.models import *


class BowlerScoreboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bowler_scoreboard
        fields = '__all__'
        