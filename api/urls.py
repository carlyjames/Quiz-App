from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path
from api import views

app_name = "api"
urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("register/", views.RegisterView.as_view()),
    path("dashboard/", views.dashboard),
    path("addquestion/", views.AddQuestion.as_view()),
    # path("addquiz/", views.AddQuiz.as_view()),
    path("updatequiz/<int:pk>", views.RetrieveUpdateQuiz.as_view()),
    path("app/<str:stack>/", views.QuizQuestionView.as_view()),
    path("q/<str:stack>/", views.ListQuestion.as_view()),
]
