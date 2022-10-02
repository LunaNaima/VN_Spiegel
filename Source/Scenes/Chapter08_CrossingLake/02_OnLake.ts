namespace Spiegel_VN {
  export async function Chp08_OnLake(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp08_OnBoat);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_uncertain, ƒS.positionPercent(70, 100));
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Auf dem See ist es ruhig. Du atmest tief durch und lässt das Geschehen der letzten zwei Tage auf dich wirken. Eine graue Welt, eine verschwundene Königin, Spiegel und ganz viel Farbe … und irgendwo mittendrin ist Kailani. Du kannst dir immer noch nicht vorstellen, was ihr geschehen ist.");
    await ƒS.Speech.tell(characters.maincharacter, "Flynn verspürt wohl auch die veränderte Atmosphäre, denn das erste Mal, seit du ihn kennst (was ja auch wirklich keine lange Zeit ist), ist er still und paddelt vor sich hin. Du beschließt, ihn ein bisschen auszuhorchen.");
    await ƒS.Speech.tell(characters.maincharacter, '"Also, Flynn, es ist ja wirklich nicht zu übersehen, dass die Leute hier sehr auf ihr Äußeres achten."');
    await ƒS.Speech.tell(characters.Flynn, '"Naja, wer will nicht schön aussehen?"');


    do {
      let Chp08ConvoFlynnElementAnswers = {
        iSayExploreTheyAreAfraid: "(Erkunden) Vielleicht haben sie Angst?",
        iSayExploreAttention: "(Erkunden) Sie brauchen die Aufmerksamkeit",
        iSayExploreAll: "(Erkunden) Wenn alle so sind ...",
        iSayContinue: "Weiter",
      };

      // if (
      //   !dataForSave.pickedChoiceChp10ExploreAfraid ||
      //   !dataForSave.pickedChoiceChp10ExploreAttention ||
      //   !dataForSave.pickedChoiceChp10ExploreAll
      // ) {
      //   delete Chp10BuildARaftElementAnswers.iSayContinue;
      //   // return Chp01_CS_ArrivalHome();
      // }

      let Chp08ConvoFlynnElement = await ƒS.Menu.getInput(Chp08ConvoFlynnElementAnswers, "choicesCSSclass");
      
      switch (Chp08ConvoFlynnElement) {
        case Chp08ConvoFlynnElementAnswers.iSayExploreTheyAreAfraid:
          ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_shocked2, ƒS.positionPercent(50, 100));
          ƒS.update();
          await ƒS.Speech.tell(characters.Flynn, '"Angst vor was?"');
          await ƒS.Speech.tell(characters.maincharacter, '"Angst vor Verurteilung! Wenn Personen anders aussehen, als die Leute in Whary, werden sie von ihnen verurteilt. Nur, weil sie nicht schlank genug oder keine Muskeln an der richtigen Stelle haben. Das ist doch kein schönes Gefühl."');
          await ƒS.Speech.tell(characters.maincharacter, "Flynn schweigt und paddelt.");
          ƒS.Character.hideAll();
          ƒS.Speech.clear();
          break;

        case Chp08ConvoFlynnElementAnswers.iSayExploreAttention:
                    ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_angry, ƒS.positionPercent(50, 100));
          ƒS.update();
          await ƒS.Speech.tell(characters.Flynn, '"Achwas! Das hat doch damit nichts zu tun."');
          await ƒS.Speech.tell(characters.maincharacter, '"Meinst du nicht? Geht es den Leuten nicht darum, dass andere sich mit ihnen vergleichen können und so mehr Aufmerksamkeit kriegen? Ich glaube, schon ..."');
          await ƒS.Speech.tell(characters.Flynn, '"Hm."');
          ƒS.Character.hideAll();
          ƒS.Speech.clear();
          break;

        case Chp08ConvoFlynnElementAnswers.iSayExploreAll:
          ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_angry, ƒS.positionPercent(50, 100));
          ƒS.update();
          await ƒS.Speech.tell(characters.maincharacter, '"Ich glaube, wenn es manche vormachen, wollen es alle anderen nachmachen. So hat der Koch das gesagt! Manche haben die Farbe zuerst bekommen, dann wollten sie alle anderen auch. Die Leute wollten genauso aussehen."');
          await ƒS.Speech.tell(characters.Flynn, '"Ach, wer weiß wie das Ganze angefangen hat! Kannst du es aber den Leuten verübeln?"');
          ƒS.Speech.clear();
          break;

        case Chp08ConvoFlynnElementAnswers.iSayContinue:
          dataForSave.pickedChp08ConvoContinue = true;
          await ƒS.Location.show(locations.black);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

          await ƒS.Location.show(locations.Chp08_ArrivalFactory);
              await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

          ƒS.Character.hideAll();
          ƒS.Sound.fade(music.theme_mirrorworld_whary, 0, 0, false);
          ƒS.Sound.fade(music.theme_mirrorworld_factory, 0.8, 1, true);
          ƒS.update();
          await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
          await ƒS.Speech.tell(characters.maincharacter, "Euer Boot driftet näher an die Häuser heran, die direkt am Ufer des Sees stehen. Du reibst dir die Augen, aber – alles ist grau! Du schaust an dir herunter – auch grau. Flynns buntes Outfit hat nun alle Farbe verloren. Einzig der Turm, der bedrohlich in die Höhe ragt, ist in knallorange.");
          await ƒS.Speech.tell(characters.maincharacter, '"Warum ist alles grau?"');
          await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_angry, ƒS.positionPercent(50, 100));
          ƒS.update();
          await ƒS.Speech.tell(characters.Flynn, '"Für diesen Ort hat die Farbe wohl nicht gereicht …"');
          await ƒS.Speech.tell(characters.maincharacter, "Er scheint ungeduldig zu werden.");
          await ƒS.Speech.tell(characters.Flynn, '"Komm, lass uns andocken und erkunden!"');
          return "08_Arrival other side";
          break;
      };
    } while (!dataForSave.pickedChp08ConvoContinue);
  }
}

