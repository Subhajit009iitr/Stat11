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
            data = Player.objects.get(id=pid)
            obj={
                'name' : data.person.first_name+" "+data.person.last_name,
                'type' : data.type
            } 
            team.append(obj)
        netTeam.append(team)
    return netTeam



    



