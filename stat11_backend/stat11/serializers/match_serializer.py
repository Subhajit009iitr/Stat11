from dataclasses import fields
from rest_framework import serializers
from models.models import *


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'
        