from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from stat11.models import User
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from django.contrib.auth import logout

class LogoutUser(APIView):
    
    def get(self, request, format=None):

        if request.user.is_authenticated:
            logout(request)
            message = 'User logged out successfully'
            status_code = status.HTTP_200_OK
        else:
            message = 'User not logged in'
            status_code = status.HTTP_200_OK
        
        res = {'message': message}
        return Response(res, status=status_code)