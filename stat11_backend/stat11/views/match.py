from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import Match
from stat11.serializers import MatchSerializer, MatchNestedSerializer

class MatchModelViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['tournament__id', 'date', 'time', 'overs_no']
    ordering_fields = ['date', 'time']

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return MatchNestedSerializer
        return MatchSerializer