namespace Spiegel_VN {
  export async function Chp02_E_DiscoverBedroom(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_E_DiscoverBedroom);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration,transitions.fade.alpha,transitions.fade.edge);
    await ƒS.Speech.tell(characters.maincharacter, "Dein eigenes Reich. Hier lässt dich deine Familie, meistens zumindest, in Ruhe und du kannst entspannen.");

    let Chp02DiscoverBedroomElementAnswers = {
      iSayDiscoverDesk: "(Erkunden) Was liegt da auf dem Tisch (Tagebuch)?",
      iSayDiscoverBooks: "(Erkunden) Bücher anschauen",
      iSayLeave: "Zurück",
    };

    let Chp02DiscoverBedroomElement = await ƒS.Menu.getInput(
      Chp02DiscoverBedroomElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp02DiscoverBedroomElement) {
      case Chp02DiscoverBedroomElementAnswers.iSayDiscoverDesk:
        await ƒS.Location.show(locations.Chp02_E_DiscoverBedroomDiary);
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter, "Mittwoch, 16. Februar: Heute morgen habe ich mich wirklich geschämt. Ich habe Kailani von der Schule abgeholt und als sie rauskam, hat ihr ein Junge “Schweinchen!” hinterhergerufen."); 
        await ƒS.Speech.tell(characters.maincharacter, "Sie wurde ganz rot und wollte danach kein Wort mehr mit mir reden. Nicht mal ein Wort habe ich dem Typ gesagt. Ich habe Kailani gar nicht verteidigt!");
        ƒS.Speech.clear();
        return "02_E Discover bedroom";
        break;

      case Chp02DiscoverBedroomElementAnswers.iSayDiscoverBooks:
        await ƒS.Speech.tell(characters.maincharacter, "Du lässt deinen Blick über deine kleine Büchersammlung wandern. Schon immer hast du lieber im Wald gelesen, als mit Anderen Räuber und Gendarm zu spielen.");
        ƒS.Speech.clear();
        return "02_E Discover bedroom";
        break;
      
      case Chp02DiscoverBedroomElementAnswers.iSayLeave:
        await ƒS.Speech.tell(characters.maincharacter, "");
        ƒS.Speech.clear();
        return "02_00 Arrival Home";
        break;
    }
  }
}
