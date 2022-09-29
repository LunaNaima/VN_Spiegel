namespace Spiegel_VN {
  export async function Chp09_ScoutTower(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp10_TowerOutside)
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_neutral, ƒS.positionPercent(70, 100));
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);


    await ƒS.Speech.tell(characters.Flynn, '"Verrückt, diese Fabrik! Meinst du, der Turm hängt damit zusammen?"');
    await ƒS.Speech.tell(characters.maincharacter, '"Wieso bist du denn so versessen auf den Turm? Meine Schwester ist da drin und muss ein Theater verrichten! Ich habe sie endlich gefunden und muss sie da rausholen."');
    await ƒS.Speech.tell(characters.maincharacter, '"Ich bin mir ziemlich sicher, dass der Dämon im Turm sitzt. Willst du dem wirklich begegnen?"');
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_confused, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Flynn, '"Oh, der Dämon. Der ist natürlich gefährlich. Aber bestimmt liegt die Lösung zu dieser ganzen Sache in dem Turm! Also besiegen wir den Dämon!"');
    await ƒS.Speech.tell(characters.maincharacter, '"Jetzt warte doch mal! Du hast doch selbst gerade gesagt, dass wir einen Plan brauchen. Ich will zuerst wissen, was wirklich in dem Turm steckt. Ich habe da eine Idee …"');

    do {
      let Chp09ScoutTowerElementAnswers = {
        iSayClimb: "(Erkunden) Hochklettern",
        iSayBirds: "(Erkunden) Vögel rufen",
        iSayFlynn: "(Erkunden) Flynn schicken",
      };
      let Chp09ScoutTowerElement = await ƒS.Menu.getInput(Chp09ScoutTowerElementAnswers, "choicesCSSclass");

      switch (Chp09ScoutTowerElement) {
        case Chp09ScoutTowerElementAnswers.iSayClimb:
          ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_angry, ƒS.positionPercent(70, 100));
    ƒS.update();
          await ƒS.Speech.tell(characters.Flynn, '"Bist du verrückt! Niemals klettere ich an dem Ding hoch."');
          ƒS.Speech.clear();
          break;
        
        case Chp09ScoutTowerElementAnswers.iSayBirds:
          dataForSave.pickedChp09ScoutTowerBirds = true;
          await ƒS.Speech.tell(characters.maincharacter, '"Ich rufe meine Vogelfreunde! Sie können hochfliegen und mir berichten, was sie durch die Fenster sehen!"');
          ƒS.Speech.clear();
          break;

        case Chp09ScoutTowerElementAnswers.iSayFlynn:
          await ƒS.Speech.tell(characters.maincharacter, '"Wie wär’s, wenn du voraus gehst? Dich interessiert doch so sehr, was in dem Turm vor sich geht."');
          await ƒS.Speech.tell(characters.Flynn, '"Sehr witzig! Ich, eh, brauche deine Expertise da drin!"');
          ƒS.Speech.clear();
          break;

      }
    } while (!dataForSave.pickedChp09ScoutTowerBirds);

    await ƒS.Speech.tell(characters.maincharacter, "Du rufst die Vögel mit dem Schlaflied. Als sie angeflogen kommen, fühlst du dich etwas leichter.");
    await ƒS.Location.show(locations.Chp10_TowerOutsideBirds)
    await ƒS.Sound.fade(soundeffects.birds, 0.1, 1, true);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "Die Vögel schaffen es, mit ihrer bloßen Anwesenheit dir einen kleinen Teil deiner Sorgen zu nehmen.");
    await ƒS.Speech.tell(characters.maincharacter, '"Bitte, schaut doch mal nach, was sich in dem Turm verbirgt! Wir glauben, dort liegt der Schlüssel zu Kailanis Befreiung."');
    await ƒS.Speech.tell(characters.maincharacter, "Die Vögel zwitschern und fliegen hoch, um den Turm zu umkreisen. Drei Mal umrunden sie den Turm und landen wieder vor deinen Füßen.");
    await ƒS.Speech.tell(characters.maincharacter, "Welche Worte kannst du durch das Gezwitscher hören? Schreibe die Worte mit Komma dazwischen in das Feld.");
    
    

    await ƒS.Sound.fade(soundeffects.listeningriddle_demon, 0.5, 1, false);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "Was hast du gehört?");

    await ƒS.Sound.fade(soundeffects.listeningriddle_mirror, 0.5, 1, false);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "Die Vögel haben etwas gesagt!");

    await ƒS.Sound.fade(soundeffects.listeningriddle_destroy, 0.5, 1, false);
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, "Wie war das?");

    let answerBirds: String = await ƒS.Speech.getInput();


    await ƒS.Speech.tell(characters.maincharacter, '"Also, da oben ist ein Spiegelzimmer, das von einem Dämon bewacht wird. Wir sind schon viel näher dran! Es ist tatsächlich ein Dämon im Turm!"');
    await ƒS.Speech.tell(characters.maincharacter, '"Und das Spiegelzimmer müssen wir zerstören! Hast du die Vögel gehört, Flynn? Wir können es schaffen, ich bin mir sicher! Endlich weiß ich, wie ich Kailani retten kann! Wir müssen diese Spiegel ein für alle Mal zerstören. Dann können wir nach Hause."');
    
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_crossed_smile, ƒS.positionPercent(70, 100));
    ƒS.update();
    
    await ƒS.Speech.tell(characters.Flynn, '"Die Spiegel zerstören? Eh– ja, auf jeden Fall! Kailani, wir kommen!"');
    ƒS.Character.hideAll();
    await ƒS.Speech.tell(characters.maincharacter, "Er stürmt Richtung Turm. Du schaust ihm verwirrt hinterher. Er klang nicht so euphorisch und erleichtert, eher beklommen. Eigentlich wolltest du ihn ja ausfragen. Das muss wohl warten.");


    ƒS.Sound.fade(soundeffects.birds, 0, 0, false);
    }  
  }

