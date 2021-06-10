const { TestWatcher } = require("@jest/core");

test('checks if player is alive or not', () => {
    const player = new Player('Dave');
  
    expect(player.isAlive()).toBeTruthy();
  
    player.health = 0;
  
    expect(player.isAlive()).toBeFalsy();

    Player.prototype.isAlive = function() {
        if (this.health === 0) {
          return false;
        }
        return true;
      };
      test("subtracts from player's health", () => {
        const player = new Player('Dave');
        const oldHealth = player.health;
      
        player.reduceHealth(5);
      
        expect(player.health).toBe(oldHealth - 5);
      
        player.reduceHealth(99999);
      
        expect(player.health).toBe(0);
      });

      Player.prototype.reduceHealth = function(health) {
        this.health -= health;
      
        if (this.health < 0) {
          this.health = 0;
        }
      };
  });


