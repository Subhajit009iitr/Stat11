from rest_framework import serializers
from ..models.player import Player
from ..serializers.user_serializer import UserSerializer

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'

class PlayerNestedSerializer(serializers.ModelSerializer):
    person = UserSerializer()
    class Meta:
        model = Player
        fields = '__all__'
        