export interface IFixture {
    fixtureId:          number;
    referee:            string;
    timestamp:          number;
    venue:              IVenue;
    status:             IStatus;
    leagueId:           number;
    leagueName:         string;
    season:             number;
    round:              string;
    homeTeamId:         number;
    homeTeamName:       string;
    homeTeamLogo:       string;
    homeTeamWinner:     boolean;
    awayTeamId:         number;
    awayTeamName:       string;
    awayTeamLogo:       string;
    awayTeamWinner:     boolean;
    goals:              IGoals;
    score:              IScore;
}

export interface IVenue {
    venueId:            number;
    venueName:          string;
    venueCity:          string;
}

export interface IStatus {
    longStatus:         string;
    shortStatus:        string;
    elapsed:            number;
}

export interface IGoals {
    home:               number;
    away:               number;
}

export interface IScore {
    halftimeHome:       number;
    halftimeAway:       number;
    fulltimeHome:       number;
    fulltimeAway:       number;
    extratimeHome:      number;
    extratimeAway:      number;
    penaltyHome:        number;
    penaltyAway:        number;
}