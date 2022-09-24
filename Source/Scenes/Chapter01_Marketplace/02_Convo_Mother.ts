namespace Spiegel_VN {
  export async function Chp01_02_ConvoMother(): ƒS.SceneReturn {
    dataForSave.pickedChp01_ConvoMother = true;
    // await ƒS.Location.show(locations.black);
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.Chp01_02_ConvoMother);
    ƒS.update();
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_laugh, ƒS.positionPercent(70, 100));
    ƒS.update();

    // await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);

    // *** BEGIN DIALOGUE ***
    await ƒS.Speech.tell(characters.Mama.name,dlg_scn_02.Mama.T0000);
    await ƒS.Speech.tell(characters.maincharacter.name, dlg_scn_02.maincharacter.T0001);
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_shocked, ƒS.positionPercent(70, 100));
    ƒS.update();

    await ƒS.Speech.tell(characters.Mama.name, dlg_scn_02.Mama.T0002);
    ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_laugh, ƒS.positionPercent(70, 100));
    ƒS.update();
    await ƒS.Speech.tell(characters.Mama.name,dlg_scn_02.Mama.T0003);

    //*** OPTIONS *//
    let chp01ConvoMotherElementAnswers = {
      iSayBuy: "Kaufen",
      iSaySave: "Sparen",
      iSayUnsure: "Unsicher"
    };

    // if (dataForSave.scoreEmpathyPoints < 20) {
    //   delete chp01ConvoMotherElementAnswers.iSayEmpathyPoints;
    // }
    // console.log(dataForSave.scoreEmpathyPoints);

    //*** CSS-CLASS */
    let chp01ConvoMotherElement = await ƒS.Menu.getInput(
      chp01ConvoMotherElementAnswers,
      "choicesCSSclass"
    );

    //*** RESPONSES */
    switch (chp01ConvoMotherElement) {
      case chp01ConvoMotherElementAnswers.iSayBuy:
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_neutral, ƒS.positionPercent(70, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter.name, dlg_scn_02.maincharacter.T0004);
        await ƒS.Speech.tell(characters.Mama.name, dlg_scn_02.Mama.T0005);
        await ƒS.Speech.tell(characters.maincharacter.name, dlg_scn_02.maincharacter.T0006);
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_laugh, ƒS.positionPercent(70, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Mama.name, dlg_scn_02.Mama.T0007);
        ƒS.Speech.clear();
        ƒS.Character.hideAll();
        ƒS.update();
        return "01_01 Intro Marketplace";
        break;

      case chp01ConvoMotherElementAnswers.iSaySave:
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_neutral, ƒS.positionPercent(70, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter.name, dlg_scn_02.maincharacter.T0008);
        await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_laugh, ƒS.positionPercent(70, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.Mama.name, dlg_scn_02.Mama.T0009);
        ƒS.Speech.clear();
        ƒS.Character.hideAll();
        ƒS.update();
        return "01_01 Intro Marketplace";
        break;

      case chp01ConvoMotherElementAnswers.iSayUnsure:
        // dataForSave.scoreEmpathyPoints += 10;
        ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Mama, characters.Mama.pose.dress_neutral, ƒS.positionPercent(70, 100));
        ƒS.update();
        await ƒS.Speech.tell(characters.maincharacter.name, dlg_scn_02.maincharacter.T0010);
        ƒS.Speech.clear();
        ƒS.Character.hideAll();
        ƒS.update();
        return "01_01 Intro Marketplace";
        break;
    }
  }
}
