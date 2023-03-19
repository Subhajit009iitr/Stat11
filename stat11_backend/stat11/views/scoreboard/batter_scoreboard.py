from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import BatterScoreboard
from stat11.serializers import BatterScoreboardSerializer, BatterScoreboardNestedSerializer

class BatterScoreboardModelViewSet(viewsets.ModelViewSet):
    queryset = BatterScoreboard.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['team__id', 'player__id', 'bowled_out_by__person__id', 'wicket_taker__person__id', 'wicket_type', 'status']
    ordering_fields = ['player__person__username', 'player__person__first_name', 'team__name']

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return BatterScoreboardNestedSerializer
        return BatterScoreboardSerializer