namespace Spiegel_VN {
  export import ƒ = FudgeCore; //importiert teile, die nicht in typescript sind, sondern außerhalb in fudge
  export import ƒS = FudgeStory;

  
  // *** DATA THAT WILL BE SAVED ***
  export let dataForSave = {
    // hier kommt alles rein, was gespeichert werden soll. Der Spielstand wird von Beginn der jeweiligen Szene gespeichert.
    nameProtagonist: "",
    // *** SCORE ***
    scoreEmpathyPoints: 0,
    EmpathyPointsSkala: "",
    scoreCouragePoints: 0,
    scoreKnowledgePoints: 0,
    tunnelFailed: 0,
    pickedBoat: false,
    // so geht nicht! muss die einzeln aufschreiben und nicht als Objekt scoreEmpathyPoints: 20 usw. und dann wo ichs aufruf ändern (ohne score)

    // *** RIGHT OPTION PICKED ***
    pickedRightChoice: false,
    pickedRightChoiceMirror: false,

    // *** IMPORTANT CHOICES ***
    pickedIron: false,
    pickedSeeds: false,
    pickedChp05Seeds: false,
    pickedChp05Food: false,
    pickedChp05Cloak: false,
    pickedChp10SingToBirds: false,
    // pickedChp11Iron: false,

    // *** DELETE OPTION AFTER PICKED ***
    pickedChoice: false,
    pickedRiddle1: false,
    pickedRiddle2: false,
    pickedRiddle3: false,
    // pickediSayBlue: false,
    // pickediSayGreen: false,
    // pickediSayEyes: false,

    // Chapter 01 - Flower Merchant ***
    pickediAskAboutTrip: false,
    pickediAskAboutDecorations: false,

    // CHAPTER 01: PICKED ALL SCENES
    pickedChp01_E_FlowerMerchantScene: false, // FRAGE: wie einrichten, dass wenn alle mandatory scenes absolviert werden aber keine expore scenes, eine
    pickedChp01_E_LeatherMerchantScene: false,
    pickedChp01_ConvoMother: false,
    pickedChp01_MirrorMerchant: false,

    //  CHAPTER 02: PICKED ALL SCENES
    pickedChp02_Kitchen: false,
    pickedChp02_TestMirror: false,
    pickedChp02_TestWithKailani: false,
    pickedChp02_TestWithEvarius: false,
    pickedChp02_PickHerbsGarden: false,
    pickedChp02_FightNeighbor: false,
    pickedChp02MirrorScenesContinue: false,
    // // pickedChp02_E_DiscoverBedroom: false,
    // // pickedChp02_E_DiscoverKitchen: false,

    //  CHAPTER 03: PICKED ALL SCENES
    pickedChp03_Dressmaker: false,
    pickedChp03_ChoresWithKailani: false,
    pickedChp03_SearchGarden: false,
    pickedChp03_SearchKitchen: false,

    // CHAPTER 04: PICKED ALL SCENES
    pickedChp04TalkToFamily: false,
    pickedChp04ResearchLibrary: false,
    pickedChp04ExamineMirror: false,


    // CHAPTER 05: PICKED ALL SCENES
    pickedChp05Inner: false,
    pickedChp05Sick: false,
    pickedChp05Free: false,
    pickedChp05GoToClearing: false,
    pickedChp05GiveBirdsFood: false,
    pickedChp05SingToBirds: false,

    // CHAPTER 06: PICKED ALL SCENES
    pickedChp06Leave: false,
    pickedChp06Window: false,
    pickedChp06Villagers: false,
    pickedChp06TrustFlynn: false,

    // CHAPTER 07 PICKED ALL SCENES
    pickedChp07ResearchMarketplace: false,
    pickedChp07DiscoverMerchants: false,
    pickedChp07DiscoverSpeakToVillagers: false,
    pickedChp07TalkToInnkeeper: false,
    pickedChp07TalkToCook: false,
    pickedChp07TalkToStablehand: false,
    pickedChp07pickedColor: false,
    pickedChp07pickedGrey: false,
    pickedChp07pickedWhatHappened: false,
    pickedChp07CookpickedGhost: false,
    pickedChp07CookpickedColor: false,
    pickedChp07CookpickedPeople: false,
    pickedChp07CookpickedContinue: false,
    pickedChp07SpeakToBeggar: false,
    pickedChp07Continue: false,

    // CHAPTER 08: FACTORY
    // pickedChp08pickedBoat: false,
    pickedChp08ConvoContinue: false,
    pickedChp08Left: false,
    pickedChp08Right: false,
    pickedChp08HidingPlaceContinue: false,

    //CHAPTER 09
    pickedChp09InFactoryContinue: false,
    pickedChp09ScoutTowerBirds: false,

    //CHAPTER 10
    pickedChp10IntoTowerContinue: false,
    pickedChp10GoodEndingContinue1: false,
    pickedChp10GoodEndingContinue2: false,
    pickedChp10GoodEndingContinue3: false,
    pickedChp10SemiGoodEndingContinue1: false,
    pickedChp10SemiGoodEndingContinue2: false,
    pickedChp10SemiEndingContinue3: false,
    pickedChp10BadEndingContinue2: false

  };

