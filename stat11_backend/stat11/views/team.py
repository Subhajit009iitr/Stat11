from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import Team
from stat11.serializers import TeamSerializer, TeamNestedSerializer
from stat11.utils import get_team_batter_list, get_team_bowler_list, get_match_team_data
from rest_framework import status

class TeamModelViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['match__id', 'name', 'players__person__id']
    ordering_fields = ['name']

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return TeamNestedSerializer
        return TeamSerializer
    
    def list(self, request, *args, **kwargs):
        match_id = request.query_params.get('match__id')
        if match_id is not None:
            match_teams_data = get_match_team_data(match_id, True)
            return Response(match_teams_data, status=status.HTTP_200_OK)
        return super().list(request, *args, **kwargs)
    
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
    
    @action(detail=False, methods=['get'])
    def filter_distinct_teams(self, request):
        distinct_teams = Team.objects.values('name','college','flag','players').distinct()
        print(distinct_teams)
        return Response(distinct_teams)