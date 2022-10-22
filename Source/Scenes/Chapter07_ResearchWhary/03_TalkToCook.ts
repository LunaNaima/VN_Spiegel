namespace Spiegel_VN {
  export async function Chp07_TalkToCook(): ƒS.SceneReturn {
    dataForSave.pickedChp07TalkToCook = true;
   
    let Chp07CookElementAnswers = {
      iSayOffended: '"Beleidigt"',
      iSaySad: '"Traurig"',
      iSayAngry: '"Wütend"',
    };

    let Chp07CookElement = await ƒS.Menu.getInput(Chp07CookElementAnswers, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp07CookElement) {
      case Chp07CookElementAnswers.iSayOffended:
        await ƒS.Speech.tell(characters.maincharacter, '"Na gut! Dann suche ich meine Schwester eben allein! Wozu hilft man anderen Menschen schon?"');
        await ƒS.Speech.tell(characters.Cook, '"Sorry, echt. Aber ich habe niemanden gesehen. Willst ein frisches Gebäck?"');
        ƒS.Speech.clear();
        return "07_TalkToCook";
        break;
      
      case Chp07CookElementAnswers.iSaySad:
        await ƒS.Speech.tell(characters.maincharacter, '"Ich vermisse sie unglaublich und mache mir sehr große Sorgen."');
        await ƒS.Speech.tell(characters.Cook, '"Ich hab’ auch ‘ne kleine Schwester. Weißt du, ob sie wirklich in der Stadt ist?"');
        await ƒS.Speech.tell(characters.maincharacter, '"Ich habe keine Ahnung. Vermutlich ist sie hier irgendwo gefangen. Habe ich zumindest gehört."');

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Cook, characters.Cook.pose.pos2_concerned, ƒS.positionPercent(65, 100));
        ƒS.update();

        await ƒS.Speech.tell(characters.Cook, '"Gefangen? Sag bloß …"');
        await ƒS.Speech.tell(characters.maincharacter, "Er grübelt lange und sieht auf einmal gar nicht mehr so lässig aus.");
        await ƒS.Speech.tell(characters.Cook, '"Ich habe in letzter Zeit einiges gehört … nur aus der Gerüchteküche. Wortwörtlich, hehe."');

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Cook, characters.Cook.pose.pos1_concerned, ƒS.positionPercent(65, 100));
        ƒS.update();

        await ƒS.Speech.tell(characters.Cook, '"Ich weiß nicht, ob du’s wusstest, aber seit ewigen Zeiten war unser Leben ziemlich grau. Die letzte Königin, Annabelle II., hatte dann die Schnauze voll. Sie wollte ihre Kleider unbedingt in Farbe sehen. Die war eitel, heiliger Strohsack!"');
        await ƒS.Speech.tell(characters.Cook, '"Deshalb hatte sie ein paar Magierinnen und Zauberer von weit weg über den Ozean zu sich geholt. Diese Zaubernde haben jahrelang hinter verschlossenen Schlosstüren gewerkelt. Fast hatten wir das Ganze schon vergessen und uns mit dem Gedanken abgefunden, dass wir eben für immer grau sein werden. Doch dann … plötzlich war die erste Blume tatsächlich gelb."');

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Cook, characters.Cook.pose.pos2_unknowing, ƒS.positionPercent(65, 100));
        ƒS.update();

        await ƒS.Speech.tell(characters.Cook, '"Alles sehr hübsch, und so weiter. Aber: Annabelle, unsere Königin, die wurde nie wieder gesehen. Niemand weiß, wer wirklich hinter den Schlosstüren hockt und regiert. Meine Freunde und ich, wir haben da aber ‘ne Vermutung …"');
        await ƒS.Speech.tell(characters.maincharacter, "Er beugt sich verschwörerisch zu dir herunter.");
        await ƒS.Speech.tell(characters.Cook, '"Ich glaube, da ist ein böser Geist! Ein Geist im Schloss, der über uns alle regiert. Und der hat Annabelle getötet. Warum sonst sollte sie sich nicht mehr zeigen?"');
        await ƒS.Speech.tell(characters.Cook, '"Aber jetzt – in Luft aufgelöst. Die meisten wollen davon aber nichts hören. Solange die ihre Farbe kriegen und sich aufpolstern und im Spiegel anglotzen können, ist denen alles egal. Aber nicht mir und meinem Kreis!"');
        ƒS.Speech.clear();
        break;
      
      case Chp07CookElementAnswers.iSayAngry:
        await ƒS.Speech.tell(characters.maincharacter, '"Ich bin extra hierhergereist, um Kailani zu suchen! Wieso redest du nicht mit mir? Du könntest dir doch wenigstens meine Geschichte anhören …"');
        await ƒS.Speech.tell(characters.Cook, '"Schon. Aber ich kann dir, glaube ich, nicht helfen."');
        ƒS.Speech.clear();
        return "07_TalkToCook";
        break;
    }

    do {
      let Chp07CookElementAnswers2 = {
        iSayGhost: '"(Erkunden) Was macht der Geist?"',
        iSayColor: '"(Erkunden) Woher kam die Farbe?"',
        iSayPeople: '"(Erkunden) Was macht das Volk?"',
        iSayContinue: "Weiter",
      };

      if (
        !dataForSave.pickedChp07CookpickedGhost ||
        !dataForSave.pickedChp07CookpickedColor ||
        !dataForSave.pickedChp07CookpickedPeople
      ) {
        delete Chp07CookElementAnswers2.iSayContinue;
      }

      let Chp07CookElement2 = await ƒS.Menu.getInput(Chp07CookElementAnswers2, "choicesCSSclass");

      // *** RESPONSES ***
      switch (Chp07CookElement2) {
        case Chp07CookElementAnswers2.iSayGhost:
          dataForSave.pickedChp07CookpickedGhost = true;
          await ƒS.Speech.tell(characters.Cook, '"Wir sind uns sicher, dass ein Geist da oben sitzt und Farbe frisst."');
          ƒS.Speech.clear();
          break;
        
        case Chp07CookElementAnswers2.iSayColor:
          dataForSave.pickedChp07CookpickedColor = true;
          await ƒS.Speech.tell(characters.Cook, '"Nja, das ist eben die Frage! Das weiß keiner …"');
          ƒS.Speech.clear();
          break;
        
        case Chp07CookElementAnswers2.iSayPeople:
          dataForSave.pickedChp07CookpickedPeople = true;
          await ƒS.Speech.tell(characters.Cook, '"Nichts, das ist es ja eben! Bestaunt sich im Spiegel, und das war’s."');
          ƒS.Speech.clear();
          break;
        
        case Chp07CookElementAnswers2.iSayContinue:
          dataForSave.pickedChp07CookpickedContinue = true;
          await ƒS.Speech.tell(characters.maincharacter, "Das Klappern von Pfannen stört euer Gespräch.");
          await ƒS.Speech.tell(characters.Cook, '"Ich muss weg, das Mittagessen für morgen vorbereiten! Dir viel Glück bei der Suche und ehm, erzähl’ besser niemandem von unserem Gespräch, ja?"');
          ƒS.Character.hideAll();
          await ƒS.Speech.tell(characters.maincharacter, "Eine Königin, Spiegel und ein böser Geist? Du spürst, dass all diese Informationen mit Kailanis Verschwinden zu tun haben. Aber es fehlen noch einige große Puzzlestücke.");
          ƒS.Speech.clear();
          return "06_new day";
          break;
      } 
    } while (!dataForSave.pickedChp07CookpickedContinue);
  }
}
