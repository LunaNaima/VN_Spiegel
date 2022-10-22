namespace Spiegel_VN {
  export async function Chp04_E_ExamineMirror(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp03_KailaniBedroom);
    dataForSave.pickedChp04ExamineMirror = true;
    ƒS.Character.hideAll();
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.maincharacter, "Du willst dir nochmal Kailanis Schlafzimmer und den Spiegel genauer anschauen.");
        await ƒS.Speech.tell(characters.maincharacter, "Das Zimmer ist so still. Du schaust dich um. Eigentlich fühlst du dich unwohl, hier zu sein, weil sie bestimmt etwas dagegen hätte, wenn du durch ihre Sachen schnüffelst.");

    let Chp04ExamineMirrorElementAnswers = {
            iSayMirror: "(Erkunden) Spiegel nehmen",
            iSayDiary: "(Erkunden) Tagebuch lesen",
            iSayContinue: "Zurück",
    };
    
     let Chp04ExamineMirrorElement = await ƒS.Menu.getInput(Chp04ExamineMirrorElementAnswers, "choicesCSSclass");

        // *** RESPONSES ***
    switch (Chp04ExamineMirrorElement) {
      case Chp04ExamineMirrorElementAnswers.iSayMirror:
        await ƒS.Location.show(locations.Chp03_KailaniBedroomMirror); 
        ƒS.update();
      await ƒS.Speech.tell(characters.maincharacter, "Der Spiegel glitzert und glänzt. Du schaust hinein, siehst aber nichts. Wahrscheinlich ist er noch im Wünsche-Modus. Moment mal – Wünsche-Modus? Kannst du anschauen, was sich Kailani zuletzt gewünscht hat?");
      await ƒS.Speech.tell(characters.maincharacter, '"Spieglein, Spieglein, weise mir mein Träumlein: Ich wünsche mir Kailanis letzten Wunsch!"');
      await ƒS.Speech.tell(characters.maincharacter, "Aber nichts passiert. Du probierst es mit verschiedenen Varianten, aber jedes Mal bleibt der Spiegel blank. Seltsam, du siehst nicht einmal dein eigenes Gesicht darin.");
        ƒS.Speech.clear();
        return "04_E_Examine mirror";
        break;
        
      case Chp04ExamineMirrorElementAnswers.iSayDiary:
        await ƒS.Location.show(locations.Chp03_KailaniBedroomDiary);
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter, "Unter normalen Umständen würdest du Kailanis Tagebuch niemals lesen. Jetzt bleibt dir allerdings nichts anderes übrig.");
        await ƒS.Speech.tell(characters.maincharacter, '"Ich kann nicht schlafen. Bleibe bis morgens wach und bin dann in der Schule total müde. Mutti nervt mich, dass ich mehr essen soll, habe aber eigentlich gar keinen Hunger."');
        await ƒS.Speech.tell(characters.maincharacter, '"Mein Spiegelbild ist so schön dünn. Und große Brüste hab’ ich im Spiegel auch. Wie lange, bis meine endlich wachsen?’"');
        await ƒS.Location.show(locations.Chp03_KailaniBedroom);
        ƒS.update();
await ƒS.Speech.tell(characters.maincharacter, "Du klappst das Tagebuch zu und spürst, wie sich ein kribbelndes Schamgefühl in deinem Bauch verbreitet. Es ist dir nicht wohl dabei, Kailanis intimste Gedanken so zu lesen. Allerdings offenbaren die Zeilen mehr, als sie dir heute verraten wollte: sie hat sich doch unwohl gefühlt. Und so wie es scheint, hat der Spiegel damit etwas zu tun!");
        ƒS.Speech.clear();
        return "04_E_Examine mirror";
        break;

      case Chp04ExamineMirrorElementAnswers.iSayContinue:
        await ƒS.Speech.tell(characters.maincharacter, "Hier gibt es nichts mehr zu sehen.");
        return "04_00_Research Options";
      break;
        
    }
    
  }
}
