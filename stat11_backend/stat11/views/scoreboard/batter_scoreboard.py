from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import BatterScoreboard
from stat11.serializers import BatterScoreboardSerializer, BatterScoreboardNestedSerializer, BatterScoreboardNestedRestrictedSerializer

class BatterScoreboardModelViewSet(viewsets.ModelViewSet):
    queryset = BatterScoreboard.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['team__id', 'player__id', 'bowled_out_by__person__id', 'wicket_taker__person__id', 'wicket_type', 'status']
    ordering_fields = ['player__person__username', 'player__person__first_name', 'team__name']

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return BatterScoreboardNestedSerializer
        return BatterScoreboardSerializer
    
    @action(detail=False, methods=['get'])
    def current_batters(self, request):
        team_id = request.query_params.get('team__id')
        current_batters = []
        res = []
        if team_id:
            batters = BatterScoreboard.objects.filter(team__id=team_id)
            for batter in batters:
                if batter.entry_time!=None and batter.entry_time!='':
                    if batter.exit_time==None or batter.exit_time=='':
                        current_batters.append(batter)

            serializer = BatterScoreboardNestedRestrictedSerializer(current_batters, many=True)
            res = serializer.data
        return Response(res)