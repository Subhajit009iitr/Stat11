from rest_framework import serializers
from ..models.player import Player
from .user_serializers import FilteredUserSerializer, UserNameRestrictedSerializer

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'

class PlayerNestedSerializer(serializers.ModelSerializer):
    person = FilteredUserSerializer()
    class Meta:
        model = Player
        fields = '__all__'

class PlayerNameRestrictedSerializer(serializers.ModelSerializer):
    person = UserNameRestrictedSerializer()
    class Meta:
        model = Player
        fields = '__all__'
        