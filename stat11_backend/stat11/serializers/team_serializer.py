from dataclasses import fields
from rest_framework import serializers
from models.models import *


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'
        