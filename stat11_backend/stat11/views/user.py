from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import User
from stat11.serializers import UserSerializer

class UserModelViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['is_superuser', 'is_admin']
    ordering_fields = ['username', 'first_name']

    @action(detail=False, methods=['get'])
    def who_am_i(self, request):
        if request.user.username:
            serializer = UserSerializer(request.user)
            return Response({"data": serializer.data})
        return Response({"data": "User not registered!"})
