from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from stat11.models import Team
from stat11.serializers import TeamSerializer, TeamNestedSerializer

class TeamModelViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()

    def get_serializer_class(self):
        if self.action == 'list' or self.action == 'retrieve':
            return TeamNestedSerializer
        return TeamSerializer