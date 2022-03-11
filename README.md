# Project Title


# Rules 
Two players: You and the Dealer
Deck
A deck is represented as a json list of Card objects.

Your application should accept an URL on the command line. You should do a GET against this URL. This will give you the deck we expect you to play the game with

The response will contain a json list of Card objects: {"suit":"HEARTS","value":"5"} , where suit is one of HEARTS | CLUBS | SPADES | DIAMONDS and value is one of the set 2,3,4,5,6,7,8,9,10,J,Q,K,A

If no URL is given on the command line, you should default to GET https://blackjack-deckofcards.herokuapp.com/shuffle


# Values:
Face cards (J, Q, K) has value 10, Aces (A) have value 11, number cards have the value their number states

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

# Gameplay
One round of the game goes like this:
You'll draw two cards first.
Dealer then draws two cards.
If neither player has Blackjack (21) after the initial draw, keep playing.
If both players have Blackjack, Dealer wins
You'll draw cards until you have 17 or higher, you'll go bust and lose if your score is above 21
Once you're done drawing, if you haven't busted, it's the Dealer's turn.
Dealer will draw until he has a higher score than you or goes bust (ends up with a score over 21)


# Output:
Represent the suites with H | S | C | D and the value with the same string you received from the shuffle endpoint. So a 7 of spades is represented as S7
Print who won the game prefixed with Winner:
Newline
Dealer's name, score and hand separated with '|', so Dealer | <score> | S7,S10,CJ
Then print your name, your score and your hand separated with '|', so Ivar | <score> | D2,H2,C6,H9


# Example full output:
Winner: Ivar

Dealer | 27 | S7,S10,CJ
Ivar | 19 | D2,H2,C6,H9
Notes
We'd like to see tests for your logic.


# Deliverables
A github or gitlab repo containing your code, tests and instructions for how to build/run the project
For Github, access should be granted to users:
# chriswk
# ivarconr
# fredrikoseberg

For Gitlab, access should be granted to users:
# chriswk
# ivarconr
# fredrikoseberg

---

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ yarn install

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

## Running the project

    $ yarn start

## Simple build for production


