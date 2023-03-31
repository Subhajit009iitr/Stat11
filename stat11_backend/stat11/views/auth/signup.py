from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action

class SignUpUser(APIView):
    def post(self, request):
        print(request.data)
        return Response({"data": "sign up work"})