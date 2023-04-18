from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import Match
from stat11.serializers import MatchSerializer, MatchNestedSerializer
from stat11.utils import get_match_teams, get_match_mvp_data , get_match_team_list_data

class MatchModelViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['tournament__id', 'date', 'time', 'overs_no']
    ordering_fields = ['date', 'time']
    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return MatchNestedSerializer
        return MatchSerializer
    
    @action(detail=False, methods=['get'])
    def all_match_and_teams(self, request):
        match_id = request.query_params.get('match__id')
        res = get_match_teams(match_id)
        return Response(res)
    
    @action(detail=False, methods=['get'])
    def mvp_top_three(self, request):
        match_id = request.query_params.get('match__id')
        res= get_match_mvp_data(match_id)
        return Response(res)
    
    @action(detail=False, methods=['get'])
    def teamList(self, request):
        match_id = request.query_params.get('match__id')
        res= get_match_team_list_data(match_id)
        return Response(res)
    
