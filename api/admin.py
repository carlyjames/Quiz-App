from django.contrib import admin
from api.models import *
from .forms import QuizForm


class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "email"]


class ProfileAdmin(admin.ModelAdmin):
    list_editable = ["verified"]
    list_display = ["user", "full_name", "verified", "sex", "profession", "country"]


class QuestionAdmin(admin.ModelAdmin):
    list_display = ["question"]


class UserQuizAdmin(admin.ModelAdmin):
    list_display = ["user", "quiz"]


class QuizAdmin(admin.ModelAdmin):
    form = QuizForm
    list_display = ["quiz_title", "num_questions", "id"]


admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Quiz, QuizAdmin)
admin.site.register(UserQuiz, UserQuizAdmin)
