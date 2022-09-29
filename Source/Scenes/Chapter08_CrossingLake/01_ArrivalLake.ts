namespace Spiegel_VN {
  export async function Chp08_ArrivalLake(): ƒS.SceneReturn {
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.black);
    
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Location.show(locations.Chp08_Lake);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Der Weg zum See war nicht weit, schließlich liegt die Stadt direkt am Ufer. Als ihr dort ankommt, ist der See tiefblau und gefühlt endlos. Du kannst das andere Ufer in der aufkommenden Dämmerung mit bloßem Auge nicht erkennen.");
        await ƒS.Speech.tell(characters.Flynn, '"Der ist ja riesig! So nahe war ich noch nie. Jetzt brauchen wir nur noch eine Möglichkeit zur Überfahrt."');
    await ƒS.Speech.tell(characters.maincharacter, "Suche im Bild nach Möglichkeiten zur Überfahrt! Klicke dabei auf die Stellen, bei denen sich der Mauszeiger ändert.");


    // let Chp10HowToCrossElementAnswers = {
    //   iSayStealABoat: "Boot klauen",
    //   iSayBuildARaft: "Floß bauen",
    //   iSaySwim: "Schwimmen",
    //   iSayTurnAround: "Umdrehen",
    // };

    // do {
    //   let Chp10HowToCrossElement = await ƒS.Menu.getInput(
    //     Chp10HowToCrossElementAnswers,
    //     "choicesCSSclass"
    //   );
    //   switch (Chp10HowToCrossElement) {
    //     case Chp10HowToCrossElementAnswers.iSayStealABoat:
    //       // continue path here
    //       await ƒS.Speech.tell("Ich", "Boot klauen? Eher nicht");
    //       ƒS.Speech.clear();
    //       return "10_01 How to cross"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
    //       break;

    //     case Chp10HowToCrossElementAnswers.iSayBuildARaft:
    //       dataForSave.pickedRightChoice = true;
    //       await ƒS.Speech.tell("Ich", "Ein Floß bauen klingt doch gut!");
    //       dataForSave.pickedRightChoice = true;
    //       ƒS.Speech.clear();
    //       return "10_02 On the raft";
    //       break;

    //     case Chp10HowToCrossElementAnswers.iSaySwim:
    //       // continue path here
    //       await ƒS.Speech.tell("Ich", "Schwimmen ist glaub bisschen viel");
    //       ƒS.Speech.clear();
    //       return "10_01 How to cross";
    //       break;

    //     case Chp10HowToCrossElementAnswers.iSayTurnAround:
    //       await ƒS.Speech.tell(
    //         "Ich",
    //         "Umdrehen ist eigentlich keine Option ... Was ist mit Kailani?"
    //       );
    //       ƒS.Speech.clear();
    //       return "10_01 How to cross";
    //       break;
    //   }
    // } while (!dataForSave.pickedRightChoice);

    // if (dataForSave.pickedRightChoice) {
    ƒS.Speech.clear();
    // return "08_ImageRiddle";
    return "08_OnLake";
    }
  }

