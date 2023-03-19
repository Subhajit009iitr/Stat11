from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import User,Player,Match,Team,Tournament
from .serializers.user_serializer import UserSerializer
from .serializers.player_serializer import PlayerSerializer
from .serializers.match_serializer import MatchSerializer
from .serializers.team_serializer import TeamSerializer
from .serializers.tournament_serializer import TournamentSerializer


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['get'])
    def me(self, request):

        serializer = self.get_serializer(request.user)
        return Response(serializer.data)

    # def create(self, request, *args, **kwargs):

    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    # def update(self, request, *args, **kwargs):

    #     partial = kwargs.pop('partial', False)
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance, data=request.data, partial=partial)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #     return Response(serializer.data)

    # def destroy(self, request, *args, **kwargs):

    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)

class PlayerViewSet(viewsets.ModelViewSet):
    
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    
    @action(detail=False, methods=['get'])
    def me(self, request):

        serializer = self.get_serializer(request.player)
        return Response(serializer.data)


class MatchViewSet(viewsets.ModelViewSet):
    
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    
    @action(detail=False, methods=['get'])
    def me(self, request):

        serializer = self.get_serializer(request.match)
        return Response(serializer.data)
    
class TeamViewSet(viewsets.ModelViewSet):
        
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    
    @action(detail=False, methods=['get'])
    def me(self, request):

        serializer = self.get_serializer(request.team)
        return Response(serializer.data)
    
class TournamentViewSet(viewsets.ModelViewSet):
    
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer
    
    @action(detail=False, methods=['get'])
    def me(self, request):

        serializer = self.get_serializer(request.tournament)
        return Response(serializer.data)
