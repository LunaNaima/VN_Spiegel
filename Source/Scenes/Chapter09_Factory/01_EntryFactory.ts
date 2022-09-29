namespace Spiegel_VN {
  export async function Chp09_EnterFactory(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp08_HidingPlace);
        ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter,"Zum zweiten Mal innerhalb weniger Tage wachst du auf und weißt zuerst nicht, wo du bist. Alles ist in tiefe Schatten getaucht. Es ist wohl noch sehr früh am Morgen? Dann fällt dir ein, dass diese Welt immer grau ist. Und Kailani ganz nahe. Du bist auf einmal hellwach und aufgelöst. Gleichzeitig fühlst du dich so weit weg von daheim wie nie zuvor.");

    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_happy, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Na, auch schon wach?"');
        await ƒS.Speech.tell(characters.maincharacter,"Wieso ist er immer vor dir auf den Beinen?");
    await ƒS.Speech.tell(characters.maincharacter, '"Wir müssen runter! Und uns das Haus anschauen, aus dem gestern alle Menschen gekommen sind."');
            
    ƒS.Character.hideAll();
     await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_confused, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Ganz früh heute Morgen sind sie auch reingelaufen, da habe ich sie gesehen."');
    await ƒS.Speech.tell(characters.maincharacter, '"Wieso hast du mich nicht geweckt? Wir hätten sie abfangen können!"');
    await ƒS.Speech.tell(characters.Flynn, '"Ach, das ging zu schnell und du hast so tief geschlafen …"');
    await ƒS.Speech.tell(characters.maincharacter, "Misstrauisch betrachtest du ihn. Er hätte dich wecken sollen. Wer weiß, ob er wirklich die Menschen gesehen hat? Aber daran kannst du nun nichts ändern.");
    await ƒS.Speech.tell(characters.maincharacter, '"Komm, wir gehen!"');

    ƒS.Character.hideAll();
        await ƒS.Location.show(locations.Chp08_Village);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Ihr macht euch auf den Weg den Hügel hinunter und durch das stille Dorf, bis ihr an dem großen Gebäude angekommen seid.");

    await ƒS.Location.show(locations.Chp09_OutsideFactory);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Es ist genau so still und gruselig wie gestern. Von Nahem ist es riesig und wuchtig und wirkt eher wie eine Halle, statt einem Haus.");

await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.grey_blue_happy, ƒS.positionPercent(70, 100));
    ƒS.update(); 
    
        await ƒS.Speech.tell(characters.maincharacter, '"Wie sollen wir da reinkommen? Es gibt keine Türen!"');
    await ƒS.Speech.tell(characters.Flynn, '"Schau mal, dahinten ist ein Fenster geöffnet! Vielleicht können wir da einbrechen?"');
        await ƒS.Speech.tell(characters.maincharacter, "Tatsächlich steht dort ein kleines Fenster offen. Vorsichtig schleicht ihr euch heran und öffnet es einen Spalt. Schnell quetscht ihr euch hindurch.");
    return "09_In Factory";
    
  }
}
