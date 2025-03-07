from django.contrib import admin
from api.models import User,Profile

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']


class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['user', 'full_name' ,'verified', 'sex', 'profession', 'country']

admin.site.register(User, UserAdmin)
admin.site.register( Profile,ProfileAdmin)
