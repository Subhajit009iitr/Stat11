from rest_framework import serializers
from ..models.player import Player
from .user_serializers import UserSerializer

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'

class PlayerNestedSerializer(serializers.ModelSerializer):
    person = UserSerializer()
    class Meta:
        model = Player
        fields = '__all__'
        