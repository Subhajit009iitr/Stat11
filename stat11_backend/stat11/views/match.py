from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import Match
from stat11.serializers import MatchSerializer
from stat11.utils import get_match_team_details, get_match_mvp_data
from stat11.utils import get_match_team_data, segregate_match_and_teams_date_wise, get_match_mvp_data , get_match_team_list_data
from stat11.serializers import MatchSerializer
from rest_framework import status

class MatchModelViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all().order_by('-date')
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['tournament__id', 'date', 'time', 'overs_no']
    ordering_fields = ['date', 'time']
    def get_serializer_class(self):
        # if self.action == 'list' or self.action == 'retrieve':
        #     return MatchSerializer
        return MatchSerializer
    
    @action(detail=False, methods=['get'])
    def all_match_and_team_details(self, request):
        all_match_list = self.get_queryset()
        first_match = all_match_list[0]
        res = get_match_team_details(first_match.id)

    def mvp_top_three(self, request):
        match_id = request.query_params.get('match__id')
        res= get_match_mvp_data(match_id)
        return Response(res)
    
    @action(detail=False, methods=['get'])
    def teamList(self, request):
        match_id = request.query_params.get('match__id')
        res= get_match_team_list_data(match_id)
        return Response(res)
    
    @action(detail=False, methods=['get'])
    def all_match_and_teams(self, request):
        data = []
        all_match_list = self.get_queryset()

        for match in all_match_list:
            match_teams_data = get_match_team_data(match.id)
            if len(match_teams_data)==2:
                serializer = MatchSerializer(match)
                match_data = serializer.data
                match_and_teams = {
                    'match': match_data,
                    'teams': match_teams_data
                }
                data.append(match_and_teams)
        
        res = segregate_match_and_teams_date_wise(data)

        return Response(res, status=status.HTTP_200_OK)
    
    # @action(detail=False, methods=['get'])
    # def participating_teams(self, request, pk=None):
    #     match_teams_data = get_match_team_data(pk, detail=True)

    #     res = match_teams_data
    #     return Response(res, status=status.HTTP_200_OK)
