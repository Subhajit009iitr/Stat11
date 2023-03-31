from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
# from rest_framework.permissions import AllowAny
# from django.views.decorators.csrf import csrf_exempt
# from django.utils.decorators import method_decorator

# @method_decorator(csrf_exempt, name='dispatch')
class SignUpUser(APIView):

    # permission_classes=[ AllowAny ]

    # @csrf_exempt
    def get(self, request):
        print("Getting get...")
        return Response({"data": "hemlo"})
    
    # @csrf_exempt
    def post(self, request):
        print(request.data)
        return Response({"data": "sign up work"})