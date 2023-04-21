from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import BowlerScoreboard
from stat11.serializers import BowlerScoreboardSerializer, BowlerScoreboardNestedSerializer, BowlerScoreboardNestedRestrictedSerializer

class BowlerScoreboardModelViewSet(viewsets.ModelViewSet):
    queryset = BowlerScoreboard.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['team__id', 'player__id', 'status']
    ordering_fields = ['player__person__username', 'player__person__first_name', 'team__name']

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return BowlerScoreboardNestedSerializer
        return BowlerScoreboardSerializer
    
    @action(detail=False, methods=['get'])
    def current_bowlers(self, request):
        team_id = request.query_params.get('team__id')
        current_batters = []
        res = []
        if team_id:
            bowlers = BowlerScoreboard.objects.filter(team__id=team_id)
            for bowler in bowlers:
                if bowler.entry_time!=None and bowler.entry_time!='':
                    if bowler.exit_time==None or bowler.exit_time=='':
                        current_batters.append(bowler)

            serializer = BowlerScoreboardNestedRestrictedSerializer(current_batters, many=True)
            res = serializer.data
        return Response(res)