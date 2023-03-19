from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from stat11.models import BowlerScoreboard
from stat11.serializers import BowlerScoreboardSerializer, BowlerScoreboardNestedSerializer

class BowlerScoreboardModelViewSet(viewsets.ModelViewSet):
    queryset = BowlerScoreboard.objects.all()

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return BowlerScoreboardNestedSerializer
        return BowlerScoreboardSerializer