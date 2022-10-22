namespace Spiegel_VN {
  export async function textRiddle(): ƒS.SceneReturn {

     let randomTextChp05TextRiddle = ƒ.Random.default.getRangeFloored(1, 4); //gerundet
        switch (randomTextChp05TextRiddle) {
            case 1:
                await ƒS.Speech.tell(characters.wishtree, '"Verzage nicht ..."');
                break;

            case 2:
                await ƒS.Speech.tell(characters.maincharacter, "Das ist doch alles verrückt.");
                break;

            case 3:
                await ƒS.Speech.tell(characters.wishtree, '"Nicht mehr lange ..."');
                break;

            case 4:
                await ƒS.Speech.tell(characters.maincharacter, "Mutti hatte Recht!");
                break;

            default:
                await ƒS.Speech.tell(characters.maincharacter, "Der Baum der Wünsche?");
                break;
    }
    
let Chp05TextRiddleElementAnswers = {
            iSayRiddle1: "Rätsel 1",
            iSayRiddle2: "Rätsel 2",
  iSayRiddle3: "Rätsel 3", 
             iSayProven: "Ich habe mich bewiesen! Und jetzt?", 
    };
    
    if (
            !dataForSave.pickedRiddle1 ||
            !dataForSave.pickedRiddle2 ||
    !dataForSave.pickedRiddle3
        ) {
            delete Chp05TextRiddleElementAnswers.iSayProven;
            // return Chp01_CS_ArrivalHome();
        }

    let Chp05TextRiddleElement = await ƒS.Menu.getInput(
            Chp05TextRiddleElementAnswers,
            "choicesCSSclass"
        );

        // *** RESPONSES ***
    switch (Chp05TextRiddleElement) {
      case Chp05TextRiddleElementAnswers.iSayRiddle1:
        dataForSave.pickedRiddle1 = true;
        await ƒS.Speech.tell(characters.wishtree, '"Ich habe ein Bett, doch ich find keine Ruh.<br>Ich habe einen Mund, doch ich kann nicht sprechen.<br>Ich bewege mich rasend schnell, doch ich verlasse niemals einen Ort.<br>Wer oder was bin ich? Tipp: Es hat etwas mit Wasser zu tun!<br/>"', false);
        let answer1: String = await ƒS.Speech.getInput();
    
        if (answer1.toLowerCase() == "fluss") {
          await ƒS.Speech.tell("Baum der Wünsche", "Das erste Rätsel geschafft!")
      
        }
        else {
          await ƒS.Speech.tell("Baum der Wünsche", "Denke nochmal nach ...")
        }
        return "TextRiddle";
        break;
    
      case Chp05TextRiddleElementAnswers.iSayRiddle2:
                dataForSave.pickedRiddle2 = true;
        await ƒS.Speech.tell(characters.maincharacter, "Geisterstunde ist um ... ?", false);
        let answer2: String = await ƒS.Speech.getInput();
    
        if (answer2.toLowerCase() == "mitternacht") {
          await ƒS.Speech.tell("Baum der Wünsche", "Schon das zweite Rätsel gelöst.")
        }
        else {
          await ƒS.Speech.tell("Baum der Wünsche", "Denke nochmal nach ...")
        }
        return "TextRiddle";
        break;
      
      case Chp05TextRiddleElementAnswers.iSayRiddle3:
        dataForSave.pickedRiddle3 = true;
        await ƒS.Speech.tell(characters.maincharacter, "An welchem Ort musst du stehen, damit dein rechts als mein links zu sehen ist?<br>Und doch bin ich nicht wirklich da, sondern nur visuell, wie sonderbar.<br>Kennst du diesen Ort?", false);
        let answer3: String = await ƒS.Speech.getInput();
    
        if (answer3.toLowerCase() == "spiegel") {
          await ƒS.Speech.tell("Baum der Wünsche", "Tatsächlich, du hast dich bewiesen ... ")
      
        }
        else {
          await ƒS.Speech.tell("Baum der Wünsche", "Denke nochmal nach ...")
          
        }
        return "TextRiddle";
        break;
      
      await ƒS.getKeypress(ƒ.KEYBOARD_CODE.SPACE);
      
      case Chp05TextRiddleElementAnswers.iSayProven:
        await ƒS.Speech.tell(characters.wishtree, '"Kailani besaß einen Spiegel, richtig? Er ist kein gewöhnlicher Spiegel, wie du sicher schon bemerkt hast."');
    await ƒS.Speech.tell(characters.wishtree, '"Er zeigt dir an, was du dir wünschst. Anders aber als meine Magie ist die Spiegelmagie dunkel."');
    await ƒS.Speech.tell(characters.wishtree, '"Der Spiegel sorgt dafür, dass die Menschen, die in ihn hineinblicken, krank werden. Sind sie erkrankt, zieht sie der Spiegel in sein Innerstes. Dort werden sie gefangen gehalten."');

      return "05_02 Convo Tree";
    }
    }
  }

