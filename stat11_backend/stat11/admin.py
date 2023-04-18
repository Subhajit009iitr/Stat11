from django.contrib import admin
from .models import *

@admin.register(User)
class UsersAdmin(admin.ModelAdmin):
    list_display = ['id','username','first_name','last_name']

@admin.register(Player)
class UsersAdmin(admin.ModelAdmin):
    list_display = ['id','person','type']

@admin.register(Tournament)
class UsersAdmin(admin.ModelAdmin):
    list_display = ['id','name']

@admin.register(Match)
class UsersAdmin(admin.ModelAdmin):
    list_display = ['id','created_on']

@admin.register(Team)
class UsersAdmin(admin.ModelAdmin):
    list_display = ['id','match','name']

@admin.register(BatterScoreboard)
class UsersAdmin(admin.ModelAdmin):
    list_display = ['id','team','player']

@admin.register(BowlerScoreboard)
class UsersAdmin(admin.ModelAdmin):
    list_display = ['id','team','player']