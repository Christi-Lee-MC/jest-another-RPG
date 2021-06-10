module.exports = function (){
    this.name = 'health';
    this.value = 20;
    this.inventory = [new Potion('health'), new Potion()];

    test("gets player's stats as an object", () => {
        const player = new Player('Dave');
      
        expect(player.getStats()).toHaveProperty('potions');
        expect(player.getStats()).toHaveProperty('health');
        expect(player.getStats()).toHaveProperty('strength');
        expect(player.getStats()).toHaveProperty('agility');
      });

      test('gets inventory from player or returns false', () => {
        const player = new Player('Dave');
      
        expect(player.getInventory()).toEqual(expect.any(Array));
      
       Player.inventory = [];
      
        expect(Player.getInventory()).toEqual(false);
      });

};

Player.getInventory()
Player.inventory - []