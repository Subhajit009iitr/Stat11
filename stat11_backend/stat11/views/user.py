from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import User
from stat11.serializers import UserSerializer
from rest_framework import status

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
            data = serializer.data
            status_code = status.HTTP_200_OK
        else:
            data = ''
            status_code = status.HTTP_204_NO_CONTENT
        
        res = {'data': data}
        return Response(data, status=status_code)
    
    @action(detail=True, methods=['get'])
    def is_authenticated(self,request):
        return Response(request.user.is_authenticated)
