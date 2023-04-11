from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from stat11.models import User
from stat11.serializers import UserSerializer, FilteredUserSerializer
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

class UserModelViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['is_superuser', 'is_staff']
    ordering_fields = ['username', 'first_name']

    @action(detail=False, methods=['get'])
    def check_if_authenticated(self,request):
        return Response(request.user.is_authenticated)

    @action(detail=False, methods=['get'])
    def who_am_i(self, request):
        if request.user.username:
            serializer = FilteredUserSerializer(request.user)
            user = serializer.data
            message = 'User retrieved.'
            status_code = status.HTTP_200_OK
        else:
            user = ''
            message = 'No user found.'
            status_code = status.HTTP_204_NO_CONTENT

        res = {
            'user': user,
            'message': message
        }
        return Response(res, status=status_code)
    
