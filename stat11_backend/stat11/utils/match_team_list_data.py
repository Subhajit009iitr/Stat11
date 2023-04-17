from stat11.models import Team, Player
from stat11.serializers import TeamSerializer , PlayerNestedSerializer

def get_match_team_list_data(match_id):
    teamList = []
    matchTeams = Team.objects.filter(match__id = match_id)
    firstTeam = matchTeams[0]
    secondTeam = matchTeams[1]
    serializer1 = TeamSerializer(firstTeam)
    data1 = serializer1.data
    serializer2 = TeamSerializer(secondTeam)
    data2 = serializer2.data
    teamList.append(data1['players'])
    teamList.append(data2['players'])
    netTeam = []
    for i,pl in enumerate(teamList):
        team = []
        for j,pid in enumerate(pl):
            # print(pid)
            player = Player.objects.all()
            for k in player:
                if(k.id == pid):
                    data = k
            
            if(data.type == 'all_rounder'):
                Type = 'All Rounder'
            elif(data.type == 'bowler'):
                Type = 'Bowler'
            else:
                Type = 'Batter'
            
            obj={
                'name' : data.person.first_name+" "+data.person.last_name,
                'type' : Type
            } 
            team.append(obj)
        netTeam.append(team)
    return netTeam



    



