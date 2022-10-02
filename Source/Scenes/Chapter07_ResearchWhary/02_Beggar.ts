namespace Spiegel_VN {
  export async function Chp07_Beggar(): ƒS.SceneReturn {
    await ƒS.Speech.tell(characters.maincharacter, '"Da hinten sitzt eine Frau. Ich bin mir sicher, dass sie etwas weiß. Schließlich sitzt sie hier den ganzen Tag und beobachtet!"');
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_angry, ƒS.positionPercent(60, 100))
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Ich weiß nicht, ich würde die Bettelnden hier nicht ansprechen … nachher stiehlt sie dir deine Tasche!"');
    await ƒS.Speech.tell(characters.maincharacter, "Du winkst ab und gehst zielstrebig zu ihr hin.");
    
    await ƒS.Character.show(characters.Beggar, characters.Beggar.pose.neutral, ƒS.positionPercent(30, 120));
    ƒS.update();
    await ƒS.Speech.tell(characters.Beggar, '"Ein Pfennig? Für eine alte Dame …"');
    await ƒS.Speech.tell(characters.maincharacter, "Du überlegst. Was könntest du ihr anbieten?");


    let Chp07BeggarSceneElementAnswers = {
      iSayFood: "Essen",
      iSayEntertainment: "Vorstellung",
      iSayWarmth: "Wärme",
    };

    if (!dataForSave.pickedChp05Food) {
      delete Chp07BeggarSceneElementAnswers.iSayFood
    }

    if (!dataForSave.pickedChp05Seeds) {
      delete Chp07BeggarSceneElementAnswers.iSayEntertainment
    }

    if (!dataForSave.pickedChp05Cloak) {
      delete Chp07BeggarSceneElementAnswers.iSayWarmth
    }

    let Chp07BeggarSceneElement = await ƒS.Menu.getInput(Chp07BeggarSceneElementAnswers, "choicesCSSclass");
    
    switch (Chp07BeggarSceneElement) {
      case Chp07BeggarSceneElementAnswers.iSayFood:
        await ƒS.Speech.tell(characters.maincharacter, "Dir fällt dein Vesper ein, dass du von zuhause mitgebracht hast. Vielleicht ist es jetzt nicht mehr so frisch, aber du kramst in deiner Tasche, ziehst es heraus und überreichst es der Bettlerin.");
        ƒS.Character.hide(characters.Beggar);
        await ƒS.Character.show(characters.Beggar, characters.Beggar.pose.front, ƒS.positionPercent(30, 120));
        ƒS.update();
        
        await ƒS.Speech.tell(characters.Beggar, '"Oh … danke …"');
        await ƒS.Speech.tell(characters.maincharacter, "Sie verschlingt das Brötchen sofort.");
        ƒS.Speech.clear();
        break;

      case Chp07BeggarSceneElementAnswers.iSayEntertainment:
        await ƒS.Speech.tell(characters.maincharacter, "Du holst ein paar Kerne aus deiner Tasche und streust sie auf den Boden. Hoffentlich kommen deine fliegenden Freunde von zuhause und singen! Tatsächlich, die Vögel kommen sofort angeflogen.");
        await ƒS.Sound.fade(soundeffects.birds, 0.1, 1, true);
        await ƒS.Location.show(locations.Chp07_MarketplaceWharyBirds);
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter, "Als sie um dich herum zwitschern und ihre Melodie anstimmen, entspannst du dich etwas. Egal, was passiert, die Vögel werden dir zur Seite stehen, das weißt du jetzt.");
        
        ƒS.Character.hide(characters.Beggar);
        await ƒS.Character.show(characters.Beggar, characters.Beggar.pose.front, ƒS.positionPercent(30, 120));
        ƒS.update();
        
        await ƒS.Speech.tell(characters.Beggar, '"Wie schön! Wie entzückend!"');
        await ƒS.Speech.tell(characters.maincharacter, "Sie klatscht in die Hände und beobachtete die Vögel fasziniert.");
        ƒS.Sound.fade(soundeffects.birds, 0, 0, false);
        ƒS.Speech.clear();
        break;
      
      case Chp07BeggarSceneElementAnswers.iSayWarmth:
        await ƒS.Speech.tell(characters.maincharacter, "Du überlegst für einen Moment. Dann schwingst du den dunklen Mantel, den du daheim eingepackt hast, von deinen Schultern. Die Bettlerin kann ihn eher gebrauchen. ");
        
        ƒS.Character.hide(characters.Beggar);
        await ƒS.Character.show(characters.Beggar, characters.Beggar.pose.front, ƒS.positionPercent(30, 120));
        ƒS.update();
        
        await ƒS.Speech.tell(characters.Beggar, '"Oh, der ist ja schön… so weich …"');
        await ƒS.Speech.tell(characters.maincharacter, "Sie faltet den Mantel zusammen und stopft ihn unter ihre Weste.");
        ƒS.Speech.clear();
        break;
    }

    await ƒS.Location.show(locations.Chp07_MarketplaceWhary);
    ƒS.update();

    await ƒS.Speech.tell(characters.maincharacter, '"Haben Sie ein Mädchen gesehen? Sie trägt ein braunes Kleid, hat braune Haare und ist seit zwei Tagen vermisst."');
    await ƒS.Speech.tell(characters.Beggar, '"Vermisst… das ist nicht gut. Nicht gut. Vielleicht steckt sie fest? Ganz fest."');

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_shocked, ƒS.positionPercent(60, 100))
    ƒS.update();
    await ƒS.Speech.tell(characters.maincharacter, '"Sie steckt fest? Wie meinen Sie das?"');

    ƒS.Character.hide(characters.Beggar);
    await ƒS.Character.show(characters.Beggar, characters.Beggar.pose.anguish, ƒS.positionPercent(30, 120));
    ƒS.update();

    await ƒS.Speech.tell(characters.Beggar, '"Manche Menschen … manche werden eingepackt. Versteckt. Festgehalten."');
    await ƒS.Speech.tell(characters.maincharacter, "Du erinnerst dich an die Worte des Wünschebaums.");
    await ƒS.Speech.tell(characters.maincharacter, '"Als Sklavin?"');

    ƒS.Character.hide(characters.Beggar);
    await ƒS.Character.show(characters.Beggar, characters.Beggar.pose.shocked, ƒS.positionPercent(30, 120));
    ƒS.update();

    await ƒS.Speech.tell(characters.Beggar, '"Sklave … ja. Festgehalten. Gezwungen, zu produzieren. Die Farbe, überall! Überall Farbe. Mit den Spiegeln."');

    await ƒS.Speech.tell(characters.maincharacter, '"Was bedeutet das, mit den Spiegeln?"');
    await ƒS.Speech.tell(characters.maincharacter, "Statt zu antworten, schaut sie über deine Schulter. Du folgst ihrem Blick, weil du denkst, sie hätte etwas entdeckt. Als du dich wieder umdrehst, ist die Bettlerin verschwunden.");

    ƒS.Character.hide(characters.Beggar);
    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_confused, ƒS.positionPercent(60, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Wo ist sie denn hin?"');
    await ƒS.Speech.tell(characters.maincharacter, '"Sie ist einfach weg? Sie wusste so viel! Ich wollte sich doch noch so viel fragen …"');
    await ƒS.Speech.tell(characters.maincharacter, "Verzweifelt suchst du nach ihr in der Menschenmenge, doch die Bettlerin scheint, wie vom Erdboden verschluckt.");

    await ƒS.Speech.tell(characters.maincharacter, '"Das gibt’s doch nicht! Wie kann sie so schnell weg sein?"');

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos3_arms_happy, ƒS.positionPercent(60, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Flynn, '"Aber wir haben eine Spur! Menschen werden irgendwo festgehalten, gegen ihren Willen, um zu produzieren …"');
    await ƒS.Speech.tell(characters.maincharacter, '"Klingt fast wie … wie eine Fabrik!"');
    await ƒS.Speech.tell(characters.maincharacter, "Als du es aussprichst, tauchen Bilder von Kailani in deinem Kopf auf: Kailani in einem Riesenkäfig, gepeitscht von bösen Wärtern.");
  
    await ƒS.Speech.tell(characters.maincharacter, '"Hast du etwas rausgefunden, Flynn?"');

    ƒS.Character.hide(characters.Flynn);
    await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_sad, ƒS.positionPercent(60, 100));
    ƒS.update();

        await ƒS.Speech.tell(characters.maincharacter, "Er schüttelt betrübt den Kopf.");
    await ƒS.Speech.tell(characters.Flynn, '"Die Händler wollten mir nichts erzählen und die Leute, die ich gefragt habe, meinten nur, sie sehen jeden Tag Leute, die verloren aussehen. Ich bin also auch nicht weitergekommen."');

    await ƒS.Speech.tell(characters.maincharacter, '"Gut, dann fragen wir weiter ..."');

    return "06_new day";
  }
}
