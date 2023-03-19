from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from stat11.models import Player
from stat11.serializers import PlayerSerializer, PlayerNestedSerializer, UserSerializer

class PlayerModelViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return PlayerNestedSerializer
        return PlayerSerializer

    @action(detail=False, methods=['get'])
    def who_am_i(self, request):
        if request.user.username:
            serializer = UserSerializer(request.user)
            return Response({"data": serializer.data})
        return Response({"data": "User not registered!"})
