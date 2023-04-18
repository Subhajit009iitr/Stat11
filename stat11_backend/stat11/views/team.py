from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import Team
from stat11.serializers import TeamSerializer, TeamNestedSerializer
from stat11.utils import get_team_batter_list, get_team_bowler_list

class TeamModelViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['match__id', 'name', 'players__person__id']
    ordering_fields = ['name']

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return TeamNestedSerializer
        return TeamSerializer
    
    @action(detail=False, methods=['get'])
    def all_teams_and_batters(self, request):
        team_id = request.query_params.get('team__id')
        res = get_team_batter_list(team_id)
        return Response(res)
    
    @action(detail=False, methods=['get'])
    def all_teams_and_bowlers(self, request):
        team_id = request.query_params.get('team__id')
        res = get_team_bowler_list(team_id)
        return Response(res)