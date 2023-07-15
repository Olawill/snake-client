# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre. 

It also allows every player to send some canned messages to every one while playing.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

## Final Product

!["Game Screen when a Player Connects"](src/connection.png)
!["Snake getting Longer as you play"](src/playing_messages.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.
- Use the `WASD` command for movement
  - `w` - Move: up
  - `a` - Move: left
  - `s` - Move: down
  - `d` - Move: right
- Canned messages:
  - Use `qezc` for messages to all players
- The game stops when the player(s) are idle for a few minutes