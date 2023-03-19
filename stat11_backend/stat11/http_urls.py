from django.urls import path,include
from stat11.views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('user',UserModelViewSet ,basename='user')
router.register('player',PlayerModelViewSet ,basename='player')
router.register('tournament',TournamentModelViewSet ,basename='tournament')
router.register('match',MatchModelViewSet ,basename='match')
router.register('team',TeamModelViewSet ,basename='team')
router.register('batter_scoreboard',BatterScoreboardModelViewSet ,basename='batter_scoreboard')
router.register('bowler_scoreboard',BowlerScoreboardModelViewSet ,basename='bowler_scoreboard')

urlpatterns =[
    path('', include(router.urls))
]