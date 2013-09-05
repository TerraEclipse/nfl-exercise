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
  - Clicking a team name should send you to `/teams/[team key]`
- `/teams/[team key]` - This page should display the team's info and list all
  the players on the team.
- `/players` - This page should list all players.
  - Clicking a position should send you to `/players/[position]`
- `/players/[position]` - This page should list all the players at a given
  position.

**Rules**

- Keep front-end JavaScript to a minimum. A little pizzazz here or there is
  perfectly fine, but the intention of this exercise is to keep the logic
  to Node.js.
- The only command neccesary to run the app should be `node app/server.js`. This
  main file should do any setup required and start an http server on port `3000`.


Sample UI
---------




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