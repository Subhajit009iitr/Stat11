from dataclasses import fields
from rest_framework import serializers
from models.models import *


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'
        