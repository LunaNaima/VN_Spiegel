namespace Spiegel_VN {
  export async function Chp06_InWhary(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp06_InWharyPeople);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    // do {
      let Chp06EntryWharyElementAnswers = {
        iSayWindow: "(Erkunden) Schaufenster anschauen",
        iSayVillagers: "(Erkunden) Leute beobachten",
        iSayInn: "Bleibe suchen",
      };

    if (!dataForSave.pickedChp06Window ||
        !dataForSave.pickedChp06Villagers) {
        delete Chp06EntryWharyElementAnswers.iSayInn;
      }

      let Chp06EntryWharyElement = await ƒS.Menu.getInput(Chp06EntryWharyElementAnswers, "choicesCSSclass");

      switch (Chp06EntryWharyElement) {
        case Chp06EntryWharyElementAnswers.iSayWindow:
          dataForSave.pickedChp06Window = true;
          await ƒS.Speech.tell(characters.maincharacter, '"Ich will mich hier kurz etwas umschauen."');
          ƒS.Character.hideAll();
          // await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_smile2, ƒS.positionPercent(70, 100))
          // ƒS.update();
          await ƒS.Speech.tell(characters.Flynn, '"Super! Ich zeige dir alles! Ich war hier schließlich schon tausend Mal …"');

          await ƒS.Location.show(locations.Chp06_WharyWindow)
          await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

          await ƒS.Speech.tell(characters.maincharacter, "Flynns Stimme schwindet in den Hintergrund, als du näher an ein Schaufenster trittst. Das Schaufenster ist, auch wenn es unmöglich scheint, noch greller als die Umgebung. Zuerst kannst du gar nicht erkennen, was verkauft wird.");
          await ƒS.Speech.tell(characters.maincharacter, "Dann siehst du ein Schild: SIE BEKOMMEN KEINE KOMPLIMENTE MEHR FÜR IHRE FIGUR? HIER POLSTER UND KORSETTS ZUM AUFHÜBSCHEN!");
          await ƒS.Speech.tell(characters.maincharacter, "Korsetts? Polster? Das klingt unbequem. Die Polster stopft man sich irgendwo rein, oder wie soll das gehen? Du schüttelst den Kopf und wunderst dich darüber, dass sich die Menschen hier zwingen, gut auszusehen.");
          ƒS.Speech.clear();
          return "06_In Whary";
          break;
    
        case Chp06EntryWharyElementAnswers.iSayVillagers:
          dataForSave.pickedChp06Villagers = true;
          await ƒS.Location.show(locations.Chp06_InWharyPeople)
          ƒS.update();
          await ƒS.Speech.tell(characters.maincharacter, '"Ich will mich hier kurz etwas umschauen."');
          ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_smile2, ƒS.positionPercent(70, 100))
          ƒS.update();
          await ƒS.Speech.tell(characters.Flynn, '"Ich zeige dir alles, was du willst! Komm, wir gehen –"');
          await ƒS.Speech.tell(characters.maincharacter, "Du unterbrichst ihn.");
          await ƒS.Speech.tell(characters.maincharacter, '"Weißt du denn, warum die Leute hier so, eh, na, eben so aussehen, wie sie aussehen?"');
          await ƒS.Speech.tell(characters.Flynn, '"Was meinst du denn?"');
          await ƒS.Speech.tell(characters.maincharacter, '"Naja, viele sehen so … aufgeplustert aus"');
          await ƒS.Speech.tell(characters.Flynn, '"Ah so! Ja. Das ist mir noch gar nicht aufgefallen. Die finden das vermutlich schön. Du bist nicht wirklich aufgeplustert."');
          await ƒS.Speech.tell(characters.maincharacter, "Da hat er Recht. Du zupfst an deinem Hemdärmel. Komisch, dass die Leute gleich aussehen möchten. Zuhause tragen alle, was sie wollen. Ein Stich fährt durchs Herz, wenn du an zuhause denkst.");
          ƒS.Speech.clear();
          return "06_In Whary";
          break;
    
        case Chp06EntryWharyElementAnswers.iSayInn:
          await ƒS.Speech.tell(characters.maincharacter, '"Ich glaube, ich möchte erst eine Bleibe suchen."');
          await ƒS.Speech.tell(characters.Flynn, '"Aaaber – bevor du das tust, sollten wir dich neu einkleiden, meinst du nicht?"');
          ƒS.Speech.clear();
          return "06_ClothingStore";
      }
    }
}

