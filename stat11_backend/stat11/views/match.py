from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import Match, Team, Player
from stat11.serializers import MatchSerializer
from stat11.utils import get_match_team_details, get_match_mvp_data
from stat11.utils import get_match_team_data, segregate_match_and_teams_date_wise, get_match_mvp_data , get_match_team_list_data, get_sorted_batter_list, get_sorted_bowler_list
from stat11.serializers import MatchSerializer
from rest_framework import status

class MatchModelViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all().order_by('-date')
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['date', 'time', 'overs_no']
    ordering_fields = ['date', 'time']

    def get_serializer_class(self):
        # if self.action == 'list' or self.action == 'retrieve':
        #     return MatchSerializer
        return MatchSerializer
    
    def create(self, request, *args, **kwargs):
        data = request.data
        match = Match(
            date = data['date'],
            time = data['time'],
            overs_no = data['overs_no'],
            location = data['location']
        )
        match.save()

        if data['team1']!=None and data['team1']!='':
            user_list = []
            for player in data['team1']['players']:
                user_list.append(player['person']['id'])

            team = Team(
                match = Match.objects.get(id=match.id),
                name = data['team1']['name'],
                college = data['team1']['college'],
                flag = data['team1']['flag'],
            )
            team.save()
            team.players.set(Player.objects.filter(person__id__in=user_list))

        if data['team2']!=None and data['team2']!='':
            user_list = []
            for player in data['team2']['players']:
                user_list.append(player['person']['id'])

            team = Team(
                match = Match.objects.get(id=match.id),
                name = data['team2']['name'],
                college = data['team2']['college'],
                flag = data['team2']['flag'],
            )
            team.save()
            team.players.set(Player.objects.filter(person__id__in=user_list))
        
        res = {'status': 'success'}
        return Response(res, status=status.HTTP_201_CREATED)
    
    @action(detail=False, methods=['get'])
    def all_match_and_team_details(self, request):
        match_id = request.query_params.get('match__id')
        res = get_match_team_details(match_id)
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

    @action(detail=False, methods=['get'])
    def sortedBatters(self, request):
        match_id = request.query_params.get('match__id')
        res= get_sorted_batter_list(match_id)
        return Response(res)
    
    @action(detail=False, methods=['get'])
    def sortedBowlers(self, request):
        match_id = request.query_params.get('match__id')
        res= get_sorted_bowler_list(match_id)
        return Response(res)
