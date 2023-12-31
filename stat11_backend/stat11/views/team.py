from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import Team
from stat11.serializers import TeamSerializer, TeamNestedSerializer, TeamNestedRestrictedSerializer
from stat11.utils import get_team_batter_list, get_team_bowler_list, get_match_team_data
from rest_framework import status

class TeamModelViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['match__id', 'name', 'players__person__id']
    ordering_fields = ['name']

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve' or self.action == 'update':
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
        data = []
        distinct_teams = Team.objects.values('name','college','flag').distinct()
        for distinct_team in distinct_teams:
            filter_team = Team.objects.filter(
                name=distinct_team['name'], 
                college=distinct_team['college'], 
                flag=distinct_team['flag']
            )
            serializer = TeamNestedRestrictedSerializer(filter_team, many=True)
            for serialized_team in serializer.data:
                team = {
                    'id': serialized_team['id'],
                    'name': serialized_team['name'],
                    'flag': serialized_team['flag'],
                    'college': serialized_team['college'],
                    'players': serialized_team['players']
                }
                data.append(team)

        res = data
        return Response(res)