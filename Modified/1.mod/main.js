const Player = new NativeClass("Terraria", "Player");
const UpdateEquips = Player["void UpdateEquips(int i)"];

UpdateEquips.hook((original, self, i) => {
    original(self, i);

    const piggyBank = self.bank.item;
    for (i = 0; i < piggyBank.length; i++) {
        let item = piggyBank[i];

        if (item.stack >= 30 && item.buffType != 0) {
            self.AddBuff(item.buffType, 2, false, false);
        }
    }
});
