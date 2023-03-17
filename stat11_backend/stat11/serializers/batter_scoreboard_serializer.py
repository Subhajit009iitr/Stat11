from dataclasses import fields
from rest_framework import serializers
from models.models import *


class BatterScoreboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Batter_scoreboard
        fields = '__all__'
        