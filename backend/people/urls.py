from django.urls import path
from people import views

app_name = "people"

urlpatterns = [
    path("", views.PeopleViewSet.as_view(), name="people-list"),
    path("<int:pk>/",views.PeopleProfileViewSet.as_view(),name="people-profile")
]
