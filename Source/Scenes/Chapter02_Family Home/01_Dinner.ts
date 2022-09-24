namespace Spiegel_VN {
  export async function Chp02_01_Dinner(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp02_01_Dinner); 
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
    
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_laugh, ƒS.positionPercent(80, 100));
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.outfit2_dress3_smile, ƒS.positionPercent(45, 100));
    await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos3_laugh, ƒS.positionPercent(10, 100));
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress5_laugh, ƒS.positionPercent(55,100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mama, '"Hey"' + dataForSave.nameProtagonist + '"da bist du! Setz’ dich hin. Wir warten schon."');
    await ƒS.Speech.tell(characters.Mutti, '"Möchtest du Karotten, mein Schatz?"');
    ƒS.Character.hide(characters.Evarius);
    ƒS.Character.hide(characters.Kailani);
    await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos1_angry, ƒS.positionPercent(10, 100));
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.outfit2_dress1_eyeroll, ƒS.positionPercent(45, 100));
    ƒS.update();


    await ƒS.Speech.tell(characters.Evarius, '"Ich will auf gar keinen Fall Karotten, Mutti!"');
    await ƒS.Speech.tell(characters.Kailani, '"Ich auch nicht!"');

    ƒS.Character.hide(characters.Mama);
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_angry, ƒS.positionPercent(80, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Mama, '"Ihr esst, was Mutti gekocht hat, sonst gibt es nichts! Still jetzt."');
    ƒS.Character.hide(characters.Mutti);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress5_frown, ƒS.positionPercent(55,100));
    ƒS.update();
    
    await ƒS.Speech.tell(characters.Mutti, '"Nur ein bisschen, ihr zwei, in Ordnung?"');

    ƒS.Character.hide(characters.Evarius);
    await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos3_frown, ƒS.positionPercent(10, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Evarius, '"Ach, Mutti …"');
    await ƒS.Speech.tell(characters.maincharacter, "Das übliche Chaos beim Essen. Evarius gibt den Ton an und Kailani folgt ihm. Mutti lässt sich auch immer so schnell erweichen! Mama schaut dich von der Seite an.");

    ƒS.Character.hide(characters.Mama);
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_neutral, ƒS.positionPercent(80, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mama, '"Alles in Ordnung? Du bist heute noch stiller als sonst?"');

    await ƒS.Speech.tell(characters.maincharacter, "Du musst lächeln.");

    // *** SCENE OPTIONS ***
    let Chp02PickSceneElementAnswersDinner = {
      iSayDistract: "Ablenken.",
      iSayFight: "Streit ansprechen.",
      iSaySilent: "Nicken und Schweigen.",
    };

    // if (
    //   !dataForSave.pickedChp02_DinnerScene || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
    //   !dataForSave.pickedChp02_PickHerbsGarden ||
    //   !dataForSave.pickedChp02_TestWithElena ||
    //   !dataForSave.pickedChp02_FightNeighbor
    // ) {
    //   delete Chp02PickSceneElementAnswers.iSayContinue;
    //   // return Chp01_CS_ArrivalHome();
    // }

    let Chp02PickSceneElementDinner = await ƒS.Menu.getInput(
      Chp02PickSceneElementAnswersDinner,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp02PickSceneElementDinner) {
      case Chp02PickSceneElementAnswersDinner.iSayDistract:
        await ƒS.Speech.tell(characters.maincharacter, '"Ist alles in Ordnung! Nur etwas müde. Aber den Spiegel, den möchte ich heute noch ausprobieren! Bist du auch gespannt darauf, wie oder ob er funktioniert?"');
        await ƒS.Speech.tell(characters.maincharacter, "Mutti überhört dich und schaltet sich ein.");
        ƒS.Character.hide(characters.Mutti);
        await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress5_smirk, ƒS.positionPercent(55, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Mutti, '"Ich bin auch gespannt! Magische Dinge gab es bei uns schon lange nicht mehr, wenn überhaupt. Gleich nach dem Essen!"');
        ƒS.Speech.clear();
        // return "02_021 Test Mirror";
        break;

      
      case Chp02PickSceneElementAnswersDinner.iSayFight:
        await ƒS.Speech.tell(characters.maincharacter, '"Klar, Mama. Ich habe nur eben diesen seltsamen Streit von Henri und Balduin mitbekommen. Hast du es auch gehört?"');
        ƒS.Character.hide(characters.Mama);
        await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_shocked, ƒS.positionPercent(80, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Mama, '"Die haben sich schon heute Morgen gestritten. Aber gerade eben habe ich nichts mitbekommen. Was war denn los?"');
        await ƒS.Speech.tell(characters.maincharacter, '"Ach, vielleicht war es nichts Ernstes. Henri ärgerte sich über Balduin, weil er wohl dauernd in den Spiegel schaut, den gleichen Spiegel, den wir heute gekauft haben. Das ist doch komisch, nicht?"');
        ƒS.Character.hide(characters.Mama);
        await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_angry, ƒS.positionPercent(80, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Mama, '"Das wäre ja ein arger Zufall. Worüber sollte man sich denn bei dem Spiegel streiten? Vielleicht hast du dich verhört."');
        await ƒS.Speech.tell(characters.maincharacter, "Mama dreht sich um und mahnt Evarius ab, weil er mit den Karotten Fange gespielt hat. Du hast schon fertig gegessen, hast aber immer noch dieses komische Gefühl im Bauch.");
        ƒS.Speech.clear();
        // return "02_021 Test Mirror";
        break;

      case Chp02PickSceneElementAnswersDinner.iSaySilent:
        await ƒS.Speech.tell(characters.Mama, '"Na gut! Wenn du nicht reden willst. Vielleicht kommen Mutti und ich heute Abend mit einer heißen Schokolade in deinem Zimmer vorbei?"');
        await ƒS.Speech.tell(characters.maincharacter, "Du weißt, sie will es dir nur recht machen. Du bist eben von dem Trubel heute erschöpft. Trotzdem willst du noch den Spiegel austesten. Stimmt das wirklich, was der Händler gesagt hat?");
        ƒS.Speech.clear();
        // return "02_021 Test Mirror";
        break;
    }

    ƒS.Character.hide(characters.Mutti);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress5_smile, ƒS.positionPercent(55, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mutti, '"Hat es euch denn geschmeckt?"');
    await ƒS.Speech.tell(characters.maincharacter, "Alle stimmen lautstark mit ein. Gegen Muttis vorzügliches Kochen hat keiner aus der Familie etwas einzuwenden.");

    ƒS.Character.hide(characters.Kailani);
    await ƒS.Character.show(characters.Kailani, characters.Kailani.pose.outfit2_dress1_angry, ƒS.positionPercent(45, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Kailani, '"Können wir nun endlich den Spiegel testen?"');

    ƒS.Character.hide(characters.Mutti);
    await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress5_laugh, ƒS.positionPercent(55, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Mutti, '"Warum macht ihr Kinder das nicht zuerst allein? Ich komme nach dem Abwasch gleich dazu"');

    ƒS.Character.hide(characters.Mutti);
    ƒS.Character.hide(characters.Mama);

    let Chp02TestMirrorElementAnswers = {
      iSayTestWithKailani: "Mit Kailani testen.",
      iSayTestWithEvarius: "Mit Evarius ausprobieren.",
    };

    let Chp02TestMirrorElement = await ƒS.Menu.getInput(
      Chp02TestMirrorElementAnswers,
      "choicesCSSclass"
    );

    // *** RESPONSES ***
    switch (Chp02TestMirrorElement) {
      case Chp02TestMirrorElementAnswers.iSayTestWithKailani:
        await ƒS.Speech.tell(characters.maincharacter, '"Komm’, Kailani, testen wir das neue Ding!"');
        return "02_021 Test Mirror Kailani";
        break;
            
      case Chp02TestMirrorElementAnswers.iSayTestWithEvarius:
        await ƒS.Speech.tell(characters.maincharacter, '"Komm’, Evarius, testen wir das neue Ding!"');
        return "02_021 Test Mirror Evarius";
        break;
    }
  }
}
