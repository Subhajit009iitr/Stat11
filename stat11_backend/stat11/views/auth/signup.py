from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from stat11.models import User, Player
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from django.contrib.auth import login
from django.shortcuts import redirect

class SignUpUser(APIView):
    
    def post(self, request):
        user_data = request.data
        try:
            user = User.objects.get(email=user_data['email'])
            message = 'User already registered.'
            status_code = status.HTTP_409_CONFLICT
        except ObjectDoesNotExist:
            user = User(
                username=user_data['username'],
                email=user_data['email']
            )
            user.save()
            message = 'User created successfully.'

            if user_data['is_player']:
                player = Player(
                    person=user,
                    type=user_data['player_type']
                )
                player.save()
                message = 'Player created successfully.'
                
            status_code = status.HTTP_201_CREATED

        res = {'message': message}
        return Response(res, status=status_code)