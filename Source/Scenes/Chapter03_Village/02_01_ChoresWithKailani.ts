namespace Spiegel_VN {
  export async function Chp03_021_ChoresWithKailani(): ƒS.SceneReturn {
    dataForSave.pickedChp03_ChoresWithKailani = true;
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_shrug_eyeroll, ƒS.positionPercent(45, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, '"Was willst du machen?"');
    await ƒS.Speech.tell(characters.Kailani, '"Mir egal ..."');


    let Chp03ChoresKailaniElementAnswers = {
      PickSceneWaterwell: "Wasser holen gehen.",
      PickSceneWoodChopping: "Holz hacken."
    };

    let Chp03ChoresKailaniElement = await ƒS.Menu.getInput(
      Chp03ChoresKailaniElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp03ChoresKailaniElement) {
      case Chp03ChoresKailaniElementAnswers.PickSceneWaterwell:
        await ƒS.Location.show(locations.Chp03_022_Marketplace_empty);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Speech.tell(characters.maincharacter, '"Komm, Kailani, wir müssen Wasser vom Brunnen holen. Hol’ doch schon Mal die Eimer!"');
        await ƒS.Speech.tell(characters.Kailani, '"Uff ..."');
        ƒS.Speech.clear();
        break;

      case Chp03ChoresKailaniElementAnswers.PickSceneWoodChopping:
        await ƒS.Sound.fade(soundeffects.wood, 0.8, 1, false);
        await ƒS.Location.show(locations.Chp03_021_FirewoodKailani);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        await ƒS.Speech.tell(characters.maincharacter, '"Komm, Kailani, wir müssen Holz hacken. Hol’ doch schon Mal den Korb!"');
        await ƒS.Speech.tell(characters.Kailani, '"Uff ..."');
        ƒS.Speech.clear();
        break;
    }
  
    await ƒS.Speech.tell(characters.maincharacter, "Kailani ist heute wirklich schlecht drauf. Dabei ist eure Beziehung eigentlich gut.");
    await ƒS.Speech.tell(characters.maincharacter, "Irgendwie kommt sie dir etwas grauer vor. Du nimmst dir vor, ihr auf den Zahn zu fühlen.");

    await ƒS.Speech.tell(characters.maincharacter, '"Kailani, geht`s dir gut? Treibt dich etwas um?"');
    ƒS.Character.hide(characters.Kailani);
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_angry, ƒS.positionPercent(45, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Kailani, '"Ach, lass mich in Ruhe!"');
    await ƒS.Speech.tell(characters.maincharacter, "Oh je. Da musst du wohl anders ran.");


    let Chp03ChoresKailaniElementAnswers1 = {
      iSayWorried: "Besorgt",
      iSayTrusting: "Vertraut"
    };

    let Chp03ChoresKailaniElement1 = await ƒS.Menu.getInput(Chp03ChoresKailaniElementAnswers1, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp03ChoresKailaniElement1) {
      case Chp03ChoresKailaniElementAnswers1.iSayWorried:
        await ƒS.Speech.tell(characters.maincharacter, '"Ich mache mir nur Sorgen um dich. Gibt es etwas, worüber du dir Gedanken machst?"');
        await ƒS.Speech.tell(characters.Kailani, '"Nö."');
        await ƒS.Speech.tell(characters.maincharacter, '"Ach Kailani, ich sehe doch, dass es dir nicht gut geht! Also, spuck’s aus. Ich erzähle unseren Eltern auch nichts davon, wenn du das nicht willst."');
        await ƒS.Speech.tell(characters.Kailani, '"Hm. Naja, also. Ich …"');
        await ƒS.Speech.tell(characters.maincharacter, "Hoffentlich vertraut sie sich dir an.");
        ƒS.Character.hide(characters.Kailani);
        await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_smile, ƒS.positionPercent(45, 100));
        ƒS.update();
        ƒS.Speech.clear();
        break;

      case Chp03ChoresKailaniElementAnswers1.iSayTrusting:
        await ƒS.Speech.tell(characters.maincharacter, '"Möchtest du wirklich nichts erzählen, was dich bedrückt? Ich sage es keinem, versprochen! Ich will doch, dass du mir vertrauen kannst."');
        ƒS.Speech.clear();
        break;
    }

    await ƒS.Speech.tell(characters.Kailani, '"Also, dieser Spiegel. Der von Mutti. Der ist halt echt toll. Ich kann mir so viel wünschen, wie ich will, und er zeigt es mir! Verstehst du, was ich meine?"');

    let Chp03ChoresKailaniElementAnswers11 = {
          iSayGood: '"Klingt gut"',
          iSayBother: '"Stört dich etwas?"',
          iSaySilent: "Nicken und schweigen"
        };

    let Chp03ChoresKailaniElement11 = await ƒS.Menu.getInput(Chp03ChoresKailaniElementAnswers11, "choicesCSSclass");

        // *** RESPONSES ***
    switch (Chp03ChoresKailaniElement11) {
          case Chp03ChoresKailaniElementAnswers11.iSayGood:
            await ƒS.Speech.tell(characters.maincharacter, '"Das klingt doch gut, oder? Dann macht er genau das, was er soll."');
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(45, 100));
            ƒS.update();

            await ƒS.Speech.tell(characters.Kailani, '"Naja, schon. Das stimmt. Das gefällt mir einfach. Die Farben sind superschön und ich kann mich dabei beobachten, wie ich diese ganzen tollen Sachen mache."');
            await ƒS.Speech.tell(characters.maincharacter, '"Was schaust du dir denn so in dem magischen Spiegel an?"');

            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_happy, ƒS.positionPercent(45, 100));
            ƒS.update();

            await ƒS.Speech.tell(characters.Kailani, '"Alles Mögliche! Ich kann Zeitreisen, fliegen, Tiere beobachten, reich sein …"');
            await ƒS.Speech.tell(characters.Kailani, '"Und ich bin soo hübsch in dem Spiegel! Ganz schlank und mit langen Haaren. So wollte ich schon immer aussehen."');

            await ƒS.Speech.tell(characters.maincharacter, '"Und deshalb schaust du so gerne hinein, weil du dich darin hübscher findest? Aber du bist doch in echt schon hübsch!"');
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(45, 100));
            ƒS.update();
            await ƒS.Speech.tell(characters.maincharacter, "Kailani verstummt und zupft an ihrem Kleid herum. Du runzelst die Stirn. Warte – ist das Kleid in der Wäsche verblichen?");
            await ƒS.Speech.tell(characters.Kailani, '"Können wir einfach unser Zeug fertig machen? Ich habe keine Lust mehr, hier rumzustehen."');
            ƒS.Speech.clear();
            break;

          case Chp03ChoresKailaniElementAnswers11.iSayBother:
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(45, 100));
            ƒS.update();

            await ƒS.Speech.tell(characters.maincharacter, '"Und was stört dich daran?"');
            await ƒS.Speech.tell(characters.Kailani, '"Gar nichts, das macht einfach Spaß. Die Farben sind superschön und ich kann mich dabei beobachten, wie ich diese ganzen tollen Sachen mache."');

            await ƒS.Speech.tell(characters.maincharacter, '"Was schaust du dir denn so in dem magischen Spiegel an?"');

            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_happy, ƒS.positionPercent(45, 100));
            ƒS.update();

            await ƒS.Speech.tell(characters.Kailani, '"Alles Mögliche! Ich kann Zeitreisen, fliegen, Tiere beobachten, reich sein …"');
            await ƒS.Speech.tell(characters.Kailani, '"Und ich bin soo hübsch in dem Spiegel! Ganz schlank und mit langen Haaren. So wollte ich schon immer aussehen."');

            await ƒS.Speech.tell(characters.maincharacter, '"Und deshalb schaust du so gerne hinein, weil du dich darin hübscher findest? Aber du bist doch in echt schon hübsch!"');
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(45, 100));
            ƒS.update();
            await ƒS.Speech.tell(characters.maincharacter, "Kailani verstummt und zupft an ihrem Kleid herum. Du runzelst die Stirn. Warte – Ist das Kleid in der Wäsche verblichen?");
            await ƒS.Speech.tell(characters.Kailani, '"Können wir einfach unser Zeug fertig machen? Ich habe keine Lust mehr, hier rumzustehen."');
            ƒS.Speech.clear();
            break;

          case Chp03ChoresKailaniElementAnswers11.iSaySilent:
            await ƒS.Speech.tell(characters.Kailani, '"Das macht einfach Spaß. Die Farben sind superschön und ich kann mich dabei beobachten, wie ich diese ganzen tollen Sachen mache."');
            await ƒS.Speech.tell(characters.maincharacter, '"Was schaust du dir denn so in dem magischen Spiegel an?"');

            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_neutral_happy, ƒS.positionPercent(45, 100));
            ƒS.update();

            await ƒS.Speech.tell(characters.Kailani, '"Alles Mögliche! Ich kann Zeitreisen, fliegen, Tiere beobachten, reich sein …"');
            await ƒS.Speech.tell(characters.Kailani, '"Und ich bin soo hübsch in dem Spiegel! Ganz schlank und mit langen Haaren. So wollte ich schon immer aussehen."');
            await ƒS.Speech.tell(characters.maincharacter, '"Und deshalb schaust du so gerne hinein, weil du dich darin hübscher findest? Aber du bist doch in echt schon hübsch!"');
            ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.grey_crossed_angry, ƒS.positionPercent(45, 100));
            ƒS.update();
            await ƒS.Speech.tell(characters.maincharacter, "Kailani verstummt und zupft an ihrem Kleid herum. Du runzelst die Stirn. Warte – ist das Kleid in der Wäsche verblichen?");
            await ƒS.Speech.tell(characters.Kailani, '"Können wir einfach unser Zeug fertig machen? Ich habe keine Lust mehr, hier rumzustehen."');
            ƒS.Speech.clear();
            break;
    }
    
    return "03_00 New day";
    }
  }
