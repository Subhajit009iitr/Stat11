from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from stat11.models import User
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from django.contrib.auth import login

class LoginUser(APIView):
    
    def post(self, request):
        user_data = request.data

        try:
            user = User.objects.get(email=user_data['email'])
        except ObjectDoesNotExist:
            message = 'User not found'
            status_code = status.HTTP_204_NO_CONTENT
        else:
            if user.check_password(user_data['password']):
                login(request, user)
                message = 'User logged in successfully'
                status_code = status.HTTP_200_OK
            else:
                message = 'Incorrect user credentials'
                status_code = status.HTTP_401_UNAUTHORIZED

        res = {'message': message}
        return Response(res, status=status_code)