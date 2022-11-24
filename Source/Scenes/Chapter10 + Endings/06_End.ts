namespace Spiegel_VN {
    export async function End(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.WitchInTheWoods);
        await ƒS.Sound.fade(soundeffects.cracklingfire, 0.2, 1, true);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        await ƒS.Speech.tell(characters.narrator, '"Na, und die Moral von der Geschicht´? Die weißt du bestimmt selbst. Denke immer an dein offenes Herz! Das wird dein Schutzschild sein, wenn du in den Spiegel schaust."');
        await ƒS.Speech.tell(characters.narrator, '"Und nun, mach’, dass du fort kommst! Du warst lange genug hier im dunklen Wald."');
        await ƒS.Speech.tell(characters.narrator, '"Wenn du nochmal einer Geschichte lauschen willst, weißt du, wo du mich finden kannst. Biege einfach beim Wünschebaum rechts ab und eh, – ich meinte, bei dem großen Baum da vorne. Mein Feuer brennt, Tag und Nacht! Und glaube nicht alles, was du so über mich hörst. Wobei – das mit den magischen Kräften, da ist was dran …"');
        await ƒS.Location.show(locations.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Speech.tell("ENDE", "");
        return "Empty scene";
    }
}