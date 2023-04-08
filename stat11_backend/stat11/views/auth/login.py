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
            print("HELLO0")
            print(User.objects.all())
            user = User.objects.get(email=user_data['email'])
            print("HELLO1")
        except ObjectDoesNotExist:
            message = 'User not found'
            status_code = status.HTTP_204_NO_CONTENT
            print("HELLO2")
        else:
            print(user.check_password(user_data['password']))
            print("HELLO3")
            if user.check_password(user_data['password']):
                # login(request, user)
                message = 'User logged in successfully'
                status_code = status.HTTP_200_OK
            else:
                message = 'Incorrect user credentials'
                status_code = status.HTTP_401_UNAUTHORIZED

        print("HELLO4")
        res = {'message': message}
        return Response(res, status=status_code)