from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes, api_view


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [
        AllowAny,
    ]

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user_information(request):
    user = request.user
    return Response(UserSerializer(user).data)


# class ProfileUserView(APIView):
#     @permission_classes([IsAuthenticated])
#     def get(self, request):
#         user = request.user
#         return Response(UserSerializer(user).data)
