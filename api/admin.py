from django.contrib import admin
from api.models import *


class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "email"]


class ProfileAdmin(admin.ModelAdmin):
    list_editable = ["verified"]
    list_display = ["user", "full_name", "verified", "sex", "profession", "country"]


class QuestionAdmin(admin.ModelAdmin):
    list_display = ["question", "category"]


admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Question, QuestionAdmin)
