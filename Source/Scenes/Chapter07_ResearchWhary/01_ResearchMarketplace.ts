namespace Spiegel_VN {
  export async function Chp07_ResearchMarketplace(): ƒS.SceneReturn {
    dataForSave.pickedChp07ResearchMarketplace = true;
    ƒS.Character.hideAll();
    let Chp07DiscoverMarketplaceElementAnswers = {
      // iSayListenToVillagers: "(Erkunden) Bewohnern zuhören",
      iSayMerchants: "(Erkunden) Mit den Händlern sprechen"
    };

    if (
      dataForSave.pickedChp07DiscoverMerchants
      // dataForSave.pickedChp07DiscoverSpeakToVillagers
    ) {
      return "07_Beggar";
    }

    let Chp07DiscoverMarketplaceElement = await ƒS.Menu.getInput(Chp07DiscoverMarketplaceElementAnswers, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp07DiscoverMarketplaceElement) {
      //   case Chp07DiscoverMarketplaceElementAnswers.iSayListenToVillagers:
      //     dataForSave.pickedChp07DiscoverSpeakToVillagers = true;
      // await ƒS.Speech.tell(characters.maincharacter, "Du beschließt, dich unauffällig unter die Leute zu mischen und lauschen. Da kriegst du sicher mehr mit als im direkten Gespräch. Du wanderst zu dem ersten Gemüsestand.");
      //     await ƒS.Speech.tell("Dorfbewohnende 1", '"... mehr Farbe bekommen…!"');
      // await ƒS.Speech.tell(characters.maincharacter, "Mehr Farbe? Du näherst dich den Leuten, die um die Apfelkisten stehen, unbemerkt.");
      //     await ƒS.Speech.tell("Dorfbewohnende 1", '"Ja ja, mein Nachbar, der Heinrich, hat eine ordentliche Portion bekommen. Seine Hemden glitzern wie die Sterne! Er sieht so viel jünger und stärker aus."');
      //     await ƒS.Speech.tell("Dorfbewohnende 2", '"Ich meine, so viel wird das nicht ausmachen, oder? Heinrich war schon vorher nicht, naja, besonders ansprechend."');
      // await ƒS.Speech.tell(characters.maincharacter, "Wieherndes Gelächter. Die Gruppe zerstreut sich und lässt dich mit vielen Fragezeichen im Kopf zurück. Farbe kriegen? Jung und stark?");
      //     ƒS.Speech.clear();
      //     return "07_Research Marketplace";
      //     break;

      case Chp07DiscoverMarketplaceElementAnswers.iSayMerchants:
        dataForSave.pickedChp07DiscoverMerchants = true;
        await ƒS.Speech.tell(characters.maincharacter, "Du näherst dich einem der Händler.");
        await ƒS.Speech.tell(characters.maincharacter, '"Hallo? Ich habe eine Frage."');

        await ƒS.Character.show(characters.MerchantWhary, characters.MerchantWhary.pose.pos1, ƒS.positionPercent(40, 100));
        ƒS.update();

        await ƒS.Speech.tell(characters.MerchantWhary, '"Was darf ich Ihnen anbieten? Diese Beeren sind im Angebot, acht kg für den Preis von sieben!"');
        await ƒS.Speech.tell(characters.maincharacter, "Was! Wer brauch schon 8 kg Beeren?");
        await ƒS.Speech.tell(characters.maincharacter, '"Nein, danke. Ich wollte wissen, ob Sie ein Mädchen gesehen haben. Sie trägt ein braunes Kleid und–"');
        await ƒS.Speech.tell("Handelnde", '"Siehst du hier irgendjemanden, der braun trägt? So etwas gibt es, seit wir alle Farbe bekommen, nicht mehr. Abgesehen davon habe ich keine Zeit für so etwas!"');
        await ƒS.Speech.tell(characters.maincharacter, "Die Leute bekommen Farbe? Du würdest gerne noch weiterfragen, doch der Händler hat sich schon abgewandt.");
        ƒS.Character.hide(characters.MerchantWhary);
        ƒS.update();
        ƒS.Speech.clear();
        return "07_Research Marketplace";
        break;
    }
  }
}
