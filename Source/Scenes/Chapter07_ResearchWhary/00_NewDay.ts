namespace Spiegel_VN {
  export async function Chp06_NewDay(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp06_Inn_int);
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    // ** RANDOM TEXT ***
    let randomTextChp07NewDay = ƒ.Random.default.getRangeFloored(1, 4); //gerundet
    switch (randomTextChp07NewDay) {
      case 1:
        await ƒS.Speech.tell(characters.maincharacter, "Was für eine seltsame Stadt!");
        break;

      case 2:
        await ƒS.Speech.tell(characters.Flynn, "So! Wo geht's jetzt hin?");
        break;

      case 3:
        await ƒS.Speech.tell(characters.maincharacter, "Du kommst der Sache schon näher ...");
        break;

      case 4:
        await ƒS.Speech.tell(characters.Flynn, "Das macht Spaß! Eh – ich meinte, wir machen schon Fortschritte.");
        break;

      default:
        await ƒS.Speech.tell(characters.maincharacter, "Kailani, ich komme!");
        break;
    }

    let Chp07PickSceneElementAnswers = {
      PickSceneResearchMarketplace: "Recherche am Marktplatz",
      PickSceneSpeakToInnkeeper: "Mit Gastwirtin sprechen",
      PickSceneSpeakToCook: "Mit Koch sprechen",
      // PickSceneSpeakToStablehand: "Mit Stallmädchen sprechen",
      PickSceneContinue: "Weiter",
    };

    if (
      !dataForSave.pickedChp07ResearchMarketplace ||
      !dataForSave.pickedChp07TalkToCook ||
      !dataForSave.pickedChp07TalkToInnkeeper
      // !dataForSave.pickedChp07TalkToStablehand
    ) {
      delete Chp07PickSceneElementAnswers.PickSceneContinue;
    }

    if (dataForSave.pickedChp07ResearchMarketplace) {
      delete Chp07PickSceneElementAnswers.PickSceneResearchMarketplace
    }
    if (dataForSave.pickedChp07TalkToInnkeeper) {
      delete Chp07PickSceneElementAnswers.PickSceneSpeakToInnkeeper
    }
    if (dataForSave.pickedChp07TalkToCook) {
      delete Chp07PickSceneElementAnswers.PickSceneSpeakToCook
    }
    // if (dataForSave.pickedChp07TalkToStablehand) {
    //   delete Chp07PickSceneElementAnswers.PickSceneSpeakToStablehand
    // }

    let Chp07PickSceneElement = await ƒS.Menu.getInput(Chp07PickSceneElementAnswers,"choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp07PickSceneElement) {
      case Chp07PickSceneElementAnswers.PickSceneResearchMarketplace:
        await ƒS.Speech.tell(characters.maincharacter, '"Vielleicht macht es Sinn, an den Marktplatz zu gehen? Da ist meistens ziemlich viel los."');
        await ƒS.Speech.tell(characters.Flynn, '"Super! Eh– da finden wir sicher etwas über deine Schwester heraus."');
        await ƒS.Speech.tell(characters.maincharacter, "Flynn sieht das wohl noch als großes Abenteuer. Du schüttelst genervt den Kopf, begleitest ihn aber nach draußen.");
        ƒS.Character.hide(characters.Flynn);
        await ƒS.Location.show(locations.Chp07_MarketplaceWhary);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        await ƒS.Speech.tell(characters.maincharacter, "Ihr folgt den kleinen Gassen, bis sich ein bunter Marktplatz vor euch auftut. Genau wie daheim wuselt er vor Menschen, Waren und der einen oder anderen streunenden Katze. Du hast Heimweh, auch wenn du nie dachtest, dass du dein kleines Dorf mal so sehr vermissen würdest. Aber Kailani wartet irgendwo auf dich.");
        ƒS.Speech.clear();
        return "07_Research Marketplace";
        break;

      case Chp07PickSceneElementAnswers.PickSceneSpeakToCook:
        await ƒS.Speech.tell(characters.maincharacter, '"Ab in die Küche."');
        ƒS.Character.hideAll();
        await ƒS.Location.show(locations.Chp07_InnKitchen);
        await ƒS.Character.show(characters.Cook, characters.Cook.pose.pos2_concerned, ƒS.positionPercent(65, 100));
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    
        await ƒS.Speech.tell(characters.Cook, '"Du kommst gerade richtig! Ich brauche dringend eine Pause."');
        await ƒS.Speech.tell(characters.maincharacter, "Nanu? Hat ausgerechnet der Koch für mich Zeit?");
        await ƒS.Speech.tell(characters.Cook, '"Hat es dir denn gestern geschmeckt?"');
        await ƒS.Speech.tell(characters.maincharacter, "Eh, ja, sehr! War super lecker.");
        await ƒS.Speech.tell(characters.maincharacter, '"Aber, ehm, ich wollte etwas anderes fragen. Ich bin nämlich auf der Suche nach meiner Schwester. Und –"');

        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Cook, characters.Cook.pose.pos1_neutral, ƒS.positionPercent(65, 100));
        ƒS.update();
    
        await ƒS.Speech.tell(characters.Cook, '"Ich weiß leider gar nichts über deine Schwester, Kleines. Bin doch hier, von morgens bis abends."');
    
        await ƒS.Speech.tell(characters.maincharacter, "Er gestikuliert in Richtung Herd.");
        await ƒS.Speech.tell(characters.maincharacter, '"Trotzdem haben Sie vielleicht etwas gehört? Sie heißt Kailani und ist seit zwei Tagen weg. Ich hatte gehofft, dass Sie –"');
        await ƒS.Speech.tell(characters.Cook, '"Jetzt lass’ mal das Sie weg. Wie gesagt, kann ich dir nichts erzählen."');
        ƒS.Speech.clear();
        return "07_TalkToCook";
        break;

      case Chp07PickSceneElementAnswers.PickSceneSpeakToInnkeeper:
        await ƒS.Speech.tell(characters.maincharacter, "Wo ist die Inhaberin?");
        await ƒS.Speech.tell(characters.maincharacter, '"Ich frage mal die Wirtin. Schließlich sieht sie so viele Leute jeden Tag, die hier durchspazieren."');
        ƒS.Location.show(locations.Chp06_Inn_int)
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Innkeeper, characters.Innkeeper.pose.pos1_laugh, ƒS.positionPercent(70, 100));
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

        dataForSave.pickedChp07TalkToInnkeeper = true;

        await ƒS.Speech.tell(characters.Innkeeper, '"Kann ich dir weiterhelfen?"');
        await ƒS.Speech.tell(characters.maincharacter, '"Ja… zumindest hoffe ich es! Ich bin auf der Suche nach meiner Schwester. Ich hatte gehofft, sie wäre hier in der Spie– eh, in Whary gelandet."');
    
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Innkeeper, characters.Innkeeper.pose.pos2_frown, ƒS.positionPercent(70, 100));
        ƒS.update();
    
        await ƒS.Speech.tell(characters.Innkeeper, '"Entschuldige, Ich habe gerade nicht wirklich Zeit. Machst es kurz?"');
        ƒS.Speech.clear();
        return "07_TalkToInnkeeper";
        break;

      // case Chp07PickSceneElementAnswers.PickSceneSpeakToStablehand:
      //   dataForSave.pickedChp07TalkToStablehand = true;
      //   await ƒS.Speech.tell(characters.maincharacter, "Vielleicht ist jemand bei den Pferden?");
      //   await ƒS.Location.show(locations.Chp07_Barn);
      //   await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
      //   await ƒS.Speech.tell(characters.maincharacter, "Das Schnauben der Pferde erinnert dich an zuhause.");

      //   ƒS.Character.hideAll();
      //   await ƒS.Character.show(characters.Stablehand, characters.Stablehand.pose.pos2_laugh, ƒS.positionPercent(30, 100));
      //   ƒS.update();
        
      //   await ƒS.Speech.tell(characters.maincharacter, '"Hallo! Darf ich dich kurz stören?"');
      //   await ƒS.Speech.tell(characters.Stablehand, '"Mh."');
      //   await ƒS.Speech.tell(characters.maincharacter, "Du zögerst, unsicher, wo du anfangen sollst. Du erzählst von deiner Schwester Kailani und wie sie war, bevor sie verschwand. Das Schweigen deines Gegenübers lässt die Wörter nur so herauspurzeln, und ehe du dich versiehst, hast du ihr dein ganzes Herz ausgeschüttet.");
      //   await ƒS.Speech.tell(characters.maincharacter, '"Ich komme einfach nicht weiter, weißt du? Wo könnte sie denn sein?"');
      //   await ƒS.Speech.tell(characters.maincharacter, "Das Mädchen schweigt. Sie sieht nachdenklich aus.");
      //   await ƒS.Speech.tell(characters.Stablehand, '"Es gibt da etwas …"');

      //   ƒS.Character.hideAll();
      //   await ƒS.Character.show(characters.Stablehand, characters.Stablehand.pose.pos2_afraid, ƒS.positionPercent(30, 100));
      //   ƒS.update();

      //   await ƒS.Speech.tell(characters.Stablehand, '"Ich habe mal von etwas gehört, als ich die Pferde zum Wasser geführt habe. Zwei Wachen aus dem Schloss sind an mir vorbeigeritten. Die eine sagte zur Anderen: ‘Wird er dann auch über den See verfrachtet?’ Daraufhin meinte die Zweite: Ich glaube nicht, dass er gleich rein muss. Aber wenn er sich nochmal so verhält, gibt’s wohl keine Gnade …’ Die Wachen lachten gehässig, als sie wegritten."');
      //   await ƒS.Speech.tell(characters.maincharacter, "Sie verfällt wieder ins Schweigen.");
      //   await ƒS.Speech.tell(characters.Stablehand, '"Kennst du den großen See am Rande der Stadt?"');

      //   let Chp07StablehandElementAnswers = {
      //     iSayYes: '"Ja!"',
      //   };

      //   let Chp07StablehandElement = await ƒS.Menu.getInput(Chp07StablehandElementAnswers, "choicesCSSclass");

      //   await ƒS.Speech.tell(characters.Stablehand, '"Schon als Kind durfte ich nicht darin schwimmen. Dann hole mich der Klabautermann, wurde mir gesagt."');
      //   await ƒS.Speech.tell(characters.Stablehand, '"Auf der anderen Seite scheint etwas zu sein, dass verborgen bleiben soll. Ich weiß nicht, ob dir das bei der Suche nach deiner Schwester hilft"');
      //   await ƒS.Speech.tell(characters.maincharacter, "Sie verschwindet in einem der Ställe, ehe du dich recht bedanken kannst. Ihre Worte machen dir Bange. Einen See, den man nicht umrunden kann? Auch wenn Kailani auf der anderen Seite ist, wie sollst du ihn überqueren?");
      //   ƒS.Speech.clear();
      //   ƒS.Character.hideAll();
      //   return "06_new day";
      //   break;
      
      case Chp07PickSceneElementAnswers.PickSceneContinue:
        await ƒS.Location.show(locations.Chp06_Inn_int)
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_confused, ƒS.positionPercent(40, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Flynn, '"Und, was hast du rausgefunden?"');
        await ƒS.Speech.tell(characters.maincharacter, "Du erzählst ihm aufgeregt von den Hinweisen.");
        await ƒS.Speech.tell(characters.maincharacter, '"Und weil die Farbe etwas mit einem Ort zu tun hat, der auf der anderen Seite des Sees liegt, muss ich dort hin!"');
        
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos2_crossed_neutral, ƒS.positionPercent(40, 100));
        ƒS.update();

        await ƒS.Speech.tell(characters.Flynn, '"Meinst du wirklich? Dort ist aber nichts, soweit ich weiß!"');

        let Chp07PickContinueElementAnswers = {
          iSayCertain: "Bestimmt",
          iSayIgnore: "Ignorieren",
          iSayAngry: "Verärgert",
        };
        let Chp07PickContinueElement = await ƒS.Menu.getInput(Chp07PickContinueElementAnswers, "choicesCSSclass");
        
        switch (Chp07PickContinueElement) {
          case Chp07PickContinueElementAnswers.iSayCertain:
            await ƒS.Speech.tell(characters.maincharacter, '"Ist mir egal, was du denkst! Ich muss es versuchen."');
            ƒS.Speech.clear();
            break;
          
          case Chp07PickContinueElementAnswers.iSayIgnore:
            await ƒS.Speech.tell(characters.maincharacter, "Du ignorierst seine Einwände.");
            ƒS.Speech.clear();
            break;
          
          case Chp07PickContinueElementAnswers.iSayAngry:
            await ƒS.Speech.tell(characters.maincharacter, '"Glaubst du mir etwa nicht, nur, weil du dich hier besser auskennst?"');
            ƒS.Speech.clear();
            break;
        }
      
        await ƒS.Speech.tell(characters.maincharacter, '"Ich gehe sofort los! Wenn du mitkommen willst, musst du dich beeilen. Ich will nicht noch länger herum warten."');
        await ƒS.Speech.tell(characters.maincharacter, "Flynn murrt etwas, doch dann kommt sein Abenteuergeist hervor und er packt blitzschnell seine wenigen Sachen aus dem Zimmer.");
        await ƒS.Speech.tell(characters.Flynn, '"Natürlich lasse ich mir das nicht entgehen! Auf zum See!"');

        return "08_Arrival lake";
    }
  }
}