  export let inventory = {
    apple: {
      name: "Apfel",
      description: "fruit",
      image: "./Assets/Items/apple.png",
      static: true // so wird es nicht konsumiert. wenn ich static ausklammere, kann ich drauf klicken und es ist weg
    }
  };

  // dataForSave.score;
  // dataForSave.nameProtagonist = await ƒS.Speech.getInput();

  export function showCredits(): void {
    ƒS.Text.setClass("class2"); // setclass = löscht vorherige Klasse und übergeht formatierungen davor (vorherige infos werden gelöscht und nur die setclass wird angezeigt). addclass fügt Klasse hinzu
    // (wenns vorher eine addclass gab, dann wird vorherige gestaltung nicht gelöscht. also alte formatierung von css option sehen wir noch) bei szenenwechsel können wir addclass nehmen.
    ƒS.Text.print(""); // hier credits rein schreiben, damit erscheint eine novelpage bzw eine Box, in der der text steht
  }

  //**** MENÜ ****/
  // Buttons
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  }; // volume noch dazu

  let gameMenu: ƒS.Menu; // später, wenn wir das menu erstellen, heißt das hier: wir erstellen es mit den und den buttons

  let menuIsOpen: boolean = true; // abfragen, ob menu offen (true) oder geschlossen (false) ist
  let inventoryIsOpen: boolean = false;

  // asynchrone Funktionen, 1x für button, 1x für eventlistener (für shortcuts)
  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option); // sicherheitshalber anzeigen lassen, damit man weiß, was passiert
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save(); // save und load Funktionen sind schon in Progress klasse definiert
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close(), (menuIsOpen = false); // false = geschlossen
        break;
      case inGameMenuButtons.credits:
        showCredits(); // dafür gibts noch keine Funktion, deshalb rot. die muss vorher definiert werden, 1 funktion machen, exportieren (damit sie verwendet werden kann),
    }
  }

  // Shortcuts fürs Menü (für Menübuttons)
  document.addEventListener("keydown", hndKeyPress); // weil: es gibt versch arten von events, die wir für jeweiligen listener verwenden können. bei window gibts andere zur verfügung als bei doc
  // unterschied keypress & keydown: down = gedrückt halten, press = drücke und loslassen
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    let ctrlPressed: boolean = ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.CTRL_LEFT, ƒ.KEYBOARD_CODE.CTRL_RIGHT]);
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.S: // hier kann man taste auswählen, achtung: amerikanisches keyboard hier!
        if (!ctrlPressed)
          break;
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.L:
        if (!ctrlPressed)
          break;
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M: //M steht für Menu
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
        } else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
      // INVENTORY MENU
      case ƒ.KEYBOARD_CODE.I:
        console.log("Inventory");
        if (inventoryIsOpen) {
          console.log("Inventory Close");
          ƒS.Inventory.close();
          inventoryIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
        } else {
          console.log("Inventory Open");
          ƒS.Inventory.open();
          inventoryIsOpen = true;
        }
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(
      inGameMenuButtons,
      buttonFunctionalities,
      "gameMenuCSSclass"
    );
    buttonFunctionalities("Close");

    let scenes: ƒS.Scenes = [
      // { scene: ScnTestzene01, name: "Testszene 01" }, // scene: hier muss name von funktion rein! Name ist was anderes, kann spaces enthalten wegen string
      
      
      // {
      //   id: "TestTunnel",scene: testTunnel,
      //   name: "TestTunnel"
      // },
      // {
      //   id: "Quiz_Wishtree",
      //   scene: quizWishtree,
      //   name: "Quiz_Wishtree"
      // },
      //   id: "Auswahlmöglichkeiten",
      //   scene: Auswahlmöglichkeiten,
      //   name: "Testszene 1",
      // },
      // {
      //   scene: MinigameDemon,
      //   name: "Scene Minigame",
      // },

      // *** INTRO ***
      // { id: "00 Name Entry", scene: Chp00_00_NameEntry, name: "NameEntry" },

      // ***CHAPTER 01 ***
      {id: "01_00 IntroNarration", scene: Chp01_00_IntroNarration, name: "Intro Narration"},
      {id: "01_01 Intro Marketplace", scene: Chp01_01_IntroMarketplace, name: "Intro marketplace"}, 
      {id: "01_E_FlowerMerchant", scene: Chp01_E_FlowerMerchant, name: "E_FlowerMerchant"},
      { id: "01_E_LeatherMerchant", scene: Chp01_E_LeatherMerchant, name: "E_LeatherMerchant" },
      {id: "01_02 Conversation Mama", scene: Chp01_02_ConvoMother, name: "ConvoMother" },
      {id: "01_03 MirrorMerchant", scene: Chp01_03_IntroMirror, name: "IntroMirror"},
      // *** CUTSCENES CHP01***
      {id: "01_CS PerchaseMirror", scene: Chp01_CS_PerchaseMirror, name: "CS: PerchaseMirror"},
      {id: "01_CS Arrival Home", scene: Chp01_CS_ArrivalHome, name: "CS: ArrivalHome"},

      // // // // ***CHAPTER 02: FAMILY HOME ***
      {id: "02_00 Arrival Home", scene: Chp02_00_ArrivalHome, name: "02_00 ArrivalHome"},
      {id: "02_01 Dinner at home", scene: Chp02_01_Dinner, name: "Dinner"},
      {id: "02_021 Test Mirror Kailani", scene: Chp02_021_TestMirrorK, name: "Test mirror"},
      {id: "02_021 Test Mirror Evarius", scene: Chp02_021_TestMirrorE, name: "Test mirror"},
      {id: "02_E Discover bedroom", scene: Chp02_E_DiscoverBedroom, name: "E_Bedroom"},
      {id: "02_03 Pick Herbs", scene: Chp02_03_PickHerbs, name: "Herbs Garden"},
      {id: "02_Kitchen", scene: Chp02_Kitchen, name: "Kitchen"},
      // // CUTSCENES ***
      

      // *** CHAPTER 03: VILLAGE ***
      {id: "03_00 New day", scene: Chp03_00_NewDay, name: " New Day" },
      // {id: "03_01 Dressmaker", scene: Chp03_01_Dressmaker, name: "Dressmaker"}, DELETE
      {id: "03_E Discover Forest", scene: Chp03_E_DiscoverForest, name: "E_Forest"},
      {id: "03_E Discover Library", scene: Chp03_E_DiscoverLibrary, name: "E_Library"},
      {id: "03_021 Chores with Kailani", scene: Chp03_021_ChoresWithKailani, name: "Chores Kailani" },
      {id: "03_CS Kailani is missing", scene: Chp03_CS_KailaniMissing, name: "CS: Kailani is missing"},
      // {id: "03_CS Turmoil marketplace", scene: Chp03_CS_TurmoilMarketplace, name: "CS: TurmoilMarketplace"}, DELETE 

      // // // *** CHAPTER 04 RESEARCH ***
      
      {id: "04_00_Research Options", scene: Chp04_00_ResearchOptions, name: "Research options"},
      {id: "04_01 Talk with family", scene: Chp04_01_TalkWithFamily, name: "Talk with family"},
      {id: "04_03 Research library", scene: Chp04_03_ResearchLibrary, name: "Research library"},
      {id: "04_E_Examine mirror", scene: Chp04_E_ExamineMirror, name: "Examine Mirror"},
      

      // // *** CHAPTER 05: FOREST
      {id: "04_CS Entry forest", scene: Chp04_CS_EntryForest, name: "Entry forest"},
      {id: "TextRiddle", scene: textRiddle, name: "TextRiddle"},
      {id: "05_02 Convo Tree", scene: Chp05_02_ConvoTree, name: "Convo tree"},
      {id: "05_ConvoMother", scene: Chp05_ConvoMother, name: "ConvoMother"},

      // // // *** CHAPTER 06: WHARY

      {id: "06_CS Arrival Meadow", scene: Chp06_CS_ArrivalMeadow, name: "Arrival meadow"},
      {id: "06_In Whary", scene: Chp06_InWhary, name: "In Whary"},
      // {id: "06_ClothingStore", scene: Chp06_ClothingStore, name: "In Whary"},
      {id: "06_Inn", scene: Chp06_Inn, name: "Inn"},
      {id: "06_new day", scene: Chp06_NewDay, name: "New day"},

      // // // // *** CHAPTER 07:
      {id: "07_Research Marketplace", scene: Chp07_ResearchMarketplace, name: "Research Marketplace"},
      {id: "07_Beggar", scene: Chp07_Beggar, name: "Beggar scene"},
      {id: "07_TalkToInnkeeper", scene: Chp07_TalkToInnkeeper, name: "Talk to innkeeper"},
      {id: "07_TalkToCook", scene: Chp07_TalkToCook, name: "Talk to cook"},
      
      // // *** CHAPTER 10: CROSSING LAKE ***
      {id: "08_Arrival lake", scene: Chp08_ArrivalLake, name: "Arrival at lake"},
      {id: "08_ImageRiddle", scene: Chp07_ImageRiddle, name: "ImageRiddle", next: "08_OnLake"},
      {id: "08_OnLake", scene: Chp08_OnLake, name: "On lake"},
      {id: "08_Arrival other side", scene: Chp08_ArrivalOtherSide, name: "Arrival other side"},
      {id: "08_Search hiding place", scene: Chp08_SearchHidingPlace, name: "Search for hiding place"},
  
      // // *** CHAPTER 12: ENTRY FACTORY
    
      {id: "09_Enter factory", scene: Chp09_EnterFactory, name: "Enter factory"},
      {id: "09_In Factory", scene: Chp09_InFactory, name: "In Factory"},
      {id: "09_Scout Tower", scene: Chp09_ScoutTower, name: "Scout Tower"},

      // // *** CHAPTER 10: THE GREAT ORDEAL ***
      // {id: "13_01 Entry village", scene: Chp13_01_EntryVillage, name: "Entry village"},
      // {id: "13_02 Get into tower", scene: Chp13_02_GetIntoTower, name: "Go to tower"},
      // {id: "13_03 Entry tower", scene: Chp13_03_EntryTower, name: "Entry tower"},
      

      // // *** CHAPTER 10 Endings
      {id: "10_IntoTower", scene: Chp10_IntoTower, name: "Destroy mirror"},
      {id: "10_MinigameDemon", scene: Chp10_MinigameDemon, name: "Destroy mirror"},
      {id: "Good Ending", scene: GoodEnding, name: "Good Ending"},
      {id: "Semi Good Ending", scene: SemiGoodEnding, name: "Semi good ending"},
      {id: "Bad Ending", scene: BadEnding, name: "Bad Ending"},
      {id: "End", scene: End, name: "End"},
      {id: "Empty scene", scene: EmptyScene, name: "Empty scene"}
      
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
