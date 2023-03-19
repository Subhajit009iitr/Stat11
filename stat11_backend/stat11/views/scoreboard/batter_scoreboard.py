from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from stat11.models import BatterScoreboard
from stat11.serializers import BatterScoreboardSerializer, BatterScoreboardNestedSerializer

class BatterScoreboardModelViewSet(viewsets.ModelViewSet):
    queryset = BatterScoreboard.objects.all()

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return BatterScoreboardNestedSerializer
        return BatterScoreboardSerializer