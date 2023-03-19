from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from stat11.models import User
from stat11.serializers import UserSerializer

class UserModelViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=True, methods=['get'])
    def who_am_i(self, request):
        print(request.user)
        return Response({"data": request.user})

