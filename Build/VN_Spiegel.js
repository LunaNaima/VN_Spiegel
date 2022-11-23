"use strict";
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.ƒ = FudgeCore; //importiert teile, die nicht in typescript sind, sondern außerhalb in fudge
    Spiegel_VN.ƒS = FudgeStory;
    // *** DATA THAT WILL BE SAVED ***
    Spiegel_VN.dataForSave = {
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
        pickedChp01_E_FlowerMerchantScene: false,
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
        pickedChp10SemiGoodEndingContinue1: false,
        pickedChp10SemiGoodEndingContinue2: false,
        pickedChp10BadEndingContinue2: false
    };
    Spiegel_VN.inventory = {
        apple: {
            name: "Apfel",
            description: "fruit",
            image: "./Assets/Items/apple.png",
            static: true // so wird es nicht konsumiert. wenn ich static ausklammere, kann ich drauf klicken und es ist weg
        }
    };
    // dataForSave.score;
    // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    function showCredits() {
        Spiegel_VN.ƒS.Text.setClass("class2"); // setclass = löscht vorherige Klasse und übergeht formatierungen davor (vorherige infos werden gelöscht und nur die setclass wird angezeigt). addclass fügt Klasse hinzu
        // (wenns vorher eine addclass gab, dann wird vorherige gestaltung nicht gelöscht. also alte formatierung von css option sehen wir noch) bei szenenwechsel können wir addclass nehmen.
        Spiegel_VN.ƒS.Text.print(""); // hier credits rein schreiben, damit erscheint eine novelpage bzw eine Box, in der der text steht
    }
    Spiegel_VN.showCredits = showCredits;
    //**** MENÜ ****/
    // Buttons
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    }; // volume noch dazu
    let gameMenu; // später, wenn wir das menu erstellen, heißt das hier: wir erstellen es mit den und den buttons
    let menuIsOpen = true; // abfragen, ob menu offen (true) oder geschlossen (false) ist
    let inventoryIsOpen = false;
    // asynchrone Funktionen, 1x für button, 1x für eventlistener (für shortcuts)
    async function buttonFunctionalities(_option) {
        console.log(_option); // sicherheitshalber anzeigen lassen, damit man weiß, was passiert
        switch (_option) {
            case inGameMenuButtons.save:
                await Spiegel_VN.ƒS.Progress.save(); // save und load Funktionen sind schon in Progress klasse definiert
                break;
            case inGameMenuButtons.load:
                await Spiegel_VN.ƒS.Progress.load();
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
    async function hndKeyPress(_event) {
        let ctrlPressed = Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.CTRL_LEFT, Spiegel_VN.ƒ.KEYBOARD_CODE.CTRL_RIGHT]);
        switch (_event.code) {
            case Spiegel_VN.ƒ.KEYBOARD_CODE.S: // hier kann man taste auswählen, achtung: amerikanisches keyboard hier!
                if (!ctrlPressed)
                    break;
                console.log("Save");
                await Spiegel_VN.ƒS.Progress.save();
                break;
            case Spiegel_VN.ƒ.KEYBOARD_CODE.L:
                if (!ctrlPressed)
                    break;
                console.log("Load");
                await Spiegel_VN.ƒS.Progress.load();
                break;
            case Spiegel_VN.ƒ.KEYBOARD_CODE.M: //M steht für Menu
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            // INVENTORY MENU
            case Spiegel_VN.ƒ.KEYBOARD_CODE.I:
                console.log("Inventory");
                if (inventoryIsOpen) {
                    console.log("Inventory Close");
                    Spiegel_VN.ƒS.Inventory.close();
                    inventoryIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
                }
                else {
                    console.log("Inventory Open");
                    Spiegel_VN.ƒS.Inventory.open();
                    inventoryIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Spiegel_VN.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
        buttonFunctionalities("Close");
        let scenes = [
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
            { id: "01_00 IntroNarration", scene: Spiegel_VN.Chp01_00_IntroNarration, name: "Intro Narration" },
            { id: "01_01 Intro Marketplace", scene: Spiegel_VN.Chp01_01_IntroMarketplace, name: "Intro marketplace" },
            { id: "01_E_FlowerMerchant", scene: Spiegel_VN.Chp01_E_FlowerMerchant, name: "E_FlowerMerchant" },
            { id: "01_E_LeatherMerchant", scene: Spiegel_VN.Chp01_E_LeatherMerchant, name: "E_LeatherMerchant" },
            { id: "01_02 Conversation Mama", scene: Spiegel_VN.Chp01_02_ConvoMother, name: "ConvoMother" },
            { id: "01_03 MirrorMerchant", scene: Spiegel_VN.Chp01_03_IntroMirror, name: "IntroMirror" },
            // *** CUTSCENES CHP01***
            { id: "01_CS PerchaseMirror", scene: Spiegel_VN.Chp01_CS_PerchaseMirror, name: "CS: PerchaseMirror" },
            { id: "01_CS Arrival Home", scene: Spiegel_VN.Chp01_CS_ArrivalHome, name: "CS: ArrivalHome" },
            // // // // ***CHAPTER 02: FAMILY HOME ***
            { id: "02_00 Arrival Home", scene: Spiegel_VN.Chp02_00_ArrivalHome, name: "02_00 ArrivalHome" },
            { id: "02_01 Dinner at home", scene: Spiegel_VN.Chp02_01_Dinner, name: "Dinner" },
            { id: "02_021 Test Mirror Kailani", scene: Spiegel_VN.Chp02_021_TestMirrorK, name: "Test mirror" },
            { id: "02_021 Test Mirror Evarius", scene: Spiegel_VN.Chp02_021_TestMirrorE, name: "Test mirror" },
            { id: "02_E Discover bedroom", scene: Spiegel_VN.Chp02_E_DiscoverBedroom, name: "E_Bedroom" },
            { id: "02_03 Pick Herbs", scene: Spiegel_VN.Chp02_03_PickHerbs, name: "Herbs Garden" },
            { id: "02_Kitchen", scene: Spiegel_VN.Chp02_Kitchen, name: "Kitchen" },
            // // CUTSCENES ***
            // *** CHAPTER 03: VILLAGE ***
            { id: "03_00 New day", scene: Spiegel_VN.Chp03_00_NewDay, name: " New Day" },
            // {id: "03_01 Dressmaker", scene: Chp03_01_Dressmaker, name: "Dressmaker"}, DELETE
            { id: "03_E Discover Forest", scene: Spiegel_VN.Chp03_E_DiscoverForest, name: "E_Forest" },
            { id: "03_E Discover Library", scene: Spiegel_VN.Chp03_E_DiscoverLibrary, name: "E_Library" },
            { id: "03_021 Chores with Kailani", scene: Spiegel_VN.Chp03_021_ChoresWithKailani, name: "Chores Kailani" },
            { id: "03_CS Kailani is missing", scene: Spiegel_VN.Chp03_CS_KailaniMissing, name: "CS: Kailani is missing" },
            // {id: "03_CS Turmoil marketplace", scene: Chp03_CS_TurmoilMarketplace, name: "CS: TurmoilMarketplace"}, DELETE 
            // // // *** CHAPTER 04 RESEARCH ***
            { id: "04_00_Research Options", scene: Spiegel_VN.Chp04_00_ResearchOptions, name: "Research options" },
            { id: "04_01 Talk with family", scene: Spiegel_VN.Chp04_01_TalkWithFamily, name: "Talk with family" },
            { id: "04_03 Research library", scene: Spiegel_VN.Chp04_03_ResearchLibrary, name: "Research library" },
            { id: "04_E_Examine mirror", scene: Spiegel_VN.Chp04_E_ExamineMirror, name: "Examine Mirror" },
            // // *** CHAPTER 05: FOREST
            { id: "04_CS Entry forest", scene: Spiegel_VN.Chp04_CS_EntryForest, name: "Entry forest" },
            { id: "TextRiddle", scene: Spiegel_VN.textRiddle, name: "TextRiddle" },
            { id: "05_02 Convo Tree", scene: Spiegel_VN.Chp05_02_ConvoTree, name: "Convo tree" },
            { id: "05_ConvoMother", scene: Spiegel_VN.Chp05_ConvoMother, name: "ConvoMother" },
            // // // *** CHAPTER 06: WHARY
            { id: "06_CS Arrival Meadow", scene: Spiegel_VN.Chp06_CS_ArrivalMeadow, name: "Arrival meadow" },
            { id: "06_In Whary", scene: Spiegel_VN.Chp06_InWhary, name: "In Whary" },
            // {id: "06_ClothingStore", scene: Chp06_ClothingStore, name: "In Whary"},
            { id: "06_Inn", scene: Spiegel_VN.Chp06_Inn, name: "Inn" },
            { id: "06_new day", scene: Spiegel_VN.Chp06_NewDay, name: "New day" },
            // // // // *** CHAPTER 07:
            { id: "07_Research Marketplace", scene: Spiegel_VN.Chp07_ResearchMarketplace, name: "Research Marketplace" },
            { id: "07_Beggar", scene: Spiegel_VN.Chp07_Beggar, name: "Beggar scene" },
            { id: "07_TalkToInnkeeper", scene: Spiegel_VN.Chp07_TalkToInnkeeper, name: "Talk to innkeeper" },
            { id: "07_TalkToCook", scene: Spiegel_VN.Chp07_TalkToCook, name: "Talk to cook" },
            // // *** CHAPTER 10: CROSSING LAKE ***
            { id: "08_Arrival lake", scene: Spiegel_VN.Chp08_ArrivalLake, name: "Arrival at lake" },
            { id: "08_ImageRiddle", scene: Spiegel_VN.Chp07_ImageRiddle, name: "ImageRiddle", next: "08_OnLake" },
            { id: "08_OnLake", scene: Spiegel_VN.Chp08_OnLake, name: "On lake" },
            { id: "08_Arrival other side", scene: Spiegel_VN.Chp08_ArrivalOtherSide, name: "Arrival other side" },
            { id: "08_Search hiding place", scene: Spiegel_VN.Chp08_SearchHidingPlace, name: "Search for hiding place" },
            // // *** CHAPTER 12: ENTRY FACTORY
            { id: "09_Enter factory", scene: Spiegel_VN.Chp09_EnterFactory, name: "Enter factory" },
            { id: "09_In Factory", scene: Spiegel_VN.Chp09_InFactory, name: "In Factory" },
            { id: "09_Scout Tower", scene: Spiegel_VN.Chp09_ScoutTower, name: "Scout Tower" },
            // // *** CHAPTER 10: THE GREAT ORDEAL ***
            // {id: "13_01 Entry village", scene: Chp13_01_EntryVillage, name: "Entry village"},
            // {id: "13_02 Get into tower", scene: Chp13_02_GetIntoTower, name: "Go to tower"},
            // {id: "13_03 Entry tower", scene: Chp13_03_EntryTower, name: "Entry tower"},
            // // *** CHAPTER 10 Endings
            { id: "10_IntoTower", scene: Spiegel_VN.Chp10_IntoTower, name: "Destroy mirror" },
            { id: "10_MinigameDemon", scene: Spiegel_VN.Chp10_MinigameDemon, name: "Destroy mirror" },
            { id: "Good Ending", scene: Spiegel_VN.GoodEnding, name: "Good Ending" },
            { id: "Semi Good Ending", scene: Spiegel_VN.SemiGoodEnding, name: "Semi good ending" },
            { id: "Bad Ending", scene: Spiegel_VN.BadEnding, name: "Bad Ending" },
            { id: "End", scene: Spiegel_VN.End, name: "End" },
            { id: "Empty scene", scene: Spiegel_VN.EmptyScene, name: "Empty scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Spiegel_VN.dataForSave = Spiegel_VN.ƒS.Progress.setData(Spiegel_VN.dataForSave, uiElement);
        // start the sequence
        Spiegel_VN.ƒS.Progress.go(scenes);
    }
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    // Punktesystem
    Spiegel_VN.minPoints = 0;
    Spiegel_VN.maxPoints = 100;
    Spiegel_VN.points = 0;
    async function UpdateBar() {
        let progressbar = document.getElementById("sanity");
        progressbar.style.width = Spiegel_VN.points + "%";
        if (Spiegel_VN.points >= 85) {
            progressbar.style.backgroundColor = "red";
        }
        else if (Spiegel_VN.points < 85 && Spiegel_VN.points > 60) {
            progressbar.style.backgroundColor = "yellow";
        }
        else {
            progressbar.style.backgroundColor = "green";
        }
    }
    Spiegel_VN.UpdateBar = UpdateBar;
    function DisplaySanityBar(show) {
        let progressbar = document.getElementById("sanityContainer");
        if (!show) {
            progressbar.style.display = "none";
        }
        else {
            progressbar.style.display = "inline-block";
        }
    }
    Spiegel_VN.DisplaySanityBar = DisplaySanityBar;
    function SetPoints(num) {
        Spiegel_VN.points = num;
        UpdateBar();
    }
    Spiegel_VN.SetPoints = SetPoints;
    function AddPoints(num) {
        if (Spiegel_VN.points < Spiegel_VN.maxPoints) {
            Spiegel_VN.points += num;
        }
        // ƒS.Sound.play(sound.sanity, 0.025, false);
        UpdateBar();
    }
    Spiegel_VN.AddPoints = AddPoints;
    function SubPoints(num) {
        if (Spiegel_VN.points > 0) {
            Spiegel_VN.points -= num;
        }
        UpdateBar();
    }
    Spiegel_VN.SubPoints = SubPoints;
    function GetPoints() {
        return Spiegel_VN.points;
    }
    Spiegel_VN.GetPoints = GetPoints;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        // let text = {
        //   Narrator: {
        //     T0001: "", //Text Nr. 1
        //     T0002: "",
        //   },
        //   Protagonistin: {
        //     T0000: "Was geht",
        //     T0001: "Funktioniert das?",
        //     T0002: "Ich hoffe doch!",
        //   },
        // };
        // ƒS.Sound.play(sound.click, 1); //bei volume: zwischen 0-1, bisschen mehr als 1 ist schon zu laut. Loopen geht auch, loop = true (dann loopts sichs)
        // ƒS.Sound.fade(sound.click, 1, 2); // 1 ist das max, also bis hier hin wird der sound steigen. 2 = duration. true bezieht sich auf loop. sound wird einmal gefadet, bleibt dann konstant laut
        // await ƒS.Location.show(locations.nighttime_sil); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        // await ƒS.update(
        //   transition.puzzle.duration,
        //   transition.puzzle.alpha,
        //   transition.puzzle.edge //edge ist der Härtegrad
        // );
        // await ƒS.Character.show(
        //   characters.Mama,
        //   characters.Mama.pose.angry, // pose muss in der main sein
        //   ƒS.positions.bottomcenter //bei positions: gibts die normalen angaben (topleft ..) bei positionpercentage: gebe ich koordinaten an in pixel 70 in x und 100 in y
        //   // ƒS.positionPercent(70,100)
        // ); //char anzeigen lassen. immer im hover schauen, was ich angeben muss!
        // ƒS.Character.hideAll(); //hier muss man nichts angeben. danach machts sinn, nen fade rein zu tun, damit die char ausgefadet werden
        // // ƒS.Character.hide(characters.Mama)
        // await ƒS.Speech.tell(characters.Mama, text.Protagonistin.T0001); //class für Speech, wait for signal oder await heißt: wir warten auf Nutzerinteraktion,
        // //ist optional. wenn text automatisch weitergehen soll: mit true oder false angeben
        // ƒS.Speech.clear(); // hier wird text aus dem feld gelöscht
        // await ƒS.update(3); // dann kommt text 3 sek später
        // await ƒS.Speech.tell(characters.Mama, text.Protagonistin.T0002);
        // await ƒS.Speech.tell(characters.Mama, "Neuer Text.");
        // ƒS.Speech.hide(); // das textfeld wird ausgeblendet
        // await ƒS.update();
        // ƒS.Sound.fade(sound.click, 1, 2); //hier ausfaden
        // let firstDialogueElementAnswers = {
        //   //fightbetweenMamaundMutti  normalerweise sinnvolle namen verwendet, damit ich weiß, was für welche entscheidung steht
        //   iSayOk: "Okay.",
        //   iSayYes: "Ja.",
        //   iSayNo: "Nein.", // mit ich-perspektive vom spieler ausgehen. diese antwortmöglichkeiten stehen der spielerin zur verfügung, ich nehm "isay" damit ich weiß, dass spielerin spricht
        // };
        // let firstDialogueElement = await ƒS.Menu.getInput(
        //   firstDialogueElementAnswers,
        //   "individualCSSclass"
        // ); // wir weisen input element zu. await bedeutet: wir warten, bis nutzer interagiert
        // switch (
        //   firstDialogueElement // zu welchem case soll es hinswitchen, je nach getroffener option
        // ) {
        //   case firstDialogueElementAnswers.iSayOk:
        //     // continue path here
        //     await ƒS.Speech.tell(characters.Mama, "Hi");
        //     ƒS.Speech.clear(); // das gesprochene oder auch char hier clearen
        //     break;
        //   case firstDialogueElementAnswers.iSayYes:
        //     // continue here
        //     await ƒS.Character.show(
        //       characters.Mama,
        //       characters.Mama.pose.angry,
        //       ƒS.positions.bottomcenter
        //     );
        //     break;
        //   case firstDialogueElementAnswers.iSayNo:
        //     await ƒS.Character.show(
        //       characters.Mutti,
        //       characters.Mutti.pose.angry,
        //       ƒS.positionPercent(70, 100)
        //     );
        // }
    }
    Spiegel_VN.Scene = Scene;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.characters = {
        // hier sollten alle char rein // char in richtiger größe!
        maincharacter: {
            name: "Du"
        },
        narrator: {
            name: "Erzählerin"
        },
        wishtree: {
            name: "Baum der Wünsche"
        },
        Mama: {
            name: "Mama",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                dress_34_neutral: "Assets/Characters/Leijla/Leijla_dress_34_neutral1.png",
                dress_34_angry: "Assets/Characters/Leijla/Leijla_dress_34_angry.png",
                dress_34_smile: "Assets/Characters/Leijla/Leijla_dress_34_smile.png",
                //
                dress_angry: "Assets/Characters/Leijla/Leijla_dress_angry.png",
                dress_laugh: "Assets/Characters/Leijla/Leijla_dress_laugh.png",
                dress_neutral: "Assets/Characters/Leijla/Leijla_dress_neutral.png",
                dress_shocked: "Assets/Characters/Leijla/Leijla_dress_shocked.png",
                //
                pants1_34_angry: "Assets/Characters/Leijla/Leijla_pants1_34_angry.png",
                pants1_34_neutral: "Assets/Characters/Leijla/Leijla_pants1_34_neutral.png",
                pants1_34_smile: "Assets/Characters/Leijla/Leijla_pants1_34_smile.png",
                //
                pants1_laugh: "Assets/Characters/Leijla/Leijla_pants1_laugh.png",
                pants1_neutral: "Assets/Characters/Leijla/Leijla_pants1_neutral.png",
                pants1_shocked: "Assets/Characters/Leijla/Leijla_Pants1_shocked.png",
                //
                pants2_angry: "Assets/Characters/Leijla/Leijla_pants2_angry.png",
                pants2_laugh: "Assets/Characters/Leijla/Leijla_pants2_laugh.png",
                pants2_neutral: "Assets/Characters/Leijla/Leijla_pants2_neutral.png",
                pants2_shocked: "Assets/Characters/Leijla/Leijla_pants2_shocked.png",
                //
                pants2_angry2: "Assets/Characters/Leijla/Leijla_pants2_angry2.png",
                pants2_laugh2: "Assets/Characters/Leijla/Leijla_pants2_laugh2.png",
                pants2_neutral2: "Assets/Characters/Leijla/Leijla_pants2_neutral2.png",
                pants2_shocked2: "Assets/Characters/Leijla/Leijla_pants2_shocked2.png",
                //
                pants2_hand_angry: "Assets/Characters/Leijla/Leijla_pants2_hand_angry.png",
                pants2_hand_laugh: "Assets/Characters/Leijla/Leijla_pants2_hand_laugh.png",
                pants2_hand_neutral: "Assets/Characters/Leijla/Leijla_pants2_hand_neutral.png",
                pants2_hand_shocked: "Assets/Characters/Leijla/Leijla_pants2_hand_shocked.png"
            }
        },
        Mutti: {
            name: "Mutti",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                dress1_basket_frown: "Assets/Characters/Elena/Elena_Dress1_frown.png",
                dress1_basket_laugh: "Assets/Characters/Elena/Elena_Dress1_laugh.png",
                dress1_basket_neutral: "Assets/Characters/Elena/Elena_Dress1_neutral.png",
                dress1_basket_smile: "Assets/Characters/Elena/Elena_Dress1_smile.png",
                dress1_basket_smirk: "Assets/Characters/Elena/Elena_Dress1_smirk.png",
                //
                dress2_basket_laugh: "Assets/Characters/Elena/Elena_Dress2_laugh.png",
                dress2_basket_neutral: "Assets/Characters/Elena/Elena_Dress2_neutral.png",
                dress2_basket_smile: "Assets/Characters/Elena/Elena_Dress2_smile.png",
                dress2_basket_smirk: "Assets/Characters/Elena/Elena_Dress2_smirk.png",
                dress2_basket_frown: "Assets/Characters/Elena/Elena_Dress2_frown.png",
                //
                dress3_frown: "Assets/Characters/Elena/Elena_Dress3_frown.png",
                dress3_laugh: "Assets/Characters/Elena/Elena_Dress3_laugh.png",
                dress3_neutral: "Assets/Characters/Elena/Elena_Dress3_neutral.png",
                dress3_smile: "Assets/Characters/Elena/Elena_Dress3_smile.png",
                dress3_smirk: "Assets/Characters/Elena/Elena_Dress3_smirk.png",
                //
                dress4_laugh: "Assets/Characters/Elena/Elena_Dress4_laugh.png",
                dress4_neutral: "Assets/Characters/Elena/Elena_Dress4_neutral.png",
                dress4_frown: "Assets/Characters/Elena/Elena_Dress4_frown.png",
                dress4_smile: "Assets/Characters/Elena/Elena_Dress4_smile.png",
                dress4_smirk: "Assets/Characters/Elena/Elena_Dress4_smirk.png",
                //
                dress5_frown: "Assets/Characters/Elena/Elena_Dress5_frown.png",
                dress5_laugh: "Assets/Characters/Elena/Elena_Dress5_laugh.png",
                dress5_neutral: "Assets/Characters/Elena/Elena_Dress5_neutral.png",
                dress5_smile: "Assets/Characters/Elena/Elena_Dress5_smile.png",
                dress5_smirk: "Assets/Characters/Elena/Elena_Dress5_smirk.png",
                //
                dress6_frown: "Assets/Characters/Elena/Elena_Dress6_frown.png",
                dress6_laugh: "Assets/Characters/Elena/Elena_Dress6_laugh.png",
                dress6_neutral: "Assets/Characters/Elena/Elena_Dress6_neutral.png",
                dress6_smile: "Assets/Characters/Elena/Elena_Dress6_smile.png",
                dress6_smirk: "Assets/Characters/Elena/Elena_Dress6_smirk.png",
                //
                dress7_frown: "Assets/Characters/Elena/Elena_Dress7_frown.png",
                dress7_laugh: "Assets/Characters/Elena/Elena_Dress7_laugh.png",
                dress7_neutral: "Assets/Characters/Elena/Elena_Dress7_neutral.png",
                dress7_smile: "Assets/Characters/Elena/Elena_Dress7_smile.png",
                dress7_smirk: "Assets/Characters/Elena/Elena_Dress7_smirk.png"
            }
        },
        Kailani: {
            name: "Kailani",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                // Outfit 1
                outfit1_annoyed_angry: ".Assets/Characters/Kailani/Outfit1/Kailani_annoyed_angry.png",
                outfit1_annoyed_eyeroll: ".Assets/Characters/Kailani/Outfit1/Kailani_annoyed_eyeroll.png",
                outfit1_back_smile: ".Assets/Characters/Kailani/Outfit1/Kailani_back_smile.png",
                outfit1_back_worried: ".Assets/Characters/Kailani/Outfit1/Kailani_back_worried.png",
                outfit1_begging_eyeroll: ".Assets/Characters/Kailani/Outfit1/Kailani_begging_eyeroll.png",
                outfit1_begging_shrug: ".Assets/Characters/Kailani/Outfit1/Kailani_begging_shrug.png",
                outfit1_crossed_angry: ".Assets/Characters/Kailani/Outfit1/Kailani_crossed_angry.png",
                outfit1_crossed_eyeroll: ".Assets/Characters/Kailani/Outfit1/Kailani_crossed_eyeroll.png",
                outfit1_crossed_neutral: ".Assets/Characters/Kailani/Outfit1/Kailani_crossed_neutral.png",
                outfit1_neutral_angry: ".Assets/Characters/Kailani/Outfit1/Kailani_neutral_angry.png",
                outfit1_neutral_eyeroll: ".Assets/Characters/Kailani/Outfit1/Kailani_neutral_eyeroll.png",
                outfit1_neutral_happy: ".Assets/Characters/Kailani/Outfit1/Kailani_neutral_happy.png",
                outfit1_neutral_neutral: ".Assets/Characters/Kailani/Outfit1/Kailani_neutral_neutral.png",
                outfit1_neutral_smile: ".Assets/Characters/Kailani/Outfit1/Kailani_neutral_smile.png",
                outfit1_profile_h_neutral: ".Assets/Characters/Kailani/Outfit1/Kailani_profile_holding_neutral.png",
                outfit1_profile_h_smile: ".Assets/Characters/Kailani/Outfit1/Kailani_profile_holding_smile.png",
                outfit1_profile_neutral: ".Assets/Characters/Kailani/Outfit1/Kailani_profile_neutral.png",
                outfit1_profile_smile: ".Assets/Characters/Kailani/Outfit1/Kailani_profile_smile.png",
                outfit1_shrug_eyeroll: ".Assets/Characters/Kailani/Outfit1/Kailani_shrug_eyeroll.png",
                outfit1_shrug_happy: ".Assets/Characters/Kailani/Outfit1/Kailani_shrug_happy.png",
                outfit1_shrug_shrug: ".Assets/Characters/Kailani/Outfit1/Kailani_shrug_shrug.png",
                outfit1_thinking_angry: ".Assets/Characters/Kailani/Outfit1/Kailani_thinking_angry.png",
                outfit1_thinking_neutral: ".Assets/Characters/Kailani/Outfit1/Kailani_thinking_neutral.png",
                outfit1_thinking_shrug: ".Assets/Characters/Kailani/Outfit1/Kailani_thinking_shrug.png",
                // Outfit 2
                outfit2_dress_back_neutral: ".Assets/Characters/Kailani/Outfit2/Kailani_back_dress_neutral.png",
                outfit2_dress_back_smile: ".Assets/Characters/Kailani/Outfit2/Kailani_back_dress_smile.png",
                outfit2_dress1_angry: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_I_angry.png",
                outfit2_dress1_eyeroll: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_I_eyeroll.png",
                outfit2_dress1_happy: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_I_happy.png",
                outfit2_dress1_shrug: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_I_shrug.png",
                outfit2_dress1_smile: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_I_smile.png",
                outfit2_dress2_smile: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_II_angry.png",
                outfit2_dress2_eyeroll: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_II_eyeroll.png",
                outfit2_dress3_angry: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_III_angry.png",
                outfit2_dress3_eyeroll: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_III_eyeroll.png",
                outfit2_dress3_happy: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_III_happy.png",
                outfit2_dress3_shrug: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_III_shrug.png",
                outfit2_dress3_smile: ".Assets/Characters/Kailani/Outfit2/Kailani_dress_III_smile.png",
                // Grey Outfits
                grey_slave: ".Assets/Characters/Kailani/Outfit3/Kailani_greydress2.png",
                grey_shrug_eyeroll: ".Assets/Characters/Kailani/Outfit1/Kailani_crossed_eyeroll_grey.png",
                grey_neutral_angry: ".Assets/Characters/Kailani/Outfit1/Kailani_neutral_angry_grey.png",
                grey_neutral_smile: ".Assets/Characters/Kailani/Outfit1/Kailani_neutral_angry_grey.png",
                grey_crossed_angry: ".Assets/Characters/Kailani/Outfit1/grey_Kailani_crossed_angry.png",
                grey_neutral_happy: ".Assets/Characters/Kailani/Outfit1/grey_Kailani_neutral_happy.png"
            }
        },
        Evarius: {
            name: "Evarius",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                // Position 1
                pos1_angry: ".Assets/Characters/Evarius/Ev_Pos1_angry.png",
                pos1_frown: ".Assets/Characters/Evarius/Ev_Pos1_frown.png",
                pos1_laugh: ".Assets/Characters/Evarius/Ev_Pos1_laugh.png",
                pos1_neutral: ".Assets/Characters/Evarius/Ev_Pos1_neutral.png",
                pos1_smile: ".Assets/Characters/Evarius/Ev_Pos1_smile.png",
                // Position 2
                pos2_angry: ".Assets/Characters/Evarius/Ev_Pos2_angry.png",
                pos2_frown: ".Assets/Characters/Evarius/Ev_Pos2_frown.png",
                pos2_laugh: ".Assets/Characters/Evarius/Ev_Pos2_laugh.png",
                pos2_neutral: ".Assets/Characters/Evarius/Ev_Pos2_neutral.png",
                pos2_smile: ".Assets/Characters/Evarius/Ev_Pos2_smile.png",
                // Position 3
                pos3_angry: ".Assets/Characters/Evarius/Ev_Pos3_angry.png",
                pos3_frown: ".Assets/Characters/Evarius/Ev_Pos3_frown.png",
                pos3_laugh: ".Assets/Characters/Evarius/Ev_Pos3_laugh.png",
                pos3_neutral: ".Assets/Characters/Evarius/Ev_Pos3_neutral.png",
                // Profile
                profile_neutral: ".Assets/Characters/Evarius/Ev_Profile_neutral.png",
                profile_smile: ".Assets/Characters/Evarius/Ev_Profile_smile.png"
            }
        },
        Flynn: {
            name: "Flynn",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                // Outfit 1
                pos1_angry: ".Assets/Characters/Flynn/Outfit1/Flynn_light_angry.png",
                pos1_happy: ".Assets/Characters/Flynn/Outfit1/Flynn_light_happy.png",
                pos1_neutral: ".Assets/Characters/Flynn/Outfit1/Flynn_light_neutral.png",
                pos1_smile: ".Assets/Characters/Flynn/Outfit1/Flynn_light_smile.png",
                pos1_smile2: ".Assets/Characters/Flynn/Outfit1/Flynn_light_smileII.png",
                pos2_happy2: ".Assets/Characters/Flynn/Outfit1/Flynn_light_hand_happy_II.png",
                pos2_neutral: ".Assets/Characters/Flynn/Outfit1/Flynn_light_hand_neutral.png",
                pos2_neutral2: ".Assets/Characters/Flynn/Outfit1/Flynn_light_hand_neutral_II.png",
                pos2_uncertain2: ".Assets/Characters/Flynn/Outfit1/Flynn_light_hand_uncertain_II.png",
                pos3_angry: ".Assets/Characters/Flynn/Outfit1/Flynn_light_right_angry.png",
                pos3_happy: ".Assets/Characters/Flynn/Outfit1/Flynn_light_right_happy.png",
                pos3_smile: ".Assets/Characters/Flynn/Outfit1/Flynn_light_right_smile.png",
                // Outfit 2
                pos1_confused: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_confused.png",
                pos1_sad: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_confused_sad.png",
                pos2_crossed_angry: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_angry.png",
                pos2_crossed_neutral: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_neutral.png",
                pos2_crossed_neutral2: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_neutral_II.png",
                pos2_crossed_sad: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_sad.png",
                pos2_crossed_shocked: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_shocked.png",
                pos2_crossed_shocked2: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_shocked_II.png",
                pos2_crossed_smile: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_smile.png",
                pos2_crossed_smile2: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_smile_II.png",
                pos2_crossed_uncertain: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_uncertain.png",
                pos3_arms_smile: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_smile.png",
                pos3_arms_happy: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_neutral_happy.png",
                pos3_arms2_angry: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_uncertain_angry.png",
                pos3_arms2_sad: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_uncertain_sad.png",
                pos3_arms2_smile: ".Assets/Characters/Flynn/Outfit2/Flynn_blue_uncertain_smile.png",
                // W/O outfit
                wo_angry: ".Assets/Characters/Flynn/Outfit3/Flynn_wo_angry.png",
                wo_happy: ".Assets/Characters/Flynn/Outfit3/Flynn_wo_happy.png",
                wo_I_skeptical: ".Assets/Characters/Flynn/Outfit3/Flynn_wo_I_skeptical.png",
                wo_II_skeptical: ".Assets/Characters/Flynn/Outfit3/Flynn_wo_II_sad.png",
                wo_shocked: ".Assets/Characters/Flynn/Outfit3/Flynn_wo_shocked.png",
                // Grey outfit
                grey_wo_skeptical: ".Assets/Characters/Flynn/Outfit3/Flynn_wo_skeptical.png",
                grey_wo_angry: ".Assets/Characters/Flynn/Outfit3/grey_wo_angry.png",
                grey_wo_I_skeptical: ".Assets/Characters/Flynn/Outfit3/grey_wo_I_skeptical.png",
                grey_wo_II_skeptical: ".Assets/Characters/Flynn/Outfit3/grey_wo_II_sad.png",
                grey_wo_shocked: ".Assets/Characters/Flynn/Outfit3/grey_wo_shocked.png",
                grey_blue_confused: ".Assets/Characters/Flynn/Outfit3/grey_blue_confused.png",
                grey_blue_confused_sad: ".Assets/Characters/Flynn/Outfit3/grey_blue_confused_sad.png",
                grey_blue_happy: ".Assets/Characters/Flynn/Outfit3/grey_blue_neutral_happy.png",
                grey_blue_crossed_angry: ".Assets/Characters/Flynn/Outfit3/grey_blue_crossed_angry.png",
                grey_blue_crossed_shocked: ".Assets/Characters/Flynn/Outfit3/grey_blue_crossed_shocked.png",
                grey_blue_crossed_neutral: ".Assets/Characters/Flynn/Outfit3/grey_blue_crossed_neutral.png",
                grey_blue_crossed_sad: ".Assets/Characters/Flynn/Outfit3/grey_blue_crossed_sad.png",
                grey_blue_crossed_smile: ".Assets/Characters/Flynn/Outfit3/grey_blue_crossed_smile_II.png"
            }
        },
        flowerMerchant: {
            name: "Blumenhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER
        },
        leatherMerchant: {
            name: "Lederhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT
        },
        mirrorMerchant: {
            name: "Spiegelhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                left: ".Assets/Characters/Mirrormerchant/mm_1.png",
                neutral: ".Assets/Characters/Mirrormerchant/mm_2.png"
            }
        },
        Demon: {
            name: "Dämon",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                pos1_angry: ".Assets/Characters/Demon/Demon_angry.png",
                pos2_angry: ".Assets/Characters/Demon/Demon_pos2_angry.png",
                pos2_smile: ".Assets/Characters/Demon/Demon_pos2_smile.png"
            }
        },
        Beggar: {
            name: "Bettlerin",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                anguish: ".Assets/Characters/Beggar/Beggar_Pos1_anguish.png",
                front: ".Assets/Characters/Beggar/Beggar_Pos1_front.png",
                neutral: ".Assets/Characters/Beggar/Beggar_Pos1_neutral.png",
                shocked: ".Assets/Characters/Beggar/Beggar_Pos1_shocked.png"
            }
        },
        Cook: {
            name: "Koch",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                pos1_concerned: ".Assets/Characters/Cook/Cook_Pos1_concerned.png",
                pos1_neutral: ".Assets/Characters/Cook/Cook_Pos1_neutral.png",
                pos2_concerned: ".Assets/Characters/Cook/Cook_Pos2_concerned.png",
                pos2_unknowing: ".Assets/Characters/Cook/Cook_Pos2_unknowing.png"
            }
        },
        Innkeeper: {
            name: "Wirtin",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                pos1_laugh: ".Assets/Characters/Innkeeper/Innk_Pos1_laugh.png",
                pos1_neutral: ".Assets/Characters/Innkeeper/Innk_pos1_neutral.png",
                pos1_smile: ".Assets/Characters/Innkeeper/Innk_Pos1_smile.png",
                pos1_worried: ".Assets/Characters/Innkeeper/Innk_Pos1_worried.png",
                pos2_frown: ".Assets/Characters/Innkeeper/Innk_Pos2_frown.png",
                pos2_laugh: ".Assets/Characters/Innkeeper/Innk_Pos2_laugh.png",
                pos2_neutral: ".Assets/Characters/Innkeeper/Innk_Pos2_laugh.png",
                pos2_smile: ".Assets/Characters/Innkeeper/Innk_Pos2_smile.png"
            }
        },
        Stablehand: {
            name: "Stallmädchen",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                pos1_afraid: ".Assets/Characters/Stablehand/Stable_Pos1_afraid.png",
                pos1_angry: ".Assets/Characters/Stablehand/Stable_Pos1_angry.png",
                pos1_laugh: ".Assets/Characters/Stablehand/Stable_Pos1_laugh.png",
                pos2_afraid: ".Assets/Characters/Stablehand/Stable_Pos2_afraid.png",
                pos2_angry: ".Assets/Characters/Stablehand/Stable_Pos2_angry.png",
                pos2_laugh: ".Assets/Characters/Stablehand/Stable_Pos2_laugh.png"
            }
        },
        Seller: {
            name: "Verkäuferin",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                pos1: ".Assets/Characters/wharywoman.png"
            }
        },
        MerchantWhary: {
            name: "Händler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                pos1: ".Assets/Characters/wharymale.png"
            }
        }
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    // *** RANDOMIZER ***
    function func_RandomNumberRange(// random nr zw 0-10. macht
    min = 0, max = 10) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    Spiegel_VN.func_RandomNumberRange = func_RandomNumberRange;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    // *** BACKGROUNDS ***
    Spiegel_VN.locations = {
        WitchInTheWoods: {
            name: "Witch in the woods",
            background: "./Assets/Backgrounds/Chapter01/Witch.png"
        },
        // *** CHAPTER 01 ***
        Chp01_01_IntroMarketplace: {
            name: "Intro_Marktplatz",
            background: "./Assets/Backgrounds/Chapter01/Chp01_Marketplace1.png"
        },
        Chp01_02_ConvoMother: {
            name: "Convo_Mother",
            background: "./Assets/Backgrounds/Chapter01/Chp01_Marketplace1.png"
        },
        Chp01_E_FlowerMerchant: {
            name: "E_FlowerMerchant",
            background: "./Assets/Backgrounds/Chapter01/Flowermerchant.png"
        },
        Chp01_E_LeatherMerchant: {
            name: "E_LeatherMerchant",
            background: "./Assets/Backgrounds/Chapter01/Leathermerchant.png"
        },
        Chp01_03_IntroMirror: {
            name: "Mirror merchant",
            background: "./Assets/Backgrounds/Chapter01/Mirrormerchant.png"
        },
        Chp01_03_MirrorDemo: {
            name: "Mirror demo",
            background: "./Assets/Backgrounds/Chapter01/MirrorDemo.png"
        },
        Chp01_CS_ArrivalHome: {
            name: "House from outside",
            background: "./Assets/Backgrounds/Chapter02/Cottage_Outside.png"
            // night: "./Assets/Backgrounds/Chapter05/House_ext_night.png",
        },
        Chp01_CS_ArrivalHomeNight: {
            name: "House from outside",
            background: "./Assets/Backgrounds/Chapter05/House_ext_night.png"
        },
        // *** CHAPTER 02 ***
        Chp02_01_Dinner: {
            name: "Dinnertable",
            background: "./Assets/Backgrounds/Chapter02/DiningTable.png"
        },
        Chp02_02_LivingRoom: {
            name: "Living room",
            background: "./Assets/Backgrounds/Chapter02/LivingRoom.png"
            // night: "./Assets/Backgrounds/Chapter02/LivingRoom_night.png"
        },
        Chp02_02_LivingRoomNight: {
            name: "Living room",
            background: "./Assets/Backgrounds/Chapter05/LivingRoom_night.png"
        },
        Chp02_03_PickHerbs: {
            name: "Garden",
            background: "./Assets/Backgrounds/Chapter02/Garden.png"
        },
        Chp02_04_FightNeighbor: {
            name: "Neighbors house",
            background: "./Assets/Backgrounds/Chapter02/Neighbor_house.png"
        },
        Chp02_04_FightNeighborNeighbors: {
            name: "Neighbors house",
            background: "./Assets/Backgrounds/Chapter02/Neighbor_house_nieghbors.png"
        },
        Chp02_E_DiscoverBedroom: {
            name: "My Bedroom",
            background: "./Assets/Backgrounds/Chapter02/MC_bedroom.png"
        },
        Chp02_E_DiscoverBedroomDiary: {
            name: "Bedroom diary",
            background: "./Assets/Backgrounds/Chapter02/MC_bedroom_diary.png"
        },
        Chp02_E_DiscoverKitchen: {
            name: "Kitchen",
            background: "./Assets/Backgrounds/Chapter02/Kitchen.png"
        },
        Chp02_E_DiscoverKitchenOven: {
            name: "Kitchen oven",
            background: "./Assets/Backgrounds/Chapter02/Closeup_Oven.png"
        },
        Chp02_E_DiscoverKitchenPantry: {
            name: "Kitchen pantry",
            background: "./Assets/Backgrounds/Chapter02/Pantry.png"
        },
        // TESTSCENES MIRROR FEMALE
        Chp02_TestSceneFBeach: {
            name: "Testscene F beach",
            background: "./Assets/Backgrounds/Chapter02/MirrorScene_female_beach.png"
        },
        Chp02_TestSceneFCoral: {
            name: "Testscene F beach",
            background: "./Assets/Backgrounds/Chapter02/MirrorScene_female_coral.png"
        },
        Chp02_TestSceneFFly: {
            name: "Testscene F fly",
            background: "./Assets/Backgrounds/Chapter02/MirrorScene_female_fly.png"
        },
        Chp02_TestSceneFTrees: {
            name: "Testscene F trees",
            background: "./Assets/Backgrounds/Chapter02/MirrorScene_female_palm.png"
        },
        Chp02_TestSceneFWater: {
            name: "Testscene F water",
            background: "./Assets/Backgrounds/Chapter02/MirrorScene_female_water.png"
        },
        // TESTSCENES MIRROR MALE
        Chp02_TestSceneMWater: {
            name: "Testscene M water",
            background: "./Assets/Backgrounds/Chapter02/MirrorScene_male_water.png"
        },
        Chp02_TestSceneMTrees: {
            name: "Testscene M trees",
            background: "./Assets/Backgrounds/Chapter02/MirrorScene_male_palm.png"
        },
        Chp02_TestSceneMFly: {
            name: "Testscene M fly",
            background: "./Assets/Backgrounds/Chapter02/MirrorScene_male_sky.png"
        },
        Chp02_TestSceneMBeach: {
            name: "Testscene M beach",
            background: "./Assets/Backgrounds/Chapter02/MirrorScene_male_beach.png"
        },
        Chp02_TestSceneMCoral: {
            name: "Testscene M beach",
            background: "./Assets/Backgrounds/Chapter02/MirrorScene_male_coral.png"
        },
        // *** CHAPTER 03 ***
        Chp03_01_Dressmaker: {
            name: "Dressmaker",
            background: "./Assets/Backgrounds/Chapter03/Dressmaker.png"
        },
        Chp03_01_DressmakerMan: {
            name: "Dressmaker",
            background: "./Assets/Backgrounds/Chapter03/Dressmaker_Man.png"
        },
        Chp03_021_FirewoodKailani: {
            name: "Firewood chopping Kailani",
            background: "./Assets/Backgrounds/Chapter03/Firewood.png"
        },
        Chp03_022_Marketplace_empty: {
            // empty marketplace
            name: "Well empty marketplace",
            background: "./Assets/Backgrounds/Chapter03/Marketplace_empty.png"
        },
        Chp03_E_DiscoverLibrary: {
            name: "Discover library",
            background: "./Assets/Backgrounds/Chapter03/Library.png"
        },
        Chp03_KailaniBedroom: {
            name: "Kailanis bedroom",
            background: "./Assets/Backgrounds/Chapter03/Kailani_bedroom.png"
        },
        Chp03_KailaniBedroomDiary: {
            name: "Kailanis bedroom dairy",
            background: "./Assets/Backgrounds/Chapter04/KailaniDiary.png"
        },
        Chp03_KailaniBedroomMirror: {
            name: "Kailanis bedroom dairy",
            background: "./Assets/Backgrounds/Chapter04/Kailani_Mirror.png"
        },
        Chp03_MarketplacePerson: {
            name: "Marketplace + char",
            background: "./Assets/Backgrounds/Chapter04/Marketplace_empty_person.png"
        },
        // *** CHAPTER 04 ***
        Chp04_Library_Interior: {
            name: "Library interior",
            background: "./Assets/Backgrounds/Chapter04/Library_int.png"
        },
        Chp04_Library_Bookshelf: {
            name: "Bookshelf",
            background: "./Assets/Backgrounds/Chapter04/CloseupBookshelf.png"
        },
        Chp04_Bookshelf_Book: {
            name: "Book",
            background: "./Assets/Backgrounds/Chapter04/Closeup_Bookshelf.png"
        },
        // *** CHAPTER 05 ***
        Chp05_Forestpath: {
            name: "Forestpath night",
            background: "./Assets/Backgrounds/Chapter05/ForestPath_night.png"
        },
        Chp05_River: {
            name: "River",
            background: "./Assets/Backgrounds/Chapter05/River_night.png"
        },
        Chp05_Trees: {
            name: "Trees",
            background: "./Assets/Backgrounds/Chapter05/Trees.png"
        },
        Chp05_Wishtree: {
            name: "Wishtrees",
            background: "./Assets/Backgrounds/Chapter05/Wishtree.png"
        },
        Chp05_WishtreeBirds: {
            name: "Wishtrees",
            background: "./Assets/Backgrounds/Chapter05/Wishtree_Birds.png"
        },
        // *** CHAPTER 06 ***
        Chp06_ArrivalMeadow: {
            name: "Arrival meadow",
            background: "./Assets/Backgrounds/Chapter06/Arrival_Meadow.png"
        },
        Chp06_ArrivalMeadowFlowers: {
            name: "Arrival meadow",
            background: "./Assets/Backgrounds/Chapter06/Arrival_Meadow_flowers.png"
        },
        Chp06_CityGates: {
            name: "City gates",
            background: "./Assets/Backgrounds/Chapter06/CityGates.png"
        },
        Chp06_InWharyPeople: {
            name: "In Whary + ppl",
            background: "./Assets/Backgrounds/Chapter06/InWhary_Ppl.png"
        },
        Chp06_ClothingStore: {
            name: "Clothing Store",
            background: "./Assets/Backgrounds/Chapter06/ClothingStore.png"
        },
        Chp06_Inn_ext: {
            name: "Exterior inn",
            background: "./Assets/Backgrounds/Chapter06/Inn.png"
        },
        Chp06_Inn_int: {
            name: "Interior inn",
            background: "./Assets/Backgrounds/Chapter06/Inn_Inside.png"
        },
        Chp06_Inn_room: {
            name: "Inn room",
            background: "./Assets/Backgrounds/Chapter06/Inn_Rooms.png"
        },
        Chp06_InWhary: {
            name: "In Whary",
            background: "./Assets/Backgrounds/Chapter06/InWhary.png"
        },
        Chp06_StreetToWhary: {
            name: "Street to whary",
            background: "./Assets/Backgrounds/Chapter06/WayToWhary.png"
        },
        Chp06_WharyWindow: {
            name: "Window",
            background: "./Assets/Backgrounds/Chapter06/Whary_Window.png"
        },
        // *** CHAPTER 07 ***
        Chp07_Barn: {
            name: "Barn",
            background: "./Assets/Backgrounds/Chapter07/Barn.png"
        },
        Chp07_InnKitchen: {
            name: "Kitchen inn",
            background: "./Assets/Backgrounds/Chapter07/InnKitchen.png"
        },
        Chp07_MarketplaceWhary: {
            name: "Marketplace Whary",
            background: "./Assets/Backgrounds/Chapter07/Marketplace_Whary.png"
        },
        Chp07_MarketplaceWharyBirds: {
            name: "Marketplace Whary",
            background: "./Assets/Backgrounds/Chapter07/Marketplace_Whary_birds.png"
        },
        // *** CHAPTER 08 ***
        Chp08_Lake: {
            name: "Lake",
            background: "./Assets/Backgrounds/Chapter08/CrossLake.png"
        },
        Chp08_ArrivalFactory: {
            name: "Arrival at factory",
            background: "./Assets/Backgrounds/Chapter08/Arrival_Factoryvillage.png"
        },
        Chp08_E_FactoryVillage: {
            name: "Factory village",
            background: "./Assets/Backgrounds/Chapter08/Explore_Factoryvillage.png"
        },
        Chp08_Mirrorroom_unbroken: {
            name: "Mirrorroom unbroken",
            background: "./Assets/Backgrounds/Chapter08/Mirrorroom_Mirrorsfine.png"
        },
        Chp08_OnBoat: {
            name: "On boat",
            background: "./Assets/Backgrounds/Chapter08/On_Boat.png"
        },
        Chp08_OnBoatGhosts1: {
            name: "Ghosts 1",
            background: "./Assets/Backgrounds/Chapter08/On_Lake_Ghosts1.png"
        },
        Chp08_OnBoatGhosts2: {
            name: "Ghosts 2",
            background: "./Assets/Backgrounds/Chapter08/On_Lake_Ghosts2.png"
        },
        Chp08_OnBoatGhosts3: {
            name: "Ghosts 3",
            background: "./Assets/Backgrounds/Chapter08/On_Lake_Ghosts3.png"
        },
        Chp08_OutsideTower: {
            name: "Outside tower",
            background: "./Assets/Backgrounds/Chapter08/Outside_Tower.png"
        },
        Chp08_ForestPath: {
            name: "Forest path",
            background: "./Assets/Backgrounds/Chapter08/Path_2ways.png"
        },
        Chp08_ForestPathHammer: {
            name: "Forest path",
            background: "./Assets/Backgrounds/Chapter08/Path_2ways_hammer.png"
        },
        Chp08_HidingPlace: {
            name: "Hiding place",
            background: "./Assets/Backgrounds/Chapter08/View_HidingPlace.png"
        },
        Chp08_HidingPlaceSlaves: {
            name: "Hiding place slaves",
            background: "./Assets/Backgrounds/Chapter08/View_HidingPlace_slaves.png"
        },
        Chp08_Village: {
            name: "Village",
            background: "./Assets/Backgrounds/Chapter08/VillageOtherSide_Inside.png"
        },
        // *** CHAPTER 09 ***
        Chp09_OutsideFactory: {
            name: "Outside factory",
            background: "./Assets/Backgrounds/Chapter09/Outside_Factory.png"
        },
        Chp09_InFactory: {
            name: "In factory",
            background: "./Assets/Backgrounds/Chapter09/InsideFactory.png"
        },
        Chp09_InFactoryWK: {
            name: "In factory",
            background: "./Assets/Backgrounds/Chapter09/InsideFactory_Kailani.png"
        },
        // *** CHAPTER 10 ***
        Chp10_TowerOutside: {
            name: "Tower outside",
            background: "./Assets/Backgrounds/Chapter10/OutsideTower.png"
        },
        Chp10_TowerOutsideBirds: {
            name: "Tower outside birds",
            background: "./Assets/Backgrounds/Chapter10/OutsideTowerBirds.png"
        },
        Chp10_TowerOutsideSlavesGrey: {
            name: "Tower outside slaves grey",
            background: "./Assets/Backgrounds/Chapter10/OutsideTowerSlaves_grey.png"
        },
        Chp10_TowerOutsideSlaves: {
            name: "Tower outside slaves",
            background: "./Assets/Backgrounds/Chapter10/OutsideTowerSlaves.png"
        },
        Chp10_GroundFloorTower: {
            name: "Tunnel 1",
            background: "./Assets/Backgrounds/Chapter10/Tunnel1.png"
        },
        Chp10_GroundFloorTowerGrey: {
            name: "Tunnel 1 grey",
            background: "./Assets/Backgrounds/Chapter10/Tunnel1_grey.png"
        },
        Chp10_ExplorePortrait: {
            name: "Portrait",
            background: "./Assets/Backgrounds/Chapter10/Portrait.png"
        },
        Chp10_MinigameInstructions: {
            name: "Minigame instructions",
            background: "./Assets/Backgrounds/Chapter10/Minigame_Instructions.png"
        },
        Chp10_Mirrorroom: {
            name: "Mirrorroom",
            background: "./Assets/Backgrounds/Chapter10/Mirrorroom.png"
        },
        Chp10_MirrorroomGrey: {
            name: "Mirrorroom grey",
            background: "./Assets/Backgrounds/Chapter10/Mirrorroom_grey.png"
        },
        Chp10_Demontunnel: {
            name: "Demon tunnel",
            background: "./Assets/Backgrounds/Chapter10/Demontunnel.png"
        },
        Chp10_DemontunnelGrey: {
            name: "Demon tunnel grey",
            background: "./Assets/Backgrounds/Chapter10/Demontunnel_grey.png"
        },
        // *** TRANSITION BETWEEN CHAPTERS ***
        black: {
            name: "Black_BG",
            background: "./Assets/Transitions/Black.png"
        }
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.music = {
        //themes
        theme_ordinaryworld: "./Assets/Music/Theme_OrdinaryWorld.wav",
        theme_mirrorworld_whary: "./Assets/Music/Theme_Mirrorworld_Whary.wav",
        theme_mirrorworld_factory: "./Assets/Music/Theme_Mirrorworld_Factory1.wav",
        theme_DemonMinigame: "./Assets/Music/Theme_MinigameDemon.wav",
        //Soundeffekte SFX
        click: "Pfad",
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.score = {
        //score ist ein objekt
        punkte: 0,
        teeGetrunken: false,
    };
    Spiegel_VN.scoreMutti = {
        punkte: 0,
        affection: 0,
        introduced: false, // alles was ich hier festlege, ist grundsätzlich. grundsätzlich fang ich das spiel an und sage, elena hat sich noch nciht vorgestellt, also false
    };
    // *** SCOREFUNCTION EMPATHY *** //
    // export let GlobalCounterEmpathyPoints = {// when certain dlg option is selected, var in the dlg option says how many points, and then they will be added to the hlobalvar, which will add them up
    //   EmpathyPoints: 0,
    // };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.soundeffects = {
        // click: "./Assets/Soundeffekte/mouseclick.flac",
        birds: "./Assets/Soundeffekte/cardinal.mp3",
        cracklingfire: "./Assets/Soundeffekte/crackling-fireplace-nature-sounds.mp3",
        crowd: "./Assets/Soundeffekte/crowd_talking.mp3",
        door: "./Assets/Soundeffekte/door-opening.mp3",
        forest: "./Assets/Soundeffekte/forest-wind-and-birds.mp3",
        forest2: "./Assets/Soundeffekte/forest-with-small-river-birds-and-nature-field.mp3",
        glass: "./Assets/Soundeffekte/glass-breaking.mp3",
        kitchen: "./Assets/Soundeffekte/kitchen.mp3",
        water: "./Assets/Soundeffekte/relaxing-mountains-rivers-streams-running-water.mp3",
        wood: "./Assets/Soundeffekte/woodcutter.mp3",
        listeningriddle_demon: "./Assets/Soundeffekte/Dämon_Cave.wav",
        listeningriddle_mirror: "./Assets/Soundeffekte/Spiegelzimmer_cave.wav",
        listeningriddle_destroy: "./Assets/Soundeffekte/Zerstören_cave.wav",
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.transitions = {
        fade: {
            duration: 2,
            alpha: "./Assets/Transitions/Black.png",
            edge: 0.1,
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_00_IntroNarrator = {
        narratorEntry: {
            T0000: '"Willkommen! Tritt nur näher, sonst hörst du mich gar nicht."',
            T0001: '"Ja, so ist es schon besser. Du bist ja schließlich hergekommen, um meiner Geschichte zu lauschen, nicht wahr?"',
            T0002: '"Wie heißt du denn?"',
            T0003: '"Schau, dass du es dir gemütlich machst. Das Märchen, das ich dir heute Abend erzähle, dauert etwas länger."',
            T0005: '"Schließe nun die Augen und lass dich von mir in eine Welt entführen, die nicht viel anders ist als deine hier. Nur mit etwas mehr … Magie!"',
            T0006: '"Es war einmal …."',
            T0007: '"... ein geschäftiger Marktplatz in einer kleinen Stadt am Rande des Bezirks, bevor der dunkle Wald begann."',
            T0008: '"Du schaust dich um und siehst Reihen an Marktständen, die mit bunten Waren bis oben hin aufgefüllt sind. Die Schreie der Händler schweben durch die kalte Luft, die von den lauen Sommerstrahlen an diesem kühlen Aprilmorgen ziemlich unberührt scheint."',
            T0009: '"Die Bewohner schlendern von Stand zu Stand und holen ihre Wocheneinkäufe. Ihre braunen, blauen und gelben Kleider zwischen den farbigen Waren lassen den gesamten Marktplatz wie die Farbpalette einer temperamentvollen, pinselschwingenden Künstlerin wirken."',
            T0010: '"Am Rande stehen und Beobachten ist sowieso eine deiner liebsten Beschäftigungen. So kannst du in Ruhe nachdenken. Als du so beobachtest, fällt dir auf, dass das Treiben geschäftiger wirkt als sonst."',
            T0011: '"Du runzelst die Stirn. Ist denn heute etwas anders als sonst? Wo ist außerdem Mama abgeblieben?"',
            T00012: '"Sicherlich rennt sie irgendwo deinen Chaos-Geschwistern hinterher. Kailani und Evarius. Verrückte Namen, oder? Was haben sich Mama und Mutti nur dabei gedacht!"',
            T0013: '"Mama ist wieder gestresst. Dabei sehe ich sie gerade sowieso so selten. Manchmal wünschte ich mir, sie würde weniger arbeiten und lieber mit uns Zeit verbringen."',
            T0014: '"(Tipp: Die Erkundungsoptionen kannst du wählen, ohne in der Story voranzuschreiten!)"'
        }
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_01 = {
        Mama: {
            T0001: '"Hör auf zu träumen und komm’. Wir haben noch einiges vor dem Essen zu erledigen."',
            T0002: '"Da bist du ja! Bleibe nah bei mir, okay? Heute ist was los …"',
            T0003: '"Am Rande stehen und Beobachten ist sowieso eine deiner liebsten Beschäftigungen. So kannst du in Ruhe nachdenken. Als du so beobachtest, fällt dir auf, dass das Treiben geschäftiger wirkt als sonst."',
            T0004: '"Du runzelst die Stirn. Ist denn heute etwas anders als sonst? Wo ist außerdem Mama abgeblieben?"',
            T0005: '"Sicherlich rennt sie irgendwo deinen Chaos-Geschwistern hinterher. Kailani und Evarius. Verrückte Namen, oder? Was haben sich Mama und Mutti nur dabei gedacht!"',
            T0006: '"Mama ist wieder gestresst. Dabei sehe ich sie gerade sowieso so selten. Manchmal wünschte ich mir, sie würde weniger arbeiten und lieber mit uns Zeit verbringen."',
            T0007: '"(Tipp: Die Erkundungsoptionen kannst du wählen, ohne in der Story voranzuschreiten)"',
        },
        // Mama: {
        //   T0000: "Hallo mein Kind.",
        //   T0001: "Test Mama dlg t0001.",
        // },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_02 = {
        maincharacter: {
            T0001: '"Also, letzte Woche … naja, du und Mutti hattet viel zu tun und da wollte ich fragen … ihr habt vergessen, mir das Taschen–"',
            T0004: '"Vielleicht finde ich etwas auf dem Markt."',
            T0006: '"Doch, segeln lernen ist mir schon wichtig. Aber ich brauche noch ein paar Sachen … zum Beispiel Schuhcreme für meine Lederstiefel. Die sind doch neulich dreckig geworden. Obwohl, Mutti freut sich vielleicht auch über ein paar Blumen, oder? Sie war letzte Woche so traurig, als Häschen Brombeere gestorben ist."',
            T0008: '"Nee, ich versuche doch, auf Segelunterricht zu sparen. Ich hab’ sogar bald die Hälfte!"',
            T0010: '"Ich muss noch überlegen, was ich mit dem Geld mache. Aber danke, Mama!"',
        },
        Mama: {
            T0000: '"Ja?"',
            T0002: '"Dein Taschengeld! Ja, natürlich. Hier, nimm nur."',
            T0003: '"Willst du dir etwas kaufen? Oder wieder sparen?"',
            T0005: '"Wolltest du nicht dein ganzes Geld für Segelunterricht sparen?"',
            T0007: '"Ich habe dir doch gesagt, dass du beim Reiten andere Schuhe anziehen sollst. Aber du liebst eben diese Stiefel! Und Mutti würde sich sicher sehr über Blumen freuen. Aber jetzt auf, dass wir bald nach Hause kommen!"',
            T0009: '"Und das nach, wie viel, sechs Monaten? Das ist großartig. Darauf freust du dich schon seit Jahren!"'
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    // SCENE ENTRY
    Spiegel_VN.dlg_Chp01EntryMirrorMerchant = {
        mirrorMerchant: {
            T0000: '"... magische Spiegel! Ich habe magische Spiegel zu verkaufen!"',
            T0001: '"Du! Du siehst interessiert aus, nicht wahr?"',
            T0003: '"Komm’ her, ich zeig’ es dir!"',
            T0005: '"Brauchst du nicht zu sein! Das Besondere an diesem Spiegel ist: Er zeigt dir all’ deine Wünsche! Alles, was du dir vorstellen kannst, und auch das, was du dir nicht vorstellen kannst. Und es geht so einfach: Du musst nur den Spruch und deinen Herzenswunsch aufsagen – schon blühen deine gedanklichen Fantasien vor dir auf!"',
            T0006: '"Was meinst du,für nur 2 Goldstücke deine verrücktesten Träume vor dir zu sehen?"',
            T0011: '"Neugierige Kundschaft! Meine Lieblingskundschaft! Das Besondere an diesem Spiegel ist: Er zeigt dir all’ deine Wünsche! Alles, was du dir vorstellen kannst, und auch das, was du dir nicht vorstellen kannst. Und es geht so einfach: Du musst nur den Spruch und deinen Herzenswunsch aufsagen – schon blühen deine gedanklichen Fantasien vor dir auf!"',
        },
        maincharacter: {
            T0002: '"Was ist das denn für ein magischer Spiegel?"',
            T0004: '"Hm, ich bin mir unsicher …"',
            T0007: '"Nur zwei Goldstücke für meine kühnsten Träume in einem Spiegel? Unbedingt!"',
            T0008: '"Hm, das klingt toll, aber wirklich erleben kann ich meine Wünsche dann immer noch nicht …"',
            T0009: '"Auf gar keinen Fall, das wäre ja zu schön, um wahr zu sein!"',
            T0010: '"Oh ja, zeigen Sie mal her!"',
            T0012: '"Nein, lieber doch nicht."',
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.dlg_scn_E_10EmpathyPoints = {
        maincharacter: {
            T0000: "Ich habe diese Dialogoption freigeschalten.",
            T0001: "Mit 10 Empathy Points.",
        },
    };
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp00_00_NameEntry() {
        Spiegel_VN.dataForSave.nameProtagonist = await Spiegel_VN.ƒS.Speech.getInput();
        Spiegel_VN.characters.maincharacter.name = Spiegel_VN.dataForSave.nameProtagonist;
    }
    Spiegel_VN.Chp00_00_NameEntry = Chp00_00_NameEntry;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_00_IntroNarration() {
        Spiegel_VN.ƒS.Speech.hide();
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.WitchInTheWoods);
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.cracklingfire, 0.1, 1, false);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0001);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0002);
        Spiegel_VN.dataForSave.nameProtagonist = await Spiegel_VN.ƒS.Speech.getInput();
        Spiegel_VN.characters.maincharacter.name = Spiegel_VN.dataForSave.nameProtagonist;
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0003);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0005);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0006);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0007);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0014);
        return "01_01 Intro Marketplace";
    }
    Spiegel_VN.Chp01_00_IntroNarration = Chp01_00_IntroNarration;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_01_IntroMarketplace() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace);
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.cracklingfire, 0, 0, false);
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_ordinaryworld, 0.5, 1, true);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        // ***TEST-INVENTORY***
        // ƒS.Inventory.add(inventory.apple);
        // await ƒS.Inventory.open;
        //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene
        // ***TEST-DIALOGE***
        // console.log(characters.monologue.name); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser. Am ende der Sache kann ich den Namen der jeweiligen Szene eingeben, is nur für mich & für Prof
        // await ƒS.Speech.tell("Bab", "Hallo, ich bin Bab."); //fs = ich greife auf die library zu, was jmdn anders schon für die library programmiert hat.
        // await ƒS.Speech.tell("Xenoi", "Hallo, ich bin Xeni.");
        // await ƒS.Speech.tell(
        //   characters.maincharacter.name,
        //   "Hallo, ich bin Dein Name."
        // );
        // ***BEGINN SZENE***
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_34_neutral, Spiegel_VN.ƒS.positionPercent(70, 115));
        Spiegel_VN.ƒS.update();
        let randomTextChp01Marketplace = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp01Marketplace) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, '"Hör auf zu träumen und komm’. Wir haben noch einiges vor dem Essen zu erledigen."');
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, '"Da bist du ja! Bleibe nah bei mir, okay? Heute ist was los …"');
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, '"Erinnerst du mich daran, dass wir nachher Salat und Zucker holen?"');
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, '"Letzte Woche haben wir doch Kartoffeln vergessen, da war Mutti ziemlich böse …"');
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, '"Ich renn’ schon den ganzen Tag Kailani und Evarius hinterher, die machen mich wahnsinnig!"');
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, '"Kommst du?"');
                break;
        }
        // *** SCENE OPTIONS ***
        let Chp01PickSceneElementAnswers = {
            PickSceneConvoMother: "Rede mit Mama.",
            PickSceneMirrorMerchant: "Was glitzert so da hinten?",
            PickSceneExploreFlowerMerchant: "(Erkunden) Was gibt es Neues beim Blumenhändler?",
            PickSceneExploreLeatherMerchant: "(Erkunden) Was gibt es Neues beim Lederhändler?",
            PickSceneContinue: "Weiter"
        };
        if (!Spiegel_VN.dataForSave.pickedChp01_ConvoMother ||
            !Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant) {
            delete Chp01PickSceneElementAnswers.PickSceneContinue;
        }
        if (Spiegel_VN.dataForSave.pickedChp01_ConvoMother) {
            delete Chp01PickSceneElementAnswers.PickSceneConvoMother;
        }
        if (Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant) {
            delete Chp01PickSceneElementAnswers.PickSceneMirrorMerchant;
        }
        let Chp01SceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp01PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp01SceneElement) {
            case Chp01PickSceneElementAnswers.PickSceneConvoMother:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, '"Warte kurz, Mama!"');
                // dataForSave.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "01_02 Conversation Mama";
                break;
            case Chp01PickSceneElementAnswers.PickSceneMirrorMerchant:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, '"Ich schau´ mir noch schnell etwas an!"');
                Spiegel_VN.ƒS.Speech.clear();
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
                return "01_03 MirrorMerchant";
                break;
            case Chp01PickSceneElementAnswers.PickSceneExploreFlowerMerchant:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, 'Mal schauen, was der Blumenhändler so im Angebot hat');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_FlowerMerchant";
                break;
            case Chp01PickSceneElementAnswers.PickSceneExploreLeatherMerchant:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, 'Da wollte ich schon lange mal vorbei.');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_LeatherMerchant";
                break;
            case Chp01PickSceneElementAnswers.PickSceneContinue:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Okay, gehen wir weiter."');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
                Spiegel_VN.ƒS.Speech.clear();
                return "01_CS PerchaseMirror";
                break;
        }
    }
    Spiegel_VN.Chp01_01_IntroMarketplace = Chp01_01_IntroMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_02_ConvoMother() {
        Spiegel_VN.dataForSave.pickedChp01_ConvoMother = true;
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_02_ConvoMother);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        // *** BEGIN DIALOGUE ***
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, Spiegel_VN.dlg_scn_02.Mama.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_02.maincharacter.T0001);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_shocked, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, Spiegel_VN.dlg_scn_02.Mama.T0002);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, Spiegel_VN.dlg_scn_02.Mama.T0003);
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
        let chp01ConvoMotherElement = await Spiegel_VN.ƒS.Menu.getInput(chp01ConvoMotherElementAnswers, "choicesCSSclass");
        //*** RESPONSES */
        switch (chp01ConvoMotherElement) {
            case chp01ConvoMotherElementAnswers.iSayBuy:
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_02.maincharacter.T0004);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, Spiegel_VN.dlg_scn_02.Mama.T0005);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_02.maincharacter.T0006);
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, Spiegel_VN.dlg_scn_02.Mama.T0007);
                Spiegel_VN.ƒS.Speech.clear();
                Spiegel_VN.ƒS.Character.hideAll();
                Spiegel_VN.ƒS.update();
                return "01_01 Intro Marketplace";
                break;
            case chp01ConvoMotherElementAnswers.iSaySave:
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_02.maincharacter.T0008);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, Spiegel_VN.dlg_scn_02.Mama.T0009);
                Spiegel_VN.ƒS.Speech.clear();
                Spiegel_VN.ƒS.Character.hideAll();
                Spiegel_VN.ƒS.update();
                return "01_01 Intro Marketplace";
                break;
            case chp01ConvoMotherElementAnswers.iSayUnsure:
                // dataForSave.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_scn_02.maincharacter.T0010);
                Spiegel_VN.ƒS.Speech.clear();
                Spiegel_VN.ƒS.Character.hideAll();
                Spiegel_VN.ƒS.update();
                return "01_01 Intro Marketplace";
                break;
        }
    }
    Spiegel_VN.Chp01_02_ConvoMother = Chp01_02_ConvoMother;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_03_IntroMirror() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_03_IntroMirror);
        Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant = true;
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0001);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.maincharacter.T0002);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0003);
        //*** OPTIONS *//
        let Chp01MirrorMerchantElementAnswers = {
            iSayUnsure: 'Unsicher',
            iSayYes: 'Aufgeregt',
            iSayNo: 'Abwehrend'
        };
        let Chp01MirrorMerchantElement = await Spiegel_VN.ƒS.Menu.getInput(Chp01MirrorMerchantElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp01MirrorMerchantElement) {
            case Chp01MirrorMerchantElementAnswers.iSayUnsure:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.maincharacter.T0004);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0005);
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp01MirrorMerchantElementAnswers.iSayYes:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.maincharacter.T0010);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0011);
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp01MirrorMerchantElementAnswers.iSayNo:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.maincharacter.T0010);
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, 'Seine Stimme senkt sich verschwörerisch. Er winkt dich mit einer von funkelnden Ringen verzierten Hand heran.');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.mirrorMerchant.T0006);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_03_MirrorDemo);
        Spiegel_VN.ƒS.update();
        let Chp01MirrorMerchantElementAnswers2 = {
            iSayYes: '"Klar!"',
            iSayUnsure: '"Weiß nicht."',
            iSayNo: '"Nein"'
        };
        let Chp01MirrorMerchantElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp01MirrorMerchantElementAnswers2, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp01MirrorMerchantElement2) {
            case Chp01MirrorMerchantElementAnswers2.iSayYes:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.maincharacter.T0007);
                // ƒS.Character.hideAll();
                return "01_01 Intro Marketplace";
                break;
            case Chp01MirrorMerchantElementAnswers2.iSayUnsure:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.maincharacter.T0008);
                // ƒS.Character.hideAll();
                return "01_01 Intro Marketplace";
                break;
            case Chp01MirrorMerchantElementAnswers2.iSayNo:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, Spiegel_VN.dlg_Chp01EntryMirrorMerchant.maincharacter.T0009);
                // ƒS.Character.hideAll();
                return "01_01 Intro Marketplace";
                break;
        }
    }
    Spiegel_VN.Chp01_03_IntroMirror = Chp01_03_IntroMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_E_FlowerMerchant() {
        //   await ƒS.Location.show(locations.black);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_E_FlowerMerchant);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        let randomTextChp01FlowerMerchant = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 4); //gerundet
        switch (randomTextChp01FlowerMerchant) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, 'Du schnupperst an den Blüten und merkst, wie sehr du dich auf den Frühling freust.');
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant, '"Kann ich dir helfen?"');
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant, '"Die Margeriten hier verschönern das Zuhause gerade vorzüglich!"');
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant, '"Du siehst aus, als könntest du etwas Verschönerung zuhause gebrauchen!"');
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant, '"Willkommen!"');
                break;
        }
        // *** DIALOGUE OPTIONS ***
        let chp01FlowerMerchantDialogueElementAnswers = {
            iSayAskAboutTrip: "(Erkunden) Nach Reise fragen",
            iSayAskAboutFlowers: "(Erkunden) Nach Blumen fragen",
            iSayBuyFlowers: "(Erkunden) Blumen kaufen",
            iSayLeave: '"Auf Wiedersehen!"'
        };
        if (!Spiegel_VN.dataForSave.pickedChp01_ConvoMother) {
            delete chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers;
        }
        let chp01FlowerMerchantDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(chp01FlowerMerchantDialogueElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (chp01FlowerMerchantDialogueElement) {
            case chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Wie war denn die Reise hierher?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Ich weiß nicht, ob du, mein liebes Kind, davon etwas gehört hast, aber derzeit lauern überall Banditen auf den Königswegen! Einmal wären wir beinahe mitten in eine Bande hineingefahren."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Zum Glück habe ich so ein feines Näschen. Damit konnte ich das Gesindel meilenweit voraus riechen! Schau nicht so zweifelnd, jedes Wort, das ich gesprochen habe, ist wahr, jaja!."');
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_FlowerMerchant";
                break;
            case chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutFlowers:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, '"Haben Sie normalerweise nicht mehr Blumen im Vorrat?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Ach die Blumen! Dieses Jahr werden sie mir förmlich aus den Händen gerissen. Es scheint so, als würden sich immer mehr Leute meine wunderschönen Kreationen zuhause aufstellen."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Seltsamerweise kaufen die grauesten Mäuse die buntesten Blumen …"');
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_FlowerMerchant";
                break;
            case chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, '"Ich nehme gerne die Nelken hier, darüber freut sich meine Mutti bestimmt. Gelb ist nämlich ihre Lieblingsfarbe."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Sehr gerne, liebes Kind, ich packe sie dir fest ein. Nicht, dass sie dir auf dem Heimweg etwa verloren gehen!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, "Du lächelst den Händler an, bist aber etwas irritiert. Wieso denkt er, du kannst nicht auf die Blumen aufpassen? Du überreichst dem Händler das Geld von Mama, das er sofort in eine Tasche unter den Rock verstaut.");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_FlowerMerchant";
                break;
            case chp01FlowerMerchantDialogueElementAnswers.iSayLeave:
                Spiegel_VN.dataForSave.pickedChoice = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Auf Wiedersehen, Blumenhändler!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Auf Wiedersehen, Kind!"');
                Spiegel_VN.ƒS.Speech.clear();
                return "01_01 Intro Marketplace";
                break;
        }
    }
    Spiegel_VN.Chp01_E_FlowerMerchant = Chp01_E_FlowerMerchant;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_E_LeatherMerchant() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_E_LeatherMerchant);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        let randomTextChp01LeatherMerchant = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 3);
        switch (randomTextChp01LeatherMerchant) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Suchst du etwas Bestimmtes?"');
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Die Felle der Lederhändler sind immer so schön weich."');
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Heute im Angebot: Gelb getönte Schafswolle!"');
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Willkommen!"');
                break;
        }
        // ***BEGIN DIALOGUE ***
        // *** DIALOGUE OPTIONS ***
        let Chp01LeatherMerchantDialogueElementAnswers = {
            iSayAskAboutTrip: '"(Erkunden) Was gibt es denn Neues in der Welt?"',
            iSayAskAboutClothes: "'(Erkunden) Eure Ware sieht so anders aus...'",
            iSayBuyShoeCream: "Schuhcreme kaufen",
            iSayLeave: "'Auf Wiedersehen!'"
        };
        if (!Spiegel_VN.dataForSave.pickedChp01_ConvoMother) {
            delete Chp01LeatherMerchantDialogueElementAnswers.iSayBuyShoeCream;
        }
        let Chp01LeatherMerchantDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(Chp01LeatherMerchantDialogueElementAnswers, "choicesCSSclass");
        // *** SWITCHCASE DIALOGUE OPTIONS ***
        switch (Chp01LeatherMerchantDialogueElement) {
            case Chp01LeatherMerchantDialogueElementAnswers.iSayAskAboutTrip:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ihr habt auf der Reise bestimmt Interessantes erlebt!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Oh, aber wie! Die Leute haben uns mitten auf der Straße angehalten und wollten unsere Ware kaufen. Das ist uns noch nie passiert."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Etwas ungewöhnlich, das Ganze. Ganz gesund sahen sie nicht aus."');
                Spiegel_VN.ƒS.Speech.clear();
                return Chp01_E_LeatherMerchant();
                break;
            case Chp01LeatherMerchantDialogueElementAnswers.iSayAskAboutClothes:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Letztes Jahr hattet Ihr andere Ware dabei, oder?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Tatsächlich haben viele nach den neuen Modetönen aus der Hauptstadt gefragt. Normalerweise benötigen wir für das Färben einige Monate, aber die Nachfrage war so stark, dass wir unser Verfahren kurzerhand umstellen mussten."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Die Farben sind dafür schön satt, halten aber leider nicht lange."');
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "01_E_LeatherMerchant";
                break;
            case Chp01LeatherMerchantDialogueElementAnswers.iSayBuyShoeCream:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ich würde gerne diese Schuhcreme für meine Lederstiefel kaufen.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Die können es wirklich gebrauchen! Das macht 30 Pfennig."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du nimmst die Schuhcreme an und lächelst. Du liebst deine alten Schuhe, egal was andere sagen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_LeatherMerchant";
                break;
            case Chp01LeatherMerchantDialogueElementAnswers.iSayLeave:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Wiedersehen!");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Auf bald!"');
                Spiegel_VN.ƒS.Speech.clear();
                return "01_01 Intro Marketplace";
                break;
        }
    }
    Spiegel_VN.Chp01_E_LeatherMerchant = Chp01_E_LeatherMerchant;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_CS_ArrivalHome() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_CS_ArrivalHome);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress3_smile, Spiegel_VN.ƒS.positionPercent(45, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos3_laugh, Spiegel_VN.ƒS.positionPercent(10, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Zusammen mit deinen Geschwistern Evarius, Kailani und Mama nimmst du die Abkürzung durch das Feld in Richtung zuhause. Das kleine Häuschen, in dem ihr, seit du denken kannst, lebt, liegt am Rande des Dorfes, dort, wo die Bäume enger zusammenstehen und das Moos schon an den Hauswänden hochkriecht.");
        let Chp02GoInsideHouseAnswers = {
            iSayGoInside: "Ins Haus eintreten."
        };
        let Chp02GoInsideHouse = await Spiegel_VN.ƒS.Menu.getInput(Chp02GoInsideHouseAnswers, "choicesCSSclass");
        switch (Chp02GoInsideHouse) {
            case Chp02GoInsideHouseAnswers.iSayGoInside:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress4_smile, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Da seid ihr ja! Wie war´s auf dem Markt? Essen ist gleich fertig! Zieht eure Schuhe aus. Ich weiß, ich sage es jeden Tag."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du tauschst einen Blick mit deinen Geschwistern und schmunzelst. Mutti ist einfach überall mit ihren Gedanken.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Was habt ihr denn da gekauft? Oh, der ist aber schön!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie zieht den Spiegel aus der Verpackung und bewundert ihn.");
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_shocked, Spiegel_VN.ƒS.positionPercent(80, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Ich wollte ihn dir eigentlich gerade geben, als Geschenk!"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress4_laugh, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Ein Geschenk für mich? Der ist ja hübsch. Ich stelle ihn mir gleich ins Bad."');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress3_happy, Spiegel_VN.ƒS.positionPercent(40, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Das ist nicht nur irgendein Spiegel. Er kann dir deine Wünsche zeigen! Oder so ähnlich hat zumindest der Händler auf dem Markt gesagt."');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress4_frown, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(80, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Man sagt einen Spruch auf und wünscht sich etwas, dann kann man es im Spiegel bewundern. Ich dachte, wenn es dir nicht gefällt, hast du trotzdem einen Handspiegel zum Benutzen."');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress4_neutral, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Eure Mama, immer die Pragmatische. Ist eine verrückte Idee, diese Wunsch-Anzeige. Ich kann es kaum erwarten, ihn auszuprobieren."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Aber erstmal essen wir! Evarius, Kailani, bitte deckt schon mal den Tisch. Du, ' + Spiegel_VN.dataForSave.nameProtagonist + ', kannst die Einkäufe in die Küche bringen. Und geh doch bitte in den Garten, um ein paar Kräuter für das Abendessen zu ernten."');
                return "02_00 Arrival Home";
        }
    }
    Spiegel_VN.Chp01_CS_ArrivalHome = Chp01_CS_ArrivalHome;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_CS_PerchaseMirror() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_03_IntroMirror);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_34_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        //*** BEGIN DIALOGUE */
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Ah, Sie sind bestimmt die Schwester!"');
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Ach, lassen Sie das Geschmeichlel! Ich wollte nur mein Kind abholen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Lassen Sie sich doch für einen kurzen Moment aus Ihrem stressigen Alltag entführen … in eine Welt, die aus Ihren Träumen gebaut ist."');
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Darf ich Ihnen den magischen Spiegel vorführen? Es funktioniert so: Sie halten sich den Spiegel vor das Gesicht und sagen “Spieglein, Spieglein, weise mir mein Träumlein” hinein, und dann dürfen Sie sich etwas wünschen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Hier, ich zeige es Ihnen: Spieglein, Spieglein, weise mir mein Träumlein! Ich wünschte, ich wäre ein König vor einem wunderschönen Strand!"');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_03_MirrorDemo);
        Spiegel_VN.ƒS.Character.hideAll();
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Schauen Sie, wie brillant die Farben sind! Was meinen Sie, für nur zwei Goldstücke?"');
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_34_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Für mich ist so eine Spielerei nichts! Aber vielleicht für Mutti? Sie ist doch Künstlerin."');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_03_IntroMirror);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Die Spiegel eignen sich wunderbar als Geschenk für Ihre Frau!"');
        // await ƒS.Speech.tell(characters.Mama, '"Sie ist Künstlerin, wissen Sie; mit diesem Spiegel könnte sie vielleicht ihre Gedanken besser visualisieren, manchmal fehlt ihr das."');
        // await ƒS.Speech.tell(characters.mirrorMerchant, '"Das denke ich doch auch! Als Inspiration dient der Spiegel geradezu vorzüglich!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Na gut, wir probieren es mal aus! Dann nehmen wir diesen hier."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Mama überreicht dem Händler die Goldstücke aus ihrer Geldbörse. Der strahlende Händler packt den Spiegel vorsichtig in glitzerndes Papier und steckt ihn Mama in die Tasche. Du hast ein komisches Gefühl dabei, schüttelst es aber ab und denkst, es ist bestimmt nur dein knurrender Magen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"So, alles erledigt, ab nach Hause!"');
        Spiegel_VN.ƒS.Character.hideAll();
        return "01_CS Arrival Home";
    }
    Spiegel_VN.Chp01_CS_PerchaseMirror = Chp01_CS_PerchaseMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_00_ArrivalHome() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update();
        // ** RANDOM TEXT ***
        let randomTextChp02FamilyHome = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 4);
        switch (randomTextChp02FamilyHome) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Zuhause ist es einfach so gemütlich.");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was gibt es denn zu essen?"');
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Wie das duftet!"');
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du überlegst, wann du hoch in dein Zimmer kannst.");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Endlich daheim."');
                break;
        }
        let Chp02PickSceneElementAnswers = {
            PickScenePickHerbs: "Kräuter ernten",
            PickSceneKitchen: "Einkäufe wegbringen",
            PickSceneDiscoverBedroom: "(Erkunden) Dein Schlafzimmer anschauen",
            PickSceneContinue: "Weiter"
        };
        if (!Spiegel_VN.dataForSave.pickedChp02_PickHerbsGarden ||
            !Spiegel_VN.dataForSave.pickedChp02_Kitchen) {
            delete Chp02PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        if (Spiegel_VN.dataForSave.pickedChp02_PickHerbsGarden) {
            delete Chp02PickSceneElementAnswers.PickScenePickHerbs;
        }
        if (Spiegel_VN.dataForSave.pickedChp02_Kitchen) {
            delete Chp02PickSceneElementAnswers.PickSceneKitchen;
        }
        let Chp01PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp01PickSceneElement) {
            case Chp02PickSceneElementAnswers.PickScenePickHerbs:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich geh` kurz die Kräuter holen, Mutti!"');
                Spiegel_VN.ƒS.Speech.clear();
                return "02_03 Pick Herbs";
                break;
            case Chp02PickSceneElementAnswers.PickSceneKitchen:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Zuerst schnell die Einkäufe wegbringen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_Kitchen";
                break;
            case Chp02PickSceneElementAnswers.PickSceneDiscoverBedroom:
                Spiegel_VN.ƒS.Character.hideAll();
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_E Discover bedroom";
                break;
            case Chp02PickSceneElementAnswers.PickSceneContinue:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Jetzt gibt's Essen!");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_01 Dinner at home";
                break;
        }
    }
    Spiegel_VN.Chp02_00_ArrivalHome = Chp02_00_ArrivalHome;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_01_Dinner() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_01_Dinner);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(80, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress3_smile, Spiegel_VN.ƒS.positionPercent(45, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos3_laugh, Spiegel_VN.ƒS.positionPercent(10, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_laugh, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Hey ' + Spiegel_VN.dataForSave.nameProtagonist + ' da bist du! Setz’ dich hin. Wir warten schon."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Möchtest du Karotten, mein Schatz?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Evarius);
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos1_angry, Spiegel_VN.ƒS.positionPercent(10, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress1_eyeroll, Spiegel_VN.ƒS.positionPercent(45, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Ich will auf gar keinen Fall Karotten, Mutti!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ich auch nicht!"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_angry, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Ihr esst, was Mutti gekocht hat, sonst gibt es nichts! Still jetzt."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_frown, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        // await ƒS.Speech.tell(characters.Mutti, '"Nur ein bisschen, ihr zwei, in Ordnung?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Evarius);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos3_frown, Spiegel_VN.ƒS.positionPercent(10, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Ach, Mutti …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das übliche Chaos beim Essen. Mutti lässt sich auch immer so schnell erweichen! Mama schaut dich von der Seite an.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_neutral, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Alles in Ordnung?"');
        // await ƒS.Speech.tell(characters.maincharacter, "Du musst lächeln.");
        // *** SCENE OPTIONS ***
        let Chp02PickSceneElementAnswersDinner = {
            iSayDistract: "Ablenken.",
            iSayFight: "Streit ansprechen.",
            iSaySilent: "Nicken und Schweigen."
        };
        // if (
        //   !dataForSave.pickedChp02_DinnerScene || 
        //   !dataForSave.pickedChp02_PickHerbsGarden ||
        //   !dataForSave.pickedChp02_TestWithElena ||
        //   !dataForSave.pickedChp02_FightNeighbor
        // ) {
        //   delete Chp02PickSceneElementAnswers.iSayContinue;
        //   // return Chp01_CS_ArrivalHome();
        // }
        let Chp02PickSceneElementDinner = await Spiegel_VN.ƒS.Menu.getInput(Chp02PickSceneElementAnswersDinner, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02PickSceneElementDinner) {
            case Chp02PickSceneElementAnswersDinner.iSayDistract:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ist alles in Ordnung! Nur etwas müde. Aber den Spiegel, den möchte ich heute noch ausprobieren! Bist du auch gespannt darauf, wie oder ob er funktioniert?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Mutti überhört dich und schaltet sich ein.");
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_smirk, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Ich bin auch gespannt! Magische Dinge gab es bei uns schon lange nicht mehr, wenn überhaupt. Gleich nach dem Essen!"');
                Spiegel_VN.ƒS.Speech.clear();
                // return "02_021 Test Mirror";
                break;
            case Chp02PickSceneElementAnswersDinner.iSayFight:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Klar, Mama. Ich habe nur eben diesen seltsamen Streit von Henri und Balduin mitbekommen. Hast du es auch gehört?"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_shocked, Spiegel_VN.ƒS.positionPercent(80, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Die haben sich schon heute Morgen gestritten. Aber gerade eben habe ich nichts mitbekommen. Was war denn los?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ach, vielleicht war es nichts Ernstes. Henri ärgerte sich über Balduin, weil er wohl dauernd in den magischen Spiegel schaut. Das ist doch komisch, nicht?"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_angry, Spiegel_VN.ƒS.positionPercent(80, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Worüber sollte man sich denn bei dem Spiegel streiten? Vielleicht hast du dich verhört."');
                // await ƒS.Speech.tell(characters.maincharacter, "Mama dreht sich um und mahnt Evarius ab, weil er mit den Karotten Fange gespielt hat. Du hast schon fertig gegessen, hast aber immer noch dieses komische Gefühl im Bauch.");
                Spiegel_VN.ƒS.Speech.clear();
                // return "02_021 Test Mirror";
                break;
            case Chp02PickSceneElementAnswersDinner.iSaySilent:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Na gut! Wenn du nicht reden willst. Vielleicht kommen Mutti und ich heute Abend mit einer heißen Schokolade in deinem Zimmer vorbei?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du weißt, sie will es dir nur recht machen. Trotzdem willst du noch den Spiegel austesten. Stimmt das wirklich, was der Händler gesagt hat?");
                Spiegel_VN.ƒS.Speech.clear();
                // return "02_021 Test Mirror";
                break;
        }
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_smile, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Hat es euch denn geschmeckt?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Alle stimmen lautstark mit ein. Gegen Muttis vorzügliches Kochen hat keiner etwas einzuwenden.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress1_angry, Spiegel_VN.ƒS.positionPercent(45, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Können wir nun endlich den Spiegel testen?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_laugh, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Warum macht ihr Kinder das nicht zuerst allein? Ich komme nach dem Abwasch gleich dazu."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
        let Chp02TestMirrorElementAnswers = {
            iSayTestWithKailani: "Mit Kailani testen",
            iSayTestWithEvarius: "Mit Evarius testen"
        };
        let Chp02TestMirrorElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02TestMirrorElement) {
            case Chp02TestMirrorElementAnswers.iSayTestWithKailani:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Komm’, Kailani, testen wir das neue Ding!"');
                return "02_021 Test Mirror Kailani";
                break;
            case Chp02TestMirrorElementAnswers.iSayTestWithEvarius:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Komm’, Evarius, testen wir das neue Ding!"');
                return "02_021 Test Mirror Evarius";
                break;
        }
    }
    Spiegel_VN.Chp02_01_Dinner = Chp02_01_Dinner;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_021_TestMirrorE() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos2_laugh, Spiegel_VN.ƒS.positionPercent(45, 100));
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        // await ƒS.Speech.tell(characters.maincharacter, '"Komm’, Evarius, testen wir das neue Ding!"');
        // ƒS.Character.hide(characters.Evarius);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Auja!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er packt den Spiegel und hebt ihn sich vors Gesicht.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Evarius);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.profile_neutral, Spiegel_VN.ƒS.positionPercent(45, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Vorsicht, Evarius! Der ist Muttis und war teuer. Also, wie ging der Spruch nochmal?"');
        Spiegel_VN.ƒS.Speech.clear();
        do {
            let Chp02TestMirrorElementAnswers2 = {
                iSayAnswer1: "Spieglein, Spieglein, zeige mir das Träumelein.",
                iSayAnswer2: "Spieglein, Spieglein, weise mir das Wünschlein",
                iSayAnswer3: "Spieglein, Spieglein, weise mir das Träumlein"
            };
            let Chp02TestMirrorElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorElementAnswers2, "choicesCSSclass");
            switch (Chp02TestMirrorElement2) {
                case Chp02TestMirrorElementAnswers2.iSayAnswer1:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich glaube, es war etwas anderes!"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02TestMirrorElementAnswers2.iSayAnswer2:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Nicht ganz … Wie hat sich der Spiegelhändler nochmal ausgedrückt?"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02TestMirrorElementAnswers2.iSayAnswer3:
                    Spiegel_VN.dataForSave.pickedRightChoiceMirror = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das war’s! Probier’ den Spruch mal."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedRightChoiceMirror);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was wünschen wir uns denn nun?"');
        Spiegel_VN.ƒS.Character.hideAll();
        Spiegel_VN.ƒS.update();
        do {
            let Chp02TestMirrorScenesOptionsE = {
                iSayAnswer1: "Strand.",
                iSayAnswer2: "Bergsee",
                iSayAnswer3: "Palmen",
                iSayAnswer4: "Fliegen",
                iSayAnswer5: "Tauchen",
                iSayContinue: "Weiter"
            };
            let Chp02TestMirrorScenesE = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorScenesOptionsE, "choicesCSSclass");
            switch (Chp02TestMirrorScenesE) {
                case Chp02TestMirrorScenesOptionsE.iSayAnswer1:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneMBeach);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Schau mal, wie stark ich aussehe!"');
                    break;
                case Chp02TestMirrorScenesOptionsE.iSayAnswer2:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneMWater);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Mit dem Schwert bin ich ein richtiger Prinz."');
                    break;
                case Chp02TestMirrorScenesOptionsE.iSayAnswer3:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneMTrees);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das sind aber tolle Farben, findest du nicht auch?"');
                    break;
                case Chp02TestMirrorScenesOptionsE.iSayAnswer4:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneMFly);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Ich wollte schon immer mal fliegen! Wie Superman!"');
                    break;
                case Chp02TestMirrorScenesOptionsE.iSayAnswer5:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneMCoral);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Schau mal, wie stark ich aussehe!"');
                    break;
                case Chp02TestMirrorScenesOptionsE.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp02MirrorScenesContinue = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Wie toll, oder?"');
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp02MirrorScenesContinue);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_angry, Spiegel_VN.ƒS.positionPercent(80, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Evarius.pose.pos2_smile, Spiegel_VN.ƒS.positionPercent(45, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_smirk, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"So, jetzt ab auf eure Zimmer! Versucht bitte, so früh wie möglich schlafen zu gehen. Ich weiß, es graut euch schon davor, aber nächste Woche geht die Schule wieder los."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Also nicht wieder die ganze Nacht wachbleiben! Evarius, dich meine ich. Gute Nacht"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverBedroom);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Gute Nacht!");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Ein paar Tage später ...");
        return "03_00 New day";
    }
    Spiegel_VN.Chp02_021_TestMirrorE = Chp02_021_TestMirrorE;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_021_TestMirrorK() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        // await ƒS.Speech.tell(characters.maincharacter, '"Komm’, Kailani, testen wir das neue Ding!"');
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress1_happy, Spiegel_VN.ƒS.positionPercent(45, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Auja!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie packt den Spiegel und hebt ihn sich vors Gesicht.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Vorsicht, Kailani! Der ist Muttis und war teuer. Also, wie ging der Spruch nochmal?"');
        do {
            let Chp02TestMirrorElementAnswersOptions2 = {
                iSayAnswer1: "Spieglein, Spieglein, zeige mir das Träumelein.",
                iSayAnswer2: "Spieglein, Spieglein, weise mir das Wünschlein",
                iSayAnswer3: "Spieglein, Spieglein, weise mir das Träumlein"
            };
            let Chp02TestMirrorElementOptions = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorElementAnswersOptions2, "choicesCSSclass");
            switch (Chp02TestMirrorElementOptions) {
                case Chp02TestMirrorElementAnswersOptions2.iSayAnswer1:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich glaube, es war etwas anderes!"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02TestMirrorElementAnswersOptions2.iSayAnswer2:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Nicht ganz … Wie hat sich der Spiegelhändler nochmal ausgedrückt?"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02TestMirrorElementAnswersOptions2.iSayAnswer3:
                    Spiegel_VN.dataForSave.pickedRightChoiceMirror = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das war’s! Probier’ den Spruch mal."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedRightChoiceMirror);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was wünschen wir uns denn nun?"');
        Spiegel_VN.ƒS.Character.hideAll();
        do {
            let Chp02TestMirrorScenesOptions = {
                iSayAnswer1: "Strand.",
                iSayAnswer2: "Bergsee",
                iSayAnswer3: "Palmen",
                iSayAnswer4: "Fliegen",
                iSayAnswer5: "Tauchen",
                iSayContinue: "Weiter"
            };
            let Chp02TestMirrorScenes = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorScenesOptions, "choicesCSSclass");
            switch (Chp02TestMirrorScenes) {
                case Chp02TestMirrorScenesOptions.iSayAnswer1:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneFBeach);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Schau mal, wie schön meine Haare glänzen!"');
                    break;
                case Chp02TestMirrorScenesOptions.iSayAnswer2:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneFWater);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ach, was für ein tolles Kleid."');
                    break;
                case Chp02TestMirrorScenesOptions.iSayAnswer3:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneFTrees);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das sind aber tolle Farben, findest du nicht auch?"');
                    break;
                case Chp02TestMirrorScenesOptions.iSayAnswer4:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneFFly);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Juchu! Ich wollte schon immer mal fliegen. Wie eine Fee."');
                    break;
                case Chp02TestMirrorScenesOptions.iSayAnswer5:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneFCoral);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Schau mal, wie schön meine Haare glänzen!"');
                    break;
                case Chp02TestMirrorScenesOptions.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp02MirrorScenesContinue = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Wie toll, oder?"');
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp02MirrorScenesContinue);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_angry, Spiegel_VN.ƒS.positionPercent(80, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress1_shrug, Spiegel_VN.ƒS.positionPercent(45, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_smirk, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"So, jetzt ab auf eure Zimmer! Versucht bitte, so früh wie möglich schlafen zu gehen. Ich weiß, es graut euch schon davor, aber nächste Woche geht die Schule wieder los."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Also nicht wieder die ganze Nacht wachbleiben! Gute Nacht"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverBedroom);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Gute Nacht!");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Ein paar Tage später ...");
        return "03_00 New day";
    }
    Spiegel_VN.Chp02_021_TestMirrorK = Chp02_021_TestMirrorK;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_Kitchen() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchen);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        Spiegel_VN.dataForSave.pickedChp02_Kitchen = true;
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du schleppst die Lebensmittel in die Küche und atmest erstmal tief ein. Es duftet nach Knoblauch und Tomaten. Mutti kann so gut kochen!");
        let Chp02PickSceneElementAnswersKitchen = {
            PickScenePantry: "(Erkunden) In die Speisekammer",
            PickSceneOven: "(Erkunden) Ofen beheizen",
            PickSceneContinue: "Zurück ins Wohnzimmer"
        };
        let Chp02PickSceneElementAnswers = await Spiegel_VN.ƒS.Menu.getInput(Chp02PickSceneElementAnswersKitchen, "choicesCSSclass");
        switch (Chp02PickSceneElementAnswers) {
            case Chp02PickSceneElementAnswersKitchen.PickScenePantry:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchenPantry);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die trockenen Lebensmittel kannst du alle in die Speisekammer einräumen. Hier ist es immer ziemlich voll, weil Mutti gerne viele Lebensmittel auf Vorrat bunkert. Für alle Notfälle, sagt sie.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_Kitchen";
                break;
            case Chp02PickSceneElementAnswersKitchen.PickSceneOven:
                await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.cracklingfire, 0.1, 1, true);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchenOven);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das Holz muss nachgelegt werden.");
                Spiegel_VN.ƒS.Speech.clear();
                Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.cracklingfire, 0, 0, false);
                return "02_Kitchen";
                break;
            case Chp02PickSceneElementAnswersKitchen.PickSceneContinue:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "So, fertig.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_00 Arrival Home";
                break;
        }
    }
    Spiegel_VN.Chp02_Kitchen = Chp02_Kitchen;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_03_PickHerbs() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_03_PickHerbs);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        Spiegel_VN.dataForSave.pickedChp02_PickHerbsGarden = true;
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Drinnen wird es gerade laut, wie immer um die Essenszeit. Deshalb schlüpfst du schnell in den Garten.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du kramst in deiner Hosentasche und findest ein paar übrig gebliebene Sonnenblumenkerne vom Hühnerfüttern gestern. Streust du sie über den Boden oder behältst du sie in der Tasche?");
        let Chp02ElementAnswersPickHerbs = {
            iSaySprinkle: "Streuen",
            iSayKeep: "Behalten"
        };
        let Chp02Element = await Spiegel_VN.ƒS.Menu.getInput(Chp02ElementAnswersPickHerbs, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02Element) {
            case Chp02ElementAnswersPickHerbs.iSaySprinkle:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du streust sie über den Boden und freust dich schon auf den kleinen Sonnenblumenwald, der bald entsteht.");
                Spiegel_VN.ƒS.Speech.clear();
                // return "02_03 Pick Herbs";
                break;
            case Chp02ElementAnswersPickHerbs.iSayKeep:
                Spiegel_VN.dataForSave.pickedSeeds = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du steckst die Samen wieder in die Tasche. Wer weiß, ob du sie noch für etwas gebrauchen kannst.");
                Spiegel_VN.ƒS.Speech.clear();
                // return "02_03 Pick Herbs";
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Kräuter sehen für die Jahreszeit schon gut aus. Du bückst dich, um ein paar Basilikumblätter abzuzupfen, als du eine Tür knallen hörst.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_04_FightNeighborNeighbors);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell("Nachbar", '"Henri! Henri, bleib’ doch hier!"');
        await Spiegel_VN.ƒS.Speech.tell("Nachbarin", '"Mir reichts, Balduin! Den ganzen Tag starrst du schon auf das Ding!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ach, die Nachbarn streiten schon wieder.");
        await Spiegel_VN.ƒS.Speech.tell("Nachbar", '"Es tut mir ja leid! Aber Henri, der Spiegel ist doch so schön."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Der Spiegel? Redet Balduin etwa von dem magischen Spiegel, den es heute auf dem Markt zu kaufen gab?");
        await Spiegel_VN.ƒS.Speech.tell("Nachbarin", '"Ja, der ist schön. Das ist doch das Problem. Seit heute Morgen sitzt du davor und tust nichts anderes, als den schönen Spiegel anzustarren."');
        await Spiegel_VN.ƒS.Speech.tell("Nachbarin", '"Was ist mit dem Holz? Der Karren sollte repariert werden? Und das Essen gekocht? Das waren heute alles deine Aufgaben!"');
        await Spiegel_VN.ƒS.Speech.tell("Nachbar", '"Henri, ich weiß, tut mir leid! Hör mir doch zu. Ich tu ihn schon weg! Bitte, komm herein. Die Nachbarn schauen doch schon."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Nanu, was war denn da los? Balduin kann sich von dem Spiegel nicht losreißen? Sah er auch anders aus als sonst? Vielleicht frage ich Mutti, ob er krank ist. Sie wartet bestimmt schon lange auf die Kräuter, ups.");
        let Chp02PickHerbsAnswersContinue = {
            iSayContinue: "Zurück ins Wohnzimmer"
        };
        let Chp02PickHerbsContinue = await Spiegel_VN.ƒS.Menu.getInput(Chp02PickHerbsAnswersContinue, "choicesCSSclass");
        switch (Chp02PickHerbsContinue) {
            case Chp02PickHerbsAnswersContinue.iSayContinue:
                return "02_00 Arrival Home";
                break;
        }
    }
    Spiegel_VN.Chp02_03_PickHerbs = Chp02_03_PickHerbs;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverBedroom() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverBedroom);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dein eigenes Reich. Hier lässt dich deine Familie, meistens zumindest, in Ruhe und du kannst entspannen.");
        let Chp02DiscoverBedroomElementAnswers = {
            iSayDiscoverDesk: "(Erkunden) Was liegt da auf dem Tisch (Tagebuch)?",
            iSayDiscoverBooks: "(Erkunden) Bücher anschauen",
            iSayLeave: "Zurück"
        };
        let Chp02DiscoverBedroomElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02DiscoverBedroomElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02DiscoverBedroomElement) {
            case Chp02DiscoverBedroomElementAnswers.iSayDiscoverDesk:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverBedroomDiary);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Mittwoch, 16. Februar: Heute morgen habe ich mich wirklich geschämt. Ich habe Kailani von der Schule abgeholt und als sie rauskam, hat ihr ein Junge “Schweinchen!” hinterhergerufen.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie wurde ganz rot und wollte danach kein Wort mehr mit mir reden. Nicht mal ein Wort habe ich dem Typ gesagt. Ich habe Kailani gar nicht verteidigt!");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_E Discover bedroom";
                break;
            case Chp02DiscoverBedroomElementAnswers.iSayDiscoverBooks:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du lässt deinen Blick über deine kleine Büchersammlung wandern. Schon immer hast du lieber im Wald gelesen, als mit Anderen Räuber und Gendarm zu spielen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_E Discover bedroom";
                break;
            case Chp02DiscoverBedroomElementAnswers.iSayLeave:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_00 Arrival Home";
                break;
        }
    }
    Spiegel_VN.Chp02_E_DiscoverBedroom = Chp02_E_DiscoverBedroom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_00_NewDay() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update();
        // ** RANDOM TEXT ***
        let randomTextChp03NewDay = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 4);
        switch (randomTextChp03NewDay) {
            case 1:
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_smile, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, "Hallo, Schatz!");
                Spiegel_VN.ƒS.Character.hideAll();
                break;
            case 2:
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_smile, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Denkst du an deine Aufgaben?"');
                Spiegel_VN.ƒS.Character.hideAll();
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Schule ging so ewig ...");
                break;
            case 4:
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_smile, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ich hab' noch so viel zu erledigen!");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Endlich Wochenende.");
                break;
        }
        let Chp03PickSceneElementAnswers = {
            // PickSceneDressmaker: "Jacken abholen",
            PickSceneChoresWithKailani: "Mit Kailani Hausarbeiten machen",
            PickSceneDiscoverForest: "(Erkunden) Im Wald rumgucken",
            PickSceneDiscoverLibrary: "(Erkunden) Die Bücherei erkunden",
            PickSceneContinue: "Weiter"
        };
        if (
        // !dataForSave.pickedChp03_Dressmaker ||
        !Spiegel_VN.dataForSave.pickedChp03_ChoresWithKailani) {
            delete Chp03PickSceneElementAnswers.PickSceneContinue;
        }
        // if (dataForSave.pickedChp03_Dressmaker) {
        //   delete Chp03PickSceneElementAnswers.PickSceneDressmaker;
        // }
        if (Spiegel_VN.dataForSave.pickedChp03_ChoresWithKailani) {
            delete Chp03PickSceneElementAnswers.PickSceneChoresWithKailani;
        }
        let Chp03PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp03PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp03PickSceneElement) {
            // case Chp03PickSceneElementAnswers.PickSceneDressmaker:
            //   await ƒS.Speech.tell(characters.maincharacter, '"Gut, dann geh` ich mal zum Schneider!"');
            //   ƒS.Speech.clear();
            //   return "03_01 Dressmaker"; 
            //   break;
            case Chp03PickSceneElementAnswers.PickSceneChoresWithKailani:
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_shrug_eyeroll, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Komm Kailani, gehen wir!"');
                Spiegel_VN.ƒS.Speech.clear();
                Spiegel_VN.ƒS.Character.hideAll();
                return "03_021 Chores with Kailani";
                break;
            case Chp03PickSceneElementAnswers.PickSceneDiscoverForest:
                await Spiegel_VN.ƒS.Speech.tell("", "");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_E Discover Forest";
                break;
            case Chp03PickSceneElementAnswers.PickSceneDiscoverLibrary:
                await Spiegel_VN.ƒS.Speech.tell("", "");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_E Discover Library";
                break;
            case Chp03PickSceneElementAnswers.PickSceneContinue:
                await Spiegel_VN.ƒS.Speech.tell("", "");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_CS Kailani is missing";
                break;
        }
    }
    Spiegel_VN.Chp03_00_NewDay = Chp03_00_NewDay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_01_Dressmaker() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp05_Forestpath);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        Spiegel_VN.dataForSave.pickedChp03_Dressmaker = true;
        if (!Spiegel_VN.dataForSave.pickedChp03_ChoresWithKailani) {
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du machst dich auf den Weg zum Schneider. Kailani musstest du zuhause lassen, weil sie sich strikt geweigert hat, mitzukommen. Sie ist sofort auf ihr Zimmer, nachdem ihr wieder zurück wart. Bestimmt wünscht sie sich mit dem Spiegel weit, weit weg von hier.");
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Einerseits verstehst du ihr Bedürfnis, sich schöne Dinge anzuschauen. Trotzdem machst du dir Sorgen. Dass sie in letzter Zeit öfter schlecht gelaunt ist, ist normal in dem Alter. Jetzt wo du aber darüber nachdenkst, fällt dir auf, dass sie seit dem Marktbesuch letzten Samstag besonders bedrückt ist. Hat das etwa mit dem Spiegel zu tun?");
        }
        if (Spiegel_VN.dataForSave.pickedChp03_ChoresWithKailani) {
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du machst dich auf den Weg zum Schneider. Kailani musstest du zuhause lassen, weil sie sich strikt geweigert hat, mitzukommen.");
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Euer Gespräch vorhin ist nicht so gelaufen, wie du es dir vorgestellt hast. Irgendetwas bedrückt sie doch, aber sie will es nicht erzählen!");
        }
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_01_Dressmaker);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_01_DressmakerMan);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Hallo! Ich wurde geschickt, um unsere Jacken abzuholen. Meine Mutti hat gesagt, sie wären heute fertig?"');
        await Spiegel_VN.ƒS.Speech.tell("Schneider", '"Guten Tag! Ah, die drei Winterjacken. Die sollten ausgelassen werden? Ja, ausgelassen. Ich hatte sie doch neulich herumliegen, Moment …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Während du wartest, bemerkst du das zarte Hellgrün, dass sich schon an den Spitzen der Bäume zeigt. Der Frühling kommt!");
        await Spiegel_VN.ƒS.Speech.tell("Schneider", '"Ähem. Ja, genau. Deine Mutti hat sie vorbeigebracht, richtig. Also, es ist so. Ich habe sie noch nicht ganz fertig. Etwas kam dazwischen, weißt du."');
        await Spiegel_VN.ƒS.Speech.tell("Schneider", '"Ich habe einfach so viel zu tun. Ich will mich doch nicht hetzen. Du möchtest sicher, dass sie auch hübsch sind, nicht wahr?"');
        let Chp03DressmakerElementAnswers = {
            iSayNo: "Hauptsache, warm.",
            iSayYes: "Das Aussehen zählt."
        };
        let Chp03DressmakerElement = await Spiegel_VN.ƒS.Menu.getInput(Chp03DressmakerElementAnswers, "choicesCSSclass");
        switch (Chp03DressmakerElement) {
            case Chp03DressmakerElementAnswers.iSayNo:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Mir ist das eigentlich egal, wie die Jacke aussieht. Hauptsache, sie ist wieder warm!"');
                break;
            case Chp03DressmakerElementAnswers.iSayYes:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Mir ist das eigentlich egal, wie die Jacke aussieht. Aber für Kailani ist es sicherlich wichtig, dass ihre Winterjacke nicht verfranzt ist."');
                await Spiegel_VN.ƒS.Speech.tell("Schneider", '"Ah, sehr gut! Gut aussehen ist sehr wichtig, ja ja."');
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell("Schneider", '"Dann sind wir uns einig. So viele Aufträge! Und so viele Ablenkungen, ja ja. Ich bin auch nicht mehr so jung wie du!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das ist in Ordnung. Kann ich sie nächste Woche abholen?"');
        await Spiegel_VN.ƒS.Speech.tell("Schneider", '"Ja, ja ja. Nächste Woche. Bis dahin sind sie auf jeden Fall fertig. Ich rasche, ich rasche! Auf bald!"');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_01_Dressmaker);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Was für ein komischer Kauz. Es gibt zwar eine andere Schneiderin im Dorf, aber Mutti kennt ihn noch von früher. Was macht er denn den ganzen Tag? So viel kann er gar nicht zu tun haben, weil die meisten Leute ihre Kleider woanders hinbringen. Wirklich seltsam.");
        return "03_00 New day";
    }
    Spiegel_VN.Chp03_01_Dressmaker = Chp03_01_Dressmaker;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_021_ChoresWithKailani() {
        Spiegel_VN.dataForSave.pickedChp03_ChoresWithKailani = true;
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_shrug_eyeroll, Spiegel_VN.ƒS.positionPercent(45, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was willst du machen?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Mir egal ..."');
        let Chp03ChoresKailaniElementAnswers = {
            PickSceneWaterwell: "Wasser holen gehen.",
            PickSceneWoodChopping: "Holz hacken."
        };
        let Chp03ChoresKailaniElement = await Spiegel_VN.ƒS.Menu.getInput(Chp03ChoresKailaniElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp03ChoresKailaniElement) {
            case Chp03ChoresKailaniElementAnswers.PickSceneWaterwell:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_022_Marketplace_empty);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Komm, Kailani, wir müssen Wasser vom Brunnen holen. Hol’ doch schon Mal die Eimer!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Uff ..."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp03ChoresKailaniElementAnswers.PickSceneWoodChopping:
                await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.wood, 0.8, 1, false);
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_021_FirewoodKailani);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Komm, Kailani, wir müssen Holz hacken. Hol’ doch schon Mal den Korb!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Uff ..."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Kailani ist heute wirklich schlecht drauf. Dabei ist eure Beziehung eigentlich gut.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Irgendwie kommt sie dir etwas grauer vor. Du nimmst dir vor, ihr auf den Zahn zu fühlen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kailani, geht`s dir gut? Treibt dich etwas um?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_angry, Spiegel_VN.ƒS.positionPercent(45, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ach, lass mich in Ruhe!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Oh je. Da musst du wohl anders ran.");
        let Chp03ChoresKailaniElementAnswers1 = {
            iSayWorried: "Besorgt",
            iSayTrusting: "Vertraut"
        };
        let Chp03ChoresKailaniElement1 = await Spiegel_VN.ƒS.Menu.getInput(Chp03ChoresKailaniElementAnswers1, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp03ChoresKailaniElement1) {
            case Chp03ChoresKailaniElementAnswers1.iSayWorried:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich mache mir nur Sorgen um dich. Gibt es etwas, worüber du dir Gedanken machst?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Nö."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ach Kailani, ich sehe doch, dass es dir nicht gut geht! Also, spuck’s aus. Ich erzähle unseren Eltern auch nichts davon, wenn du das nicht willst."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Hm. Naja, also. Ich …"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Hoffentlich vertraut sie sich dir an.");
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_smile, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp03ChoresKailaniElementAnswers1.iSayTrusting:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Möchtest du wirklich nichts erzählen, was dich bedrückt? Ich sage es keinem, versprochen! Ich will doch, dass du mir vertrauen kannst."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Also, dieser Spiegel. Der von Mutti. Der ist halt echt toll. Ich kann mir so viel wünschen, wie ich will, und er zeigt es mir! Verstehst du, was ich meine?"');
        let Chp03ChoresKailaniElementAnswers11 = {
            iSayGood: '"Klingt gut"',
            iSayBother: '"Stört dich etwas?"',
            iSaySilent: "Nicken und schweigen"
        };
        let Chp03ChoresKailaniElement11 = await Spiegel_VN.ƒS.Menu.getInput(Chp03ChoresKailaniElementAnswers11, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp03ChoresKailaniElement11) {
            case Chp03ChoresKailaniElementAnswers11.iSayGood:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das klingt doch gut, oder? Dann macht er genau das, was er soll."');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Naja, schon. Das stimmt. Das gefällt mir einfach. Die Farben sind superschön und ich kann mich dabei beobachten, wie ich diese ganzen tollen Sachen mache."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was schaust du dir denn so in dem magischen Spiegel an?"');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_happy, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Alles Mögliche! Ich kann Zeitreisen, fliegen, Tiere beobachten, reich sein …"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Und ich bin soo hübsch in dem Spiegel! Ganz schlank und mit langen Haaren. So wollte ich schon immer aussehen."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und deshalb schaust du so gerne hinein, weil du dich darin hübscher findest? Aber du bist doch in echt schon hübsch!"');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Kailani verstummt und zupft an ihrem Kleid herum. Du runzelst die Stirn. Warte – Ist das Kleid in der Wäsche verblichen?");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Können wir einfach unser Zeug fertig machen? Ich habe keine Lust mehr, hier rumzustehen."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp03ChoresKailaniElementAnswers11.iSayBother:
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und was stört dich daran?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Gar nichts, das macht einfach Spaß. Die Farben sind superschön und ich kann mich dabei beobachten, wie ich diese ganzen tollen Sachen mache."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was schaust du dir denn so in dem magischen Spiegel an?"');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_happy, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Alles Mögliche! Ich kann Zeitreisen, fliegen, Tiere beobachten, reich sein …"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Und ich bin soo hübsch in dem Spiegel! Ganz schlank und mit langen Haaren. So wollte ich schon immer aussehen."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und deshalb schaust du so gerne hinein, weil du dich darin hübscher findest? Aber du bist doch in echt schon hübsch!"');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Kailani verstummt und zupft an ihrem Kleid herum. Du runzelst die Stirn. Warte – Ist das Kleid in der Wäsche verblichen?");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Können wir einfach unser Zeug fertig machen? Ich habe keine Lust mehr, hier rumzustehen."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp03ChoresKailaniElementAnswers11.iSaySilent:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Das macht einfach Spaß. Die Farben sind superschön und ich kann mich dabei beobachten, wie ich diese ganzen tollen Sachen mache."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was schaust du dir denn so in dem magischen Spiegel an?"');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_happy, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Alles Mögliche! Ich kann Zeitreisen, fliegen, Tiere beobachten, reich sein …"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Und ich bin soo hübsch in dem Spiegel! Ganz schlank und mit langen Haaren. So wollte ich schon immer aussehen."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und deshalb schaust du so gerne hinein, weil du dich darin hübscher findest? Aber du bist doch in echt schon hübsch!"');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Kailani verstummt und zupft an ihrem Kleid herum. Du runzelst die Stirn. Warte – Ist das Kleid in der Wäsche verblichen?");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Können wir einfach unser Zeug fertig machen? Ich habe keine Lust mehr, hier rumzustehen."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        return "03_00 New day";
    }
    Spiegel_VN.Chp03_021_ChoresWithKailani = Chp03_021_ChoresWithKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverForest() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp05_Forestpath);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ein leichter Wind fegt durch die Blätter und lässt die Zweige wie winkende Arme hin und her streifen. Deine Eltern haben euch Kinder jeden Tag im Wald spielen lassen. Ihr durftet immer so weit rausgehen, wie ihr wolltet.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Aber eine natürliche Grenze gab es doch: an einer bestimmten Stelle im Wald wachsen die Bäume so dicht zusammen, dass man gar nicht durchschauen kann. Als kleines Kind hast du dich gefragt, was dahinter wohl verborgen ist ...");
        return "03_00 New day";
    }
    Spiegel_VN.Chp03_E_DiscoverForest = Chp03_E_DiscoverForest;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverLibrary() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverLibrary);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dein Lieblingsort in diesem Dorf: die Bücherei. Hier versteckst du dich gerne, wenn es draußen zu laut wird.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, " Das Besondere ist das Bücherregal der Alten Zeit. Da stehen die wenigen Bücher, die von früher überlebt haben. Die Schrift kannst du kaum noch lesen, trotzdem blätterst du gerne durch, weil dich die Alte Welt fasziniert.");
        // await ƒS.Speech.tell(characters.maincharacter, "Früher wurden die Erdteile durch unsichtbare Kräfte zusammengehalten, bis die Kraft zerstört wurde und sie auseinanderbrachen. Mehr kannst du von den zerfallenen Seiten jedoch nicht erfahren.");
        return "03_00 New day";
    }
    Spiegel_VN.Chp03_E_DiscoverLibrary = Chp03_E_DiscoverLibrary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_CS_KailaniMissing() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_laugh, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Und, wart ihr erfolgreich?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Naja, unsere Aufgaben haben wir erledigt, aber Kailani war bisschen komisch."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Ja, gerade ist sie etwas gereizt. Das wird bestimmt wieder. Ich muss noch etwas arbeiten, dann können wir später zusammen kochen, ja? Mama sollte auch bald nach Hause kommen."');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du willst nur schnell nach Kailani schauen, bevor du dich zurückziehst.");
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_KailaniBedroom);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kailani? Bist du da?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Der Spiegel liegt glitzernd auf dem Bett. Von Kailani fehlt aber jede Spur. Ist sie vielleicht bei Evarius?");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Evarius?"');
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos2_frown, Spiegel_VN.ƒS.positionPercent(30, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Hast du Kailani gesehen?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Nö, seit Stunden nicht. Ich dachte, sie wäre mit dir?"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Komisch. Wo kann sie denn sein? Du suchst mal unten nach ihr.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        let Chp03SearchKailaniElementAnswers = {
            PickSceneSearchGarden: "Im Garten suchen",
        };
        // if (
        //   !dataForSave.pickedChp03_SearchGarden ||
        //   !dataForSave.pickedChp03_SearchKitchen
        // ) {
        //   delete Chp03SearchKailaniElementAnswers.PickSceneContinue;
        // }
        let Chp03SearchKailaniElement = await Spiegel_VN.ƒS.Menu.getInput(Chp03SearchKailaniElementAnswers, "choicesCSSclass");
        switch (Chp03SearchKailaniElement) {
            case Chp03SearchKailaniElementAnswers.PickSceneSearchGarden:
                Spiegel_VN.dataForSave.pickedChp03_SearchGarden = true;
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_03_PickHerbs);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie kann eigentlich nicht hier sein. Schließlich verbringt sie gerade die meiste Zeit in ihrem Zimmer.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du schaust in jede Ecke, während die Vögel unschuldig zwitschern. Keine Kailani.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchen);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_smirk, Spiegel_VN.ƒS.positionPercent(55, 100));
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Mutti, hast du Kailani gesehen?"');
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_neutral, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Ich dachte, sie wäre in ihrem Zimmer?"');
        let Chp03SearchKailaniElementAnswers1 = {
            iSayPanicked: "Panisch",
            iSayWorried: "Besorgt",
            iSaySoothing: "Beschwichtigend",
        };
        let Chp03SearchKailaniElement1 = await Spiegel_VN.ƒS.Menu.getInput(Chp03SearchKailaniElementAnswers1, "choicesCSSclass");
        switch (Chp03SearchKailaniElement1) {
            case Chp03SearchKailaniElementAnswers1.iSayPanicked:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Sie ist weg! Oh Gott, was ist, wenn sie weggelaufen ist? Vorhin hat irgendetwas hat mit ihr nicht gestimmt."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Jetzt beruhige dich erst mal. Suchen wir doch zuerst nach ihr!"');
                if (Spiegel_VN.dataForSave.pickedChp03_SearchGarden) {
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Da habe ich schon geschaut! Sie ist einfach weg!"');
                }
                else {
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Noch nicht, aber ich weiß, dass sie da nicht ist!"');
                }
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Gut, ich rufe mal Evarius und frage nach."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp03SearchKailaniElementAnswers1.iSayWorried:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich wollte gerade mit ihr reden, aber sie ist nicht in ihrem Zimmer. Evarius hat sie auch nicht gesehen. Ich mache mir etwas Sorgen, Mutti. Weißt du vielleicht, wo sie ist?"');
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_frown, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Nein, ich habe sie heute noch gar nicht gesehen. Sie ist bestimmt nur kurz raus. Willst du nach ihr suchen?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Habe ich schon!"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp03SearchKailaniElementAnswers1.iSaySoothing:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kailani ist nicht in ihrem Zimmer; ich dachte, vielleicht wäre sie hier unten. Aber sie ist sicher nur schnell raus."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Bist du dir sicher? Hast du schon im Garten geschaut?"');
                if (Spiegel_VN.dataForSave.pickedChp03_SearchGarden) {
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Da habe ich schon geschaut! Sie ist einfach weg!"');
                }
                else {
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Noch nicht, aber ich weiß, dass sie da nicht ist!"');
                }
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Rufe doch mal Evarius herunter, dann kannst du dich mit ihm besprechen."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.pants2_neutral2, Spiegel_VN.ƒS.positionPercent(80, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos1_frown, Spiegel_VN.ƒS.positionPercent(30, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_frown, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich finde Kailani nirgends. Habt ihr sie nicht gesehen?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Ich komme gerade von der Arbeit! Ist alles in Ordnung?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Vorhin habe ich noch mit ihr Hausarbeiten gemacht. Irgendetwas hat sie gestört, aber sie wollte es mir nicht sagen. Was ist, wenn sie weggelaufen ist?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.pants2_hand_angry, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Jetzt halte mal die Füße still. Sie treibt sich sicherlich auf dem Grundstück herum."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Evarius, bist du dir sicher, dass du sie heute nicht gesehen hast?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Evarius);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos3_frown, Spiegel_VN.ƒS.positionPercent(30, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Naja, vorhin habe ich gehört, wie sie in ihr Zimmer gegangen ist und die Tür so richtig zugeknallt hat. Danach hab’ ich aber nichts mehr gehört."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Die ist bestimmt irgendwo! Kann ich jetzt hochgehen?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Meinetwegen. Nachher gibt es aber Essen!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Aber was mit Kailani?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_smile, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Wir warten noch ein bisschen ab. Es kann sein, dass sie nur spazieren gegangen ist, meinst du nicht?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Warum nehmt ihr das nicht ernst?"');
        Spiegel_VN.ƒS.Speech.clear();
        return "04_00_Research Options";
    }
    Spiegel_VN.Chp03_CS_KailaniMissing = Chp03_CS_KailaniMissing;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_CS_TurmoilMarketplace() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp05_Forestpath);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Etwas verzweifelt und unsicher gehst du den Pfad Richtung Dorfzentrum entlang und lässt deinen Blick zwischen den Bäumen schweifen. Wo kann sie nur sein?");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_022_Marketplace_empty);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Auf dem Marktplatz angekommen, bist du leicht überrascht. Trotz des frühen Nachmittags herrscht auf dem Marktplatz weniger Trubel als sonst. Die Bewohner stehen in kleinen Gruppen zusammen. Eine angespannte Atmosphäre hängt wie eine schwere Gewitterwolke über dem Platz.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_MarketplacePerson);
        await Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell("???", '"Hast du Pantro gesehen? Mein Sohn, er ist weg"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Eine Freundin von Mutti kommt auf dich zugelaufen. Ihre Augen sind aufgerissen und sie greift hektisch nach dir");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was? Das kann nicht sein. Was ist denn passiert?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Warte mal – Kailani ist auch verschwunden! Wir finden sie nicht."');
        await Spiegel_VN.ƒS.Speech.tell("???", '"Das ist – das darf nicht wahr sein"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Verzweifelt ringt sie sich die Hände.");
        await Spiegel_VN.ƒS.Speech.tell("???", '"Was sollen wir bloß tun?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"War Pantro irgendwie komisch, bevor er verschwunden ist? Hat er sich anders verhalten oder so?"');
        await Spiegel_VN.ƒS.Speech.tell("???", '"Ja … jetzt, da du fragst, fällt es mir ein – die letzten Tage war er seltsam bleich. Und zurückgezogen, als ob er mich meiden wolle. Ich habe das ignoriert; wegen seines Alters, weißt du? Aber gewiss waren Anzeichen dafür, dass in ihm etwas vorgegangen ist. Und ich habe es nicht bemerkt!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie wendet sich ab, setzt sich auf den Brunnen und vergräbt das Gesicht in den Händen. Jetzt sind es zwei Kinder, die verschwunden sind. Zwei bleiche, zurückgezogenen Kinder. Das kann kein Zufall mehr sein.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Jetzt sind es zwei Kinder, die verschwunden sind. Zwei bleiche, zurückgezogenen Kinder. Das kann kein Zufall mehr sein. Du versuchst, tief durchzuatmen und dich nicht von der aufsteigenden Panik überrennen zu lassen. Dein Herz pocht schneller und schneller, wie ein Häschen, dass vor dem Fuchs wegläuft. Was ist hier geschehen? Und, viel wichtiger, wo ist Kailani??? Schnell zurück nach Hause!");
        return "04_00_Research Options";
    }
    Spiegel_VN.Chp03_CS_TurmoilMarketplace = Chp03_CS_TurmoilMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_00_ResearchOptions() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        // ** RANDOM TEXT ***
        let randomTextChp04KailaniMissing = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 4); //gerundet
        switch (randomTextChp04KailaniMissing) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Was ist nur passiert?");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Wo ist Kailani?");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kailani? Wo bist du!"');
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Da ist etwas nicht in Ordnung ...");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kaili?"');
                break;
        }
        let Chp04PickSceneElementAnswers = {
            PickSceneTalkToFamily: "Mit Mutti sprechen",
            PickSceneResearchLibrary: "Zur Bücherei",
            PickSceneExamineMirror: "Nochmal in Kailanis Schlafzimmer",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp04TalkToFamily ||
            !Spiegel_VN.dataForSave.pickedChp04ResearchLibrary ||
            !Spiegel_VN.dataForSave.pickedChp04ExamineMirror) {
            delete Chp04PickSceneElementAnswers.PickSceneContinue;
        }
        if (Spiegel_VN.dataForSave.pickedChp04TalkToFamily) {
            delete Chp04PickSceneElementAnswers.PickSceneTalkToFamily;
        }
        if (Spiegel_VN.dataForSave.pickedChp04ResearchLibrary) {
            delete Chp04PickSceneElementAnswers.PickSceneResearchLibrary;
        }
        if (Spiegel_VN.dataForSave.pickedChp04ExamineMirror) {
            delete Chp04PickSceneElementAnswers.PickSceneExamineMirror;
        }
        let Chp04PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp04PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp04PickSceneElement) {
            case Chp04PickSceneElementAnswers.PickSceneTalkToFamily:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Mutti?"');
                Spiegel_VN.ƒS.Speech.clear();
                return "04_01 Talk with family";
                break;
            case Chp04PickSceneElementAnswers.PickSceneResearchLibrary:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die alten Bücher in der Bücherei!");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_03 Research library";
                break;
            case Chp04PickSceneElementAnswers.PickSceneExamineMirror:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ich muss mir nochmal den Spiegel anschauen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_E_Examine mirror";
                break;
            case Chp04PickSceneElementAnswers.PickSceneContinue:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Nun gut, ab in den Wald ...");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_CS Entry forest";
                break;
        }
    }
    Spiegel_VN.Chp04_00_ResearchOptions = Chp04_00_ResearchOptions;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_01_TalkWithFamily() {
        Spiegel_VN.dataForSave.pickedChp04TalkToFamily = true;
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        Spiegel_VN.ƒS.Character.hideAll();
        // await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_angry2, ƒS.positionPercent(80, 100));
        //     await ƒS.Character.show(characters.Evarius, characters.Evarius.pose.pos3_neutral, ƒS.positionPercent(30, 100));
        //     await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_frown, ƒS.positionPercent(55,100));
        //     ƒS.update();
        //     await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        //     dataForSave.pickedChp04TalkToFamily = true;
        //     await ƒS.Speech.tell(characters.Evarius, '"Also. Es ist etwas passiert. Pantro, mein Klassenkamerad, ist auch wie vom Boden verschluckt."');
        //     await ƒS.Speech.tell(characters.maincharacter, '"Es muss etwas Schlimmes passiert sein!"');
        //     ƒS.Character.hide(characters.Mutti);
        //     await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress1_basket_frown, ƒS.positionPercent(55,100));
        //     ƒS.update();
        //     await ƒS.Speech.tell(characters.Mutti, '"Pantro ist auch weg?"');
        //     await ƒS.Speech.tell(characters.Mama, '"Woher weißt du das denn? Bist du dir sicher, dass er nicht auch kurz in den Wald ist?"');
        //     await ƒS.Speech.tell(characters.Mutti, '"Leijla, meinst du, es ist der richtige Zeitpunkt, zweifelnd zu sein?"');
        //      let Chp04TalkFamilyElementAnswers = {
        //       iSayCoincidence: "Das ist kein Zufall.",
        //       iSayPointless: "Es ist sinnlos.",
        //       iSayMirror: "Hat es was mit dem Spiegel zu tun?",
        //     };
        //     let Chp04TalkFamilyElement = await ƒS.Menu.getInput(Chp04TalkFamilyElementAnswers,"choicesCSSclass");
        //     // *** RESPONSES ***
        //     switch (Chp04TalkFamilyElement) {
        //       case Chp04TalkFamilyElementAnswers.iSayCoincidence:
        //         await ƒS.Speech.tell(characters.Evarius, '"Pantro war auch bleich! Und zurückgezogen! So hat das zumindest seine Mutter gesagt."');
        //         await ƒS.Speech.tell(characters.Mutti, '"Bleich? Was meinst du damit?"');
        //         await ƒS.Speech.tell(characters.maincharacter, '"Heute Mittag war ich doch mit Kailani unterwegs. Jetzt im Nachhinein fällt mir auf, wie grau sie war. Sie war wirklich blasser als sonst. Aber sie wollte mir nicht erzählen, was sie bedrückt hat."');
        //         ƒS.Character.hide(characters.Mama);
        //         await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_hand_laugh, ƒS.positionPercent(80, 100));
        //         ƒS.update();
        //         await ƒS.Speech.tell(characters.Mama, '"Vielleicht ist sie gar nicht weg. Beruhige dich doch erstmal."');
        //         await ƒS.Speech.tell(characters.Mutti, '"Wurde Kailani von jemandem mitgenommen? Ist sie abgehauen? Hat Pantro damit etwas zu tun?"');
        //         ƒS.Speech.clear();
        //         break;
        //       case Chp04TalkFamilyElementAnswers.iSayPointless:
        //         await ƒS.Speech.tell(characters.maincharacter, '"Ach, ich weiß auch nicht weiter. Was ist, wenn sie schon über alle Berge ist?"');
        //         await ƒS.Speech.tell(characters.Evarius, '"Kaili taucht schon noch auf!"');
        //         await ƒS.Speech.tell(characters.Mutti, '"Wurde Kailani von jemandem mitgenommen? Ist sie abgehauen? Hat Pantro damit etwas zu tun?"');
        //         ƒS.Speech.clear();
        //         break;
        //       case Chp04TalkFamilyElementAnswers.iSayMirror:
        //         await ƒS.Speech.tell(characters.Evarius, '"Pantros Mutter hat erzählt, dass er kurz vor seinem Verschwinden ziemlich abweisend war. Dazu war er seltsam blass."');
        //         await ƒS.Speech.tell(characters.maincharacter, '"Und den gleichen Eindruck hatte ich von Kailani, als ich heute Mittag mit ihr unterwegs war! Sie hat nur von diesem Spiegel erzählt …"');
        //         await ƒS.Speech.tell(characters.Mama, '"Der Spiegel, den wir letzte Woche zusammen gekauft haben? Hat sie ihn etwa benutzt?"');
        //         ƒS.Character.hide(characters.Mutti);
        //         await ƒS.Character.show(characters.Mutti, characters.Mutti.pose.dress2_basket_smirk, ƒS.positionPercent(55, 100));
        //         ƒS.update();
        //         await ƒS.Speech.tell(characters.Mutti, '"Ich habe ihn ihr gegeben, weil sie so gern damit gespielt hat… "');
        //         ƒS.Character.hide(characters.Mama);
        //         await ƒS.Character.show(characters.Mama, characters.Mama.pose.pants2_laugh2, ƒS.positionPercent(80, 100));
        //         ƒS.update();
        //         await ƒS.Speech.tell(characters.Mama, '"Was soll denn der Spiegel damit zu tun haben, dass sie verschwunden ist? Ich glaube immer noch an ein großes Missverständnis. Vielleicht ist sie mit Pantro zusammen und hat sich heimlich mit ihm getroffen?"');
        //         await ƒS.Speech.tell(characters.Mutti, '"Das könnte eine Möglichkeit sein…"');
        //         ƒS.Speech.clear();
        //         break;
        //     }
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.pants2_laugh2, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_smirk, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Warum gehen wir sie nicht im Dorf suchen? Stell dir vor, wir machen hier ein großes Drama und später spaziert sie seelenruhig zur Tür rein."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Geh’ du schon Mal vor, Leijla. Ich möchte kurz mit ' + Spiegel_VN.dataForSave.nameProtagonist + ' sprechen."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Evarius);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Schatz, vielleicht hälst du mich für verrückt."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Also: wie du weißt, beschäftige ich mich gerne mit der Vergangenheit und Magie. Ich bin der festen Überzeugung, dass Magie noch heute existiert."');
        let Chp04TalkFamilyElementAnswers1 = {
            iSayBelieve: "Glauben.",
            iSayDoubt: "Zweifeln",
            iSayReject: "Ablehnen",
        };
        let Chp04TalkFamilyElement1 = await Spiegel_VN.ƒS.Menu.getInput(Chp04TalkFamilyElementAnswers1, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp04TalkFamilyElement1) {
            case Chp04TalkFamilyElementAnswers1.iSayBelieve:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"So wie in den alten Büchern der Bücherei beschrieben?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Ganz genau. Das sind die letzten schriftlichen Quellen dieser alten Zeit."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp04TalkFamilyElementAnswers1.iSayDoubt:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Magie? Bist du dir sicher? Aber wie kann uns das bei der Suche nach Kailani helfen?"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp04TalkFamilyElementAnswers1.iSayReject:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Magie gibt es doch gar nicht!"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_laugh, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Manchmal bist du wie deine Mama!"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress2_basket_neutral, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Ich habe mich aus dem Grund hier in der Gegend niedergelassen, weil ich gespürt habe, dass hier noch kleine Magie-Reste überlebt haben. Es gab Gerüchte, dass der Wald hinter unserem Haus etwas Mystisches verbirgt. Und ich glaube, das könnte uns bei der Suche helfen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Im Hintergrund ruft Mama.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Oh, Mama drängt. Versuch’ doch mal dein Glück, ja?"');
        return "04_00_Research Options";
    }
    Spiegel_VN.Chp04_01_TalkWithFamily = Chp04_01_TalkWithFamily;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_03_ResearchLibrary() {
        Spiegel_VN.dataForSave.pickedChp04ResearchLibrary = true;
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverLibrary);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Etwas ratlos stehst du vor der Bücherei.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp04_Library_Interior);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "In der Bücherei ist es ganz still. Du schaust dich um und gehst zielstrebig zu der etwas versteckten Ecke, in dem die uralten Bücher stehen.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp04_Library_Bookshelf);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dein Blick schweift über die aneinandergereihten Buchrücken. Bei manchen sind die Titel so alt, dass du sie kaum noch entziffern kannst. Welches ziehst du dir heraus?");
        let Chp04ResearchLibraryElementAnswers = {
            iSayOption1: "Die Leys--gegend und ihre m-gischen Eigen–aften",
            iSayOption2: "W-ld und Wiese – eine –stische Analyse",
            iSayOption3: "Das in–fizielle Mag–kum der Leysenwäl–",
        };
        let Chp04ResearchLibraryElement = await Spiegel_VN.ƒS.Menu.getInput(Chp04ResearchLibraryElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp04ResearchLibraryElement) {
            case Chp04ResearchLibraryElementAnswers.iSayOption1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das heißt wohl die Leysengegend, deine Heimat. Und das nächste vielleicht: magische Eigenschaften? Du probierst es damit.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp04ResearchLibraryElementAnswers.iSayOption2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Wald und Wiese, ganz klar. Aber welche Analyse? Du ziehst es heraus und hoffst, dass es für ‘mystisch’ steht.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp04ResearchLibraryElementAnswers.iSayOption3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Inoffiziell? Für inoffizielle Informationen hast du eigentlich keine Zeit. Aber ‘Mag-kum’ könnte Magikum bedeuten! Und das klingt vielversprechend. Du probierst es mal.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp04_Bookshelf_Book);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du blätterst durch und seufzt. Die Seiten sind beinahe unlesbar. Manche fallen sogar auseinander. Damit hattest du gerechnet. Doch halt – hier hinten, da ist eine Ecke eingeknickt. Du streichst die Seite glatt und kneifst die Augen zusammen. Du kannst gerade so einen gezeichneten Baum und etwas Text daneben erkennen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"In … tiefen Wald … Baum der Wünsche. …, werden Wünsche … Beweisen … sonst verbannt."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Steht da Baum der Wünsche? Ein Baum, der sich in den Tiefen des Waldes verbirgt? Mehr kannst du aber auf der Seite nicht erkennen. Endlich eine Spur!");
        return "04_00_Research Options";
    }
    Spiegel_VN.Chp04_03_ResearchLibrary = Chp04_03_ResearchLibrary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_E_ExamineMirror() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_KailaniBedroom);
        Spiegel_VN.dataForSave.pickedChp04ExamineMirror = true;
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du willst dir nochmal Kailanis Schlafzimmer und den Spiegel genauer anschauen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das Zimmer ist so still. Du schaust dich um. Eigentlich fühlst du dich unwohl, hier zu sein, weil sie bestimmt etwas dagegen hätte, wenn du durch ihre Sachen schnüffelst.");
        let Chp04ExamineMirrorElementAnswers = {
            iSayMirror: "(Erkunden) Spiegel nehmen",
            iSayDiary: "(Erkunden) Tagebuch lesen",
            iSayContinue: "Zurück",
        };
        let Chp04ExamineMirrorElement = await Spiegel_VN.ƒS.Menu.getInput(Chp04ExamineMirrorElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp04ExamineMirrorElement) {
            case Chp04ExamineMirrorElementAnswers.iSayMirror:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_KailaniBedroomMirror);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Der Spiegel glitzert und glänzt. Du schaust hinein, siehst aber nichts. Wahrscheinlich ist er noch im Wünsche-Modus. Moment mal – Wünsche-Modus? Kannst du anschauen, was sich Kailani zuletzt gewünscht hat?");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Spieglein, Spieglein, weise mir mein Träumlein: Ich wünsche mir Kailanis letzten Wunsch!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Aber nichts passiert. Du probierst es mit verschiedenen Varianten, aber jedes Mal bleibt der Spiegel blank. Seltsam, du siehst nicht einmal dein eigenes Gesicht darin.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_E_Examine mirror";
                break;
            case Chp04ExamineMirrorElementAnswers.iSayDiary:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_KailaniBedroomDiary);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Unter normalen Umständen würdest du Kailanis Tagebuch niemals lesen. Jetzt bleibt dir allerdings nichts anderes übrig.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich kann nicht schlafen. Bleibe bis morgens wach und bin dann in der Schule total müde. Mutti nervt mich, dass ich mehr essen soll, habe aber eigentlich gar keinen Hunger."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Mein Spiegelbild ist so schön dünn. Und große Brüste hab’ ich im Spiegel auch. Wie lange, bis meine endlich wachsen?’"');
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_KailaniBedroom);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du klappst das Tagebuch zu und spürst, wie sich ein kribbelndes Schamgefühl in deinem Bauch verbreitet. Es ist dir nicht wohl dabei, Kailanis intimste Gedanken so zu lesen. Allerdings offenbaren die Zeilen mehr, als sie dir heute verraten wollte: sie hat sich doch unwohl gefühlt. Und so wie es scheint, hat der Spiegel damit etwas zu tun!");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_E_Examine mirror";
                break;
            case Chp04ExamineMirrorElementAnswers.iSayContinue:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Hier gibt es nichts mehr zu sehen.");
                return "04_00_Research Options";
                break;
        }
    }
    Spiegel_VN.Chp04_E_ExamineMirror = Chp04_E_ExamineMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_CS_EntryForest() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp05_Forestpath);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.forest, 0.3, 1, true);
        await Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du betrittst den dunkeln Wald. Du gehst in die Richtung deines alten ‘Spielplatzes’.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Als Kind hast du dir jeden Tag zwischen den hohen Bäumen Szenen ausgedacht und die nachgespielt. Dabei bist du kreuz und quer durch das ganze Waldstück gerannt. Doch du bist nie weiter hineingegangen. Erinnerst du dich?");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp05_Trees);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "An der Stelle angekommen, schaust du hoch in die schwarzen Baumkronen. Auch wenn die Sonne erst untergeht, ist es hier schon Nacht. Du trittst über die Schwelle. Die Bäume rascheln, als würden sie vor dir, dem Eindringling, warnen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du läufst weiter und weiter, bis die Bäume so eng zusammenstehen, dass du kaum durchkommst. An was denkst du?");
        let Chp05PickSceneElementAnswers = {
            iSaySave: "Ich muss Kailani retten!",
            iSayTired: "Ich kann bald nicht mehr …",
            iSayMistake: "War das alles ein Fehler?"
        };
        await Spiegel_VN.ƒS.Menu.getInput(Chp05PickSceneElementAnswers, "choicesCSSclass");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Schnaufend schleppst du dich von Stamm zu Stamm, über Wurzeln und Gebüsch. Plötzlich stehst du inmitten einer Lichtung.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp05_Wishtree);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Willkommen, Kind."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Was war das? Wer hat da gesprochen?");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Komm’ nur näher."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ist das etwa der Baum? Ungläubig und fasziniert zugleich näherst du dich dem beträchtlichen Stamm. Hier ist es schon fast Nacht.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Ich weiß, wieso du hier bist. Und ich weiß auch, wo deine Schwester ist. "');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Also ist es wahr: es gibt einen echten Baum der Wünsche? Deine Stimme ist heiser, als du sprechen willst.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Das brauchst du nicht. Ich spüre deine Gedanken. Nur, weil dein Herz offen war, habe ich dich zu mir durchgelassen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du nickst stumm und starrst mit offenem Mund zu den dichten Ästen empor.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Ich weiß, dass du mehr wissen willst. Zuerst musst du dich aber beweisen. Gelingt es dir, erhältst du, was sich dein Herz wünscht. Gelingt es dir nicht, wirst du für immer verbannt."');
        let Chp05PickSceneElementAnswers2 = {
            iSayFear: "Ich habe Angst",
            iSayBest: "Ich gebe mein Bestes",
            iSayKailani: "Ich tue es für Kailani"
        };
        // let Chp05PickSceneElement2 =
        await Spiegel_VN.ƒS.Menu.getInput(Chp05PickSceneElementAnswers2, "choicesCSSclass");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Also gut."');
        // await ƒS.Speech.tell(characters.maincharacter, "Der Baum raschelt und ächzt. Um dich herum säuselt der Wind.");
        return "TextRiddle";
    }
    Spiegel_VN.Chp04_CS_EntryForest = Chp04_CS_EntryForest;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function textRiddle() {
        let randomTextChp05TextRiddle = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 4); //gerundet
        switch (randomTextChp05TextRiddle) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Verzage nicht ..."');
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das ist doch alles verrückt.");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Nicht mehr lange ..."');
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Mutti hatte Recht!");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Der Baum der Wünsche?");
                break;
        }
        let Chp05TextRiddleElementAnswers = {
            iSayRiddle1: "Rätsel 1",
            iSayRiddle2: "Rätsel 2",
            iSayRiddle3: "Rätsel 3",
            iSayProven: "Ich habe mich bewiesen! Und jetzt?",
        };
        if (!Spiegel_VN.dataForSave.pickedRiddle1 ||
            !Spiegel_VN.dataForSave.pickedRiddle2 ||
            !Spiegel_VN.dataForSave.pickedRiddle3) {
            delete Chp05TextRiddleElementAnswers.iSayProven;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp05TextRiddleElement = await Spiegel_VN.ƒS.Menu.getInput(Chp05TextRiddleElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp05TextRiddleElement) {
            case Chp05TextRiddleElementAnswers.iSayRiddle1:
                Spiegel_VN.dataForSave.pickedRiddle1 = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Ich habe ein Bett, doch ich find keine Ruh.<br>Ich habe einen Mund, doch ich kann nicht sprechen.<br>Ich bewege mich rasend schnell, doch ich verlasse niemals einen Ort.<br>Wer oder was bin ich? Tipp: Es hat etwas mit Wasser zu tun!<br/>"', false);
                let answer1 = await Spiegel_VN.ƒS.Speech.getInput();
                if (answer1.toLowerCase() == "fluss") {
                    await Spiegel_VN.ƒS.Speech.tell("Baum der Wünsche", "Das erste Rätsel geschafft!");
                }
                else {
                    await Spiegel_VN.ƒS.Speech.tell("Baum der Wünsche", "Denke nochmal nach ...");
                }
                return "TextRiddle";
                break;
            case Chp05TextRiddleElementAnswers.iSayRiddle2:
                Spiegel_VN.dataForSave.pickedRiddle2 = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Geisterstunde ist um ... ?", false);
                let answer2 = await Spiegel_VN.ƒS.Speech.getInput();
                if (answer2.toLowerCase() == "mitternacht") {
                    await Spiegel_VN.ƒS.Speech.tell("Baum der Wünsche", "Schon das zweite Rätsel gelöst.");
                }
                else {
                    await Spiegel_VN.ƒS.Speech.tell("Baum der Wünsche", "Denke nochmal nach ...");
                }
                return "TextRiddle";
                break;
            case Chp05TextRiddleElementAnswers.iSayRiddle3:
                Spiegel_VN.dataForSave.pickedRiddle3 = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "An welchem Ort musst du stehen, damit dein rechts als mein links zu sehen ist?<br>Und doch bin ich nicht wirklich da, sondern nur visuell, wie sonderbar.<br>Kennst du diesen Ort?", false);
                let answer3 = await Spiegel_VN.ƒS.Speech.getInput();
                if (answer3.toLowerCase() == "spiegel") {
                    await Spiegel_VN.ƒS.Speech.tell("Baum der Wünsche", "Tatsächlich, du hast dich bewiesen ... ");
                }
                else {
                    await Spiegel_VN.ƒS.Speech.tell("Baum der Wünsche", "Denke nochmal nach ...");
                }
                return "TextRiddle";
                break;
                await Spiegel_VN.ƒS.getKeypress(Spiegel_VN.ƒ.KEYBOARD_CODE.SPACE);
            case Chp05TextRiddleElementAnswers.iSayProven:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Kailani besaß einen Spiegel, richtig? Er ist kein gewöhnlicher Spiegel, wie du sicher schon bemerkt hast."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Er zeigt dir an, was du dir wünschst. Anders aber als meine Magie ist die Spiegelmagie dunkel."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Der Spiegel sorgt dafür, dass die Menschen, die in ihn hineinblicken, krank werden. Sind sie erkrankt, zieht sie der Spiegel in sein Innerstes. Dort werden sie gefangen gehalten."');
                return "05_02 Convo Tree";
        }
    }
    Spiegel_VN.textRiddle = textRiddle;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_02_ConvoTree() {
        let Chp05ConvoTreeElementAnswers = {
            iSayInner: "(Erkunden) Sein Innerstes?",
            iSaySick: "(Erkunden) Wie werden sie krank?",
            iSayFree: "(Erkunden) Wie kann Kailani befreit werden?",
            iSayRiddleWords: "Die Rätselwörter!"
        };
        if (!Spiegel_VN.dataForSave.pickedChp05Inner ||
            !Spiegel_VN.dataForSave.pickedChp05Sick ||
            !Spiegel_VN.dataForSave.pickedChp05Free) {
            delete Chp05ConvoTreeElementAnswers.iSayRiddleWords;
        }
        let Chp05ConvoTreeElement = await Spiegel_VN.ƒS.Menu.getInput(Chp05ConvoTreeElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp05ConvoTreeElement) {
            case Chp05ConvoTreeElementAnswers.iSayInner:
                Spiegel_VN.dataForSave.pickedChp05Inner = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Ja, sie werden in den Spiegel hineingesogen."');
                Spiegel_VN.ƒS.Speech.clear();
                return "05_02 Convo Tree";
                break;
            case Chp05ConvoTreeElementAnswers.iSaySick:
                Spiegel_VN.dataForSave.pickedChp05Sick = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Die Erkrankten zeigen unterschiedliche Symptome. Sie sind bedrückt und: sie verlieren ihre Farbe. Sie werden also grau."');
                Spiegel_VN.ƒS.Speech.clear();
                return "05_02 Convo Tree";
                break;
            case Chp05ConvoTreeElementAnswers.iSayFree:
                Spiegel_VN.dataForSave.pickedChp05Free = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Die Spiegel haben eine weitere, heute unbekannte Funktion. Sie wurden ursprünglich als Reisemöglichkeit hergestellt. Du kannst mit dem Handspiegel, dem Kailani verfallen ist, in die Spiegelwelt reisen."');
                Spiegel_VN.ƒS.Speech.clear();
                return "05_02 Convo Tree";
                break;
            case Chp05ConvoTreeElementAnswers.iSayRiddleWords:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Kannst du erraten, wie du sie retten kannst?"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ich muss mich um Mitternacht mit dem Spiegel an einen Fluss begeben!");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Das ist richtig. Reisen kannst du nur, wenn du dich in einer dunklen Nacht mit hellem Mondschein um 12 Uhr an ein Gewässer begibst. Sprich den Zauberspruch und halte den Spiegel parallel zum Gewässer, damit sich der Mond darin spiegelt."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Wie ist denn der Zauberspruch?");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Der Spruch lautet: Spieglein, Spieglein, weise mir mein Weglein. Danach sprichst du dein Reiseziel aus."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"Ich weiß, dass du Angst hast. Um dich bei deiner Reise zu unterstützen …"');
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.birds, 0.1, 1, true);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp05_WishtreeBirds);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.wishtree, '"… habe ich einige Freunde gerufen. Sie begleiten dich auf deinem Weg in die andere Welt. Dazu musst du sie aber an dich binden."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Wie willst du dich mit ihnen verbinden?");
        let Chp05ConvoTreeElementAnswers2 = {
            iSaySing: "Zu Vögeln singen",
            iSayFeed: "Füttern"
        };
        let Chp05ConvoTreeElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp05ConvoTreeElementAnswers2, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp05ConvoTreeElement2) {
            case Chp05ConvoTreeElementAnswers2.iSaySing:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du nimmst allen Mut zusammen und beginnst mit wackeliger Stimme das Schlaflied ‘Gute Nacht, kleiner Igel’ zu singen, dass du Kailani und Evarius, als sie noch klein waren, vorgesungen hast.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp05ConvoTreeElementAnswers2.iSayFeed:
                if (Spiegel_VN.dataForSave.pickedSeeds) {
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du greifst in deine Tasche und wirfst den Vögeln die Sonnenblumenkerne hin. Sie fliegen um dich herum und zirpen fröhlich.");
                }
                else {
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Leider hast du deine übrigen Sonnenblumenkerne im Garten verpflanzt. ");
                }
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du nimmst allen Mut zusammen und beginnst mit wackeliger Stimme das Schlaflied ‘Gute Nacht, kleiner Igel’ zu singen, dass du Kailani und Evarius, als sie noch klein waren, vorgesungen hast.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das war eine gute, ehrliche Bindung. Sie werden dich nun begleiten und dir stets zur Seite stehen. Die Reise wird nicht einfach. Denke daran, dass in der Spiegelwelt nicht alles so ist, wie es scheint. Ein letzter Hinweis noch: Ehrliches Material führt dein Herz zum Ziel.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Nun muss ich eine Weile ruhen. Diese Begegnung hat mich sehr viel Kraft gekostet …");
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.birds, 0, 0, false);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.forest, 0, 0, false);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Der Wind, der durch die Blätter raschelte, klingt ab. Die Vögel sind verschwunden. Auf einmal ist es sehr ruhig.");
        let Chp05ConvoTreeElementAnswers3 = {
            iSayHello: "Hallo?",
            iSayQuestions: "Ich habe noch so viele Fragen!",
            iSayNeed: "Ich brauche Sie!"
        };
        // let Chp05ConvoTreeElement3 =
        await Spiegel_VN.ƒS.Menu.getInput(Chp05ConvoTreeElementAnswers3, "choicesCSSclass");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Der Wald schweigt. Du seufzt und drehst dich um. Es ist schon spät geworden. Mit einem Blick nach oben registrierst du, dass es Vollmond ist. Was hatte der Baum gesagt? Dir dämmert, dass die Zeit für die Abreise naht.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Langsam trittst du deinen Heimweg an. Ist Kailani wirklich in dem Spiegel gefangen? Leidet sie? Wie sieht die Welt dort aus? Was muss ich mitnehmen? Wie komme ich zurück? Komme ich jemals zurück … ?");
        return "05_ConvoMother";
    }
    Spiegel_VN.Chp05_02_ConvoTree = Chp05_02_ConvoTree;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_ConvoMother() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoomNight);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du schleichst dich leise herein. Bestimmt schlafen alle schon.");
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.pants2_neutral, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, Spiegel_VN.dataForSave.nameProtagonist);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du erschrickst. Mama kommt die Treppe hinunter.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Wo warst du denn? Wir haben uns Sorgen gemacht!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Es tut mir leid … Mama, ich muss gehen. Bitte sag Mutti und Evarius Bescheid."');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.pants2_angry2, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Mitten in der Nacht gehst du nirgends hin. Komm, wir besprechen das morgen!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Du verstehst nicht, ich muss Kailani retten!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Aber du kannst nicht einfach so losziehen!"');
        let Chp05ConvoMotherElementAnswers = {
            iSayLie: "Lügen",
            iSayDistract: "Ablenken",
            iSayExplain: "Erklären"
        };
        let Chp05PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp05ConvoMotherElementAnswers, "choicesCSSclass");
        switch (Chp05PickSceneElement) {
            case Chp05ConvoMotherElementAnswers.iSayLie:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich habe gehört, Kailani wurde in Ulaser gesehen. Das liegt einige -"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Ich weiß, wo das liegt. Wir fahren morgen zusammen hin und schauen nach, in Ordnung ?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Nein, ich muss allein los!"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp05ConvoMotherElementAnswers.iSayDistract:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was habt ihr denn im Dorf herausgefunden?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Nicht viel, niemand hat Kailani gesehen. Komm jetzt ins Bett!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Nein, ich muss jetzt los."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp05ConvoMotherElementAnswers.iSayExplain:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kailani ist in dem Spiegel gefangen! Ich muss dorthin reisen, sie rausholen und –"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Schon wieder dieser Spiegel! Woher willst du das wissen? Wir sind doch nicht im Märchen! Auf ins Bett jetzt."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich muss aber los, Mama!"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Bitte glaub’ und vertrau’ mir doch, Mama! Ich bin kein Kind mehr und weiß, was ich tue. Nur weil du es nicht mitkriegst, heißt es nicht, dass ich nicht erwachsen werde!"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.pants2_shocked, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Mama schweigt und du erkennst, dass du sie verletzt hast.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Es tut mir leid, das wollte ich nicht –"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.pants2_hand_neutral, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Du hast recht. Ich sehe dich noch als Kind, und nicht als starke und mutige Person."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Wenn du unbedingt gehen willst, dann tu es. Ich vertraue dir, in Ordnung? Aber bitte komme zurück, Liebling."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Hier, nimm meine Eisen-Halskette. Sie wird dir Glück bringen und dir den Weg zeigen, falls du dich heute Nacht verirrst."');
        let Chp05ConvoMotherElementAnswers2 = {
            iSayTake: "Annehmen",
            iSayRefuse: "Nicht annehmen"
        };
        let Chp05PickSceneElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp05ConvoMotherElementAnswers2, "choicesCSSclass");
        switch (Chp05PickSceneElement2) {
            case Chp05ConvoMotherElementAnswers2.iSayTake:
                Spiegel_VN.dataForSave.pickedIron = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Vielen Dank, Mama."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp05ConvoMotherElementAnswers2.iSayRefuse:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Deine Halskette ist dein Ein und Alles! Die kann ich nicht annehmen."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich bin bald wieder da und bringe Kailani nach Hause."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Bitte pass’ auf dich auf. Wir warten auf euch!"');
        Spiegel_VN.ƒS.Character.hideAll();
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ein leiser Schluchzer dringt durch das dunkle Zimmer, als sie die Treppen wieder hinauf geht.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das Geräusch tut dir im Herzen weh. Dir kommt das alles surreal vor. Aber packen solltest du trotzdem. Was willst du mitnehmen? Du kannst nur eine Sache einpacken!");
        let Chp05ConvoMotherElementAnswers3 = {
            iSaySeeds: "Sonnenblumenkerne",
            iSayFood: "Vesper",
            iSayCloak: "Dunkler Umhang"
        };
        let Chp05PickSceneElement3 = await Spiegel_VN.ƒS.Menu.getInput(Chp05ConvoMotherElementAnswers3, "choicesCSSclass");
        switch (Chp05PickSceneElement3) {
            case Chp05ConvoMotherElementAnswers3.iSaySeeds:
                Spiegel_VN.dataForSave.pickedChp05Seeds = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Mit den Kernen kannst du die Vögel anlocken. Gute Entscheidung!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp05ConvoMotherElementAnswers3.iSayFood:
                Spiegel_VN.dataForSave.pickedChp05Food = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Etwas zu essen ist immer eine gute Idee.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp05ConvoMotherElementAnswers3.iSayCloak:
                Spiegel_VN.dataForSave.pickedChp05Cloak = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Vielleicht ist es in der Spiegelwelt kalt, oder du willst unentdeckt bleiben? Eine gute Wahl.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Kirchenglocken im Dorf schlagen 23 Uhr. Bevor du den Mut verlierst, drehst du dich um und verlässt das Haus.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_CS_ArrivalHomeNight);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du schwörst dir, zurückzukommen, zurück nach Hause.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp05_Forestpath);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Der Wald ist still. Das Knacken deiner Schuhe auf Ästen ist das einzige Geräusch, das du hörst.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp05_River);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.water, 0.5, 1, false);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Beim Fluss angekommen, hältst du an. Du ziehst den Spiegel aus deiner Tasche und schaust hinein. Er ist immer noch blank.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Mit dem Spiegel gerüstet kniest du dich an das Flussufer. Du versuchst, das Spiegelbild des Mondes im Wasser damit einzufangen. Wie soll das denn gehen, wenn der Spiegel blank ist?");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Doch plötzlich blitzt es auf: der Mond ist nun auch im Handspiegel zu sehen. Dort glitzert er ebenso so schön wie auf dem Wasser und am Himmel. Wie ging der Spruch nochmal?");
        let Chp05ConvoMotherElementAnswers4 = {
            iSaySpell: "Spieglein, Spieglein, weise mir mein Weglein"
        };
        // let Chp05PickSceneElement4 =
        await Spiegel_VN.ƒS.Menu.getInput(Chp05ConvoMotherElementAnswers4, "choicesCSSclass");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich wünsche mir, in die Spiegelwelt zu reisen!"');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        return "06_CS Arrival Meadow";
    }
    Spiegel_VN.Chp05_ConvoMother = Chp05_ConvoMother;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_CS_ArrivalMeadow() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_ArrivalMeadow);
        Spiegel_VN.ƒS.Character.hideAll();
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_ordinaryworld, 0, 0, false);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.water, 0, 0, false);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_mirrorworld_whary, 0.5, 1, true);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du öffnest die Augen und blinzelst in der frühen Morgensonne. Rasch setzt du dich auf und kannst deinen Augen nicht trauen. Du staunst über kräftige Rot-, Grün und Blautöne.");
        do {
            let Chp06ArrivalMeadowElementAnswers = {
                iSayFlowers: "(Erkunden) Blumen anschauen",
                iSayLeave: "Auf den Weg machen"
            };
            let Chp06ArrivalMeadowElement = await Spiegel_VN.ƒS.Menu.getInput(Chp06ArrivalMeadowElementAnswers, "choicesCSSclass");
            switch (Chp06ArrivalMeadowElement) {
                case Chp06ArrivalMeadowElementAnswers.iSayFlowers:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_ArrivalMeadowFlowers);
                    await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Diese hübschen Blumen musst du dir genauer anschauen. Aber als du sie anfasst, zerbröseln sie zu Staub. Das ist ja seltsam.");
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_ArrivalMeadow);
                    await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp06ArrivalMeadowElementAnswers.iSayLeave:
                    Spiegel_VN.dataForSave.pickedChp06Leave = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du rappelst dich auf. Neben dir liegt ein See, und auf der anderen Seite eine Straße.");
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_StreetToWhary);
                    await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "In der Ferne glitzert etwas und du siehst Leute, die sich vor großen Stadttoren bewegen. Du machst dich auf den Weg. Nebenbei bemerkst du die grellen, saftgrünen Bäume rechts und links. Auch wenn die Welt sonst so aussieht, wie deine eigene: an die satten Farben musst du dich erst gewöhnen.");
            }
        } while (!Spiegel_VN.dataForSave.pickedChp06Leave);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_CityGates);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.crowd, 0.1, 1, false);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Als du vor den Toren ankommst, bildet sich trotz des frühen Morgens davor bereits eine Schlange. Stimmen, Hufgeklapper und das Scheppern von Kisten, die die Leute auf ihren Wägen gestapelt haben, tönen durch die Luft.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dir bleibt nichts anderen übrig, als dich auch anzustellen. Während du wartest, beobachtest du die anderen Menschen. Die meisten von ihnen tragen satte, glitzernde Klamotten. Sind hier etwa alle reich? Und wieso sieht es so aus, als wären die Klamotten an manchen Stellen ausgepolstert?");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Auf einmal tritt dir jemand schmerzhaft auf den Fuß.");
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos1_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Oh, sorry! Huch, du siehst so aus, als hättest du eine weite Reise hinter dir. Von wo kommst du denn?"');
        let Chp06EntryGatesElementAnswers = {
            iSayLie: "Lügen",
            iSayDistract: "Ablenken",
            iSayTruth: "Die Wahrheit sagen",
            iSaySilent: "Schweigen"
        };
        let Chp06EntryGatesElement = await Spiegel_VN.ƒS.Menu.getInput(Chp06EntryGatesElementAnswers, "choicesCSSclass");
        switch (Chp06EntryGatesElement) {
            case Chp06EntryGatesElementAnswers.iSayLie:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Eh– stimmt gar nicht! Ich wohne hier um die Ecke, in dem Dorf da hinten. Wer bist du überhaupt?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du gestikulierst wage in die rechte Richtung. Der Fremde hebt die Augenbrauen.");
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos1_smile, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"So so. Du willst es mir nicht sagen. Na gut. Vielleicht erzähle ich erst etwas über mich."');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_happy2, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich bin Flynn! Und nach Whary gereist, um eine Ausbildung als Glasmacher zu beginnen. Aber jetzt bist du wieder dran."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp06EntryGatesElementAnswers.iSayDistract:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Du fragst mich einfach etwas, ohne dich selbst vorzustellen?"');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_happy2, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Du hast ja recht! Ich bin Flynn! Und nach Whary gereist, um eine Ausbildung als Glasmacher zu beginnen. Aber jetzt bist du wieder dran."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp06EntryGatesElementAnswers.iSayTruth:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ehrlich gesagt, komme ich sogar von sehr weit weg. Ich bin aus einer anderen Welt hierhergereist, um meine Schwester zu finden."');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_happy2, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Aus einer anderen Welt? Ha! So habe ich Whary noch nie gesehen, als ‘andere Welt’. Heißt, du warst noch nie in der großen Stadt! Ui ui ui. Ich kann dir so vieles zeigen!"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp06EntryGatesElementAnswers.iSaySilent:
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos1_smile, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, "So so. Du willst es mir nicht sagen. Na gut. Vielleicht erzähle ich erst etwas über mich.");
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_happy2, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich bin Flynn! Und nach Whary gereist, um eine Ausbildung als Glasmacher zu beginnen. Aber jetzt bist du wieder dran."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Wie heißt du denn?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich bin ' + Spiegel_VN.dataForSave.nameProtagonist);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Freut mich!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Während Flynn munter weiter plappert, schaust du ihn leicht irritiert, aber auch neugierig von der Seite an.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ihr passiert die Tore ohne Probleme. Die Wachen beobachten die Menge aufmerksam, aber ihr fallt – zum Glück! – nicht auf.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Allerdings bemerkst du die Blicke der Leute. Ihre Blicke bleiben an deinen alten Stiefeln und dem braunen Hemd, dass du über einer ausgeblichenen Hose trägst, hängen. Wie fühlst du dich?");
        let Chp06EntryGatesElementAnswers2 = {
            iSayShame: "Beschämt",
            iSayDontCare: "Gleichgültig",
            iSayAngry: "Verärgert"
        };
        let Chp06EntryGatesElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp06EntryGatesElementAnswers2, "choicesCSSclass");
        switch (Chp06EntryGatesElement2) {
            case Chp06EntryGatesElementAnswers2.iSayShame:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du senkst den Kopf und schaust beschämt zu Boden. Natürlich passt du hier mit deinen Dorfklamotten nicht rein.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp06EntryGatesElementAnswers2.iSayDontCare:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sollen die Leute schauen, mir doch egal!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp06EntryGatesElementAnswers2.iSayAngry:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Was fällt denen ein? Es sieht eben nicht jede Person gleich aus. Wütend schaust du zurück, bis die Leute sich abwenden.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_InWharyPeople);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich merke schon, du bist ziemlich abgelenkt. Hast du mir überhaupt zugehört? Echt unhöflich! Aber gut. Wir sind in Whary! Willkommen! Was hast du denn jetzt vor?"');
    }
    Spiegel_VN.Chp06_CS_ArrivalMeadow = Chp06_CS_ArrivalMeadow;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_InWhary() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_InWharyPeople);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        // do {
        let Chp06EntryWharyElementAnswers = {
            iSayWindow: "(Erkunden) Schaufenster anschauen",
            iSayVillagers: "(Erkunden) Leute beobachten",
            iSayInn: "Bleibe suchen"
        };
        if (!Spiegel_VN.dataForSave.pickedChp06Window ||
            !Spiegel_VN.dataForSave.pickedChp06Villagers) {
            delete Chp06EntryWharyElementAnswers.iSayInn;
        }
        let Chp06EntryWharyElement = await Spiegel_VN.ƒS.Menu.getInput(Chp06EntryWharyElementAnswers, "choicesCSSclass");
        switch (Chp06EntryWharyElement) {
            case Chp06EntryWharyElementAnswers.iSayWindow:
                Spiegel_VN.dataForSave.pickedChp06Window = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich will mich hier kurz etwas umschauen."');
                Spiegel_VN.ƒS.Character.hideAll();
                // await ƒS.Character.show(characters.Flynn, characters.Flynn.pose.pos1_smile2, ƒS.positionPercent(70, 100))
                // ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Super! Ich zeige dir alles! Ich war hier schließlich schon tausend Mal …"');
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_WharyWindow);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynns Stimme schwindet in den Hintergrund, als du näher an ein Schaufenster trittst. Das Schaufenster ist, auch wenn es unmöglich scheint, noch greller als die Umgebung. Zuerst kannst du gar nicht erkennen, was verkauft wird.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dann siehst du ein Schild: SIE BEKOMMEN KEINE KOMPLIMENTE MEHR FÜR IHRE FIGUR? HIER POLSTER UND KORSETTS ZUM AUFHÜBSCHEN!");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Korsetts? Polster? Das klingt unbequem. Die Polster stopft man sich irgendwo rein, oder wie soll das gehen? Du schüttelst den Kopf und wunderst dich darüber, dass sich die Menschen hier zwingen, gut auszusehen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "06_In Whary";
                break;
            case Chp06EntryWharyElementAnswers.iSayVillagers:
                Spiegel_VN.dataForSave.pickedChp06Villagers = true;
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_InWharyPeople);
                Spiegel_VN.ƒS.update();
                // await ƒS.Speech.tell(characters.maincharacter, '"Ich will mich hier kurz etwas umschauen."');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos1_smile2, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                // await ƒS.Speech.tell(characters.Flynn, '"Ich zeige dir alles, was du willst! Komm, wir gehen –"');
                // await ƒS.Speech.tell(characters.maincharacter, "Du unterbrichst ihn.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Weißt du denn, warum die Leute hier so, eh, na, eben so aussehen, wie sie aussehen?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Was meinst du denn?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Naja, viele sehen so … aufgeplustert aus"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ah so! Ja. Das ist mir noch gar nicht aufgefallen. Die finden das vermutlich schön. Du bist nicht wirklich aufgeplustert."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Da hat er Recht. Du zupfst an deinem Hemdärmel. Komisch, dass die Leute gleich aussehen möchten. Zuhause tragen alle, was sie wollen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "06_In Whary";
                break;
            case Chp06EntryWharyElementAnswers.iSayInn:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich glaube, ich möchte erst eine Bleibe suchen."');
                // await ƒS.Speech.tell(characters.Flynn, '"Aaaber – bevor du das tust, sollten wir dich neu einkleiden, meinst du nicht?"');
                Spiegel_VN.ƒS.Speech.clear();
                return "06_Inn";
        }
    }
    Spiegel_VN.Chp06_InWhary = Chp06_InWhary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_ClothingStore() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_ClothingStore);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.crowd, 0, 0, false);
        Spiegel_VN.ƒS.update();
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ohne auf deine Widerrede zu hören, zieht dich Flynn in ein Bekleidungsgeschäft.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Halt, was tust du?!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du weißt gar nicht, wie dir geschieht. Erst reist du in eine komplett andere Welt, die genauso und gleichzeitig so anders ist als daheim. Dann schwätzt dich dieser Kerl an und will dir nicht von der Seite weichen.");
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich will dir ein neues Outfit kaufen, als Willkommensgeschenk!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Bevor du widersprechen kannst, kommt eine Verkäuferin auf euch zu. Sie strahlt euch mit brillant-weißen Zähnen an.");
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Seller, Spiegel_VN.characters.Seller.pose.pos1, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell("Verkäuferin", '"Ihr wollt ein neues Outfit? Sehr gerne!"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie schiebt dich in eine Ecke des Geschäfts und holt ihr Messband hervor.");
        await Spiegel_VN.ƒS.Speech.tell("Verkäuferin", '"Was soll’s denn werden? Ein hübsches Kleid? Oder Hemd & Hose?"');
        let Chp06ClothesElementAnswers = {
            iSayDress: "Kleid",
            iSayShirt: "Hemd & Hose",
            iSaySkirt: "Hemd & Rock"
        };
        let Chp06ClothesElement = await Spiegel_VN.ƒS.Menu.getInput(Chp06ClothesElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp06ClothesElement) {
            case Chp06ClothesElementAnswers.iSayDress:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du stammelst. Vielleicht ein Kleid?");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp06ClothesElementAnswers.iSayShirt:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du stammelst. Vielleicht Hemd und Hose?");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp06ClothesElementAnswers.iSaySkirt:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du stammelst. Vielleicht Hemd und Rock?");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell("Verkäuferin", "Kommt sofort!");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du willst dich gerade nach Flynn umdrehen und ihn anfauchen, als die Dame schon wieder da ist und dir das Kleidungsstück aufdrängt.");
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos3_arms2_smile, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Das steht dir wirklich sehr gut!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn hat sich in der Zwischenzeit auch etwas ausgesucht. Er steht vor dir und lacht.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Wunderbar! Jetzt passt du perfekt zu Whary!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du schaffst es gerade so, deine alten Klamotten aufzusammeln. Flynn zahlt und zieht dich wieder nach draußen");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_InWharyPeople);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dort wirbelt er dich einmal um deine eigene Achse und strahlt. Das Outfi zwickt und zwängt dich ein. Ein Korsett macht deine Taille schlank und dicke Polster sorgen für ausgefüllte Körperstellen. Du fühlst dich wie eine aufgeblasene Wurst.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos3_arms_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Du siehst super aus! Wo geht es als nächstes hin?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dein Geduldsfaden reißt.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Flynn, ich bin nicht als Tourist hier! Du kannst mich nicht wie eine Puppe behandeln! Mir reichts. Ich muss meine Schwester suchen! Und dazu brauche ich dich nicht. Hast du verstanden?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos3_arms2_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Oh … das tut mir leid."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ja, das sollte es auch! Du kannst mich nicht zu deiner eigenen Bespaßung rumschleppen. Meine Schwester ist weg, und ich hoffe, dass sie hier irgendwo ist …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Deine Schwester? Seit wann ist sie denn weg?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Seit … ich glaube, gestern Mittag."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_uncertain, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Und du denkst, sie könnte hier sein?"');
        let Chp06ClothesElementAnswers2 = {
            iSayHonest: "Ehrlich sein",
            iSayLie: "Ausflüchten"
        };
        let Chp06ClothesElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp06ClothesElementAnswers2, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp06ClothesElement2) {
            case Chp06ClothesElementAnswers2.iSayHonest:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich glaube, sie wird hier als Sklavin gefangen gehalten. Von wem oder wo, weiß ich aber nicht …"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp06ClothesElementAnswers2.iSayLie:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Sie ist vermutlich weggelaufen und steckt irgendwo fest. Ich weiß aber nicht, wo …"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich mache mir solche Sorgen! Sie ist allein und hat bestimmt große Angst."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_smile2, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich helfe dir! Das ist kein Problem. Wir finden deine Schwester!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Warum willst du mir unbedingt dabei helfen? Wir kennen uns kaum. Und das könnte eine lange Suche werden."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich helfe immer gern. Und diese Mission klingt super spann– ich meinte, außergewöhnlich."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sein Abenteuergeist geweckt, springt Flynn aufgeregt um dich herum. Du seufzt. Ist das der beste Partner bei der Suche nach Kailani?");
        let Chp06ClothesElementAnswers3 = {
            iSayTrust: "Flynn vertrauen",
            iSayNotTrust: "Flynn nicht vertrauen"
        };
        let Chp06ClothesElement3 = await Spiegel_VN.ƒS.Menu.getInput(Chp06ClothesElementAnswers3, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp06ClothesElement3) {
            case Chp06ClothesElementAnswers3.iSayTrust:
                Spiegel_VN.dataForSave.pickedChp06TrustFlynn = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du kennst dich hier nicht aus und kennst auch niemand anderen in dieser schrillen Stadt. Schließlich hast du keine Wahl. Du musst ihm einfach vertrauen und hoffen, dass er dir wirklich bei der Suche unterstützen kann.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp06ClothesElementAnswers3.iSayNotTrust:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ehrlich gesagt, findest du diesen jungen Mann ziemlich komisch. Du entscheidest, ihm nicht zu vertrauen. Wer weiß, welche Motivationen er hat?");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Gut. Tut mir leid, dass ich dich gerade so angeschnauzt habe. Vielen Dank für das Angebot."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Klar doch! Wie starten wir? Sollen wir zuerst an den Markt und dort Leute befragen, oder –"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich muss mich zuerst irgendwo einquartieren. Bin todmüde …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Na dann, auf zum Gasthof! Ich kenne da einen guten."');
        return;
    }
    Spiegel_VN.Chp06_ClothingStore = Chp06_ClothingStore;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_Inn() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_Inn_ext);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn führt dich durch kleine Gassen zu einem pinken Gasthof, der an der Ecke einer Kreuzung steht. So viel ist in den letzten Tagen passiert, dass du einfach kurz die Augen schließen und die Welt ausblenden möchtest.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_Inn_int);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Innkeeper, Spiegel_VN.characters.Innkeeper.pose.pos1_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_neutral2, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Kann ich helfen?"');
        let Chp06InnElementAnswers = {
            iSayRoom: '"Haben Sie noch ein Zimmer frei?"'
        };
        // let Chp06InnElement =
        await Spiegel_VN.ƒS.Menu.getInput(Chp06InnElementAnswers, "choicesCSSclass");
        // if (dataForSave.pickedChp06TrustFlynn) {
        //   await ƒS.Speech.tell(characters.maincharacter, "Ich vertraue Flynn.");
        // }
        // if (!dataForSave.pickedChp06TrustFlynn) {
        //   await ƒS.Speech.tell(characters.maincharacter, "Ich vertraue ihm nicht. So kann ich ein Auge auf ihn haben.");
        // }
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Innkeeper);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Innkeeper, Spiegel_VN.characters.Innkeeper.pose.pos2_laugh, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Ja, tatsächlich. Ist noch eins da. Ihr habt Glück. Pro Nacht zahlt ihr 10 Schilling und Abendessen gibt’s um 8. Das Essen is’ mit drin. Alles klar?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_neutral, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Danke! Ich war schon mal hier, da hat’s mir sehr gefallen. Nur die Gemüsesuppe war etwas dünn."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du verdrehst die Augen.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_Inn_room);
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Innkeeper);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Das ist ja gemütlich! Viel gemütlicher als das letzte Mal. Da musste ich mir ein Zimmer mit einem teilen, der hat ganz schlimm nach Fisch gestunken."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Der Fisch-Mann war sicherlich auch von Flynns Redeschwall genervt, denkst du dir. Du darfst aber auch nicht zu streng sein: schließlich hatte dir Flynn in einem Anfall von Gutmenschlichkeit seine Hilfe angeboten.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Und wenn du ehrlich bist, bist du darüber ziemlich erleichtert. Du beschließt, dir später weitere Gedanken über deinen neuen Gefährten zu machen.");
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_Inn_room);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du blinzelst. Wo bist du denn? Panik macht sich in deiner Brust breit, bis dir einfällt, dass du in der Spiegelwelt bist.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "So richtig traust du dich noch nicht, darüber nachzudenken. Das ist hier also die Welt, in der die Menschen hineingesaugt werden. Aber wo gehen sie dann hin?");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn hast du auch noch nichts Genaueres erzählt. Vielleicht würde er dir aber sowieso nicht glauben.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Einerseits hat er dich hier willkommen geheißen, auch wenn auf eine spezielle Art. Andererseits kennst du ihn und seine Motivationen kaum. Er spielt gern den Unterhalter und lässt nicht viel von seinem Inneren durchblicken.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du beschließt, nach unten zu gehen. Vielleicht ist es bald Zeit für das Abendessen?");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_Inn_int);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Als du unten ankommst, flutet eine helle Sonne das Zimmer. Du schaust genauer hin und entdeckst, dass die Gäste frühstücken. Hast du etwa den ganzen Tag verschlafen?");
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos1_confused, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Da bist du ja! Schlafmütze. Ich dachte schon, du wachst gar nicht mehr auf."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich habe viel zu lange geschlafen! Ich muss doch Kailani suchen!"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Okay, ganz ruhig. Wie wär’s, wenn wir erst mal eine Runde Recherche betreiben? Wir fragen einfach mal die Leute, ob sie etwas wissen. Was meinst du?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das ist wohl ein Anfang …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du hast gerade, ehrlich gesagt, sowieso keine besseren Ideen.");
        return "06_new day";
    }
    Spiegel_VN.Chp06_Inn = Chp06_Inn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_NewDay() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_Inn_int);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        // ** RANDOM TEXT ***
        let randomTextChp07NewDay = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 4); //gerundet
        switch (randomTextChp07NewDay) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Was für eine seltsame Stadt!");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, "So! Wo geht's jetzt hin?");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du kommst der Sache schon näher ...");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, "Das macht Spaß! Eh – ich meinte, wir machen schon Fortschritte.");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Kailani, ich komme!");
                break;
        }
        let Chp07PickSceneElementAnswers = {
            PickSceneResearchMarketplace: "Recherche am Marktplatz",
            PickSceneSpeakToInnkeeper: "Mit Gastwirtin sprechen",
            PickSceneSpeakToCook: "Mit Koch sprechen",
            // PickSceneSpeakToStablehand: "Mit Stallmädchen sprechen",
            PickSceneContinue: "Weiter"
        };
        if (!Spiegel_VN.dataForSave.pickedChp07ResearchMarketplace ||
            !Spiegel_VN.dataForSave.pickedChp07TalkToCook ||
            !Spiegel_VN.dataForSave.pickedChp07TalkToInnkeeper
        // !dataForSave.pickedChp07TalkToStablehand
        ) {
            delete Chp07PickSceneElementAnswers.PickSceneContinue;
        }
        if (Spiegel_VN.dataForSave.pickedChp07ResearchMarketplace) {
            delete Chp07PickSceneElementAnswers.PickSceneResearchMarketplace;
        }
        if (Spiegel_VN.dataForSave.pickedChp07TalkToInnkeeper) {
            delete Chp07PickSceneElementAnswers.PickSceneSpeakToInnkeeper;
        }
        if (Spiegel_VN.dataForSave.pickedChp07TalkToCook) {
            delete Chp07PickSceneElementAnswers.PickSceneSpeakToCook;
        }
        // if (dataForSave.pickedChp07TalkToStablehand) {
        //   delete Chp07PickSceneElementAnswers.PickSceneSpeakToStablehand
        // }
        let Chp07PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp07PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp07PickSceneElement) {
            case Chp07PickSceneElementAnswers.PickSceneResearchMarketplace:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Vielleicht macht es Sinn, an den Marktplatz zu gehen? Da ist meistens ziemlich viel los."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Super! Eh– da finden wir sicher etwas über deine Schwester heraus."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn sieht das wohl noch als großes Abenteuer. Du schüttelst genervt den Kopf, begleitest ihn aber nach draußen.");
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp07_MarketplaceWhary);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ihr folgt den kleinen Gassen, bis sich ein bunter Marktplatz vor euch auftut. Genau wie daheim wuselt er vor Menschen, Waren und der einen oder anderen streunenden Katze. Du hast Heimweh, auch wenn du nie dachtest, dass du dein kleines Dorf mal so sehr vermissen würdest. Aber Kailani wartet irgendwo auf dich.");
                Spiegel_VN.ƒS.Speech.clear();
                return "07_Research Marketplace";
                break;
            case Chp07PickSceneElementAnswers.PickSceneSpeakToCook:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ab in die Küche."');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp07_InnKitchen);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Cook, Spiegel_VN.characters.Cook.pose.pos2_concerned, Spiegel_VN.ƒS.positionPercent(65, 100));
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Du kommst gerade richtig! Ich brauche dringend eine Pause."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Nanu? Hat ausgerechnet der Koch für mich Zeit?");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Hat es dir denn gestern geschmeckt?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Eh, ja, sehr! War super lecker.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Aber, ehm, ich wollte etwas anderes fragen. Ich bin nämlich auf der Suche nach meiner Schwester. Und –"');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Cook, Spiegel_VN.characters.Cook.pose.pos1_neutral, Spiegel_VN.ƒS.positionPercent(65, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Ich weiß leider gar nichts über deine Schwester, Kleines. Bin doch hier, von morgens bis abends."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er gestikuliert in Richtung Herd.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Trotzdem haben Sie vielleicht etwas gehört? Sie heißt Kailani und ist seit zwei Tagen weg. Ich hatte gehofft, dass Sie –"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Jetzt lass’ mal das Sie weg. Wie gesagt, kann ich dir nichts erzählen."');
                Spiegel_VN.ƒS.Speech.clear();
                return "07_TalkToCook";
                break;
            case Chp07PickSceneElementAnswers.PickSceneSpeakToInnkeeper:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Wo ist die Inhaberin?");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich frage mal die Wirtin. Schließlich sieht sie so viele Leute jeden Tag, die hier durchspazieren."');
                Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_Inn_int);
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Innkeeper, Spiegel_VN.characters.Innkeeper.pose.pos1_laugh, Spiegel_VN.ƒS.positionPercent(70, 100));
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                Spiegel_VN.dataForSave.pickedChp07TalkToInnkeeper = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Kann ich dir weiterhelfen?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ja… zumindest hoffe ich es! Ich bin auf der Suche nach meiner Schwester. Ich hatte gehofft, sie wäre hier in der Spie– eh, in Whary gelandet."');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Innkeeper, Spiegel_VN.characters.Innkeeper.pose.pos2_frown, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Entschuldige, Ich habe gerade nicht wirklich Zeit. Machst es kurz?"');
                Spiegel_VN.ƒS.Speech.clear();
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
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp06_Inn_int);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos1_confused, Spiegel_VN.ƒS.positionPercent(40, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Und, was hast du rausgefunden?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du erzählst ihm aufgeregt von den Hinweisen.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und weil die Farbe etwas mit einem Ort zu tun hat, der auf der anderen Seite des Sees liegt, muss ich dort hin!"');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_neutral, Spiegel_VN.ƒS.positionPercent(40, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Meinst du wirklich? Dort ist aber nichts, soweit ich weiß!"');
                let Chp07PickContinueElementAnswers = {
                    iSayCertain: "Bestimmt",
                    iSayIgnore: "Ignorieren",
                    iSayAngry: "Verärgert"
                };
                let Chp07PickContinueElement = await Spiegel_VN.ƒS.Menu.getInput(Chp07PickContinueElementAnswers, "choicesCSSclass");
                switch (Chp07PickContinueElement) {
                    case Chp07PickContinueElementAnswers.iSayCertain:
                        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ist mir egal, was du denkst! Ich muss es versuchen."');
                        Spiegel_VN.ƒS.Speech.clear();
                        break;
                    case Chp07PickContinueElementAnswers.iSayIgnore:
                        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du ignorierst seine Einwände.");
                        Spiegel_VN.ƒS.Speech.clear();
                        break;
                    case Chp07PickContinueElementAnswers.iSayAngry:
                        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Glaubst du mir etwa nicht, nur, weil du dich hier besser auskennst?"');
                        Spiegel_VN.ƒS.Speech.clear();
                        break;
                }
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich gehe sofort los! Wenn du mitkommen willst, musst du dich beeilen. Ich will nicht noch länger herum warten."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn murrt etwas, doch dann kommt sein Abenteuergeist hervor und er packt blitzschnell seine wenigen Sachen aus dem Zimmer.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Natürlich lasse ich mir das nicht entgehen! Auf zum See!"');
                return "08_Arrival lake";
        }
    }
    Spiegel_VN.Chp06_NewDay = Chp06_NewDay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_ResearchMarketplace() {
        Spiegel_VN.dataForSave.pickedChp07ResearchMarketplace = true;
        Spiegel_VN.ƒS.Character.hideAll();
        let Chp07DiscoverMarketplaceElementAnswers = {
            // iSayListenToVillagers: "(Erkunden) Bewohnern zuhören",
            iSayMerchants: "(Erkunden) Mit den Händlern sprechen"
        };
        if (Spiegel_VN.dataForSave.pickedChp07DiscoverMerchants
        // dataForSave.pickedChp07DiscoverSpeakToVillagers
        ) {
            return "07_Beggar";
        }
        let Chp07DiscoverMarketplaceElement = await Spiegel_VN.ƒS.Menu.getInput(Chp07DiscoverMarketplaceElementAnswers, "choicesCSSclass");
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
                Spiegel_VN.dataForSave.pickedChp07DiscoverMerchants = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du näherst dich einem der Händler.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Hallo? Ich habe eine Frage."');
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.MerchantWhary, Spiegel_VN.characters.MerchantWhary.pose.pos1, Spiegel_VN.ƒS.positionPercent(40, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.MerchantWhary, "Was darf ich Ihnen anbieten? Diese Beeren sind im Angebot, 8 kg für den Preis von 7!");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Was! Wer brauch schon 8 kg Beeren?");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Nein, danke. Ich wollte wissen, ob Sie ein Mädchen gesehen haben. Sie trägt ein braunes Kleid und–"');
                await Spiegel_VN.ƒS.Speech.tell("Handelnde", '"Siehst du hier irgendjemanden, der braun trägt? So etwas gibt es, seit wir alle Farbe bekommen, nicht mehr. Abgesehen davon habe ich keine Zeit für so etwas!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Leute bekommen Farbe? Du würdest gerne noch weiterfragen, doch der Händler hat sich schon abgewandt.");
                Spiegel_VN.ƒS.Character.hideAll();
                Spiegel_VN.ƒS.Speech.clear();
                return "07_Research Marketplace";
                break;
        }
    }
    Spiegel_VN.Chp07_ResearchMarketplace = Chp07_ResearchMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_Beggar() {
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Da hinten sitzt eine Frau. Ich bin mir sicher, dass sie etwas weiß. Schließlich sitzt sie hier den ganzen Tag und beobachtet!"');
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_angry, Spiegel_VN.ƒS.positionPercent(60, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich weiß nicht, ich würde die Bettelnden hier nicht ansprechen … nachher stiehlt sie dir deine Tasche!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du winkst ab und gehst zielstrebig zu ihr hin.");
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Beggar, Spiegel_VN.characters.Beggar.pose.neutral, Spiegel_VN.ƒS.positionPercent(30, 120));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Beggar, '"Ein Pfennig? Für eine alte Dame …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du überlegst. Was könntest du ihr anbieten?");
        let Chp07BeggarSceneElementAnswers = {
            iSayFood: "Essen",
            iSayEntertainment: "Vorstellung",
            iSayWarmth: "Wärme"
        };
        if (!Spiegel_VN.dataForSave.pickedChp05Food) {
            delete Chp07BeggarSceneElementAnswers.iSayFood;
        }
        if (!Spiegel_VN.dataForSave.pickedChp05Seeds) {
            delete Chp07BeggarSceneElementAnswers.iSayEntertainment;
        }
        if (!Spiegel_VN.dataForSave.pickedChp05Cloak) {
            delete Chp07BeggarSceneElementAnswers.iSayWarmth;
        }
        let Chp07BeggarSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp07BeggarSceneElementAnswers, "choicesCSSclass");
        switch (Chp07BeggarSceneElement) {
            case Chp07BeggarSceneElementAnswers.iSayFood:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dir fällt dein Vesper ein, dass du von zuhause mitgebracht hast. Vielleicht ist es jetzt nicht mehr so frisch, aber du kramst in deiner Tasche, ziehst es heraus und überreichst es der Bettlerin.");
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Beggar);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Beggar, Spiegel_VN.characters.Beggar.pose.front, Spiegel_VN.ƒS.positionPercent(30, 120));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Beggar, '"Oh … danke …"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie verschlingt das Brötchen sofort.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp07BeggarSceneElementAnswers.iSayEntertainment:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du holst ein paar Kerne aus deiner Tasche und streust sie auf den Boden. Hoffentlich kommen deine fliegenden Freunde von zuhause und singen! Tatsächlich, die Vögel kommen sofort angeflogen.");
                await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.birds, 0.1, 1, true);
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp07_MarketplaceWharyBirds);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Als sie um dich herum zwitschern und ihre Melodie anstimmen, entspannst du dich etwas. Egal, was passiert, die Vögel werden dir zur Seite stehen, das weißt du jetzt.");
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Beggar);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Beggar, Spiegel_VN.characters.Beggar.pose.front, Spiegel_VN.ƒS.positionPercent(30, 120));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Beggar, '"Wie schön! Wie entzückend!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie klatscht in die Hände und beobachtete die Vögel fasziniert.");
                Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.birds, 0, 0, false);
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp07BeggarSceneElementAnswers.iSayWarmth:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du überlegst für einen Moment. Dann schwingst du den dunklen Mantel, den du daheim eingepackt hast, von deinen Schultern. Die Bettlerin kann ihn eher gebrauchen. ");
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Beggar);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Beggar, Spiegel_VN.characters.Beggar.pose.front, Spiegel_VN.ƒS.positionPercent(30, 120));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Beggar, '"Oh, der ist ja schön… so weich …"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie faltet den Mantel zusammen und stopft ihn unter ihre Weste.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp07_MarketplaceWhary);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Haben Sie ein Mädchen gesehen? Sie trägt ein braunes Kleid, hat braune Haare und ist seit zwei Tagen vermisst."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Beggar, '"Vermisst… das ist nicht gut. Nicht gut. Vielleicht steckt sie fest? Ganz fest."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_shocked, Spiegel_VN.ƒS.positionPercent(60, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Sie steckt fest? Wie meinen Sie das?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Beggar);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Beggar, Spiegel_VN.characters.Beggar.pose.anguish, Spiegel_VN.ƒS.positionPercent(30, 120));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Beggar, '"Manche Menschen … manche werden eingepackt. Versteckt. Festgehalten."');
        // await ƒS.Speech.tell(characters.maincharacter, "Du erinnerst dich an die Worte des Wünschebaums.");
        // await ƒS.Speech.tell(characters.maincharacter, '"Als Sklavin?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Beggar);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Beggar, Spiegel_VN.characters.Beggar.pose.shocked, Spiegel_VN.ƒS.positionPercent(30, 120));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Beggar, '"Sklave … ja. Festgehalten. Gezwungen, zu produzieren. Die Farbe, überall! Überall Farbe. Mit den Spiegeln. Über den See!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was bedeutet das, mit den Spiegeln? Was ist über dem See?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Statt zu antworten, schaut sie über deine Schulter. Du folgst ihrem Blick, weil du denkst, sie hätte etwas entdeckt. Als du dich wieder umdrehst, ist die Bettlerin verschwunden.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Beggar);
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos1_confused, Spiegel_VN.ƒS.positionPercent(60, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Wo ist sie denn hin?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Sie ist einfach weg? Sie wusste so viel! Ich wollte sich doch noch so viel fragen …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Verzweifelt suchst du nach ihr in der Menschenmenge, doch die Bettlerin scheint wie vom Erdboden verschluckt.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das gibt’s doch nicht! Wie kann sie so schnell weg sein?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos3_arms_happy, Spiegel_VN.ƒS.positionPercent(60, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Aber wir haben eine Spur! Menschen werden irgendwo festgehalten, gegen ihren Willen, und arbeiten ..."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Klingt fast wie … wie eine Fabrik!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Als du es aussprichst, tauchen Bilder von Kailani in deinem Kopf auf: Kailani in einem Riesenkäfig, gepeitscht von bösen Wärtern.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Hast du etwas rausgefunden, Flynn?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos1_sad, Spiegel_VN.ƒS.positionPercent(60, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er schüttelt betrübt den Kopf.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Die Händler wollten mir nichts erzählen und die Leute, die ich gefragt habe, meinten nur, sie sehen jeden Tag Leute, die verloren aussehen. Ich bin also auch nicht weitergekommen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Gut, dann fragen wir weiter ..."');
        return "06_new day";
    }
    Spiegel_VN.Chp07_Beggar = Chp07_Beggar;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_TalkToInnkeeper() {
        Spiegel_VN.dataForSave.pickedChp07TalkToInnkeeper = true;
        let Chp07InnkeeperElementAnswers = {
            iSayBeg: "Bettelnd",
            iSayAngry: "Verärgert",
            iSayDesperate: "Verzweifelt"
        };
        // if (
        //   !dataForSave.pickedChp07ResearchMarketplace ||
        //   !dataForSave.pickedChp07TalkToCook ||
        //   !dataForSave.pickedChp07TalkToInnkeeper ||
        //   !dataForSave.pickedChp07TalkToStablehand
        // ) {
        //   delete Chp07InnkeeperElementAnswers.PickSceneContinue;
        // }
        let Chp07InnkeeperElement = await Spiegel_VN.ƒS.Menu.getInput(Chp07InnkeeperElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp07InnkeeperElement) {
            case Chp07InnkeeperElementAnswers.iSayBeg:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Bitte hören Sie mir zu! Meine Schwester ist weg! Ich brauche dringend Ihre Hilfe! Haben Sie sie gesehen?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Sorry, gerade is’ es echt schlecht. Komm’ doch später nochmal runter."');
                Spiegel_VN.ƒS.Speech.clear();
                return "07_TalkToInnkeeper";
                break;
            case Chp07InnkeeperElementAnswers.iSayAngry:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Dafür nehmen Sie sich jetzt Zeit! Ich bin auf der Suche nach meiner Schwester. Stellen Sie sich mal vor, eines Ihrer Familienmitglieder wäre einfach weg. Wie würden Sie reagieren?"');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Innkeeper, Spiegel_VN.characters.Innkeeper.pose.pos2_smile, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Ist ja gut. Also. Ich seh’ hier jeden Tag viele Mädchen. Beschreib’ sie doch mal genauer."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Froh, endlich Gehör bei der Wirtin gefunden zu haben, erzählst du ihr (beinahe) die ganze Geschichte. Von Kailanis komischen Stimmungen und dem Spiegel. Als du bei der Farblosigkeit angekommen bist, unterbricht sie dich.");
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Innkeeper, Spiegel_VN.characters.Innkeeper.pose.pos1_worried, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Sie war grau? Bis’ du dir da sicher? Hm, …"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Hör’ zu. Es is’ nämlich so, dass wir hier ein kleines Farbenproblem haben, Vielleicht is’ dir das auch schon aufgefallen?"');
                // await ƒS.Speech.tell(characters.maincharacter, "Du nickst schnell und holst tief Luft, um weiterzusprechen. Die Wirtin unterbricht dich.");
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Innkeeper, Spiegel_VN.characters.Innkeeper.pose.pos2_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Das mit den Farben … is’ alles nich’ so einfach, ne. Wir waren früher alle grau. Das kannste dir jetzt gar nicht vorstellen. Aber so war’s! Dann kam, so nach und nach, ein bisschen Farbe in die Pflanzen. Wie schön das war, die farbigen Blumen das erste Mal zu sehen!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Naja, dann hat sich etwas im Palast getan. Auf einmal gab’ es auch Menschen, die farbig waren! Wie wir alle gestaunt haben, kannste dir nich’ vorstellen. Die trugen gelben Hemden und rosa Haare und sonstigen Schnickschnack. Zuerst hatten die Reichen die meisten Farben. Dann sickerte es irgendwie zu uns ‘runter."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Wie du siehst, mach’ ich da mittlerweile nich’ mehr so mit. Mir gefällt’s, wenn’s bisschen natürlicher is’. Aber diese ganze Farbe, die muss  ja von irgendwo herkommen, ne? Das darf man nich’ so laut fragen. Die haben das gar nich’ gern, wenn man danach fragt."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp07InnkeeperElementAnswers.iSayDesperate:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich bin völlig verzweifelt … ich suche meine Schwester und weiß einfach nicht mehr weiter ... können Sie mir helfen?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Ich werd’ gerade vom Koch gerufen.  Komm’ doch später nochmal runter."');
                Spiegel_VN.ƒS.Speech.clear();
                return "07_TalkToInnkeeper";
                break;
        }
        do {
            let Chp07InnkeeperElementAnswers2 = {
                iSayColor: '"(Erkunden) Woher kommt die Farbe?"',
                iSayGrey: '"(Erkunden)  Kailani war auch grau"',
                iSayWhatHappened: '"(Erkunden) Was, denken Sie, ist mit Kailani geschehen?"',
                iSayContinue: "Weiter"
            };
            //    if (
            //   !dataForSave.pickedChp07pickedColor ||
            //   !dataForSave.pickedChp07pickedGrey ||
            //   !dataForSave.pickedChp07pickedWhatHappened
            // ) {
            //   delete Chp07InnkeeperElementAnswers2.iSayContinue;
            // }
            let Chp07InnkeeperElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp07InnkeeperElementAnswers2, "choicesCSSclass");
            // *** RESPONSES ***
            switch (Chp07InnkeeperElement2) {
                case Chp07InnkeeperElementAnswers2.iSayColor:
                    Spiegel_VN.dataForSave.pickedChp07pickedColor = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Sach’ ich doch gerade, darf man nich’ sagen! Ich hab’ so meine Vermutungen. Vielleicht wird die Farbe von anderen Menschen geklaut, das weiß ich wirklich nich."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp07InnkeeperElementAnswers2.iSayGrey:
                    Spiegel_VN.dataForSave.pickedChp07pickedGrey = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kailani war auch so farblos, bevor sie verschwunden ist!"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Deshalb mein’ ich ja, es kann sein, dass ihr Verschwinden mit der Farbe zu tun hat. Weil dann is’ sie auf jeden Fall hier in der Stadt. Weil von hier aus verbreitet sich die Farbe."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp07InnkeeperElementAnswers2.iSayWhatHappened:
                    Spiegel_VN.dataForSave.pickedChp07pickedWhatHappened = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Ich weiß es doch nich’ … ich denk’, sie is’ hier. Du bis’ schon am richtigen Ort zum Suchen. Aber mehr weiß ich leider nich."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp07InnkeeperElementAnswers2.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp07Continue = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Innkeeper, '"Vielen Dank, dass Sie sich Zeit genommen haben!"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp07Continue);
        Spiegel_VN.ƒS.Character.hideAll();
        return "06_new day";
    }
    Spiegel_VN.Chp07_TalkToInnkeeper = Chp07_TalkToInnkeeper;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_TalkToCook() {
        Spiegel_VN.dataForSave.pickedChp07TalkToCook = true;
        let Chp07CookElementAnswers = {
            iSayOffended: "Beleidigt",
            iSaySad: "Traurig",
            iSayAngry: "Wütend"
        };
        let Chp07CookElement = await Spiegel_VN.ƒS.Menu.getInput(Chp07CookElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp07CookElement) {
            case Chp07CookElementAnswers.iSayOffended:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Na gut! Dann suche ich meine Schwester eben allein! Wozu hilft man anderen Menschen schon?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Sorry, echt. Aber ich habe niemanden gesehen. Willst ein frisches Gebäck?"');
                Spiegel_VN.ƒS.Speech.clear();
                return "07_TalkToCook";
                break;
            case Chp07CookElementAnswers.iSaySad:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich vermisse sie unglaublich und mache mir sehr große Sorgen."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Ich hab’ auch ‘ne kleine Schwester. Weißt du, ob sie wirklich in der Stadt ist?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich habe keine Ahnung. Vermutlich ist sie hier irgendwo gefangen. Habe ich zumindest gehört."');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Cook, Spiegel_VN.characters.Cook.pose.pos2_concerned, Spiegel_VN.ƒS.positionPercent(65, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Gefangen? Sag bloß …"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er grübelt lange und sieht auf einmal gar nicht mehr so lässig aus.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Ich habe in letzter Zeit einiges gehört … nur aus der Gerüchteküche. Wortwörtlich, hehe."');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Cook, Spiegel_VN.characters.Cook.pose.pos1_concerned, Spiegel_VN.ƒS.positionPercent(65, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Ich weiß nicht, ob du’s wusstest, aber seit ewigen Zeiten war unser Leben ziemlich grau. Die letzte Königin, Annabelle II., hatte dann die Schnauze voll. Sie wollte ihre Kleider unbedingt in Farbe sehen. Die war eitel, heiliger Strohsack!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Deshalb hatte sie ein paar Magierinnen und Zauberer von weit weg über den Ozean zu sich geholt. Diese Zaubernde haben jahrelang hinter verschlossenen Schlosstüren gewerkelt. Fast hatten wir das Ganze schon vergessen und uns mit dem Gedanken abgefunden, dass wir eben für immer grau sein werden. Doch dann … plötzlich war die erste Blume tatsächlich gelb."');
                Spiegel_VN.ƒS.Character.hideAll();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Cook, Spiegel_VN.characters.Cook.pose.pos2_unknowing, Spiegel_VN.ƒS.positionPercent(65, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Alles sehr hübsch, und so weiter. Aber: Annabelle, unsere Königin, die wurde nie wieder gesehen. Niemand weiß, wer wirklich hinter den Schlosstüren hockt und regiert. Meine Freunde und ich, wir haben da aber ‘ne Vermutung …"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er beugt sich verschwörerisch zu dir herunter.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Ich glaube, da ist ein böser Geist! Ein Geist im Schloss, der über uns alle regiert. Und der hat Annabelle getötet. Warum sonst sollte sie sich nicht mehr zeigen?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Aber jetzt – in Luft aufgelöst. Die meisten wollen davon aber nichts hören. Solange die ihre Farbe kriegen und sich aufpolstern und im Spiegel anglotzen können, ist denen alles egal. Aber nicht mir und meinem Kreis!"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp07CookElementAnswers.iSayAngry:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich bin extra hierhergereist, um Kailani zu suchen! Wieso redest du nicht mit mir? Du könntest dir doch wenigstens meine Geschichte anhören …"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Schon. Aber ich kann dir, glaube ich, nicht helfen."');
                Spiegel_VN.ƒS.Speech.clear();
                return "07_TalkToCook";
                break;
        }
        do {
            let Chp07CookElementAnswers2 = {
                iSayGhost: '"(Erkunden) Was macht der Geist?"',
                iSayColor: '"(Erkunden) Woher kam die Farbe?"',
                iSayPeople: '"(Erkunden) Was macht das Volk?"',
                iSayContinue: "Weiter"
            };
            // if (
            //   !dataForSave.pickedChp07CookpickedGhost ||
            //   !dataForSave.pickedChp07CookpickedColor ||
            //   !dataForSave.pickedChp07CookpickedPeople
            // ) {
            //   delete Chp07CookElementAnswers2.iSayContinue;
            // }
            let Chp07CookElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp07CookElementAnswers2, "choicesCSSclass");
            // *** RESPONSES ***
            switch (Chp07CookElement2) {
                case Chp07CookElementAnswers2.iSayGhost:
                    Spiegel_VN.dataForSave.pickedChp07CookpickedGhost = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Wir sind uns sicher, dass ein Geist da oben sitzt und Farbe frisst."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp07CookElementAnswers2.iSayColor:
                    Spiegel_VN.dataForSave.pickedChp07CookpickedColor = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Nja, das ist eben die Frage! Das weiß keiner …"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp07CookElementAnswers2.iSayPeople:
                    Spiegel_VN.dataForSave.pickedChp07CookpickedPeople = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Nichts, das ist es ja eben! Bestaunt sich im Spiegel, und das war’s."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp07CookElementAnswers2.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp07CookpickedContinue = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das Klappern von Pfannen stört euer Gespräch.");
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Cook, '"Ich muss weg, das Mittagessen für morgen vorbereiten! Dir viel Glück bei der Suche und ehm, erzähl’ besser niemandem von unserem Gespräch, ja?"');
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Eine Königin, Spiegel und ein böser Geist? Du spürst, dass all diese Informationen mit Kailanis Verschwinden zu tun haben. Aber es fehlen noch einige große Puzzlestücke.");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "06_new day";
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp07CookpickedContinue);
    }
    Spiegel_VN.Chp07_TalkToCook = Chp07_TalkToCook;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_ArrivalLake() {
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_Lake);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Der Weg zum See war nicht weit. Als ihr dort ankommt, ist der See tiefblau und gefühlt endlos.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Der ist ja riesig! So nahe war ich noch nie. Jetzt müssen wir nur noch rüberkommen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Suche im Bild nach Möglichkeiten zur Überfahrt! Klicke dabei auf die Stellen, bei denen sich der Mauszeiger ändert. Wenn du einen Weg gefunden hast, tippe auf die Leertaste.");
        Spiegel_VN.ƒS.Speech.clear();
        return "08_ImageRiddle";
    }
    Spiegel_VN.Chp08_ArrivalLake = Chp08_ArrivalLake;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_ImageRiddle() {
        let locLake = {
            name: "Lake",
            background: "./Assets/Backgrounds/Chapter08/CrossLake.png"
        };
        await Spiegel_VN.ƒS.Location.show(locLake);
        Spiegel_VN.ƒS.update(0);
        let hitboxes = // Von Jonas Plotzky programmiert
         [
            createHitbox(0),
            createHitbox(1),
            createHitbox(2),
            createHitbox(3),
            createHitbox(4),
            createHitbox(5),
            createHitbox(6),
            createHitbox(7)
        ];
        await Spiegel_VN.ƒS.getKeypress(Spiegel_VN.ƒ.KEYBOARD_CODE.SPACE);
        for (const hitbox of hitboxes) { // Von Jonas Plotzky programmiert
            hitbox.remove();
        }
        // -------------------
        function createHitbox(_number) {
            let scene = document.querySelector("scene");
            let hitbox = document.createElement("span");
            hitbox.id = "hit" + _number;
            hitbox.className = "lake";
            scene.appendChild(hitbox);
            hitbox.addEventListener("click", hndClick);
            return hitbox;
        }
        function hndClick(_event) {
            switch (_event.target.id) {
                case "hit0":
                    console.log("Leuchtturm");
                    Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Auf dem Leuchtturm könntet wir Ausschau nach Schiffen halten? Aber wie kommen wir dahin?");
                    break;
                case "hit1":
                    console.log("Steine");
                    Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Ich weiß nicht, ob über die Steine hüpfen so eine gute Idee ist.");
                    break;
                case "hit2":
                    console.log("Wasser");
                    Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Willst du wirklich rüber schwimmen? Das würde ich mir nochmal überlegen!");
                    break;
                case "hit3":
                    console.log("Schildkröten");
                    Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Schildkröten lassen uns sicher nicht auf ihnen reiten!");
                    break;
                case "hit4":
                    console.log("Schilf");
                    Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Perfekt. Hinter dem Schilf liegt ein Boot. Drücke die Leertaste.");
                    break;
                case "hit5":
                    console.log("Vögel");
                    Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Ich würde auch sofort rüber fliegen! Aber das klappt nicht.");
                    break;
                case "hit6":
                    console.log("Wald");
                    Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Ein Floß bauen könntet ihr auch. Wo kriegt ihr aber das Werkzeug her?");
                    break;
            }
        }
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_smile2, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Da ist ein Boot! Hat das jemand hier liegenlassen? Wie perfekt! Ich wusste übrigens die ganze Zeit, dass sich etwas hinter dem Schilf versteckt."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du verdrehst die Augen und hüpfst hinter Flynn ins Boot hinein. Zum Glück ist es trocken und nicht morsch. Ihr stoßt euch mit dem Paddel, das im Boot lag, vom Ufer ab und fahrt los.");
    }
    Spiegel_VN.Chp07_ImageRiddle = Chp07_ImageRiddle;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_OnLake() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_OnBoat);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_uncertain, Spiegel_VN.ƒS.positionPercent(70, 100));
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Auf dem See ist es ruhig. Eine graue Welt, eine verschwundene Königin, Spiegel und ganz viel Farbe … und irgendwo mittendrin ist Kailani.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn verspürt wohl auch die veränderte Atmosphäre, denn das erste Mal, seit du ihn kennst (was ja auch wirklich keine lange Zeit ist), ist er still und paddelt vor sich hin. Du beschließt, ihn ein bisschen auszuhorchen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Also, Flynn, es ist ja wirklich nicht zu übersehen, dass die Leute hier sehr auf ihr Äußeres achten."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Naja, wer will nicht schön aussehen?"');
        do {
            let Chp08ConvoFlynnElementAnswers = {
                iSayExploreTheyAreAfraid: "(Erkunden) Vielleicht haben sie Angst?",
                iSayExploreAttention: "(Erkunden) Sie brauchen die Aufmerksamkeit",
                iSayExploreAll: "(Erkunden) Wenn alle so sind ...",
                iSayContinue: "Weiter"
            };
            // if (
            //   !dataForSave.pickedChoiceChp10ExploreAfraid ||
            //   !dataForSave.pickedChoiceChp10ExploreAttention ||
            //   !dataForSave.pickedChoiceChp10ExploreAll
            // ) {
            //   delete Chp10BuildARaftElementAnswers.iSayContinue;
            //   // return Chp01_CS_ArrivalHome();
            // }
            let Chp08ConvoFlynnElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08ConvoFlynnElementAnswers, "choicesCSSclass");
            switch (Chp08ConvoFlynnElement) {
                case Chp08ConvoFlynnElementAnswers.iSayExploreTheyAreAfraid:
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_shocked2, Spiegel_VN.ƒS.positionPercent(50, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Angst vor was?"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Angst vor Verurteilung! Wenn jemand anders aussieht, als die Leute in Whary, werden sie von ihnen verurteilt. Nur, weil sie nicht schlank genug oder keine Muskeln an der richtigen Stelle haben. Das ist doch kein schönes Gefühl."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn schweigt und paddelt.");
                    Spiegel_VN.ƒS.Character.hideAll();
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp08ConvoFlynnElementAnswers.iSayExploreAttention:
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_angry, Spiegel_VN.ƒS.positionPercent(50, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Achwas! Das hat doch damit nichts zu tun."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Meinst du nicht? Geht es den Leuten nicht darum, dass andere sich mit ihnen vergleichen können und so mehr Aufmerksamkeit kriegen? Ich glaube, schon ..."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Hm."');
                    Spiegel_VN.ƒS.Character.hideAll();
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp08ConvoFlynnElementAnswers.iSayExploreAll:
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.pos2_crossed_angry, Spiegel_VN.ƒS.positionPercent(50, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich glaube, wenn es manche vormachen, wollen es alle anderen nachmachen. So hat der Koch das gesagt! Manche haben die Farbe zuerst bekommen, dann wollten sie alle anderen auch."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ach, wer weiß wie das Ganze angefangen hat! Kannst du es aber den Leuten verübeln?"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp08ConvoFlynnElementAnswers.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp08ConvoContinue = true;
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
                    await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_ArrivalFactory);
                    await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                    Spiegel_VN.ƒS.Character.hideAll();
                    Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_mirrorworld_whary, 0, 0, false);
                    Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_mirrorworld_factory, 0.8, 1, true);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Euer Boot driftet näher an die Häuser heran, die direkt am Ufer des Sees stehen. Du reibst dir die Augen, aber – alles ist grau! Du schaust an dir herunter – auch grau. Einzig der Turm, der bedrohlich in die Höhe ragt, ist in knallorange.");
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Warum ist alles grau?"');
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_angry, Spiegel_VN.ƒS.positionPercent(50, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Für diesen Ort hat die Farbe wohl nicht gereicht …"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er scheint ungeduldig zu werden.");
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Komm, lass uns andocken und erkunden!"');
                    return "08_Arrival other side";
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp08ConvoContinue);
    }
    Spiegel_VN.Chp08_OnLake = Chp08_OnLake;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_ArrivalOtherSide() {
        Spiegel_VN.ƒS.update();
        // ** RANDOM TEXT ***
        let randomTextChp08ArrivalOtherSide = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 3);
        switch (randomTextChp08ArrivalOtherSide) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Sollen wir los?"');
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Schau mal, am Turm bewegt sich was …"');
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Jetzt trödle nicht so!"');
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du hast ein mulmiges Gefühl im Bauch.");
                break;
        }
        let Chp08ArrivalOtherSideElementAnswers = {
            iSayDiscoverTower: "(Erkunden) Turm anschauen",
            iSaySearchForHidingPlace: "Nach Versteck suchen"
        };
        let Chp08ArrivalOtherSideElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08ArrivalOtherSideElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp08ArrivalOtherSideElement) {
            case Chp08ArrivalOtherSideElementAnswers.iSayDiscoverTower:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du beugst den Kopf in den Nacken und starrst hinauf zur Spitze. Der Turm ist deutlich höher als alle anderen Gebäude in diesem Dorf. Das orange ist beinahe unheimlich grell, im Vergleich zu den farblosen Häusern. Was wohl da drin ist?");
                Spiegel_VN.ƒS.Speech.clear();
                return "08_Arrival other side";
                break;
            case Chp08ArrivalOtherSideElementAnswers.iSaySearchForHidingPlace:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Gut, suchen wir nach etwas, wo wir bleiben können. Einen so schönen Gasthof wie in Whary wird es wohl nicht geben!"');
                Spiegel_VN.ƒS.Speech.clear();
                return "08_Search hiding place";
                break;
        }
    }
    Spiegel_VN.Chp08_ArrivalOtherSide = Chp08_ArrivalOtherSide;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_SearchHidingPlace() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_Village);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du und Flynn lauft schweigend und etwas ratlos durch das Dorf. Die Häuschen stehen eng aneinandergereiht und hüllen sich ebenfalls in Schweigen. Eigentlich willst du so schnell wie möglich wieder raus.");
        let Chp08HidingPlaceFactoryElementAnswers = {
            iSayExploreVillage: "(Erkunden) Dorf erkunden",
            iSayContinue: "Weiter suchen"
        };
        let Chp08HidingPlaceFactoryElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08HidingPlaceFactoryElementAnswers, "choicesCSSclass");
        switch (Chp08HidingPlaceFactoryElement) {
            case Chp08HidingPlaceFactoryElementAnswers.iSayExploreVillage:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_E_FactoryVillage);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du wanderst in eine Gasse, um dich genauer umzusehen. Es rührt sich nichts – keine Vögel, Menschen oder andere Lebewesen sind in Sicht. Es sieht nicht so aus, als ob ihr hier irgendwo unterkommen könnt.");
                Spiegel_VN.ƒS.Speech.clear();
                return "08_Search hiding place";
                break;
            case Chp08HidingPlaceFactoryElementAnswers.iSayContinue:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ihr lauft weiter. Im Dorf herrscht eine drückende Atmosphäre, die dir nicht geheuer ist. Dein Bauch zieht sich zusammen. War es ein Fehler gewesen, hier her zu reisen?");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_ForestPath);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Überraschend endet das Dorf und die Straße wird zum schmalen Waldweg.");
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, "Ich würde nach links! Links ist immer richtig.");
        do {
            let Chp08HidingPlaceFactoryElementAnswers2 = {
                iSayLeft: "Links",
                iSayRight: "Rechts",
                iSayHammer: "Was glänzt da?"
            };
            if (Spiegel_VN.dataForSave.pickedIron) {
                delete Chp08HidingPlaceFactoryElementAnswers2.iSayHammer;
            }
            let Chp08HidingPlaceFactoryElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp08HidingPlaceFactoryElementAnswers2, "choicesCSSclass");
            switch (Chp08HidingPlaceFactoryElement2) {
                case Chp08HidingPlaceFactoryElementAnswers2.iSayLeft:
                    Spiegel_VN.dataForSave.pickedChp08Left = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du stimmst Flynn zu und ihr wählt den linken Pfad.");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp08HidingPlaceFactoryElementAnswers2.iSayRight:
                    Spiegel_VN.dataForSave.pickedChp08Right = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich finde, wir sollten nach rechts!"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Na gut, ist mir egal! Hauptsache wir kommen irgendwo unter."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp08HidingPlaceFactoryElementAnswers2.iSayHammer:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du bückst dich und hebst den Gegenstand auf, der neben dem Waldweg im Grass liegt. Es ist ein Hammer. Komisch, denkst du, was macht der hier mitten im Wald? Er erinnert dich an das Werkzeug von Mama.");
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_ForestPathHammer);
                    Spiegel_VN.ƒS.update();
                    let Chp08HidingPlaceFactoryElementAnswers3 = {
                        iSayTake: "Einstecken",
                        iSayNotTake: "Liegen lassen"
                    };
                    let Chp08HidingPlaceFactoryElement3 = await Spiegel_VN.ƒS.Menu.getInput(Chp08HidingPlaceFactoryElementAnswers3, "choicesCSSclass");
                    switch (Chp08HidingPlaceFactoryElement3) {
                        case Chp08HidingPlaceFactoryElementAnswers3.iSayTake:
                            Spiegel_VN.dataForSave.pickedIron = true;
                            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du steckst ihn ein. Ein Werkzeug kann schließlich nie schaden.");
                            Spiegel_VN.ƒS.Speech.clear();
                            break;
                        case Chp08HidingPlaceFactoryElementAnswers3.iSayNotTake:
                            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Brauchst du hier einen Hammer? Eher nicht. Du legst ihn wieder ins Gras.");
                            Spiegel_VN.ƒS.Speech.clear();
                            break;
                    }
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp08Left && !Spiegel_VN.dataForSave.pickedChp08Right);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_HidingPlace);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Schnaufend kommt ihr oben an einem Überhang an. Der Hügel war doch nicht so mühelos. Dafür habt ihr jetzt eine Aussicht auf das Dorf, die atemberaubend wäre …");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "… wären da nicht die seltsame Stille und das Fehlen der Farben.");
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Perfekt! Hier können wir uns auf die Lauer legen und beobachten."');
        // await ƒS.Speech.tell(characters.maincharacter, "Ihr macht es euch, so gut es geht, auf dem Felsen gemütlich.");
        do {
            let Chp08HidingPlaceFactoryElementAnswers3 = {
                iSayThinkAboutVillage: '"(Erkunden) Was denkst du über das Dorf?"',
                iSayThinkAboutTower: '"(Erkunden) Wie findest du den Turm?"',
                iSayAskAboutPeople: "(Erkunden) Wo sind alle?",
                iSayContinue: "Weiter"
            };
            let Chp08HidingPlaceFactoryElement3 = await Spiegel_VN.ƒS.Menu.getInput(Chp08HidingPlaceFactoryElementAnswers3, "choicesCSSclass");
            switch (Chp08HidingPlaceFactoryElement3) {
                case Chp08HidingPlaceFactoryElementAnswers3.iSayThinkAboutVillage:
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Puh, ich weiß nicht. Schon komisch!"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du erklärst ihm nochmal, dass niemand genau weiß, woher die Farbe stammt. Flynn wirkt aber desinteressiert und zupft an einem Grashalm.");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp08HidingPlaceFactoryElementAnswers3.iSayThinkAboutTower:
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Der Turm ist interessant! Da muss etwas drin sein, sonst würde er nicht so strahlen. Vielleicht ein Schatz? Oder andere Kostbarkeiten?"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Oder Kailani?"');
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Oh, stimmt. Eh, deine Schwester ist vielleicht da drin gefangen gehalten! Deswegen ist es wichtig, dass wir beobachten, ob sich etwas tut."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Kailani scheint nicht seine erste Priorität zu sein.");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp08HidingPlaceFactoryElementAnswers3.iSayAskAboutPeople:
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Das ist eine gute Frage. Von hier oben sehe ich noch immer keine einzige Bewegung, du etwa?"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Als du den Kopf schüttelst, überlegt er weiter.");
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Vielleicht sind die Häuser alle verlassen, außer dem Turm? Deshalb hat nur er noch die Farbe?"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das kann sein … Aber wo sind die Menschen hin? Irgendetwas muss sie doch fortgetrieben haben.");
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_angry, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Das ganze Dorf kann auch verlassen sein."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich glaube nicht! Hier scheint sich etwas zu verbergen …"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn schweigt und zerrupft ein Blatt zwischen den Fingern.");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp08HidingPlaceFactoryElementAnswers3.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp08HidingPlaceContinue = true;
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_shocked, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Schau! Da war was!"');
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_HidingPlaceSlaves);
                    Spiegel_VN.ƒS.update();
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp08HidingPlaceContinue);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn zeigt aufgeregt in die Tiefe. Weit unten, neben dem Turm, strömen Menschen aus einem großen Gebäude.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Die sind auch alle grau! Guck mal, wie viele da herauskommen. Was haben die da drin wohl gemacht?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du und Flynn schaut verwundert zu, wie immer mehr graue Menschen aus dem Bau kommen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Die gehen alle in die Häuser! Siehst du das auch?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Tatsächlich verschwinden die kleinen Figuren, eine nach der anderen, in den Häuschen, die vorhin so still und leer wirkten.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Da wohnen sie also! Schau, ist doch alles in Ordnung. In den Turm ist aber niemand gegangen …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Viel interessanter ist doch, dass Kailani vielleicht unter diesen Menschen war! Sie ist womöglich jetzt in einem der Häuser? Ich muss sofort von hier runter!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Okay, warte mal. Wir sind doch erst hier hochgekrochen und haben uns ein Lager gemacht. Außerdem wird es gleich dunkel, und nachts will ich eigentlich nicht durch das Geisterdorf streichen, auch wenn wir nun wissen, dass es Menschen gibt."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Wer weiß, wie die drauf sind? Lieber legen wir uns etwas hin und ruhen uns aus."');
        let Chp08HidingPlaceFactoryElementAnswers4 = {
            iSayDefiant: "Trotzig",
            iSayGiveIn: "Einlenken",
            iSaySilent: "Schweigen"
        };
        let Chp08HidingPlaceFactoryElement4 = await Spiegel_VN.ƒS.Menu.getInput(Chp08HidingPlaceFactoryElementAnswers4, "choicesCSSclass");
        switch (Chp08HidingPlaceFactoryElement4) {
            case Chp08HidingPlaceFactoryElementAnswers4.iSayDefiant:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Meine Schwester ist da unten! Und ich soll sie nicht suchen gehen? Das ist doch Blödsinn!"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp08HidingPlaceFactoryElementAnswers4.iSayGiveIn:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Hast ja recht … müde bin ich schon. Und ganz geheuer ist mir das Dorf immer noch nicht."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp08HidingPlaceFactoryElementAnswers4.iSaySilent:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du schweigst. Natürlich hat er recht.");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Es ist schon fast dunkel. Du schaust hinunter und bemerkst etwas Seltsames. Du kommst nicht sofort darauf, aber dann fällt dir auf: wo normalerweise Licht hinter den Fenstern glänzt, ist es stockdunkel. Die Menschen haben keine Kerzen angezündet. Komisch.");
        // await ƒS.Speech.tell(characters.maincharacter, "Du hättest es beinahe vergessen – deine alten Klamotten sind noch in deiner Tasche! Du ziehst dich um und fühlst sofort wohler. Die Polster lässt du unter dem Baum liegen. Dass die Menschen sich in Whary so fehlerhaft finden, dass sie sich einpolstern müssen, ist wirklich seltsam.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du bist dir sicher, Kailani hier näher zu sein. Mit diesen tröstenden Gedanken drehst du dich um und kuschelst dich in das Lager ein, dass Flynn gebaut hat.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        return "09_Enter factory";
    }
    Spiegel_VN.Chp08_SearchHidingPlace = Chp08_SearchHidingPlace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_EnterFactory() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_HidingPlace);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Alles ist in tiefe Schatten getaucht. Es ist wohl noch sehr früh am Morgen? Dann fällt dir ein, dass diese Welt immer grau ist. Du bist auf einmal hellwach und aufgelöst. Gleichzeitig fühlst du dich so weit weg von daheim wie nie zuvor.");
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Na, auch schon wach?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Wieso ist er immer vor dir auf den Beinen?");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Wir müssen runter! Und uns das Haus anschauen, aus dem gestern alle Menschen gekommen sind."');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ganz früh heute Morgen sind sie auch reingelaufen, da habe ich sie gesehen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Wieso hast du mich nicht geweckt? Wir hätten sie abfangen können!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ach, das ging zu schnell und du hast so tief geschlafen …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Misstrauisch betrachtest du ihn. Er hätte dich wecken sollen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Komm, wir gehen!"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_Village);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ihr macht euch auf den Weg den Hügel hinunter und durch das stille Dorf, bis ihr an dem großen Gebäude angekommen seid.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp09_OutsideFactory);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Es ist genau so still und gruselig wie gestern. Von Nahem ist es riesig und wuchtig und wirkt eher wie eine Halle, statt einem Haus.");
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Wie sollen wir da reinkommen? Es gibt keine Türen!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Schau mal, dahinten ist ein Fenster geöffnet! Vielleicht können wir da einbrechen?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Tatsächlich steht dort ein kleines Fenster offen. Vorsichtig schleicht ihr euch heran und quetscht euch hindurch.");
        return "09_In Factory";
    }
    Spiegel_VN.Chp09_EnterFactory = Chp09_EnterFactory;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_ScoutTower() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_TowerOutside);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Verrückt, diese Fabrik! Meinst du, der Turm hängt damit zusammen?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Wieso bist du denn so versessen auf den Turm? Meine Schwester ist da drin und muss ein Theater verrichten!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich bin mir ziemlich sicher, dass der Dämon im Turm sitzt. Willst du dem wirklich begegnen?"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Oh, der Dämon. Der ist natürlich gefährlich. Aber bestimmt liegt die Lösung zu dieser ganzen Sache in dem Turm! Also besiegen wir den Dämon!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Jetzt warte doch mal! Du hast doch selbst gerade gesagt, dass wir einen Plan brauchen. Ich will zuerst wissen, was wirklich in dem Turm steckt. Ich habe da eine Idee …"');
        do {
            let Chp09ScoutTowerElementAnswers = {
                iSayClimb: "(Erkunden) Hochklettern",
                iSayBirds: "(Erkunden) Vögel rufen",
                iSayFlynn: "(Erkunden) Flynn schicken"
            };
            let Chp09ScoutTowerElement = await Spiegel_VN.ƒS.Menu.getInput(Chp09ScoutTowerElementAnswers, "choicesCSSclass");
            switch (Chp09ScoutTowerElement) {
                case Chp09ScoutTowerElementAnswers.iSayClimb:
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_angry, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Bist du verrückt! Niemals klettere ich an dem Ding hoch."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp09ScoutTowerElementAnswers.iSayBirds:
                    Spiegel_VN.dataForSave.pickedChp09ScoutTowerBirds = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich rufe meine Vogelfreunde! Sie können hochfliegen und mir berichten, was sie durch die Fenster sehen!"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp09ScoutTowerElementAnswers.iSayFlynn:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Wie wär’s, wenn du voraus gehst? Dich interessiert doch so sehr, was in dem Turm vor sich geht."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Sehr witzig! Ich, eh, brauche deine Expertise da drin!"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp09ScoutTowerBirds);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du rufst deine Vögelfreunde.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_TowerOutsideBirds);
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.birds, 0.1, 1, true);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Vögel schaffen es, mit ihrer bloßen Anwesenheit dir einen kleinen Teil deiner Sorgen zu nehmen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Bitte, schaut doch mal nach, was sich in dem Turm verbirgt! Wir glauben, dort liegt der Schlüssel zu Kailanis Befreiung."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Vögel zwitschern und fliegen hoch, um den Turm zu umkreisen. Drei Mal umrunden sie den Turm und landen wieder vor deinen Füßen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Welche Worte kannst du durch das Gezwitscher hören? Schreibe die Worte mit Komma dazwischen in das Feld.");
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.listeningriddle_demon, 1, 1, false);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Was hast du gehört?");
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.listeningriddle_mirror, 1, 1, false);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Vögel haben etwas gesagt!");
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.listeningriddle_destroy, 1, 1, false);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Wie war das?");
        // let answerBirds:
        // String =
        await Spiegel_VN.ƒS.Speech.getInput();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Also, da oben ist ein Spiegelzimmer, das von einem Dämon bewacht wird. Wir sind schon viel näher dran! Es ist tatsächlich ein Dämon im Turm!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und das Spiegelzimmer müssen wir zerstören! Hast du die Vögel gehört, Flynn? Wir können es schaffen, ich bin mir sicher! Wir müssen diese Spiegel ein für alle Mal zerstören. Dann können wir nach Hause."');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_smile, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Die Spiegel zerstören? Eh– ja, auf jeden Fall! Kailani, wir kommen!"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er stürmt Richtung Turm. Du schaust ihm verwirrt hinterher. Er klang nicht so euphorisch und erleichtert, eher beklommen.");
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.birds, 0, 0, false);
    }
    Spiegel_VN.Chp09_ScoutTower = Chp09_ScoutTower;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_InFactory() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp09_InFactory);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ihr steht in der Ecke einer gewaltigen Halle, in der es nur so vor Beschäftigten wuselt. In einzelnen Kammern stehen Menschen mit farbigen Klamotten vor großen Spiegeln, während viele in grauen Kutten geschäftig hin und her laufen.");
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_shocked, Spiegel_VN.ƒS.positionPercent(85, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das ist … die Fabrik! Von der die Bettlerin gesprochen hat! Was ist hier los?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Es sieht aus, als ob sie etwas vorführen …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Tatsächlich: Die Menschen drehen und wenden sich in den Spiegelkammern. Sie flattern mit den Armen oder schwingen ihre Hüften, zeigen ihre Muskeln oder fahren sich durch glänzende Haare. Die Bewegungen kommen dir bekannt vor, aber du kannst es gerade nicht zuordnen. Plötzlich –");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp09_InFactoryWK);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kailani!!! Da ist sie! KAILANI!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Deine Schwester steht in der Schlange mit den anderen Kuttentragenden. Sie sieht nicht auf, als du ihren Namen rufst. Sie sieht erschöpft und fast gebrochen aus, Zustände, in denen du sie noch nie gesehen hast. Du willst losrennen und sie holen, doch Flynn hält deinen Ärmel fest.");
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_sad, Spiegel_VN.ƒS.positionPercent(85, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Shh! Siehst du nicht die Wachen da drüben? Du kannst hier nicht einfach so durchrennen! Wir brauchen einen Plan."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich will keinen Plan! Meine Schwester ist dort drüben!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Aber siehst du denn nicht, wie gefährlich das ist? Was ist, wenn wir gefasst werden? Wenn wir hier ins Gefängnis geworfen werden? Dann kannst du deiner Schwester erst recht nicht helfen!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Verzweifelt siehst du zu, wie sich Kailani in der Schlange vorwärtsbewegt und in einem Tunnel verschwindet.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp09_InFactory);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Tränen laufen dir über das Gesicht. Du kannst es nicht fassen, dass du Kailani einfach so hast gehen lassen.");
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_neutral, Spiegel_VN.ƒS.positionPercent(85, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Sie ist wieder da!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du schaust ungläubig auf. Kailani steht wieder im Raum. Nur: sie sieht komplett anders aus. Eine lange Perücke bedeckt ihre schulterlangen, braunen Haare. Sie trägt ein pinkes Kleid und – es kann nicht anders sein – ein ausgestopftes Hinterteil. Sie geht in eine der Kabinen und beginnt, sich ebenfalls hin und her zu wiegen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was macht sie denn? Das ist doch so komisch! Ihr geht es nicht gut! Warum muss sie sich hier anziehen und –"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Und da fällt es dir wie Schuppen von den Augen: Sie ist das Spiegelbild! Das Spiegelbild, das man sich mit dem Handspiegel wünschen kann! In deinem Kopf schwirrt es.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Sie gibt vor, jemand anderes zu sein. Eine Person, die jetzt, in diesem Moment, auf der anderen Seite des Spiegels sitzt und sich wünscht, zu fliegen. Sie tut so, als wäre sie die Person, die gerade hineinschaut!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kailani hat diesen Szenen zugeschaut, jeden Tag! Sie hat sich selbst im Spiegel gesehen – aber warte, das war nicht sie. Sondern jemand, der sie imitiert und getäuscht hat. Der Spiegel hat diese Kabine gezeigt!"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Meinst du, das Spiegelbild in deinem Handspiegel? Diese Halle ist also eine Spiegelbild-Fabrik?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Genau, in dem magischen Spiegel! Warte mal – woher weißt du denn, dass ich einen Handspiegel habe?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn tut so, als hätte er dich nicht gehört und schaut weiter angestrengt den Arbeitenden zu. Er kann gar nichts von deinem Spiegel wissen! Das Misstrauen, das heute Morgen erwacht ist, wächst.");
        do {
            let Chp09InFactoryElementAnswers = {
                iSayListenToGuards: '"(Erkunden) Wachen zuhören"',
                iSayCubicle: '"(Erkunden) Kabine anschauen"',
                iSayContinue: "Weiter"
            };
            let Chp09InFactoryElement = await Spiegel_VN.ƒS.Menu.getInput(Chp09InFactoryElementAnswers, "choicesCSSclass");
            switch (Chp09InFactoryElement) {
                case Chp09InFactoryElementAnswers.iSayListenToGuards:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Geduckt schleichst du dich näher an die Wachen heran.");
                    await Spiegel_VN.ƒS.Speech.tell("Wache 1", '"... und da meinte sie zu mir, der nächste Schwung komme wohl morgen. Platz hat’s hier noch genug."');
                    await Spiegel_VN.ƒS.Speech.tell("Wache 2", '"Die Neuen können in den rechten Tunnel. Hauptsache, ich kann am Wochenende wieder ‘rüber und der Mann im Turm ist glücklich. Hast gehört, was Getliw neulich passiert ist?"');
                    await Spiegel_VN.ƒS.Speech.tell("Wache 1", '"Nee! Ich war doch im Urlaub. Was ist passiert?"');
                    await Spiegel_VN.ƒS.Speech.tell("Wache 2", '"Naja, Getliw hatte schon immer ein zu weiches Herz, weißt ja. Er wollte wohl einem Sklaven das Sixpack-Polster zubinden, weil er das nicht richtig gemacht hatte. Aber Kontakt mit den Sklaven ist ja verboten, dann wurde der Alarm ausgelöst. Er wurde erwischt und musste hoch in den Turm. Seitdem hat ihn niemand mehr gesehen …"');
                    await Spiegel_VN.ƒS.Speech.tell("Wache 1", '"Das ist ja was! Würde ich niemals tun. Hätte er doch …"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du überlegst fieberhaft. Mit den Sklaven darf man also nicht sprechen! Gut, dass du vorhin nicht Kailani holen wolltest. Und im Turm sitzt ein Mann. Vielleicht der Dämon, von dem der Koch gesprochen hatte?");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp09InFactoryElementAnswers.iSayCubicle:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du willst dir diese Kabine genauer anschauen. Ein großer Spiegel hängt an der Wand. Als du zuschaust, blitzt eine Landschaft darauf auf. Ein Strand? Auf einmal tritt ein Sklave davor und spannt seine Muskeln an.");
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Seine Schultern sind breit. Als er sich dreht, siehst du, dass er vorne ein Polster trägt. Ein Sixpack-Polster umspannt seinen Bauch und lässt ihn gleichzeitig stark und schlank aussehen. Du denkst an die Dorfbewohner daheim.");
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Keiner von denen hat ein Sixpack und sicherlich nicht so breite Schultern. Dort achtet auch niemand auf das Äußere. Wichtig ist, dass sich jede Person in die Gemeinschaft integriert und freundlich zu Anderen ist. Die Menschen hier haben wohl jeglichen Bezug zur Gemeinschaft verloren, wenn ihnen das Äußere das Wichtigste ist.");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp09InFactoryElementAnswers.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp09InFactoryContinue = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Flynn, gehen wir. Ich habe genug gesehen. Diese armen Sklaven …"');
                    Spiegel_VN.ƒS.Speech.clear();
                    Spiegel_VN.ƒS.Character.hideAll();
                    return "09_Scout Tower";
            }
        } while (!Spiegel_VN.dataForSave.pickedChp09InFactoryContinue);
    }
    Spiegel_VN.Chp09_InFactory = Chp09_InFactory;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_IntoTower() {
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Es ist soweit! Du zitterst erwartungsvoll. Was ist aber, wenn du den Dämon nicht besiegen kannst? Welcher Mensch kann schließlich einfach so Dämonen besiegen?");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Hättest du einen Plan machen sollen, wie Flynn es vorgeschlagen hat? Mit leeren Händen und nur deinem ‘offenen Herzen’, wie es der Wünschebaum sagen würde, trittst du nun dem Bösen entgegen. Ob das reicht?.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_GroundFloorTower);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Gemeinsam mit Flynn schleichst du dich durch eine unscheinbare Tür und stehst am Ende eines Tunnels. Obwohl der Turm von außen schmal und rund war, scheint der Tunnel unendlich lange zu sein. Du merkst sofort, dass hier etwas Magisches in der Luft liegt.");
        do {
            let Chp10InTowerElementAnswers = {
                iSayPortrait: "(Erkunden) Portrait anschauen",
                // iSayWindow: '"(Erkunden) Fenster"',
                iSayContinue: "Weiter"
            };
            let Chp10InTowerElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10InTowerElementAnswers, "choicesCSSclass");
            switch (Chp10InTowerElement) {
                case Chp10InTowerElementAnswers.iSayPortrait:
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_ExplorePortrait);
                    Spiegel_VN.ƒS.Character.hideAll();
                    await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du schaust dir die lange Reihe Portraits an, die an der Wand hängen. Die meisten davon sind sehr alt; die Ölfarbe blättert bei einigen sogar ab. Dir fällt ein neues Portrait, das weiter vorne hängt, auf. Eine junge Frau mit bunten Haaren blickt dich amüsiert an. Auf einer goldenen Tafel am Bildrand steht: “Königin Annabelle II, *1347”. Die verstorbene Königin! Aber es ist kein Sterbedatum vermerkt? Vielleicht hat sie den Dämon doch überlebt?");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                // case Chp10InTowerElementAnswers.iSayWindow:
                //   await ƒS.Location.show(locations.Chp10_GroundFloorTower);
                //   ƒS.update();
                //   await ƒS.Speech.tell(characters.maincharacter, "Du schaust aus dem Fenster und erschrickst. Obwohl du und Flynn erst in den Turm eingetreten seid, liegt der Boden plötzlich etliche Meter unter euch. Du blickst auf die graue Welt hinaus und erschauerst. Der Turm soll ungebetene Besucher wohl in die Irre führen. Du schüttelst den Kopf und blickst wieder nach vorne. Bloß nicht ablenken lassen.");
                //   ƒS.Speech.clear();
                //   break;
                case Chp10InTowerElementAnswers.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp10IntoTowerContinue = true;
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_GroundFloorTower);
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Wie schön es hier ist! Schau mal, wie das glitzert! Von außen sah der Turm gar nicht so breit aus? Der Dämon ist sicherlich ein Klacks."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Schön kommt dir der Turm ganz und gar nicht vor, eher unheimlich und ziemlich bedrohlich. Ihr bewegt euch auf leisen Sohlen nach vorne, bis ihr eine kleine Wendeltreppe am Ende des Gangs seht. Vorsichtig schleicht ihr euch hoch.");
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
                    await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_MinigameInstructions);
                    await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Was ist das?");
                    await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_Demontunnel);
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Demon, Spiegel_VN.characters.Demon.pose.pos2_angry, Spiegel_VN.ƒS.positionPercent(100, 100));
                    await Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Demon, "Wer wagt es, mich zu stören!");
                    return "10_MinigameDemon";
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp10IntoTowerContinue);
    }
    Spiegel_VN.Chp10_IntoTower = Chp10_IntoTower;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_MinigameDemon() {
        Spiegel_VN.ƒS.Character.hideAll();
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_mirrorworld_factory, 0, 0, false);
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_DemonMinigame, 0.8, 1, true);
        Spiegel_VN.ƒS.update();
        let Demontunnel = {
            name: "Tunnel",
            background: "./Assets/Backgrounds/Chapter10/Demontunnel.png"
        };
        let demon = {
            name: "Demon",
            pose: {
                attack: "./Assets/Characters/Demon/Demon_pos2_angry.png",
                normal: "./Assets/Characters/Demon/Demon_smile.png"
            },
            origin: Spiegel_VN.ƒ.ORIGIN2D.CENTER
        };
        let mirror = {
            name: "Mirror",
            pose: { normal: "./Assets/Items/Mirror_back.png" },
            origin: Spiegel_VN.ƒ.ORIGIN2D.CENTER
        };
        let soundeffekt = {
            evillaugh: "./Assets/Test_Minigame_Demon/evil-laugh-.mp3"
        };
        // initialize characters and nodes
        let nodeDemon;
        await Spiegel_VN.ƒS.Location.show(Demontunnel);
        await Spiegel_VN.ƒS.Character.show(mirror, mirror.pose.normal, Spiegel_VN.ƒS.positionPercent(50, 50));
        await Spiegel_VN.ƒS.Character.show(demon, demon.pose.normal, Spiegel_VN.ƒS.positionPercent(50, 50));
        let nodeMirror = await Spiegel_VN.ƒS.Character.get(mirror).getPose(mirror.pose.normal);
        let nodeDemonNormal = await Spiegel_VN.ƒS.Character.get(demon).getPose(demon.pose.normal);
        let nodeDemonAttack = await Spiegel_VN.ƒS.Character.get(demon).getPose(demon.pose.attack);
        nodeDemon = nodeDemonNormal;
        // adjust mirror position
        nodeMirror.getComponent(Spiegel_VN.ƒ.ComponentMesh).mtxPivot.translateY(0.1);
        nodeMirror.getComponent(Spiegel_VN.ƒ.ComponentMesh).mtxPivot.translateX(-0.05);
        // prevent normalization error
        nodeDemon.mtxLocal.translateX(1);
        // define variables
        let graph = Spiegel_VN.ƒS.Base.getGraph();
        let margin = 960;
        let demonTargetPosition = Spiegel_VN.ƒ.Vector3.ZERO();
        let demonMood = -4000;
        // make graph transformable
        graph.addComponent(new Spiegel_VN.ƒ.ComponentTransform());
        // start game interactions
        let viewport = Spiegel_VN.ƒS.Base.getViewport();
        viewport.canvas.addEventListener("mousemove", moveMirror);
        Spiegel_VN.ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, loopFrame);
        // define signals for fail and success
        let gameOver = Spiegel_VN.ƒS.Progress.defineSignal([
            () => Spiegel_VN.ƒS.Progress.createEventPromise(document, "tunnelFail"),
            () => Spiegel_VN.ƒS.Progress.createEventPromise(document, "tunnelSuccess")
        ]);
        // wait for signals
        let event = await gameOver();
        console.log(event);
        // cleanup and end chapter
        graph.removeComponent(graph.cmpTransform);
        Spiegel_VN.ƒS.Character.hideAll();
        Spiegel_VN.ƒ.Loop.removeEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, loopFrame);
        viewport.canvas.removeEventListener("mousemove", moveMirror);
        if (event.type == "tunnelFail") {
            Spiegel_VN.dataForSave.tunnelFailed += 1;
            Spiegel_VN.ƒS.Speech.tell("", "Mist, der Dämon hat dich erwischt! " + Spiegel_VN.dataForSave.tunnelFailed + " Mal, probier's nochmal.<br/>Drücke dazu die Leertaste");
        }
        if (Spiegel_VN.dataForSave.tunnelFailed == 3) {
            Spiegel_VN.ƒS.Speech.clear();
            Spiegel_VN.ƒS.Speech.tell("Dämon", "Ha! Hab' ich dich!");
            return "Bad Ending";
        }
        if (event.type == "tunnelSuccess") {
            return "Good Ending";
        }
        // for testing, stop NV from starting
        await Spiegel_VN.ƒS.getKeypress(Spiegel_VN.ƒ.KEYBOARD_CODE.SPACE);
        await Chp10_MinigameDemon();
        // chapter end
        // ------------------------------------------------------------------
        // game functions
        function moveMirror(_event) {
            let offset = new Spiegel_VN.ƒ.Vector2(_event.offsetX, _event.offsetY);
            let pos = Spiegel_VN.ƒS.pointCanvasToMiddleGround(offset);
            nodeMirror.mtxLocal.translation = Spiegel_VN.ƒ.Vector3.DIFFERENCE(pos, graph.mtxWorld.translation);
            Spiegel_VN.ƒS.update(0);
        }
        function loopFrame(_event) {
            let moveGraph = Spiegel_VN.ƒ.Vector3.ZERO();
            if (Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.A, Spiegel_VN.ƒ.KEYBOARD_CODE.ARROW_LEFT]))
                moveGraph.x = 20;
            if (Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.D, Spiegel_VN.ƒ.KEYBOARD_CODE.ARROW_RIGHT]))
                moveGraph.x = -20;
            if (Spiegel_VN.ƒ.Keyboard.isPressedOne([Spiegel_VN.ƒ.KEYBOARD_CODE.W, Spiegel_VN.ƒ.KEYBOARD_CODE.ARROW_UP])) {
                if (Math.abs(nodeDemon.mtxWorld.translation.x) > 600) // demon must be out of the way
                    moveGraph.z = 20;
            }
            if (Math.abs(graph.mtxLocal.translation.x + moveGraph.x) < margin)
                graph.mtxLocal.translate(moveGraph);
            if (graph.mtxLocal.translation.z > 2000)
                document.dispatchEvent(new Event("tunnelSuccess"));
            let demonSpeed = 17;
            if (demonMood > 0) {
                demonSpeed = 0;
                viewport.canvas.removeEventListener("mousemove", moveMirror);
            }
            if (demonMood > -2500 && nodeDemon == nodeDemonAttack) {
                // console.log("Calm down");
                Spiegel_VN.ƒS.Character.hide(demon);
                Spiegel_VN.ƒS.Character.show(demon, demon.pose.normal, nodeDemon.mtxLocal.translation.toVector2());
                nodeDemon = nodeDemonNormal;
            }
            if (demonMood < -4000 && nodeDemon == nodeDemonNormal) {
                console.log("Watch out!");
                Spiegel_VN.ƒS.Character.hide(demon);
                Spiegel_VN.ƒS.Character.show(demon, demon.pose.attack, nodeDemon.mtxLocal.translation.toVector2());
                nodeDemon = nodeDemonAttack;
            }
            if (demonMood < -8000) {
                console.log("you failed");
                document.dispatchEvent(new Event("tunnelFail"));
            }
            let move = Spiegel_VN.ƒ.Vector3.DIFFERENCE(demonTargetPosition, nodeDemon.mtxLocal.translation);
            if (move.magnitude < demonSpeed)
                demonTargetPosition = Spiegel_VN.ƒ.Random.default.getVector3(new Spiegel_VN.ƒ.Vector3(-800, 100, 0), new Spiegel_VN.ƒ.Vector3(800, -400, 0));
            move.normalize(demonSpeed);
            nodeDemon.mtxLocal.translate(move);
            let prox = Spiegel_VN.ƒ.Vector3.DIFFERENCE(nodeDemon.mtxLocal.translation, nodeMirror.mtxLocal.translation);
            if (prox.magnitude > 340) {
                console.log("I see you!");
                demonMood -= 10;
                if (!Spiegel_VN.ƒS.Sound.isPlaying(soundeffekt.evillaugh))
                    Spiegel_VN.ƒS.Sound.play(soundeffekt.evillaugh, 1, false);
            }
            else {
                demonMood += 10;
            }
            Spiegel_VN.ƒS.update(0);
        }
    }
    Spiegel_VN.Chp10_MinigameDemon = Chp10_MinigameDemon;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function GoodEnding() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_Mirrorroom);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_DemonMinigame, 0, 0, false);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_mirrorworld_factory, 0.8, 1, true);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du hast es geschafft! Der Dämon war ein paar Mal knapp dran, dich zu fangen, doch du bist ihm entwischt. Jetzt bist du in dem Spiegelzimmer angelangt.");
        if (!Spiegel_VN.dataForSave.pickedIron) {
            return "Semi Good Ending";
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Instinktiv greifst du zu dem Hammer. Was für ein Glück, dass du ihn eingesteckt hast! Du schwingst ihn und triffst damit den ersten Spiegel.");
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.glass, 0.5, 1, true);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "– ein Krachen ertönt, so laut, dass du dir die Ohren zuhalten musst –");
        // await ƒS.Sound.fade(soundeffects.glass, 0.5, 1, false);
        // ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "– noch ein Spiegel kaputt! –");
        //         await ƒS.Sound.fade(soundeffects.glass, 0.5, 1, false);
        // ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "– schon die Hälfte zerstört! –");
        //         await ƒS.Sound.fade(soundeffects.glass, 0.5, 1, false);
        // ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "– der vierte Spiegel geht zu Bruch –");
        //         await ƒS.Sound.fade(soundeffects.glass, 0.5, 1, false);
        // ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "– fast geschafft –");
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.glass, 0, 0, false);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_MirrorroomGrey);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Um dich herum liegen die Überreste der Spiegel. Sie glitzern nicht mehr. Du hoffst, dass die böse Magie der Spiegel nun ein Ende hat.");
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Du hast alle kaputt gemacht!?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn erscheint und schaut sich entsetzt um.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Alle sechs Spiegel? Musste das wirklich sein?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Flynn, bist du verrückt! Die Spiegel haben doch böse Magie durchgelassen. Wo warst du denn eigentlich?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ach, nirgends … "');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er bückt sich und schaut die Splitter genauer an.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dir fällt auf, dass hier drin nun auch alles grau ist. Die Zerstörung der Spiegel muss die Verbindungen zur Farbwelt gekappt haben!");
        // await ƒS.Speech.tell(characters.Flynn, '"Das ist ja Wahnsinn! So schlimm sieht es gar nicht aus, finde ich …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn ist, aus unerfindlichen Gründen, ziemlich heiter. Er strahlt und schaut aus dem Fenster");
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Schau mal, dort unten versammeln sich Leute! Die sehen ziemlich verwirrt aus."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Und tatsächlich ist ein kleiner Kreis von Menschen auf dem Platz vor dem Turm zusammengekommen. Ratlos stehen sie beieinander und beraten sich. Manche schütteln sich oder schauen sich um, wie wenn sie aus einer Trance erwacht sind.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Flynn, das sind die Sklaven! Sie sind wieder wach! Schnell, vielleicht is Kailani unter ihnen?"');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_DemontunnelGrey);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Du hetzt zurück durch den leeren Tunnel zurück nach unten."');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_GroundFloorTowerGrey);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Vorbei an den Portraits, deren tote Augen dich im Halbdunklen verfolgen."');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_TowerOutsideSlavesGrey);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Wo ist Kailani? Ist sie vielleicht noch in der Fabrik? Die Spiegelzerstörung hat sie hoffentlich aus ihrem Dämmerzustand ge –"');
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_smile, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kailani! KAILANI! Du bist wieder da! Ich kann es kaum fassen… Wie geht’s dir? Was ist passiert? Ich bin so erleichtert!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Unter Kailanis Augen zeichnen sich Ringe ab, die vor ihrem Verschwinden nicht da waren. Trotzdem leuchten ihre Augen etwas auf, als sie dich anlächelt.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Oh! Ich bin ja so erleichtert! Wie schön, dich zu sehen … Hast du wirklich nach mir gesucht? Das hätte ich dir echt nicht zugetraut … und wer ist das?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"So ein Blödsinn, klar suche ich nach dir! Ich bin durch die halbe Spiegelwelt gereist, um dich zu finden! Dabei habe ich Flynn getroffen und er hat sich mir angeschlossen. Aber erzähl’ doch mal!"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_happy, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ich bin dir so unendlich dankbar. Wirklich! Die Zeit hier war richtig schlimm. Also, wo fange ich an. Jetzt geht’s mir besser, nachdem ich befreit wurde. Aber vorher, puh, das war nicht einfach."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Eigentlich war alles gut, bis ich diesen bescheuerten Spiegel gekriegt hab’. Ich fand den so toll, wirklich."');
        // await ƒS.Speech.tell(characters.maincharacter, '"Ich weiß doch! Aber warum hast du mir nichts gesagt? Oder Mutti oder Evarius?"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(40, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Aber der tat mir nicht gut. War mir echt peinlich. Weil ich doch so schön war im Spiegel und in echt nicht. Im Spiegel hatte ich ganz lange Haare, die haben toll geglänzt! Und eine schmale Taille. Große Brüste und einen super Hintern."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"So sehe ich ja gar nicht in echt aus. Aber im Spiegel fand’ ich das einfach schön. Und deshalb konnte ich nicht aufhören, zu schauen! Aber wie soll ich euch das erklären? Ihr sagt ja bloß, ich bin in echt hübsch. Aber das hat mir nicht wirklich was gebracht."');
        do {
            let Chp10GoodEndingElementAnswers1 = {
                iSayNoticed: "(Erkunden) Hast du denn nicht bemerkt, dass …",
                iSayGrey: "(Erkunden) Dann bist du ganz grau geworden …",
                iSayContinue: "Und dann?"
            };
            let Chp10GoodEndingElement1 = await Spiegel_VN.ƒS.Menu.getInput(Chp10GoodEndingElementAnswers1, "choicesCSSclass");
            switch (Chp10GoodEndingElement1) {
                case Chp10GoodEndingElementAnswers1.iSayNoticed:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Hast du denn nicht bemerkt, dass es gar nicht du im Spiegelbild warst, sondern jemand ganz anderes?"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ich hab’ das überhaupt nicht gemerkt, wie denn auch! Ich fand’s nur toll, mit dem Spiegel zu träumen. Aber nach einer Weile konnte ich nicht mehr schlafen. Und habe mich dauernd schlecht gefühlt."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp10GoodEndingElementAnswers1.iSayGrey:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und dann bist du ganz grau geworden, weißt du noch? Ich dachte, dein Kleid wäre verwaschen, aber es war gar nicht so!"');
                    Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(40, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Nee, das habe ich gar nicht gemerkt. Ich hab’ mich tagelang schlecht gefühlt, bis ich dann eines Tages den Spiegel in die Hand genommen hab’, wie immer, und der hat schon so komisch geblitzt. Da hätte ich was merken sollen."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Dann hat er mehr und mehr geblinkt, ich konnte gar nicht wegschauen, dann wurde alles schwarz. Aufgewacht bin ich dann in diesem Haus da drüben. Dort war alles grau und alle hatten große Angst. Wir haben gar nicht verstanden, was mit uns passiert."');
                case Chp10GoodEndingElementAnswers1.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp10GoodEndingContinue1 = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Dann kam eine, die hat uns, wie soll ich sagen? betäubt. Mir war dann alles egal, was um mich herum passiert. Mitgekriegt haben wir das natürlich trotzdem."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp10GoodEndingContinue1);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Musstest du dann in die Fabrik?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ja, wir haben dann gearbeitet. Das war das Verrückteste: Die Bilder, die ich daheim im Spiegel gesehen hab’, die musste ich dann selbst produzieren! Ich musste Perücken anziehen und mich in ein Korsett einschnüren. Dann hab’ ich Polster um Brüste und Hintern bekommen. Tagein, tagaus, standen wir in diesen Kabinen. Die Jungs haben sich Sixpack- und Schulterpolster umgeschnürt. Ich weiß aber einfach nicht, wieso …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du erklärst ihr, dass es irgendwie mit den Farben zusammenhängt. Bis Flynn dich unterbricht.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Und du hast das alles mitgekriegt?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Als er sich euch zuwendet, siehst du etwas aus seiner Tasche aufblitzen. Das war vorher nicht da, da bist du dir sicher! Stellst du ihn zur Rede?");
        let Chp10GoodEndingElementAnswers2 = {
            iSayCareful: "Vorsichtig",
            iSayAccusing: "Vorwurfsvoll",
            iSayIgnore: "Ignorieren"
        };
        let Chp10GoodEndingElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp10GoodEndingElementAnswers2, "choicesCSSclass");
        switch (Chp10GoodEndingElement2) {
            case Chp10GoodEndingElementAnswers2.iSayCareful:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Flynn, kann es sein, dass du etwas in deiner Tasche herumträgst?"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp10GoodEndingElementAnswers2.iSayAccusing:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Flynn, was ist in deiner Tasche? Zeig es mir, sofort!"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp10GoodEndingElementAnswers2.iSayIgnore:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du beschließt, es zu ignorieren. Doch Kailani scheint das anders zu sehen.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Da glitzert etwas in deiner Tasche. Sag bloß …"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_shocked, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Naja, es ist ein Splitter aus dem Spiegelzimmer. Ich fand die so schön und –"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Seit Tagen verhältst du dich komisch! Ich hatte immer den Eindruck, als wärst du eher an den Spiegeln interessiert, statt an Kailani. Und du hast dich so schnell bereitwillig erklärt, mir zu helfen, statt deine Ausbildung zu beginnen. Was ist denn mit dir los?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Natürlich wollte ich Kailani auch retten! Nur haben mich die Spiegel auch interessiert und –"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Rück’ schon raus damit! Wir kennen uns zwar nicht lange, aber trotzdem haben wir einiges zusammen hinter uns. Ist dir unsere Freundschaft nichts wert?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Okay, ich geb’s auf. Ich war deshalb an den Spiegeln interessiert, weil –"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"– weil ich von meiner Heimat geschickt wurde, um die Spiegeltechnologie zu stehlen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynns Stimme wird leise. Du starrst ihn schockiert an.");
        do {
            let Chp10GoodEndingElementAnswers3 = {
                iSayUsed: '"(Erkunden) Du hast mich also nur benutzt?"',
                iSayHome: "(Erkunden) Wo ist deine Heimat?",
                iSayTechnology: "(Erkunden) Wozu die Technologie stehlen?",
                iSayContinue: "Weiter"
            };
            let Chp10GoodEndingElement3 = await Spiegel_VN.ƒS.Menu.getInput(Chp10GoodEndingElementAnswers3, "choicesCSSclass");
            switch (Chp10GoodEndingElement3) {
                case Chp10GoodEndingElementAnswers3.iSayUsed:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Du hast gedacht, ich wäre ein gutes Mittel zum Zweck? Flynn, ich bin so enttäuscht!"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Es tut mir wirklich leid …"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp10GoodEndingElementAnswers3.iSayHome:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Von wo kommst du denn?"');
                    Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich komme von einer Welt namens Valde. Dort lebe ich in einer großen Stadt und habe die Mission erhalten, die Spiegeltechnologie von dieser Welt, Norovia, zu klauen."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dein Kopf schwirrt. Es gibt mehr Welten als nur deine und die Spiegelwelt? Flynn scheint deine Frage schon zu ahnen.");
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Es gibt nämlich sieben verschiedene Welten! Erinnerst du dich an die sechs Spiegel im Spiegelzimmer? Das waren die Verbindungen zu den Welten. Sie haben die Farben durchgelassen, von denen sich der Dämon ernährt hat. Den Rest hat er an das Volk weitergegeben."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp10GoodEndingElementAnswers3.iSayTechnology:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und die Spiegeltechnologie willst du klauen, weil …?"');
                    Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Mir wurde beauftragt, die Technologie mitzubringen. Damit wir in Varunomo, meiner Stadt, auch Farbe haben können. Dort ist nämlich auch alles grau ..."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp10GoodEndingElementAnswers3.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp10GoodEndingContinue2 = true;
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp10GoodEndingContinue2);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Aber bevor du mehr fragen kannst, erzählt Flynn weiter. Die Worte sprudeln nur so aus ihm heraus, und du hast den Eindruck, ihm fällt eine große Last von den Schultern.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Weißt du, ich wurde meinen Eltern als Kind weggenommen und in einem Trainingscamp zum Spion erzogen. Ich war in einem Lager mit lauter Jungs wie mich, die auch aufgekauft wurden. Und als ich diese Mission erhielt, war das für mich wie ein Ritterschlag! Ich durfte mich das erste Mal beweisen! Wie soll ich denn mit leeren Händen zurück? Das müsst ihr doch verstehen."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_angry, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Du kannst doch nicht einfach diese Technologie mitnehmen? Hast du denn nicht verstanden, wie viel Leid diese Spiegel mit sich bringen? Ich musste mich komplett verstellen! Und vorher, da war ich todunglücklich. Wegen dieser blöden Bilder; nur, weil ich auch so aussehen wollte. Ich bin einem Vorbild hinterhergejagt, das es gar nicht gab! Die Spiegelbilder sind nicht echt! Und dadurch wurde ich krank."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_shrug_eyeroll, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Schau dich um, Flynn. Ich kenne dich zwar nicht und weiß auch nicht, was deine Leute mit dem Spiegel vorhaben. Aber ich muss dir wirklich sagen: wenn du diese Technologie mitnimmst und in deinem Land weiterführst, werden nur noch mehr Menschen verzweifeln. Ich hab’ gelernt: Wir sollten mit uns selbst zufrieden sein, so wie wir aussehen. Das macht uns doch besonders, diese kleinen Macken."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du bist unglaublich stolz auf deine kleine Schwester. Nicht nur die Tortur hat sie überstanden, sondern auch verstanden, was es mit ihr gemacht hat. Offensichtlich kämpft Flynn mit unterschiedlichen Gefühlen. Er ist sichtlich betroffen von euren Reaktionen.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Da, wo ich herkomme, ist so vieles so anders und doch gleich. Die Überheblichkeit der Leute, das Verurteilen wegen Äußeren, ich dachte das wäre normal!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Deshalb hatte ich auch immer diese Polster an. Aber nun kann ich die auch ablegen."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_wo_I_skeptical, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Und natürlich hat Kailani Recht. Der Spiegel bringt nur Leid! Die Regierung in Varunomo will die Farbe aus den anderen Welten saugen und verkaufen. So wird nämlich die Farbe übertragen, mit Gefühlen, versteht ihr? Von der Person, die auf der anderen Seite des Spiegels ist, kann nur Farbe entnommen werden, wenn sie sich schlecht fühlt."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_wo_II_skeptical, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Deshalb funktioniert die Technologie so, dass zuerst die Menschen traurig werden, wenn sie in den Spiegel schauen. Gleichzeitig sollen sie aber immer öfter reinschauen, damit nach und nach die Farbe entzogen werden kann. So gelangt die Farbe über den Spiegel zu den Menschen und die können sich dann bunt anziehen, wie wir in Whary gesehen haben."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du erinnerst dich an die Worte des Wünschebaums: 'Die dunkle Magie' ... das hatte er also damit gemeint!");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Flynn, das kannst du nicht machen! Komm, lass die Splitter hier. Deine Mission war es, mir bei der Suche nach meiner Schwester zu helfen. Und das ist dir gelungen! Das ist doch alles, was zählt. Die Spiegel sind nun ein für alle mal zerstört. Wir können endlich nach Hause!"');
        let Chp10GoodEndingElementAnswers4 = {
            iSayTakeFlynn: "Flynn mitnehmen",
            iSayNotTakeFlynn: "Flynn wegbringen"
        };
        let Chp10GoodEndingElement4 = await Spiegel_VN.ƒS.Menu.getInput(Chp10GoodEndingElementAnswers4, "choicesCSSclass");
        switch (Chp10GoodEndingElement4) {
            case Chp10GoodEndingElementAnswers4.iSayTakeFlynn:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Willst du mit uns nach Hause kommen? Mama und Mutti nehmen dich sicher gerne auf! Und dort kannst du deine Ausbildung fertig machen, oder auch Tischlern, Gartenarbeit oder sonst was lernen. Was meinst du?"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_wo_shocked, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Oh … ich weiß gar nicht, was ich sagen soll! Meint ihr, meine Regierung findet mich dort nicht?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Auf keinen Fall!"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_happy, Spiegel_VN.ƒS.positionPercent(40, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Du hast geholfen, mich zu retten, Jetzt sind wir dran mit retten!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kommt mit, wir reisen nach Hause. Ich habe dieses Grau einfach satt."');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_wo_skeptical, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ich bin so froh, wieder heimzugehen. Dort ist zwar alles langweilig und niemand hat schicke Klamotten an. Dafür lieben wir uns, so wie wir sind!"');
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_ArrivalFactory);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Mittagssonne strahlt vom Himmel. Du fragst dich, ob ein Reisen mit dem Handspiegel auch bei Mittag, statt bei Mitternacht möglich ist. Schließlich ist in dieser Welt – wie hat Flynn sie nochmal genannt, Norovia? – alles Andersherum.");
                let Chp10GoodEndingElementAnswers5 = {
                    iSayOption1: "Spieglein, Spieglein, weise mir mein Routlein",
                    iSayOption2: "Spieglein, Spieglein, weise mir mein Sträßlein",
                    iSayOption3: "Spieglein, Spieglein, weise mir mein Weglein"
                };
                await Spiegel_VN.ƒS.Menu.getInput(Chp10GoodEndingElementAnswers5, "choicesCSSclass");
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_CS_ArrivalHome);
                Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_mirrorworld_factory, 0, 0, false);
                Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_ordinaryworld, 0.8, 1, true);
                Spiegel_VN.ƒS.Character.hideAll();
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_wo_I_skeptical, Spiegel_VN.ƒS.positionPercent(70, 100));
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(80, 100));
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit1_neutral_happy, Spiegel_VN.ƒS.positionPercent(45, 100));
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos3_laugh, Spiegel_VN.ƒS.positionPercent(10, 100));
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_laugh, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Endlich zuhause! Kailani ruft schon nach euren Eltern. Mama und Mutti kommen aus dem Haus gestürmt, dicht gefolgt von Evarius. Alle strahlen über das ganze Gesicht und umarmen sich. Geschnatter von allen Seiten prasselt auf dich und Kailani ein. Flynn wird einfach mit umarmt. Er strahlt auch. Du schaust in die Gesichter deiner Familie und siehst dort Liebe, Akzeptanz und Glück.");
                Spiegel_VN.ƒS.Speech.clear();
                return "End";
                break;
            case Chp10GoodEndingElementAnswers4.iSayNotTakeFlynn:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Sollen wir dich über den See begleiten? In Whary können Kailani und ich heimreisen, und du kannst weiterreisen?"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_wo_I_skeptical, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_smile, Spiegel_VN.ƒS.positionPercent(40, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Das ist eine gute Idee! Vielleicht kann ich beim Gasthof als Kellner anheuern. Mal etwas anderes, als nur kämpfen."');
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_ArrivalFactory);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du und Kailani plaudert losgelöst über alles Mögliche. Nur Flynn steht am Bug und schaut melancholisch in die Ferne. Es muss schwer sein, Befehle zu ignorieren! Vor allem, wenn er nichts anderes kennt.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Hier sind wir! Vielen Dank für deine Hilfe, Flynn. Vielleicht komm’ ich dich mal besuchen! Und halte die Ohren steif!"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_wo_shocked, Spiegel_VN.ƒS.positionPercent(70, 100));
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_happy, Spiegel_VN.ƒS.positionPercent(40, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Das wäre schön! Ich versuche es. Ich sehe die Welt nun mit anderen Augen. Alles wird gut! Bis bald!"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ich bin so froh, wieder heimzugehen. Dort ist zwar alles langweilig und niemand hat schicke Klamotten an. Dafür lieben wir uns, so wie wir sind!"');
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_ArrivalFactory);
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Mittagssonne strahlt vom Himmel. Du fragst dich, ob ein Reisen mit dem Handspiegel auch bei Mittag, statt bei Mitternacht möglich ist. Schließlich ist in dieser Welt – wie hat Flynn sie nochmal genannt, Norovia? – alles Andersherum.");
                let Chp10GoodEndingElementAnswers6 = {
                    iSayOption1: "Spieglein, Spieglein, weise mir mein Routlein",
                    iSayOption2: "Spieglein, Spieglein, weise mir mein Sträßlein",
                    iSayOption3: "Spieglein, Spieglein, weise mir mein Weglein"
                };
                // let Chp10GoodEndingElement6 =
                await Spiegel_VN.ƒS.Menu.getInput(Chp10GoodEndingElementAnswers6, "choicesCSSclass");
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_CS_ArrivalHome);
                Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_mirrorworld_factory, 0, 0, false);
                Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_ordinaryworld, 0.8, 1, true);
                Spiegel_VN.ƒS.Character.hideAll();
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(80, 100));
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit1_neutral_happy, Spiegel_VN.ƒS.positionPercent(45, 100));
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos3_laugh, Spiegel_VN.ƒS.positionPercent(10, 100));
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_laugh, Spiegel_VN.ƒS.positionPercent(55, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Endlich zuhause! Kailani ruft schon nach euren Eltern. Mama und Mutti kommen aus dem Haus gestürmt, dicht gefolgt von Evarius. Alle strahlen über das ganze Gesicht und umarmen sich. Geschnatter von allen Seiten prasselt auf dich und Kailani ein. Flynn wird einfach mit umarmt. Er strahlt auch. Du schaust in die Gesichter deiner Familie und siehst dort Liebe, Akzeptanz und Glück.");
                Spiegel_VN.ƒS.Speech.clear();
                Spiegel_VN.ƒS.Character.hideAll();
                Spiegel_VN.ƒS.update();
                return "End";
                break;
        }
    }
    Spiegel_VN.GoodEnding = GoodEnding;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function SemiGoodEnding() {
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_DemonMinigame, 0, 0, false);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_mirrorworld_factory, 0.8, 1, true);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Jetzt bist du in dem Spiegelzimmer angelangt, das die Vögel von außen gesehen haben. Tatsächlich stehen sechs große Spiegel aneinandergereiht in dem runden Raum. Nur – wie machst du sie kaputt?");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Hättest du doch den Hammer mitgenommen! Du holst aus und trittst mit aller Kraft gegen den ersten Spiegel. Er zerspringt, aber gleichzeitig schlitzt ein Splitter dein Knie auf. Ein heißer Schmerz zieht durch dein Bein. Der Schnitt ist nicht tief, trotzdem blutest du stark und kannst du die restlichen Spiegel auf diese Art nicht mehr zerstören.");
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich war gerade auf dem Balkon! Die Welt ist komplett grau geworden. Sogar Whary! Und unten versammeln sich die Sklaven."');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er bückt sich, um sich dein Knie anzuschauen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Oh je, das sieht nicht gut aus. Komm’, ich bring dich die Treppe runter!"');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_Demontunnel);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du humpelst, an Flynn gestützt, zurück durch den leeren Tunnel zurück nach unten.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_GroundFloorTower);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Vorbei an den Portraits, deren tote Augen dich im Halbdunklen verfolgen.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_TowerOutsideSlaves);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Wo ist Kailani? Ist sie vielleicht noch in der Fabrik? Die Spiegelzerstörung hat sie hoffentlich aus ihrem Dämmerzustand ge –"');
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_smile, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Kailani! KAILANI! Du bist wieder da! Ich kann es kaum fassen… Wie geht’s dir? Was ist passiert? Ich bin so erleichtert!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Unter Kailanis Augen zeichnen sich Ringe ab, die vor ihrem Verschwinden nicht da waren. Trotzdem leuchten ihre Augen etwas auf, als sie dich anlächelt.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Oh! Ich bin ja so erleichtert! Wie schön, dich zu sehen … Hast du wirklich nach mir gesucht? Das hätte ich dir echt nicht zugetraut … und wer ist das?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"So ein Blödsinn, klar suche ich nach dir! Ich bin durch die halbe Spiegelwelt gereist, um dich zu finden! Dabei habe ich Flynn getroffen und er hat sich mir angeschlossen. Aber erzähl’ doch mal."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_happy, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ich bin dir so unendlich dankbar. Wirklich! Die Zeit hier war richtig schlimm. Also, wo fange ich an. Jetzt geht’s mir besser, nachdem ich befreit wurde. Aber vorher, puh, das war nicht einfach."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Eigentlich war alles gut, bis ich diesen bescheuerten Spiegel gekriegt hab’. Ich fand den so toll, wirklich. Der hat mir alles gezeigt, was ich wollte. Daheim ist halt alles so trist und langweilig, weißt du."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich weiß doch! Aber warum hast du mir nichts gesagt? Oder Mutti oder Evarius?"');
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(40, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ich weiß auch nicht, war irgendwie peinlich, weißt. Weil ich doch so schön war im Spiegel und in echt nicht. Im Spiegel hatte ich ganz lange Haare, die haben toll geglänzt! Und eine schmale Taille. Große Brüste und einen super Hintern."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"So sehe ich ja gar nicht in echt aus. Aber im Spiegel fand’ ich das einfach schön. Und deshalb konnte ich nicht aufhören, zu schauen! Aber wie soll ich euch das erklären? Ihr sagt ja bloß, ich bin in echt hübsch. Aber das hat mir nicht wirklich was gebracht."');
        do {
            let Chp10SemiGoodEndingElementAnswers1 = {
                iSayNoticed: "(Erkunden) Hast du denn nicht bemerkt, dass …",
                iSayGrey: "(Erkunden) Dann bist du ganz grau geworden …",
                iSayContinue: "Und dann?"
            };
            let Chp10SemiGoodEndingElement1 = await Spiegel_VN.ƒS.Menu.getInput(Chp10SemiGoodEndingElementAnswers1, "choicesCSSclass");
            switch (Chp10SemiGoodEndingElement1) {
                case Chp10SemiGoodEndingElementAnswers1.iSayNoticed:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Hast du denn nicht bemerkt, dass es gar nicht du im Spiegelbild warst, sondern jemand ganz anderes?"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ich hab’ das überhaupt nicht gemerkt, wie denn auch! Ich fand’s nur toll, mit dem Spiegel zu träumen. Aber nach einer Weile konnte ich nicht mehr schlafen. Und habe mich dauernd schlecht gefühlt. Warum konnte ich nicht so aussehen, wie in dem Spiegel."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp10SemiGoodEndingElementAnswers1.iSayGrey:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und dann bist du ganz grau geworden, weißt du noch? Ich dachte, dein Kleid wäre verwaschen, aber es war gar nicht so!"');
                    Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(40, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Nee, das habe ich gar nicht gemerkt. Ich hab’ mich tagelang schlecht gefühlt, bis ich dann eines Tages den Spiegel in die Hand genommen hab’, wie immer, und der hat schon so komisch geblitzt. Da hätte ich was merken sollen."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Aber er hat nur mehr und mehr geblinkt, ich konnte gar nicht wegschauen, dann wurde alles schwarz. Aufgewacht bin ich dann in diesem Haus da drüben. Dort war alles grau und alle hatten große Angst. Wir haben gar nicht verstanden, was mit uns passiert."');
                case Chp10SemiGoodEndingElementAnswers1.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp10SemiGoodEndingContinue1 = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Dann kam eine, die hat uns, wie soll ich sagen? betäubt. Sie hat mit den Armen gewedelt, dann sind wir alle schläfrig geworden. Mir war alles egal, was um mich herum passiert. Mitgekriegt haben wir das natürlich trotzdem."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp10SemiGoodEndingContinue1);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Musstest du dann in die Fabrik?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ja, wir haben dann gearbeitet. Das war das Verrückteste: Die Bilder, die ich daheim im Spiegel gesehen hab’, die musste ich dann selbst produzieren! Ich musste Perücken anziehen und mich in ein Korsett einschnüren. Dann hab’ ich Polster um Brüste und Hintern bekommen. Tagein, tagaus, standen wir in diesen Kabinen. Die Jungs haben sich Sixpack- und Schulterpolster umgeschnürt. Ich weiß aber einfach nicht, wieso …"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Und du hast das alles mitgekriegt?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynn, der sich bis jetzt bei diesem Familientreffen zurückgehalten hat, mischt sich in das Gespräch ein. Als er sich euch zuwendet, siehst du etwas aus seiner Tasche aufblitzen. Das war vorher nicht da, da bist du dir sicher! Stellst du ihn zur Rede?");
        let Chp10SemiGoodEndingElementAnswers2 = {
            iSayCareful: "Vorsichtig",
            iSayAccusing: "Vorwurfsvoll",
            iSayIgnore: "Ignorieren"
        };
        let Chp10SemiGoodEndingElement2 = await Spiegel_VN.ƒS.Menu.getInput(Chp10SemiGoodEndingElementAnswers2, "choicesCSSclass");
        switch (Chp10SemiGoodEndingElement2) {
            case Chp10SemiGoodEndingElementAnswers2.iSayCareful:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Flynn, kann es sein, dass du etwas in deiner Tasche herumträgst?"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp10SemiGoodEndingElementAnswers2.iSayAccusing:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Flynn, was ist in deiner Tasche? Zeig es mir, sofort!"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp10SemiGoodEndingElementAnswers2.iSayIgnore:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du beschließt, es zu ignorieren. Schließlich geht es dich nichts an, was er mit sich herumträgt. Doch Kailani scheint das anders zu sehen.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Da glitzert etwas in deiner Tasche. Sag bloß …"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_shocked, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Naja, es ist ein Splitter aus dem Spiegelzimmer. Ich fand die so schön und –"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Flynn, was für ein Blödsinn! Seit Tagen verhältst du dich komisch. Ich hatte immer den Eindruck, als wärst du eher an den Spiegeln interessiert, statt an Kailani. Und du hast dich so schnell bereitwillig erklärt, mir zu helfen, statt deine Ausbildung zu beginnen. Was ist denn mit dir los?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Natürlich wollte ich Kailani auch retten! Nur haben mich die Spiegel auch interessiert und –"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Lüg’ mich ja nicht an! Rück’ schon raus damit! Wir kennen uns zwar nicht lange, aber trotzdem haben wir einiges zusammen hinter uns. Ist dir unsere Freundschaft nichts wert?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Okay, ich geb’s auf. Ich war deshalb an den Spiegeln interessiert, weil –"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"– weil ich von meiner Heimat geschickt wurde, um die Spiegeltechnologie zu stehlen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynns Stimme wird leise. Du starrst ihn schockiert an.");
        do {
            let Chp10SemiGoodEndingElementAnswers3 = {
                iSayUsed: '"(Erkunden) Du hast mich also nur benutzt?"',
                iSayHome: "(Erkunden) Wo ist deine Heimat?",
                iSayTechnology: "(Erkunden) Wozu die Technologie stehlen?",
                iSayContinue: "Weiter"
            };
            let Chp10SemiGoodEndingElement3 = await Spiegel_VN.ƒS.Menu.getInput(Chp10SemiGoodEndingElementAnswers3, "choicesCSSclass");
            switch (Chp10SemiGoodEndingElement3) {
                case Chp10SemiGoodEndingElementAnswers3.iSayUsed:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Du hast gedacht, ich wäre ein gutes Mittel zum Zweck? Flynn, ich bin so enttäuscht!"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Es tut mir wirklich leid …"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp10SemiGoodEndingElementAnswers3.iSayHome:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Von wo kommst du denn?"');
                    Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich komme von einer Welt namens Valde. Dort lebe ich in einer großen Stadt und habe die Mission erhalten, die Spiegeltechnologie von dieser Welt, Norovia, zu klauen."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dein Kopf schwirrt. Es gibt mehr Welten als nur deine und die Spiegelwelt? Flynn scheint deine Frage schon zu ahnen.");
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Es gibt nämlich sieben verschiedene Welten! Erinnerst du dich an die sechs Spiegel im Spiegelzimmer? Das waren die Verbindungen zu den Welten."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp10SemiGoodEndingElementAnswers3.iSayTechnology:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und die Spiegeltechnologie willst du klauen, weil …?"');
                    Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Mir wurde beauftragt, die Technologie mitzubringen. Damit wir in Varunomo, meiner Stadt, die Farbe benutzen können"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp10SemiGoodEndingElementAnswers3.iSayContinue:
                    Spiegel_VN.dataForSave.pickedChp10SemiGoodEndingContinue2 = true;
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp10SemiGoodEndingContinue2);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Aber bevor du mehr fragen kannst, erzählt Flynn weiter. Die Worte sprudeln nur so aus ihm heraus, und du hast den Eindruck, ihm fällt eine große Last von den Schultern.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Weißt du, ich wurde meinen Eltern als Kind weggenommen und in einem Trainingscamp zum Spion erzogen. Ich war in einem Lager mit lauter Jungs wie mich, die auch aufgekauft wurden. Und als ich diese Mission erhielt, war das für mich wie ein Ritterschlag! Ich durfte mich das erste Mal beweisen! Wie soll ich denn mit leeren Händen zurück? Das müsst ihr doch verstehen."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_angry, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Du kannst doch nicht einfach diese Technologie mitnehmen? Hast du denn nicht verstanden, wie viel Leid diese Spiegel mit sich bringen? Ich musste mich komplett verstellen! Und vorher, da war ich todunglücklich. Wegen dieser blöden Bilder; nur, weil ich auch so aussehen wollte. Ich bin einem Vorbild hinterhergejagt, das es gar nicht gab! Die Spiegelbilder sind nicht echt! Und dadurch wurde ich krank."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_shrug_eyeroll, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Schau dich um, Flynn. Ich kenne dich zwar nicht und weiß auch nicht, was deine Leute mit dem Spiegel vorhaben. Aber ich muss dir wirklich sagen: wenn du diese Technologie mitnimmst und in deinem Land weiterführst, werden nur noch mehr Menschen verzweifeln. Ich wurde in eine Fabrik gesteckt und musste Bilder erzeugen, die anderen krank machten. Willst du das wirklich? Ich hab’ gelernt: Wir sollten mit uns selbst zufrieden sein, so wie wir aussehen. Das macht uns doch Besonders, diese kleinen Macken."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Wow, was für eine Rede! Du bist unglaublich stolz auf deine kleine Schwester. Nicht nur die Tortur hat sie überstanden, sondern auch verstanden, was es mit ihr gemacht hat. Offensichtlich kämpft Flynn mit unterschiedlichen Gefühlen. Er ist sichtlich betroffen von unseren Reaktionen.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_crossed_angry, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich kann doch nicht meine Mission links liegen lassen, nur weil ihr mir das sagt! Ich habe Befehle bekommen und an die muss ich mich halten. Sonst muss ich daheim ins Gefängnis!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Was willst du denn mit der Farbe?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Die Regierung in Varunomo will die Farbe aus den anderen Welten saugen und verkaufen. So wird nämlich die Farbe übertragen, mit Gefühlen, versteht ihr? Von der Person, die auf der anderen Seite des Spiegels ist, kann nur Farbe entnommen werden, wenn sie sich schlecht fühlt."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Deshalb funktioniert die Technologie so, dass zuerst die Menschen traurig werden, wenn sie in den Spiegel schauen. Gleichzeitig sollen sie aber immer öfter reinschauen, damit nach und nach die Farbe entzogen werden kann. So gelangt die Farbe über den Spiegel zu den Menschen und die können sich dann bunt anziehen, wie wir in Whary gesehen haben."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_happy, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Und jetzt muss ich schnell nach Hause! Ich kann es kaum erwarten, die Technologie daheim vorzustellen!"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"FLYNN, NEIN! warte! Nicht! Das ist alles ein großer Fehler!"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_crossed_angry, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ich glaube, er ist schon weg …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Aber jetzt wird die Technologie weitergeführt! Und noch mehr Leute in andere Fabriken gezogen!"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.grey_neutral_smile, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Lass uns ihn suchen! Wir könnten ihn verfolgen und versuchen, die Technologie ein für alle Mal auszulöschen?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ein neuer Abenteuergeist funkelt in Kailanis Augen. Du seufzt.");
        let Chp10SemiGoodEndingElementAnswers4 = {
            iSayYes: '"Klar!"',
            iSayUnsure: '"Mal schauen"',
            iSayNo: '"Auf gar keinen Fall"'
        };
        let Chp10SemiGoodEndingElement4 = await Spiegel_VN.ƒS.Menu.getInput(Chp10SemiGoodEndingElementAnswers4, "choicesCSSclass");
        switch (Chp10SemiGoodEndingElement4) {
            case Chp10SemiGoodEndingElementAnswers4.iSayYes:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich bin dabei!"');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp10SemiGoodEndingElementAnswers4.iSayUnsure:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das können wir uns ja noch überlegen."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp10SemiGoodEndingElementAnswers4.iSayNo:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ich glaube, ich habe erstmal genug erlebt."');
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Jetzt müssen wir nach Hause. Unsere Eltern machen sich große Sorgen!"');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp08_ArrivalFactory);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Mittagssonne strahlt vom Himmel. Du fragst dich, ob ein Reisen mit dem Handspiegel auch bei Mittag, statt bei Mitternacht möglich ist. Schließlich ist in dieser Welt – wie hat Flynn sie nochmal genannt, Norovia? – alles Andersherum.");
        let Chp10GoodEndingElementAnswers5 = {
            iSayOption1: "Spieglein, Spieglein, weise mir mein Routlein",
            iSayOption2: "Spieglein, Spieglein, weise mir mein Sträßlein",
            iSayOption3: "Spieglein, Spieglein, weise mir mein Weglein"
        };
        // let Chp10GoodEndingElement5 =
        await Spiegel_VN.ƒS.Menu.getInput(Chp10GoodEndingElementAnswers5, "choicesCSSclass");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_CS_ArrivalHome);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_mirrorworld_factory, 0, 0, false);
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_ordinaryworld, 0.8, 1, true);
        Spiegel_VN.ƒS.Character.hideAll();
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(80, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit1_neutral_happy, Spiegel_VN.ƒS.positionPercent(45, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos3_laugh, Spiegel_VN.ƒS.positionPercent(10, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_laugh, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Endlich zuhause! Kailani ruft schon nach euren Eltern. Mama und Mutti kommen aus dem Haus gestürmt, dicht gefolgt von Evarius. Alle strahlen über das ganze Gesicht und umarmen sich. Geschnatter von allen Seiten prasselt auf dich und Kailani ein. Flynn wird einfach mit umarmt. Er strahlt auch. Du schaust in die Gesichter deiner Familie und siehst dort Liebe, Akzeptanz und Glück.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Aber: du kannst nicht vergessen, wie Flynn dich verraten hat. Du ziehst den Handspiegel aus deiner Tasche und schaust hinein. Ob du mit ihm nach Valde reisen kannst, um Flynn zu finden und die Techmologie ein für alle Mal auszuschalten? Du fängst Kailanis Blick auf.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "In ihnen siehst du Selbstbewusstsein und Kraft. Sie schaut dich ruhig an und signalisiert dir ihre Bereitschaft. Deine Familie tanzt um dich herum. Sie freut sich, dass ihr wieder da seid. Mutti hat sogar schon deine Wunde am Knie verbunden. Aber in deinem Herzen steht es fest: du und Kailani, ihr werdet weiterreisen. Eure Aufgabe ist noch nicht erfüllt!");
        Spiegel_VN.ƒS.Speech.clear();
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        return "End";
    }
    Spiegel_VN.SemiGoodEnding = SemiGoodEnding;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function BadEnding() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp10_Demontunnel);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Demon, Spiegel_VN.characters.Demon.pose.pos2_angry, Spiegel_VN.ƒS.positionPercent(100, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Demon, "Haha! Ihr wolltet mich reinlegen. So einfach überlistet mich aber niemand! Nicht den Großen Georigus der Unterwelt! Jetzt hab’ ich euch.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp09_InFactory);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Nein! Der Dämon hat euch gefangen und in die Fabrik gesteckt. Kannst du vielleicht ausbrechen? Oder zuerst Kailani finden?");
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_wo_shocked, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich muss dir etwas gestehen, bevor wir hier bis an unser Lebensende schuften müssen …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"... ich wurde von meiner Heimat geschickt, um die Spiegeltechnologie zu stehlen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Flynns Stimme wird leise. Du starrst ihn schockiert an.");
        do {
            let Chp10GoodEndingElementAnswers3 = {
                iSayUsed: '"(Erkunden) Du hast mich also nur benutzt?"',
                iSayHome: "(Erkunden) Wo ist deine Heimat?",
                iSayTechnology: "Wozu die Technologie stehlen?",
                iSayContinue: "Weiter"
            };
            let Chp10GoodEndingElement3 = await Spiegel_VN.ƒS.Menu.getInput(Chp10GoodEndingElementAnswers3, "choicesCSSclass");
            switch (Chp10GoodEndingElement3) {
                case Chp10GoodEndingElementAnswers3.iSayUsed:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Du hast gedacht, ich wäre ein gutes Mittel zum Zweck? Flynn, ich bin so enttäuscht!"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Es tut mir wirklich leid …"');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp10GoodEndingElementAnswers3.iSayHome:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Von wo kommst du denn?"');
                    Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_wo_angry, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Ich komme von einer Welt namens Valde. Dort lebe ich in einer großen Stadt und habe die Mission erhalten, die Spiegeltechnologie von dieser Welt, Norovia, zu klauen."');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dein Kopf schwirrt. Es gibt mehr Welten als nur deine und die Spiegelwelt? Flynn scheint deine Frage schon zu ahnen.");
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Es gibt nämlich sieben verschiedene Welten! Erinnerst du dich an die sechs Spiegel im Spiegelzimmer? Das waren die Verbindungen zu den Welten."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp10GoodEndingElementAnswers3.iSayTechnology:
                    Spiegel_VN.dataForSave.pickedChp10GoodEndingContinue2 = true;
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Und die Spiegeltechnologie willst du klauen, weil …?"');
                    Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
                    await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_wo_skeptical, Spiegel_VN.ƒS.positionPercent(70, 100));
                    Spiegel_VN.ƒS.update();
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Mir wurde beauftragt, die Technologie mitzubringen. Damit wir in Varunomo, meiner Stadt, die Farbe benutzen können"');
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Dein Kopf schwirrt. Es gibt mehr Welten als nur deine und die Spiegelwelt? Flynn scheint deine Frage schon zu ahnen.");
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Es gibt nämlich sieben verschiedene Welten! Erinnerst du dich an die sechs Spiegel im Spiegelzimmer? Das waren die Verbindungen zu den Welten."');
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedChp10BadEndingContinue2);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Aber bevor du mehr fragen kannst, erzählt Flynn weiter. Die Worte sprudeln nur so aus ihm heraus, und du hast den Eindruck, ihm fällt eine große Last von den Schultern.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Flynn);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Flynn, Spiegel_VN.characters.Flynn.pose.grey_blue_confused_sad, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Weißt du, ich wurde meinen Eltern als Kind weggenommen und in einem Trainingscamp zum Spion erzogen. Ich war in einem Lager mit lauter Jungs wie mich, die auch aufgekauft wurden. Und als ich diese Mission erhielt, war das für mich wie ein Ritterschlag! Ich durfte mich das erste Mal beweisen! Wie soll ich denn mit leeren Händen zurück? Das müsst ihr doch verstehen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Offensichtlich kämpft Flynn mit unterschiedlichen Gefühlen. Er ist sichtlich betroffen.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Der Spiegel bringt nur Leid! Die Regierung in Varunomo will die Farbe aus den anderen Welten saugen und verkaufen. So wird nämlich die Farbe übertragen, mit Gefühlen, versteht ihr? Von der Person, die auf der anderen Seite des Spiegels ist, kann nur Farbe entnommen werden, wenn sie sich schlecht fühlt."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Deshalb funktioniert die Technologie so, dass zuerst die Menschen traurig werden, wenn sie in den Spiegel schauen. Gleichzeitig sollen sie aber immer öfter reinschauen, damit nach und nach die Farbe entzogen werden kann. So gelangt die Farbe über den Spiegel zu den Menschen und die können sich dann bunt anziehen, wie wir in Whary gesehen haben."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Flynn, '"Da, wo ich herkomme, ist so vieles so anders und doch gleich. Die Überheblichkeit der Leute, das Verurteilen wegen Äußeren, ich dachte das wäre normal! Aber jetzt habe ich dich kennengelernt, und du warst die erste Person, die mir gezeigt hat, dass es auch anders geht."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Bevor du etwas sagen kannst, kommt ein Wächter und schnauzt euch an.");
        await Spiegel_VN.ƒS.Speech.tell("Wache", '"Auseinander jetzt! Ab in den rechten Tunnel!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du hast nur noch einen kurzen Moment Zeit, mit Flynn einen traurigen Blick auszutauschen, bevor du mit anderen Menschen in grauen Kutten in den Tunnel gedrängt wirst. Vielleicht ist Kailani unter ihnen? Und vielleicht steht das Fenster hinten noch offen …");
        return "End";
    }
    Spiegel_VN.BadEnding = BadEnding;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function End() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.WitchInTheWoods);
        await Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.soundeffects.cracklingfire, 0.2, 1, true);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Na, und die Moral von der Geschicht'? Die weißt du bestimmt selbst. Denke immer an dein offenes Herz! Das wird dein Schutzschild sein.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Und nun, mach’, dass du fort kommst! Du warst lange genug hier im dunklen Wald.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator, "Wenn du nochmal einer Geschichte lauschen willst, weißt du, wo du mich finden kannst. Biege einfach beim Wünschebaum rechts ab und eh, – ich meinte, bei dem großen Baum da vorne. Mein Feuer brennt, Tag und Nacht! Und glaube nicht alles, was du so über mich hörst. Wobei – das mit den magischen Kräften, da ist was dran …");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.black);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell("ENDE", "");
        return "Empty scene";
    }
    Spiegel_VN.End = End;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function EmptyScene() { }
    Spiegel_VN.EmptyScene = EmptyScene;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Auswahlmöglichkeiten() {
        console.log("Test Szene Auswahlmöglichkeiten");
        await Spiegel_VN.ƒS.Speech.tell("Luna", "Test Choices");
        // ---
        // let score = 13;
        let testDialogueAnswers = {
            iSayGreen: "Green.",
            iSayBlue: "Blue",
            iSayEyes: "I luv eyez"
        };
        // if (score <= 10) {
        //   //   delete TestDialogueAnswers.iSayBlue;
        //   delete TestDialogueAnswers.iSayEyes;
        // }
        let pickediSayBlue;
        let pickediSayGreen;
        let pickediSayEyes;
        do {
            if (pickediSayBlue) {
                delete testDialogueAnswers.iSayBlue;
            }
            if (pickediSayGreen) {
                delete testDialogueAnswers.iSayGreen;
            }
            if (pickediSayEyes) {
                delete testDialogueAnswers.iSayEyes;
            }
            let testDialogue = await Spiegel_VN.ƒS.Menu.getInput(testDialogueAnswers, "choicesCSSclass");
            switch (testDialogue) {
                case testDialogueAnswers.iSayBlue:
                    // continue path here
                    pickediSayBlue = true;
                    Spiegel_VN.dataForSave.pickedChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell("Hannahh", "I love blue yay");
                    // return "Auswahlmöglichkeiten";
                    break;
                case testDialogueAnswers.iSayGreen:
                    // continue path here
                    pickediSayGreen = true;
                    Spiegel_VN.dataForSave.pickedChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell("Luna", "I love green yay");
                    // return "Auswahlmöglichkeiten";
                    break;
                case testDialogueAnswers.iSayEyes:
                    pickediSayEyes = true;
                    Spiegel_VN.dataForSave.pickedChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell("Hanahhh", "YOUR COLOR EYEZ ARE MY FAVORITE");
                    // return "Auswahlmöglichkeiten";
                    break;
                    await Spiegel_VN.ƒS.Speech.tell("", "");
            }
        } while (Spiegel_VN.dataForSave.pickedChoice);
    }
    Spiegel_VN.Auswahlmöglichkeiten = Auswahlmöglichkeiten;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Diary() {
        // Konzept: abends tagebuch schreiben
        // Novel page. Option bauen: 3x Satzanfang ... dann 3x Satzmitte ... dann 3x Satzende
        // geht nur, wenn man Tagebuch am Anfang mitnimmt!
        // vielleicht am Ende Kailani oder Flynn schenken? (Flynn, wenn er nicht mitkommt)
    }
    Spiegel_VN.Diary = Diary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function HowToMakeChoices() {
        console.log("Let's make some choices!");
        //   let text = {
        //     Narrator: {
        //       T0000: "",
        //       T0001: "",
        //       T0002: ""
        //     },
        //     Aisaka: {
        //       T0000: "Heute wird sich alles um Auswahlmöglichkeiten drehen.",
        //       T0001: "Schön, dass du dabei warst!"
        //     }
        //   };
        //   // ƒS.Sound.fade(sound.nightclub, 1, 2, true);
        //   ƒS.Speech.hide();
        //   await ƒS.Location.show(locations.nightpark);
        //   await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
        //   await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        //   await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(70, 100));
        //   // ƒS.Character.hide(characters.aisaka);
        //   // ƒS.Character.hideAll();
        //   await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0000);
        //   ƒS.Speech.clear();
        //   ƒS.Speech.hide();
        //   await ƒS.update(3);
        //   let firstDialogueElementAnswers = {
        //     iSayOk: "Okay.",
        //     iSayYes: "Ja.",
        //     iSayNo: "Nein."
        //   };
        //   let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "choicesCSSclass");
        //   switch (firstDialogueElement) {
        //     case firstDialogueElementAnswers.iSayOk:
        //       // continue path here
        //       await ƒS.Speech.tell(characters.aisaka, "Hi");
        //       ƒS.Speech.clear();
        //       break;
        //     case firstDialogueElementAnswers.iSayYes:
        //       // continue path here
        //       await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        //       ƒS.Character.hide(characters.aisaka);
        //       break;
        //     case firstDialogueElementAnswers.iSayNo:
        //       // continue path here
        //       await ƒS.Speech.tell(characters.aisaka, "Hi");
        //       ƒS.Speech.clear();
        //       break;
        //   }
        //   // You can continue your story right after the choice definitions
        //   await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0001);
    }
    Spiegel_VN.HowToMakeChoices = HowToMakeChoices;
})(Spiegel_VN || (Spiegel_VN = {}));
// namespace Spiegel_VN {
//   export async function MinigameDemon(): ƒS.SceneReturn {
//     //*** DIALOGRUNDE 1 */
//     // let loopend = 0;
//     // while (loopend == 0) {
//       let MinigameDemonLoop1ElementAnswers = {
//         iSayRhyme1: "Reim 1.",
//         iSayRyhme2: "Reim 2",
//         iSayRhyme3: "Reim 3",
//       };
//       let MinigameDemonLoop1Element = await ƒS.Menu.getInput(
//         MinigameDemonLoop1ElementAnswers,
//         "choicesCSSclass"
//       );
//       switch (MinigameDemonLoop1Element) {
//         case MinigameDemonLoop1ElementAnswers.iSayRhyme1:
//           await ƒS.Speech.tell("Ich", "Reim 1, angry expression");
//           ƒS.Character.show(
//             characters.Demon,
//             characters.Demon.pose.angry,
//             ƒS.positionPercent(70, 100)
//           );
//           // return
//           break;
//       }
//       //*** SCHLEIFE 2 */
//       // how await?
//       // await ƒS.Speech.tell("Narrator", "Soweit, so gut!");
//       let MinigameDemonLoop2ElementAnswers = {
//         iSayRhyme4: "Reim 4",
//         iSayRyhme5: "Reim 5",
//         iSayRhyme6: "Reim 6",
//       };
//       let MinigameDemonLoop2Element = await ƒS.Menu.getInput(
//         MinigameDemonLoop2ElementAnswers,
//         "choicesCSSclass"
//       );
//       switch (MinigameDemonLoop2Element) {
//         case MinigameDemonLoop2ElementAnswers.iSayRhyme4:
//           await ƒS.Speech.tell("Ich", "Reim 4, angry expression");
//           ƒS.Character.show(
//             characters.Demon,
//             characters.Demon.pose.angry,
//             ƒS.positionPercent(70, 100)
//           );
//           await ƒS.Speech.clear();
//           return Chp01_02_ConvoMother();
//           break;
//       // }
//     }
//   }
// }
var Spiegel_VN;
(function (Spiegel_VN) {
    async function RandomIntervall() {
        // function getRandomInt(min, max) {
        //   min = Math.ceil(min);
        //   max = Math.floor(max);
        //   return Math.floor(Math.random() * (max - min + 1)) + min;
        // }
        // let randomTextChp01Marketplace = ƒ.Random.default.(1, 5);
        // let setRandomInterval = (intervalFunction: number, minDelay: number, maxDelay: number) => {
        //     let timeout;
        //     const runInterval = () => {
        //       const timeoutFunction = () => {
        //         intervalFunction();
        //         runInterval();
        //       };
        //       const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
        //       timeout = setTimeout(timeoutFunction, delay);
        //     };
        //     runInterval();
        //     return {
        //       clear() { clearTimeout(timeout) },
        //     };
        //   };
        // ƒ.EventTimer.arguments(1, 5)
    }
    Spiegel_VN.RandomIntervall = RandomIntervall;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function ScnTestzene01() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace);
        await Spiegel_VN.ƒS.update();
        // ƒS.Inventory.add(inventory.apple);
        // await ƒS.Inventory.open;
        //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene
        console.log(Spiegel_VN.characters.maincharacter.name); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser. Am ende der Sache kann ich den Namen der jeweiligen Szene eingeben, is nur für mich & für Prof
        await Spiegel_VN.ƒS.Speech.tell("Bab", "Hallo, ich bin Bab."); //fs = ich greife auf die library zu, was jmdn anders schon für die library programmiert hat.
        await Spiegel_VN.ƒS.Speech.tell("Xenoi", "Hallo, ich bin Xeni.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, "Hallo, ich bin Dein Name.");
        let firstDialogueElementAnswers = {
            iSayOk: "Okay.",
            iSayYes: "Ja.",
            iSayNo: "Nein.",
        };
        let firstDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(firstDialogueElementAnswers, "choicesCSSclass");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayOk:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Hi");
                // dataForSave.score.scoreEmpathyPoints += 10;
                // console.log(dataForSave.score.scoreEmpathyPoints);
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayYes:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "HiToYes");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                break;
            case firstDialogueElementAnswers.iSayNo:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, "Hi");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
        return Spiegel_VN.ScnTestzene02();
    }
    Spiegel_VN.ScnTestzene01 = ScnTestzene01;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function ScnTestzene02() {
        console.log("Status: ", Spiegel_VN.scoreMutti.introduced);
        //hier wird eine asynch funktion exportiert, wie heißt die funktion? in diesem fall name funktion = name von szene
        console.log("Punktestand Mutti: ", Spiegel_VN.scoreMutti.punkte); // console = konsole, log = befehl, der sagt, was ausgegeben wird (was in der klammer). was ausgegeben werden soll: heir wird ausgegeben, was ich rein schreibe, zum debuggen udn verstehen, was mein programm tut, wie ein wegweiser
        await Spiegel_VN.ƒS.Speech.tell("Bab", "Neue szene bklqsjhdui."); //fs = ich greife auf die library zu, was jmdn anders (jirka) schon für die library programmiert hat.
        if (Spiegel_VN.scoreMutti.introduced == true) {
            // mit == fragen wir, ob etwas true ist. = heißt, wir weisen einen Wert etw zu.
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Mich kennt ihr ja schon.");
            Spiegel_VN.scoreMutti.punkte = Spiegel_VN.scoreMutti.punkte + 1;
        }
        if (Spiegel_VN.scoreMutti.introduced == false) {
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Hallo, ich bin Elena.");
            Spiegel_VN.scoreMutti.introduced = true;
        }
        if (Spiegel_VN.scoreMutti.punkte >= 6) {
            await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Möchtest du etwas tee?");
            let decisionButtons01 = {
                // !hier! wird decisionsbuttons01 definiert, wegen let // decisionsbuttons ist ein Objekt
                decisionYes: "Yes",
                decisionNo: "No",
            };
            let decision = await Spiegel_VN.ƒS.Menu.getInput(decisionButtons01, "decisionButtons" // hier umbennen und mit css bearbeiten
            );
            switch (decision //switch case = besseres if. statt ich 32809x if schreib, fragt switch: was is das ding? dieser input = yes or no. switch kann alles abfragen. muss schauen, was wann nützlich ist
            ) {
                case decisionButtons01.decisionYes:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Hier bitte, eine schöne Tasse Tee. Frisch gekocht.");
                    break;
                case decisionButtons01.decisionNo:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Nein? Dann hattest du wohl schon Tee. Freut mich zu hören! Viel spaß bei denen Freunden.");
                    return Spiegel_VN.ScnTestzene01();
                    break;
                default:
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti.name, "Default wird verwendet, wenn keiner der Fälle im Switch case zutrifft..");
                    break;
            }
        }
        return ScnTestzene02();
    }
    Spiegel_VN.ScnTestzene02 = ScnTestzene02;
})(Spiegel_VN || (Spiegel_VN = {}));
console.log("FudgeStory template starting");
console.log("was anderes");
let weihnachtsdeko = "Lichterketten, Baumkerzen, Lebkuchen, kerzen"; //let bedeutet: ich hab hier eine neue box, die ich beschriften muss (weihnachtsdekobox); = "was ist in der kiste", danach sit der befehl vorbei, also ;
console.log(weihnachtsdeko); //
console.log("weihnachtsdeko"); //
let x = 2; //variablen haben immer einen typus, zb strings "" lange zeichenketten. bei einer zahl ohne "" = number. Object auch ein typ
let y = 7;
let z = x + y;
console.log(z);
z = z + 1;
console.log(z);
// // funktionen machen was mit Zeug innendrin, Fabrik mit Heinzelmännchen, ich leg denen was rein und die machen was damit
// export function NameDerFunktion() {
//   // hiermit habe ich funktionen initiiert, aber ich benutze sie nirgendwo
//   console.log("irgendwas");
// } // export heißt, dass diese funktion auch von anderen szenen aufrufbar ist
// NameDerFunktion();
// export function randomNum(min: number = 1, max: number = 4): number {
// }
// export function Addition(Zahl1: number = 1, Zahl2: number = 2) {
//   // 1 und 2 sind nur default werte
//   let summe = Zahl1 + Zahl2;
//   console.log("Die Summe von Zahl1 und Zahl2 ist");
//   console.log(summe);
// }
// Addition();
// Addition(4, 7);
// Addition(x, y);
// //vorher kommentieren, was man hier macht, in dem fall export transitions
//# sourceMappingURL=VN_Spiegel.js.map