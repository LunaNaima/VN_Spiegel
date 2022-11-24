namespace Spiegel_VN {
  export async function Chp01_03_IntroMirror(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_03_IntroMirror);
    dataForSave.pickedChp01_MirrorMerchant = true;
    ƒS.Character.hideAll();
    await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);

    await ƒS.Speech.tell(characters.mirrorMerchant.name, dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0000);
    await ƒS.Speech.tell(characters.mirrorMerchant.name, dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0001);
    await ƒS.Speech.tell(characters.maincharacter.name, dlg_Chp01EntryMirrorMerchant.maincharacter.T0002);
    await ƒS.Speech.tell(characters.mirrorMerchant.name, dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0003);

    //*** OPTIONS *//
    let Chp01MirrorMerchantElementAnswers = {
      iSayUnsure: 'Unsicher',
      iSayYes: 'Aufgeregt',
      iSayNo: 'Abwehrend'
    };

    let Chp01MirrorMerchantElement = await ƒS.Menu.getInput(Chp01MirrorMerchantElementAnswers, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp01MirrorMerchantElement) {
      case Chp01MirrorMerchantElementAnswers.iSayUnsure:
        await ƒS.Speech.tell(characters.maincharacter.name, dlg_Chp01EntryMirrorMerchant.maincharacter.T0004);
        await ƒS.Speech.tell(characters.mirrorMerchant.name, dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0005);
        ƒS.Speech.clear();
        break;

      case Chp01MirrorMerchantElementAnswers.iSayYes:
        await ƒS.Speech.tell(characters.maincharacter.name, dlg_Chp01EntryMirrorMerchant.maincharacter.T0010);
        await ƒS.Speech.tell(characters.mirrorMerchant.name, dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0011);
        ƒS.Speech.clear();
        break;

      case Chp01MirrorMerchantElementAnswers.iSayNo:
        await ƒS.Speech.tell(characters.maincharacter.name, dlg_Chp01EntryMirrorMerchant.maincharacter.T0012);
        ƒS.Speech.clear();
        break;
    }

    await ƒS.Speech.tell(characters.mirrorMerchant.name, 'Seine Stimme senkt sich verschwörerisch. Er winkt dich mit einer von funkelnden Ringen verzierten Hand heran.');
    await ƒS.Speech.tell(characters.mirrorMerchant.name, dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0006);
    await ƒS.Location.show(locations.Chp01_03_MirrorDemo);
    ƒS.update();

    let Chp01MirrorMerchantElementAnswers2 = {
      iSayYes: '"Klar!"',
      iSayUnsure: '"Weiß nicht."',
      iSayNo: '"Nein"'
    };

    let Chp01MirrorMerchantElement2 = await ƒS.Menu.getInput(Chp01MirrorMerchantElementAnswers2, "choicesCSSclass");

    // *** RESPONSES ***
    switch (Chp01MirrorMerchantElement2) {
      case Chp01MirrorMerchantElementAnswers2.iSayYes:
        await ƒS.Speech.tell(characters.maincharacter.name, dlg_Chp01EntryMirrorMerchant.maincharacter.T0007);
        // ƒS.Character.hideAll();
        return "01_01 Intro Marketplace";
        break;

      case Chp01MirrorMerchantElementAnswers2.iSayUnsure:
        await ƒS.Speech.tell(characters.maincharacter.name, dlg_Chp01EntryMirrorMerchant.maincharacter.T0008);
        // ƒS.Character.hideAll();
        return "01_01 Intro Marketplace";
        break;

      case Chp01MirrorMerchantElementAnswers2.iSayNo:
        await ƒS.Speech.tell(characters.maincharacter.name, dlg_Chp01EntryMirrorMerchant.maincharacter.T0009);
        // ƒS.Character.hideAll();
        return "01_01 Intro Marketplace";
        break;
    }
  }
}
