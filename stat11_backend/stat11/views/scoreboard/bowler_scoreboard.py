from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import BowlerScoreboard
from stat11.serializers import BowlerScoreboardSerializer, BowlerScoreboardNestedSerializer

class BowlerScoreboardModelViewSet(viewsets.ModelViewSet):
    queryset = BowlerScoreboard.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['team__id', 'player__id', 'status']
    ordering_fields = ['player__person__username', 'player__person__first_name', 'team__name']

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return BowlerScoreboardNestedSerializer
        return BowlerScoreboardSerializer