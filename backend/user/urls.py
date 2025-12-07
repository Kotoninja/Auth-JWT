from django.urls import path
from user import views

app_name = "user"

urlpatterns = [
    path("registration/", views.CreateUserView.as_view(), name="registration"),
    path("profile/",views.get_user_information,name="user-profile")
]
