from django.db import models

# Create your models here.
class User(models.Model):
    username=models.CharField(unique=True)
    first_name=models.CharField
    last_name=models.CharField
    email=models.CharField(unique=True)
    password=models.CharField
    is_superuser=models.BooleanField
    is_admin=models.BooleanField
    photo=models.ImageField
    date_joined=models.DateField



class Typeofplayer(models.TextChoices):
    batter= 'batter',('Batter')
    bowler= 'bowler',('Bowler')

class Player(models.Model):
    person=models.ForeignKey(User,on_delete=models.CASCADE)
    created_on=models.DateField
    type=models.CharField(choices=Typeofplayer)



class Team(models.Model):
    match=models.ForeignKey(Match,on_delete=models.CASCADE)
    name=models.CharField(unique=True)
    players=models.ManyToManyField
    flag=models.ImageField



class Tournament(models.Model):
    name=models.CharField
    start=models.DateField
    end=models.DateField
   
class Match(models.Model):
    tournament=models.ForeignKey(Tournament,on_delete=models.CASCADE)
    created_on=models.DateField
    date=models.DateField
    time=models.TimeField
    overs_no=models.IntegerField
    location=models.CharField



class StatusofBowler(models.TextChoices):
        bowling= 'bowling', ('Bowling')
        idle= 'idle', ('Idle')

class Bowler_scoreboard(models.Model):
    team=models.ForeignKey(Team,on_delete=models.CASCADE)
    player=models.ForeignKey(Player,on_delete=models.CASCADE)
    runs=models.IntegerField
    balls=models.IntegerField
    wickets=models.IntegerField
    maidens=models.IntegerField
    status=models.CharField(choices=StatusofBowler)
    entry_time=models.TimeField
    exit_time=models.TimeField



class StatusofBatter(models.TextChoices):
    yet_to_bat= 'yet to bat', ('Yet to Bat')
    batting= 'batting', ('Batting')
    not_out= 'not out', ('Not out')
    out= 'out', ('Out')

class Batter_scoreboard(models.Model):
    team=models.ForeignKey(Team,on_delete=models.CASCADE)
    player=models.ForeignKey(Player,on_delete=models.CASCADE)
    runs=models.IntegerField
    balls=models.IntegerField
    fours=models.IntegerField
    sixes=models.IntegerField
    status=models.CharField(choices=StatusofBatter)
    bowled_out_by=models.ForeignKey(Player,on_delete=models.CASCADE)
    wicket_taker=models.ForeignKey(Player,on_delete=models.CASCADE)
    entry_time=models.TimeField
    exit_time=models.TimeField