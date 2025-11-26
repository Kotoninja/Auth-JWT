from rest_framework import generics
from rest_framework import permissions 
from django.contrib.auth.models import User
from people.serializers import PeopleSerializer

class PeopleViewSet(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = PeopleSerializer

class PeopleProfileViewSet(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = PeopleSerializer
    permission_classes = (permissions.IsAuthenticated,)