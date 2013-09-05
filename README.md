NFL Node.js Exercise
====================

Starter material for a Node.js exercise based on 2012 NFL data.

Instructions
------------

If you've stumbled into this repository, its probably because you've been tasked
with completing this exercise. These simple instructions should get you started.

Good Luck!

### Step 1 - Get your GitHub on!

First, you'll need to get set up on GitHub.

- Create a GitHub account (if you don't have one)
- [Fork](https://help.github.com/articles/fork-a-repo) this repository.
  - The fork is where you'll work on your solution and its how we'll execute
    and evaluate your app.

### Step 2 - Check out the data.

In this repo (or your fork), you'll notice two json files in the `/data` folder.
This is what we'll be using to populate the app.

**Player.2012.json**

This json file contains some NFL player data. Sample Player:

```js
{
  PlayerID: 12725,
  Team: 'BUF',
  Number: 99,
  FirstName: 'Marcell',
  LastName: 'Dareus',
  Position: 'DT',
  Status: 'Active',
  Height: '6\'3"',
  Weight: '319',
  BirthDate: '11/18/1989',
  College: 'Alabama',
  Experience: 3,
  FantasyPosition: 'DL',
  Active: true,
  PositionCategory: 'DEF',
  Name: 'Marcell Dareus',
  Age: 23,
  ExperienceString: '3rd Season',
  BirthDateString: 'November 18, 1989',
  PhotoUrl: 'http://static.nfldata.com/images/player/12725.jpg',
  ByeWeek: 8,
  UpcomingGameOpponent: 'NE',
  UpcomingGameWeek: 1,
  ShortName: 'M.Dareus',
  AverageDraftPosition: null,
  DepthPositionCategory: 'DEF',
  DepthPosition: 'NT',
  DepthOrder: 1,
  DepthDisplayOrder: 13,
  CurrentTeam: 'BUF',
  CollegeDraftTeam: 'BUF',
  CollegeDraftYear: 2011,
  CollegeDraftRound: 1,
  CollegeDraftPick: 3,
  IsUndraftedFreeAgent: false
}
```

**Team.2012.json**

This json file contains some NFL team data. Sample Team:

```js
{
  Key: 'STL',
  City: 'St. Louis',
  Name: 'Rams',
  Conference: 'NFC',
  Division: 'West',
  FullName: 'St. Louis Rams'
}
```

## Step 3 - Build the app

Heres where we get to the real meat. You'll be building a simple Node.js app
that serves up this player data to an HTML/CSS front-end. The purpose of the
app is to browse the player data with a few different levels of filtration.

Heres what the app needs to do:

**Requirements**

- `/` - The home page of the app should allow the user to select between listing
  players or listing teams.
- `/teams` - This page should list all the teams.
  - The teams should be visually organized by Conferenece and Division.
  - Clicking a team name (that has players) should send you to `/teams/[team key]`
      - *Note: Only ARI, ATL, BAL, and BUF have players in the sample data.
- `/teams/[team key]` - This page should display the team's info and list all
  the **active** players on the team.
- `/players` - This page should list all players.
  - Clicking a player name should send you to `/players/[player id]`
- `/players/[player id]` - This page should display a player's profile.

**Deliverable**

- When you feel like you've completed the exercise, send us a link to your fork
  and include any special instructions on how to run your application.

## Step 4 - Push All The Things!

Your fork of this repository is where we'll evaluate the solution. We'd prefer
if you make frequent commits and push often. This will demonstrate comfort with
a 'git-centric' workflow and give us a unique opportunity to see how you
approached the problem.

You're not required to send us a link to your fork until you're finished, but
feel free to send it to us earlier if you feel comfortable with us taking a
sneak-peak.


Sample UI
---------

This isn't a test of your design skills, so keep the UI simple. Here are some
sample screenshots to provide some direction. Feel free to replicate these as
closely as you want, or go crazy and come up with something on your own.

The Sample was built with with [Bootstrap](http://getbootstrap.com/) and a
minimal amount of custom CSS.

### Home
![Home](https://raw.github.com/cpsubrian/nfl-exercise/master/screens/screen-home.png)

- - -
### Teams
![Teams](https://raw.github.com/cpsubrian/nfl-exercise/master/screens/screen-teams.png)

- - -
### Team
![Team](https://raw.github.com/cpsubrian/nfl-exercise/master/screens/screen-team.png)

- - -
### Player
![Player](https://raw.github.com/cpsubrian/nfl-exercise/master/screens/screen-player.png)

- - -
### All Players
![Players](https://raw.github.com/cpsubrian/nfl-exercise/master/screens/screen-players.png)


- - -

**Data provided by http://nfldata.com/products/nfl-fantasy-data.aspx**

- - -

### Developed by [TerraEclipse](https://github.com/TerraEclipse)

Terra Eclipse, Inc. is a nationally recognized political technology and
strategy firm located in Santa Cruz, CA and Washington, D.C.

- - -

### License: MIT
Copyright (C) 2013 Terra Eclipse, Inc. ([http://www.terraeclipse.com](http://www.terraeclipse.com))

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.