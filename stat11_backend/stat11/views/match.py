from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from stat11.models import Match
from stat11.serializers import MatchSerializer, MatchNestedSerializer

class MatchModelViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return MatchNestedSerializer
        return MatchSerializer