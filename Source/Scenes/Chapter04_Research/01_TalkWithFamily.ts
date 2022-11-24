namespace Spiegel_VN {
  export async function Chp04_01_TalkWithFamily(): ƒS.SceneReturn {
    dataForSave.pickedChp04TalkToFamily = true;
    await ƒS.Location.show(locations.Chp02_02_LivingRoom);
    ƒS.Character.hideAll();
// await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_angry2, ƒS.positionPercent(80, 100));
//     await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos3_neutral, ƒS.positionPercent(30, 100));
//     await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_frown, ƒS.positionPercent(55,100));
//     ƒS.update();
//     await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
//     dataForSave.pickedChp04TalkToFamily = true;

//     await ƒS.Speech.tell(characters.Evarius, '"Also. Es ist etwas passiert. Pantro, mein Klassenkamerad, ist auch wie vom Boden verschluckt."');
//     await ƒS.Speech.tell(characters.maincharacter, '"Es muss etwas Schlimmes passiert sein!"');
//     ƒS.Character.hide(characters.Mutti);
//     await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress1_basket_frown, ƒS.positionPercent(55,100));
//     ƒS.update();
//     await ƒS.Speech.tell(characters.Mutti, '"Pantro ist auch weg?"');
//     await ƒS.Speech.tell(characters.Mama, '"Woher weißt du das denn? Bist du dir sicher, dass er nicht auch kurz in den Wald ist?"');
//     await ƒS.Speech.tell(characters.Mutti, '"Leijla, meinst du, es ist der richtige Zeitpunkt, zweifelnd zu sein?"');

//      let Chp04TalkFamilyElementAnswers = {
//       iSayCoincidence: "Das ist kein Zufall.",
//       iSayPointless: "Es ist sinnlos.",
//       iSayMirror: "Hat es was mit dem Spiegel zu tun?",
//     };

//     let Chp04TalkFamilyElement = await ƒS.Menu.getInput(Chp04TalkFamilyElementAnswers,"choicesCSSclass");

//     // *** RESPONSES ***
//     switch (Chp04TalkFamilyElement) {
//       case Chp04TalkFamilyElementAnswers.iSayCoincidence:
//         await ƒS.Speech.tell(characters.Evarius, '"Pantro war auch bleich! Und zurückgezogen! So hat das zumindest seine Mutter gesagt."');
//         await ƒS.Speech.tell(characters.Mutti, '"Bleich? Was meinst du damit?"');
//         await ƒS.Speech.tell(characters.maincharacter, '"Heute Mittag war ich doch mit Kailani unterwegs. Jetzt im Nachhinein fällt mir auf, wie grau sie war. Sie war wirklich blasser als sonst. Aber sie wollte mir nicht erzählen, was sie bedrückt hat."');
//         ƒS.Character.hide(characters.Mama);
//         await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_hand_laugh, ƒS.positionPercent(80, 100));
//         ƒS.update();
//         await ƒS.Speech.tell(characters.Mama, '"Vielleicht ist sie gar nicht weg. Beruhige dich doch erstmal."');
//         await ƒS.Speech.tell(characters.Mutti, '"Wurde Kailani von jemandem mitgenommen? Ist sie abgehauen? Hat Pantro damit etwas zu tun?"');
//         ƒS.Speech.clear();
//         break;
      
//       case Chp04TalkFamilyElementAnswers.iSayPointless:
//         await ƒS.Speech.tell(characters.maincharacter, '"Ach, ich weiß auch nicht weiter. Was ist, wenn sie schon über alle Berge ist?"');
//         await ƒS.Speech.tell(characters.Evarius, '"Kaili taucht schon noch auf!"');
//         await ƒS.Speech.tell(characters.Mutti, '"Wurde Kailani von jemandem mitgenommen? Ist sie abgehauen? Hat Pantro damit etwas zu tun?"');
//         ƒS.Speech.clear();
//         break;

//       case Chp04TalkFamilyElementAnswers.iSayMirror:
//         await ƒS.Speech.tell(characters.Evarius, '"Pantros Mutter hat erzählt, dass er kurz vor seinem Verschwinden ziemlich abweisend war. Dazu war er seltsam blass."');
//         await ƒS.Speech.tell(characters.maincharacter, '"Und den gleichen Eindruck hatte ich von Kailani, als ich heute Mittag mit ihr unterwegs war! Sie hat nur von diesem Spiegel erzählt …"');
//         await ƒS.Speech.tell(characters.Mama, '"Der Spiegel, den wir letzte Woche zusammen gekauft haben? Hat sie ihn etwa benutzt?"');

//         ƒS.Character.hide(characters.Mutti);
//         await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_smirk, ƒS.positionPercent(55, 100));
//         ƒS.update();
//         await ƒS.Speech.tell(characters.Mutti, '"Ich habe ihn ihr gegeben, weil sie so gern damit gespielt hat… "');
//         ƒS.Character.hide(characters.Mama);
//         await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_laugh2, ƒS.positionPercent(80, 100));
//         ƒS.update();
//         await ƒS.Speech.tell(characters.Mama, '"Was soll denn der Spiegel damit zu tun haben, dass sie verschwunden ist? Ich glaube immer noch an ein großes Missverständnis. Vielleicht ist sie mit Pantro zusammen und hat sich heimlich mit ihm getroffen?"');
//         await ƒS.Speech.tell(characters.Mutti, '"Das könnte eine Möglichkeit sein…"');
//         ƒS.Speech.clear();
//         break;
//     }
    ƒS.Character.hide(characters.Mama);
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_laugh2, ƒS.positionPercent(80, 100));
    ƒS.update();
    ƒS.Character.hide(characters.Mutti);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_smirk, ƒS.positionPercent(55, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Mama, '"Warum gehen wir sie nicht im Dorf suchen? Stell dir vor, wir machen hier ein großes Drama und später spaziert sie seelenruhig zur Tür rein."');
    await ƒS.Speech.tell(characters.Mutti, '"Geh’ du schon Mal vor, Leijla. Ich möchte kurz mit ' + dataForSave.nameProtagonist + ' sprechen."');
    ƒS.Character.hide(characters.Mama);
    ƒS.Character.hide(characters.Evarius);
    ƒS.update();

    await ƒS.Speech.tell(characters.Mutti, '"Schatz, vielleicht hälst du mich für verrückt."');
    await ƒS.Speech.tell(characters.Mutti, '"Also: wie du weißt, beschäftige ich mich gerne mit der Vergangenheit und Magie. Ich bin der festen Überzeugung, dass Magie noch heute existiert."');

    let Chp04TalkFamilyElementAnswers1 = {
      iSayBelieve: "Glauben.",
      iSayDoubt: "Zweifeln",
      iSayReject: "Ablehnen"
    };

    let Chp04TalkFamilyElement1 = await ƒS.Menu.getInput(Chp04TalkFamilyElementAnswers1, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp04TalkFamilyElement1) {
      case Chp04TalkFamilyElementAnswers1.iSayBelieve:
        await ƒS.Speech.tell(characters.maincharacter, '"So wie in den alten Büchern der Bücherei beschrieben?"');
        await ƒS.Speech.tell(characters.Mutti, '"Ganz genau. Das sind die letzten schriftlichen Quellen dieser alten Zeit."');
        ƒS.Speech.clear();
        break;
      
      case Chp04TalkFamilyElementAnswers1.iSayDoubt:
        await ƒS.Speech.tell(characters.maincharacter, '"Magie? Bist du dir sicher? Aber wie kann uns das bei der Suche nach Kailani helfen?"');
        ƒS.Speech.clear();
        break;
      
      case Chp04TalkFamilyElementAnswers1.iSayReject:
        await ƒS.Speech.tell(characters.maincharacter, '"Magie gibt es doch gar nicht!"');
        ƒS.Character.hide(characters.Mutti);
        await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_laugh, ƒS.positionPercent(55, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Mutti, '"Manchmal bist du wie deine Mama!"');
        ƒS.Speech.clear();
        break;
    }


    ƒS.Character.hide(characters.Mutti);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_neutral, ƒS.positionPercent(55, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Mutti, '"Ich habe mich aus dem Grund hier in der Gegend niedergelassen, weil ich gespürt habe, dass hier noch kleine Magie-Reste überlebt haben. Es gab Gerüchte, dass der Wald hinter unserem Haus etwas Mystisches verbirgt. Und ich glaube, das könnte uns bei der Suche helfen."');
    await ƒS.Speech.tell(characters.maincharacter, "Im Hintergrund ruft Mama.");
    await ƒS.Speech.tell(characters.Mutti, '"Oh, Mama drängt. Versuch’ doch mal dein Glück, ja?"');

    return "04_00_Research Options";
  }
}
