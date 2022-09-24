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
        // pickedChp06RecieveIron: false,
        pickedChp08TrustFlynn: false,
        pickedChp10SingToBirds: false,
        // pickedChp11Iron: false,
        // *** DELETE OPTION AFTER PICKED ***
        pickedChoice: false,
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
        pickedChp02_TestWithElena: false,
        pickedChp02_TestWithKailani: false,
        pickedChp02_TestWithEvarius: false,
        pickedChp02_PickHerbsGarden: false,
        pickedChp02_FightNeighbor: false,
        // // pickedChp02_E_DiscoverBedroom: false,
        // // pickedChp02_E_DiscoverKitchen: false,
        //  CHAPTER 03: PICKED ALL SCENES
        pickedChp03_Dressmaker: false,
        pickedChp03_ChoresWithKailani: false,
        pickedChp03_WaterwellKailani: false,
        pickedChp03_WoodChoppingKailani: false,
        // CHAPTER 04: PICKED ALL SCENES
        pickedChp04TalkToFamily: false,
        pickedChp04TalkToElena: false,
        pickedChp04ResearchLibrary: false,
        // CHAPTER 05: PICKED ALL SCENES
        pickedChp05GoToClearing: false,
        pickedChp05GiveBirdsFood: false,
        pickedChp05SingToBirds: false,
        // CHAPTER 07: PICKED ALL SCENES
        pickedChp07TravelToWhary: false,
        pickedChp07DiscoverBees: false,
        pickedChp07DiscoverFlowers: false,
        // CHAPTER 8: PICKED ALL SCENES
        pickedChp08CatchFlynnAtGates: false,
        pickedChp08EnterCity: false,
        pickedChp08CatchFlynnInAlley: false,
        pickedChp08ChooseStay: false,
        pickedChp08GoWithFlynn: false,
        pickedChp08GoWithoutFlynn: false,
        pickedChp08ChooseContinueSearch: false,
        // CHAPTER 9: PICKED ALL SCENES
        pickedChp09ResearchMarketplace: false,
        pickedChp09TalkToInnkeeper: false,
        pickedChp09TalkToCook: false,
        pickedChp09TalkToStablehand: false,
        pickedChp09DiscoverListenToVillagers: false,
        pickedChp09DiscoverMerchants: false,
        pickedChp09DiscoverSpeakToVillagers: false,
        pickedChp09SpeakToBeggar: false,
        pickedChp09MakeAWish: false,
        // CHAPTER 10: ON THE RAFT
        pickedChoiceChp10ExploreAfraid: false,
        pickedChoiceChp10ExploreAttention: false,
        pickedChoiceChp10ExploreSick: false,
        pickedChoiceChp10ExploreAll: false
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
            //   id: "ImageRiddle",
            //   scene: imageRiddle,
            //   name: "ImageRiddle"
            // },
            // {
            //   id: "TextRiddle",
            //   scene: textRiddle,
            //   name: "TextRiddle"
            // },
            // {
            //   id: "TestTunnel",
            //   scene: testTunnel,
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
            // {
            //   id: "01_00 IntroNarration",
            //   scene: Chp01_00_IntroNarration,
            //   name: "Intro Narration"
            // },
            // {
            //   id: "01_01 Intro Marketplace",
            //   scene: Chp01_01_IntroMarketplace,
            //   name: "Intro marketplace"
            // }, // next ist optional, hier kann ich festlegen, welche szene als nächstes abgespielt wird
            // {
            //   id: "01_E_FlowerMerchant",
            //   scene: Chp01_E_FlowerMerchant,
            //   name: "E_FlowerMerchant"
            // },
            // {
            //   id: "01_E_LeatherMerchant",
            //   scene: Chp01_E_LeatherMerchant,
            //   name: "E_LeatherMerchant"
            // },
            // {
            //   id: "01_02 Conversation Mama",
            //   scene: Chp01_02_ConvoMother,
            //   name: "ConvoMother",
            //   next: "01_01 Intro Marketplace"
            // },
            // {
            //   id: "01_03 MirrorMerchant",
            //   scene: Chp01_03_IntroMirror,
            //   name: "IntroMirror"
            // },
            // *** CUTSCENES CHP01***
            // {
            //   id: "01_CS PerchaseMirror",
            //   scene: Chp01_CS_PerchaseMirror,
            //   name: "CS: PerchaseMirror"
            // },
            {
                id: "01_CS Arrival Home",
                scene: Spiegel_VN.Chp01_CS_ArrivalHome,
                name: "CS: ArrivalHome"
            },
            // // ***CHAPTER 02: FAMILY HOME ***
            {
                id: "02_00 Arrival Home",
                scene: Spiegel_VN.Chp02_00_ArrivalHome,
                name: "02_00 ArrivalHome"
            },
            {
                id: "02_01 Dinner at home",
                scene: Spiegel_VN.Chp02_01_Dinner,
                name: "Dinner"
            },
            {
                id: "02_021 Test Mirror Kailani",
                scene: Spiegel_VN.Chp02_021_TestMirrorK,
                name: "Test mirror"
            },
            {
                id: "02_021 Test Mirror Evarius",
                scene: Spiegel_VN.Chp02_021_TestMirrorE,
                name: "Test mirror"
            },
            {
                id: "02_03 Fight with neighbor",
                scene: Chp02_03_FightNeighbor,
                name: "FightNeighbor"
            },
            {
                id: "02_E Discover bedroom",
                scene: Spiegel_VN.Chp02_E_DiscoverBedroom,
                name: "E_Bedroom"
            },
            {
                id: "02_03 Pick Herbs",
                scene: Spiegel_VN.Chp02_03_PickHerbs,
                name: "Herbs Garden"
            },
            {
                id: "02_Kitchen",
                scene: Spiegel_VN.Chp02_Kitchen,
                name: "Kitchen"
            },
            // // CUTSCENES ***
            { id: "02_CS Sleep", scene: Spiegel_VN.Chp02_CS_Sleep, name: "CS: Sleep" },
            { id: "02_CS New day", scene: Spiegel_VN.Chp02_CS_NewDay, name: "CS: New Day" },
            // // *** CHAPTER 03: VILLAGE ***
            // {
            //   id: "03_01 Dressmaker",
            //   scene: Chp03_01_Dressmaker,
            //   name: "Dressmaker"
            // },
            // {
            //   id: "03_E Discover donkey",
            //   scene: Chp03_E_DiscoverDonkey,
            //   name: "E_Donkey"
            // },
            // {
            //   id: "03_E Discover Forest",
            //   scene: Chp03_E_DiscoverForest,
            //   name: "E_Forest"
            // },
            // {
            //   id: "03_E Discover Library",
            //   scene: Chp03_E_DiscoverLibrary,
            //   name: "E_Library"
            // },
            // {
            //   id: "03_021 Chores with Kailani",
            //   scene: Chp03_021_ChoresWithKailani,
            //   name: "Chores Kailani"
            // },
            // // {
            // //   id: "03_022 Waterwell with Kailani",
            // //   scene: Chp03_022_WaterWellKailani,
            // //   name: "Waterwell Kailani",
            // // },
            // // *** CUTSCENES ***
            // {
            //   id: "03_CS Turmoil marketplace",
            //   scene: Chp03_CS_TurmoilMarketplace,
            //   name: "CS: TurmoilMarketplace"
            // },
            // {
            //   id: "03_CS Kailani is missing",
            //   scene: Chp03_CS_KailaniMissing,
            //   name: "CS: Kailani is missing"
            // },
            // // *** CHAPTER 04 RESEARCH ***
            // {
            //   id: "04_01 Talk with family",
            //   scene: Chp04_01_TalkWithFamily,
            //   name: "Talk with family"
            // },
            // {
            //   id: "04_02 Talk with Elena",
            //   scene: Chp04_02_TalkWithElena,
            //   name: "Talk with Elena"
            // },
            // {
            //   id: "04_03 Research library",
            //   scene: Chp04_03_ResearchLibrary,
            //   name: "Research library"
            // },
            // {
            //   id: "04_E_Examine mirror",
            //   scene: Chp04_E_ExamineMirror,
            //   name: "Examine Mirror"
            // },
            // {
            //   id: "04_E Search garden",
            //   scene: Chp04_E_SearchGarden,
            //   name: "Search garden"
            // },
            // {
            //   id: "04_E Search ground floor",
            //   scene: Chp04_E_SearchGroundFloor,
            //   name: "Search ground floor"
            // },
            // {
            //   id: "04_CS Entry forest",
            //   scene: Chp04_CS_EntryForest,
            //   name: "Entry forest"
            // },
            // // *** CHAPTER 05: FOREST
            // { id: "05_01 Clearing", scene: Chp05_01_Clearing, name: "Clearing" },
            // {
            //   id: "05_02 Sing to birds",
            //   scene: Chp05_02_SingToBirds,
            //   name: "Sing to birds"
            // },
            // { id: "05_03 Feed birds", scene: Chp05_03_FeedBirds, name: "Feed birds" },
            // {
            //   id: "05_E Discover oak",
            //   scene: Chp05_E_DiscoverOak,
            //   name: "Discover oak"
            // },
            // {
            //   id: "05_E Discover river",
            //   scene: Chp05_E_DiscoverRiver,
            //   name: "Discover river"
            // },
            // {
            //   id: "05_CS Go home",
            //   scene: Chp05_CS_GoHome,
            //   name: "Go home"
            // },
            // // *** CHAPTER 06: DEPARTURE
            // {
            //   id: "06_02 Recieve iron",
            //   scene: Chp06_02_ReceiveItemMama,
            //   name: "Recieve item from Mama"
            // },
            // {
            //   id: "06_03 Departure",
            //   scene: Chp06_03_DepartureRiver,
            //   name: "Departure"
            // },
            // {
            //   id: "06_CS Arrival Meadow",
            //   scene: Chp06_CS_ArrivalMeadow,
            //   name: "Arrival meadow"
            // },
            // // *** CHAPTER 07: ARRIVAL MIRRORWORLD
            // {
            //   id: "07_01 Travel to to Whary",
            //   scene: Chp07_02_TravelToWhary,
            //   name: "Departure city"
            // },
            // {
            //   id: "07_E Discover flowers",
            //   scene: Chp07_E_DiscoverFlowers,
            //   name: "Discover flowers"
            // },
            // {
            //   id: "07_E Discover bees",
            //   scene: Chp07_E_DiscoverBees,
            //   name: "Discover bees"
            // },
            // {
            //   id: "07_CS Line at gates",
            //   scene: Chp07_CS_LineAtGates,
            //   name: "Line at the gates"
            // },
            // // *** CHAPTER 08: In Whary ***
            // {
            //   id: "08_01 Meet Flynn gates",
            //   scene: Chp08_01_MeetFlynnAtGates,
            //   name: "Meet Flynn at the gates"
            // },
            // {
            //   id: "08_02 Meet Flynn in alley",
            //   scene: Chp08_02_MeetFlynnInAlley,
            //   name: "Meet Flynn in alley"
            // },
            // {
            //   id: "08_03 Enter City",
            //   scene: Chp08_03_EnterCity,
            //   name: "Enter city"
            // },
            // {
            //   id: "08_04 Choose stay",
            //   scene: Chp08_04_ChooseStay,
            //   name: "Choose stay"
            // },
            // {
            //   id: "08_041 Choose nice stay",
            //   scene: Chp08_041_ChooseNiceStay,
            //   name: "Choose nice stay"
            // },
            // {
            //   id: "08_042 Choose ugly stay",
            //   scene: Chp08_042_ChooseUglyStay,
            //   name: "Choose ugly stay"
            // },
            // {
            //   id: "08_0411 Nice stay with Flynn",
            //   scene: Chp08_0411_NiceStayFlynn,
            //   name: "Nice stay with Flynn"
            // },
            // {
            //   id: "08_0421 Ugly stay with Flynn",
            //   scene: Chp08_0421_UglyStayFlynn,
            //   name: "Ugly stay with Flynn"
            // },
            // {
            //   id: "08_E Discover Hay",
            //   scene: Chp08_E_DiscoverHay,
            //   name: "Discover hay"
            // },
            // {
            //   id: "08_E Discover Villagers",
            //   scene: Chp08_E_DiscoverVillagers,
            //   name: "Discover villagers"
            // },
            // {
            //   id: "08_E Discover windows",
            //   scene: Chp08_E_DiscoverWindows,
            //   name: "Discover windows"
            // },
            // {
            //   id: "08_CS Talk To Flynn",
            //   scene: Chp08_CS_TalkToFlynn,
            //   name: "Talk to Flynn"
            // },
            // {
            //   id: "08_CS Sleep & new day",
            //   scene: Chp08_CS_Sleep,
            //   name: "Go to sleep"
            // },
            // // *** CHAPTER 09:
            // {
            //   id: "09_01 Research Marketplace",
            //   scene: Chp09_01_ResearchMarketplace,
            //   name: "Research Marketplace"
            // },
            // {
            //   id: "09_011 Beggar",
            //   scene: Chp09_011_Beggar,
            //   name: "Beggar scene"
            // },
            // // {
            // //   id: "09_011 Speak to Beggar",
            // //   scene: Chp09_011_Beggar,
            // //   name: "Speak to Beggar",
            // // },
            // {
            //   id: "09_012 Make a wish",
            //   scene: Chp09_012_MakeAWish,
            //   name: "Make a wish"
            // },
            // {
            //   id: "09_02 TalkToInnkeeper",
            //   scene: Chp09_02_TalkToInnkeeper,
            //   name: "Talk to innkeeper"
            // },
            // {
            //   id: "09_03 TalkToCook",
            //   scene: Chp09_03_TalkToCook,
            //   name: "Talk to cook"
            // },
            // {
            //   id: "09_04 Talk to stablehand",
            //   scene: Chp09_04_TalkToStablehand,
            //   name: "Talk to stablehand"
            // },
            // {
            //   id: "09_E Listen to villagers",
            //   scene: Chp09_E_ListenToVillagers,
            //   name: "Listen to villagers"
            // },
            // {
            //   id: "09_13 Talk to merchants",
            //   scene: Chp09_E_TalkToMerchants,
            //   name: "Talk to merchants"
            // },
            // {
            //   id: "09_14 Speak to villagers",
            //   scene: Chp09_E_SpeakToVillagers,
            //   name: "Speak to villagers"
            // },
            // {
            //   id: "09_CS Arrival lake",
            //   scene: Chp09_CS_ArrivalLake,
            //   name: "Arrival at lake"
            // },
            // // *** CHAPTER 10: CROSSING LAKE ***
            // {
            //   id: "10_01 How to cross",
            //   scene: Chp10_01_HowToCross,
            //   name: "How to cross"
            // },
            // {
            //   id: "10_02 On the raft",
            //   scene: Chp10_02_OnTheRaft,
            //   name: "Build a raft"
            // },
            // {
            //   id: "10_03 Cross lake",
            //   scene: Chp10_03_CrossLake,
            //   name: "Crossing the lake"
            // },
            // {
            //   id: "10_04 Attack birds",
            //   scene: Chp10_04_AttackBirds,
            //   name: "Attack from birds"
            // },
            // {
            //   id: "10_041 Sing to birds",
            //   scene: Chp10_041_SingToBirds,
            //   name: "Sing to birds"
            // },
            // {
            //   id: "10_042 Use Mirror",
            //   scene: Chp10_042_UseMirror,
            //   name: "Use the mirror"
            // },
            // {
            //   id: "10_051 Birds become friendly",
            //   scene: Chp10_051_FriendlyBirds,
            //   name: "Birds become friendly"
            // },
            // {
            //   id: "10_052 Birds disappear",
            //   scene: Chp10_052_BirdsDisappear,
            //   name: "Birds disappear"
            // },
            // {
            //   id: "10_E Discover City lights Whary",
            //   scene: Chp10_E_CityLightsWhary,
            //   name: "Discover city lights"
            // },
            // {
            //   id: "10_E Discover lake",
            //   scene: Chp10_E_DiscoverLake,
            //   name: "Discover lake"
            // },
            // {
            //   id: "10_E Discover lakewater",
            //   scene: Chp10_E_DiscoverLakewater,
            //   name: "Discover lakewater"
            // },
            // {
            //   id: "10_CS Arrival other side",
            //   scene: Chp10_CS_ArrivalOtherSide,
            //   name: "Arrival other side"
            // },
            // // *** CHAPTER 11: SCOUTING FACTORY ***
            // {
            //   id: "11_01 Search for hiding place",
            //   scene: Chp11_01_SearchHidingPlace,
            //   name: "Search for hiding place"
            // },
            // {
            //   id: "11_02 Find iron",
            //   scene: Chp11_02_FindIron,
            //   name: "Find iron"
            // },
            // {
            //   id: "11_03 Watch factory",
            //   scene: Chp11_03_WatchFactory,
            //   name: "WatchFactory"
            // },
            // {
            //   id: "11_04 Try break-in",
            //   scene: Chp11_04_TryBreakIn,
            //   name: "Try to break-in"
            // },
            // {
            //   id: "11_E Discover forest",
            //   scene: Chp11_E_DiscoverForest,
            //   name: "Discover forest"
            // },
            // {
            //   id: "11_E Discover huts",
            //   scene: Chp11_E_DiscoverHuts,
            //   name: "Discover huts"
            // },
            // {
            //   id: "11_E Discover tower",
            //   scene: Chp11_E_DiscoverTower,
            //   name: "Discover tower"
            // },
            // {
            //   id: "11_CS Sleep",
            //   scene: Chp11_CS_Sleep,
            //   name: "Sleep"
            // },
            // // *** CHAPTER 12: ENTRY FACTORY
            // {
            //   id: "12_011 Sneak-in",
            //   scene: Chp12_011_SneakIn,
            //   name: "Sneak-in"
            // },
            // {
            //   id: "12_012 Sneak-in amongst slaves",
            //   scene: Chp12_012_SneakAmongSlaves,
            //   name: "Sneak-in amongst slaves"
            // },
            // {
            //   id: "12_02 Enter factory",
            //   scene: Chp12_02_EnterFactory,
            //   name: "Enter factory"
            // },
            // {
            //   id: "12_031 Talk to slaves",
            //   scene: Chp12_031_TalkToSlaves,
            //   name: "Talk to slaves"
            // },
            // {
            //   id: "12_032 Search for Kailani",
            //   scene: Chp12_032_SearchForKailani,
            //   name: "Search for Kailani"
            // },
            // {
            //   id: "12_033 Listen to guards",
            //   scene: Chp12_033_ListenToGuards,
            //   name: "Listen to guards"
            // },
            // {
            //   id: "12_04 Back to hiding place",
            //   scene: Chp12_04_BackToHidingPlace,
            //   name: "Back to hiding place"
            // },
            // {
            //   id: "12_051 Birds offer help",
            //   scene: Chp12_051_BirdsOfferHelp,
            //   name: "Birds offer help"
            // },
            // {
            //   id: "12_052 Make a wish",
            //   scene: Chp12_052_MakeAWish,
            //   name: "Make a wish"
            // },
            // {
            //   id: "12_E Discover village",
            //   scene: Chp12_E_DiscoverVillage,
            //   name: "Discover village"
            // },
            // {
            //   id: "12_E Discover production site",
            //   scene: Chp12_E_Productionsite,
            //   name: "Production site"
            // },
            // {
            //   id: "12_CS Talk to Flynn",
            //   scene: Chp12_CS_TalkToFlynn,
            //   name: "Talk to Flynn"
            // },
            // // *** CHAPTER 13: THE GREAT ORDEAL ***
            // {
            //   id: "13_01 Entry village",
            //   scene: Chp13_01_EntryVillage,
            //   name: "Entry village"
            // },
            // {
            //   id: "13_02 Get into tower",
            //   scene: Chp13_02_GetIntoTower,
            //   name: "Go to tower"
            // },
            // {
            //   id: "13_03 Entry tower",
            //   scene: Chp13_03_EntryTower,
            //   name: "Entry tower"
            // },
            // {
            //   id: "10_04 Sneak past demon",
            //   scene: Chp13_04_SneakPastDemon,
            //   name: "Sneak past demon"
            // },
            // {
            //   id: "13_E Discover family portrait",
            //   scene: Chp13_E_DiscoverFamilyPortrait,
            //   name: "Discover family portrait"
            // },
            // {
            //   id: "13_E Discover locked door",
            //   scene: Chp13_E_DiscoverLockedDoor,
            //   name: "Discover locked door"
            // },
            // {
            //   id: "13_E Sneak around tower",
            //   scene: Chp13_E_DiscoverSneakAround,
            //   name: "Discover sneak around tower"
            // },
            // {
            //   id: "13_E Discover tower window",
            //   scene: Chp13_E_DiscoverTowerWindow,
            //   name: "Discover tower window"
            // },
            // {
            //   id: "13_E Discover watch guard",
            //   scene: Chp13_E_DiscoverWatchGuard,
            //   name: "Discover watch guard"
            // },
            // {
            //   id: "13_CS Entry mirror room",
            //   scene: Chp13_CS_EntryMirrorRoom,
            //   name: "Entry mirror room"
            // },
            // // *** CHAPTER 14.1: GOOD ENDING
            // {
            //   id: "14.1_01 Destroy mirror",
            //   scene: Chp141_01_DestroyMirror,
            //   name: "Destroy mirror"
            // },
            // {
            //   id: "14.1_02 Demon dies",
            //   scene: Chp141_02_DemonDies,
            //   name: "Demon dies"
            // },
            // {
            //   id: "14.1_CS Balcony tower",
            //   scene: Chp14_CS_BalconyTower,
            //   name: "Balcony tower"
            // },
            // // CHAPTER 14.2: BAD ENDING
            // {
            //   id: "14.2_01 Realization mirror",
            //   scene: Chp142_01_RealizationMirror,
            //   name: "Realization mirror"
            // },
            // {
            //   id: "14.2_02 Caught by demon",
            //   scene: Chp142_02_CaughtByDemon,
            //   name: "Caught by demon"
            // },
            // {
            //   id: "14.2_03 Transformation into slaves",
            //   scene: Chp142_03_TransformationSlaves,
            //   name: "Transformation into slaves"
            // },
            // {
            //   id: "14.2_End Empty Scene",
            //   scene: Chp142_End_EmptyScene,
            //   name: "End empty scene"
            // },
            // // *** CHAPTER 15: THE PRIZE
            // {
            //   id: "15_01 Reunion Kailani",
            //   scene: Chp15_01_ReunionKailani,
            //   name: "Reunion Kailani"
            // },
            // {
            //   id: "15_E Discover demon room",
            //   scene: Chp15_E_DiscoverDemonRoom,
            //   name: "Discover demon room"
            // },
            // {
            //   id: "15_E Discover mirror room",
            //   scene: Chp15_E_DiscoverMirrorRoom,
            //   name: "Discover mirror room"
            // },
            // {
            //   id: "15_E Talk to freed villagers",
            //   scene: Chp15_E_TalkToFreedVillagers,
            //   name: "Talk to freed villagers"
            // },
            // {
            //   id: "15_CS Go to lake",
            //   scene: Chp15_CS_GoToLake,
            //   name: "Go to lake"
            // },
            // // *** CHAPTER 16: ROAD HOME
            // {
            //   id: "16_01 Confrontation Flynn",
            //   scene: Chp16_01_ConfrontationFlynn,
            //   name: "Confrontation Flynn"
            // },
            // {
            //   id: "16_02 Make a wish",
            //   scene: Chp16_02_MakeAWish,
            //   name: "Make a wish"
            // },
            // {
            //   id: "16_021 Go home alone",
            //   scene: Chp16_021_GoHomeAlone,
            //   name: "Go home alone"
            // },
            // {
            //   id: "16_022 Go home with Flynn",
            //   scene: Chp16_022_GoHomeWithFlynn,
            //   name: "Go home with Flynn"
            // },
            // {
            //   id: "16_CS Reunion family",
            //   scene: Chp16_CS_ReunionFamily,
            //   name: "Reunion family"
            // },
            // {
            //   id: "16_End Empty Scene",
            //   scene: Chp16_End_EmptyScene,
            //   name: "End Empty Scene"
            // },
            // ENDINGS
            {
                id: "Good Ending",
                scene: Spiegel_VN.GoodEnding,
                name: "Good Ending"
            },
            {
                id: "Semi Good Ending",
                scene: Spiegel_VN.SemiGoodEnding,
                name: "Semi Good Ending"
            },
            {
                id: "Bad Ending",
                scene: Spiegel_VN.BadEnding,
                name: "Bad Ending"
            },
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
            name: "Du",
        },
        narrator: {
            name: "Erzählerin",
        },
        Mama: {
            name: "Mama",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                dress_34_neutral: "/Assets/Characters/Leijla/Leijla_dress_34_neutral1.png",
                dress_34_angry: "/Assets/Characters/Leijla/Leijla_dress_34_angry.png",
                dress_34_smile: "/Assets/Characters/Leijla/Leijla_dress_34_smile.png",
                //
                dress_angry: "/Assets/Characters/Leijla/Leijla_dress_angry.png",
                dress_laugh: "/Assets/Characters/Leijla/Leijla_dress_laugh.png",
                dress_neutral: "/Assets/Characters/Leijla/Leijla_dress_neutral.png",
                dress_shocked: "/Assets/Characters/Leijla/Leijla_dress_shocked.png",
                //
                pants1_34_angry: "/Assets/Characters/Leijla/Leijla_pants1_34_angry.png",
                pants1_34_neutral: "/Assets/Characters/Leijla/Leijla_pants1_34_neutral.png",
                pants1_34_smile: "/Assets/Characters/Leijla/Leijla_pants1_34_smile.png",
                //
                pants1_laugh: "/Assets/Characters/Leijla/Leijla_pants1_laugh.png",
                pants1_neutral: "/Assets/Characters/Leijla/Leijla_pants1_neutral.png",
                pants1_shocked: "/Assets/Characters/Leijla/Leijla_Pants1_shocked.png",
                //
                pants2_angry: "/Assets/Characters/Leijla/Leijla_pants2_angry.png",
                pants2_laugh: "/Assets/Characters/Leijla/Leijla_pants2_laugh.png",
                pants2_neutral: "/Assets/Characters/Leijla/Leijla_pants2_neutral.png",
                pants2_shocked: "/Assets/Characters/Leijla/Leijla_pants2_shocked.png",
                //
                pants2_angry2: "/Assets/Characters/Leijla/Leijla_pants2_angry2.png",
                pants2_laugh2: "/Assets/Characters/Leijla/Leijla_pants2_laugh2.png",
                pants2_neutral2: "/Assets/Characters/Leijla/Leijla_pants2_neutral2.png",
                pants2_shocked2: "/Assets/Characters/Leijla/Leijla_pants2_shocked2.png",
                //
                pants2_hand_angry: "/Assets/Characters/Leijla/Leijla_pants2_hand_angry.png",
                pants2_hand_laugh: "/Assets/Characters/Leijla/Leijla_pants2_hand_laugh.png",
                pants2_hand_neutral: "/Assets/Characters/Leijla/Leijla_pants2_hand_neutral.png",
                pants2_hand_shocked: "/Assets/Characters/Leijla/Leijla_pants2_hand_shocked.png",
            },
        },
        Mutti: {
            name: "Mutti",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                dress1_basket_frown: "/Assets/Characters/Elena/Elena_Dress1_frown.png",
                dress1_basket_laugh: "/Assets/Characters/Elena/Elena_Dress1_laugh.png",
                dress1_basket_neutral: "/Assets/Characters/Elena/Elena_Dress1_neutral.png",
                dress1_basket_smile: "/Assets/Characters/Elena/Elena_Dress1_smile.png",
                dress1_basket_smirk: "/Assets/Characters/Elena/Elena_Dress1_smirk.png",
                //
                dress2_basket_laugh: "/Assets/Characters/Elena/Elena_Dress2_laugh.png",
                dress2_basket_neutral: "/Assets/Characters/Elena/Elena_Dress2_neutral.png",
                dress2_basket_smile: "/Assets/Characters/Elena/Elena_Dress2_smile.png",
                dress2_basket_smirk: "/Assets/Characters/Elena/Elena_Dress2_smirk.png",
                //
                dress3_frown: "/Assets/Characters/Elena/Elena_Dress3_frown.png",
                dress3_laugh: "/Assets/Characters/Elena/Elena_Dress3_laugh.png",
                dress3_neutral: "/Assets/Characters/Elena/Elena_Dress3_neutral.png",
                dress3_smile: "/Assets/Characters/Elena/Elena_Dress3_smile.png",
                dress3_smirk: "/Assets/Characters/Elena/Elena_Dress3_smirk.png",
                //
                dress4_laugh: "/Assets/Characters/Elena/Elena_Dress4_laugh.png",
                dress4_neutral: "/Assets/Characters/Elena/Elena_Dress4_neutral.png",
                dress4_frown: "/Assets/Characters/Elena/Elena_Dress4_frown.png",
                dress4_smile: "/Assets/Characters/Elena/Elena_Dress4_smile.png",
                dress4_smirk: "/Assets/Characters/Elena/Elena_Dress4_smirk.png",
                //
                dress5_frown: "/Assets/Characters/Elena/Elena_Dress5_frown.png",
                dress5_laugh: "/Assets/Characters/Elena/Elena_Dress5_laugh.png",
                dress5_neutral: "/Assets/Characters/Elena/Elena_Dress5_neutral.png",
                dress5_smile: "/Assets/Characters/Elena/Elena_Dress5_smile.png",
                dress5_smirk: "/Assets/Characters/Elena/Elena_Dress5_smirk.png",
                //
                dress6_frown: "/Assets/Characters/Elena/Elena_Dress6_frown.png",
                dress6_laugh: "/Assets/Characters/Elena/Elena_Dress6_laugh.png",
                dress6_neutral: "/Assets/Characters/Elena/Elena_Dress6_neutral.png",
                dress6_smile: "/Assets/Characters/Elena/Elena_Dress6_smile.png",
                dress6_smirk: "/Assets/Characters/Elena/Elena_Dress6_smirk.png",
                //
                dress7_frown: "/Assets/Characters/Elena/Elena_Dress7_frown.png",
                dress7_laugh: "/Assets/Characters/Elena/Elena_Dress7_laugh.png",
                dress7_neutral: "/Assets/Characters/Elena/Elena_Dress7_neutral.png",
                dress7_smile: "/Assets/Characters/Elena/Elena_Dress7_smile.png",
                dress7_smirk: "/Assets/Characters/Elena/Elena_Dress7_smirk.png",
            },
        },
        Kailani: {
            name: "Kailani",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                // Outfit 1
                outfit1_annoyed_angry: "./Assets/Characters/Kailani/Outfit1/Kailani_annoyed_angry.png",
                outfit1_annoyed_eyeroll: "./Assets/Characters/Kailani/Outfit1/Kailani_annoyed_eyeroll.png",
                outfit1_back_smile: "./Assets/Characters/Kailani/Outfit1/Kailani_back_smile.png",
                outfit1_back_worried: "./Assets/Characters/Kailani/Outfit1/Kailani_back_worried.png",
                outfit1_begging_eyeroll: "./Assets/Characters/Kailani/Outfit1/Kailani_begging_eyeroll.png",
                outfit1_begging_shrug: "./Assets/Characters/Kailani/Outfit1/Kailani_begging_shrug.png",
                outfit1_crossed_angry: "./Assets/Characters/Kailani/Outfit1/Kailani_crossed_angry.png",
                outfit1_crossed_eyeroll: "./Assets/Characters/Kailani/Outfit1/Kailani_crossed_eyeroll.png",
                outfit1_crossed_neutral: "./Assets/Characters/Kailani/Outfit1/Kailani_crossed_neutral.png",
                outfit1_neutral_angry: "./Assets/Characters/Kailani/Outfit1/Kailani_neutral_angry.png",
                outfit1_neutral_eyeroll: "./Assets/Characters/Kailani/Outfit1/Kailani_neutral_eyeroll.png",
                outfit1_neutral_happy: "./Assets/Characters/Kailani/Outfit1/Kailani_neutral_happy.png",
                outfit1_neutral_neutral: "./Assets/Characters/Kailani/Outfit1/Kailani_neutral_neutral.png",
                outfit1_neutral_smile: "./Assets/Characters/Kailani/Outfit1/Kailani_neutral_smile.png",
                outfit1_profile_h_neutral: "./Assets/Characters/Kailani/Outfit1/Kailani_profile_holding_neutral.png",
                outfit1_profile_h_smile: "./Assets/Characters/Kailani/Outfit1/Kailani_profile_holding_smile.png",
                outfit1_profile_neutral: "./Assets/Characters/Kailani/Outfit1/Kailani_profile_neutral.png",
                outfit1_profile_smile: "./Assets/Characters/Kailani/Outfit1/Kailani_profile_smile.png",
                outfit1_shrug_eyeroll: "./Assets/Characters/Kailani/Outfit1/Kailani_shrug_eyeroll.png",
                outfit1_shrug_happy: "./Assets/Characters/Kailani/Outfit1/Kailani_shrug_happy.png",
                outfit1_shrug_shrug: "./Assets/Characters/Kailani/Outfit1/Kailani_shrug_shrug.png",
                outfit1_thinking_angry: "./Assets/Characters/Kailani/Outfit1/Kailani_thinking_angry.png",
                outfit1_thinking_neutral: "./Assets/Characters/Kailani/Outfit1/Kailani_thinking_neutral.png",
                outfit1_thinking_shrug: "./Assets/Characters/Kailani/Outfit1/Kailani_thinking_shrug.png",
                // Outfit 2
                outfit2_dress_back_neutral: "./Assets/Characters/Kailani/Outfit2/Kailani_back_dress_neutral.png",
                outfit2_dress_back_smile: "./Assets/Characters/Kailani/Outfit2/Kailani_back_dress_smile.png",
                outfit2_dress1_angry: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_I_angry.png",
                outfit2_dress1_eyeroll: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_I_eyeroll.png",
                outfit2_dress1_happy: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_I_happy.png",
                outfit2_dress1_shrug: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_I_shrug.png",
                outfit2_dress1_smile: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_I_smile.png",
                outfit2_dress2_smile: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_II_angry.png",
                outfit2_dress2_eyeroll: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_II_eyeroll.png",
                outfit2_dress3_angry: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_III_angry.png",
                outfit2_dress3_eyeroll: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_III_eyeroll.png",
                outfit2_dress3_happy: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_III_happy.png",
                outfit2_dress3_shrug: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_III_shrug.png",
                outfit2_dress3_smile: "./Assets/Characters/Kailani/Outfit2/Kailani_dress_III_smile.png",
                // Grey Outfits
                grey_slave: "./Assets/Characters/Kailani/Outfit3/Kailani_greydress2.png",
            },
        },
        Evarius: {
            name: "Evarius",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                // Position 1
                pos1_angry: "./Assets/Characters/Evarius/Ev_Pos1_angry.png",
                pos1_frown: "./Assets/Characters/Evarius/Ev_Pos1_frown.png",
                pos1_laugh: "./Assets/Characters/Evarius/Ev_Pos1_laugh.png",
                pos1_neutral: "./Assets/Characters/Evarius/Ev_Pos1_neutral.png",
                pos1_smile: "./Assets/Characters/Evarius/Ev_Pos1_smile.png",
                // Position 2
                pos2_angry: "./Assets/Characters/Evarius/Ev_Pos2_angry.png",
                pos2_frown: "./Assets/Characters/Evarius/Ev_Pos2_frown.png",
                pos2_laugh: "./Assets/Characters/Evarius/Ev_Pos2_laugh.png",
                pos2_neutral: "./Assets/Characters/Evarius/Ev_Pos2_neutral.png",
                pos2_smile: "./Assets/Characters/Evarius/Ev_Pos2_smile.png",
                // Position 3
                pos3_angry: "./Assets/Characters/Evarius/Ev_Pos3_angry.png",
                pos3_frown: "./Assets/Characters/Evarius/Ev_Pos3_frown.png",
                pos3_laugh: "./Assets/Characters/Evarius/Ev_Pos3_laugh.png",
                pos3_neutral: "./Assets/Characters/Evarius/Ev_Pos3_neutral.png",
                // Profile
                profile_neutral: "./Assets/Characters/Evarius/Ev_Profile_neutral.png",
                profile_smile: "./Assets/Characters/Evarius/Ev_Profile_smile.png",
            }
        },
        Flynn: {
            name: "Flynn",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                // Outfit 1
                pos1_angry: "./Assets/Characters/Flynn/Outfit1/Flynn_light_angry.png",
                pos1_happy: "./Assets/Characters/Flynn/Outfit1/Flynn_light_happy.png",
                pos1_neutral: "./Assets/Characters/Flynn/Outfit1/Flynn_light_neutral.png",
                pos1_smile: "./Assets/Characters/Flynn/Outfit1/Flynn_light_smile.png",
                pos1_smile2: "./Assets/Characters/Flynn/Outfit1/Flynn_light_smileII.png",
                pos2_happy2: "./Assets/Characters/Flynn/Outfit1/Flynn_light_hand_happy_II.png",
                pos2_neutral: "./Assets/Characters/Flynn/Outfit1/Flynn_light_hand_neutral.png",
                pos2_neutral2: "./Assets/Characters/Flynn/Outfit1/Flynn_light_hand_neutral_II.png",
                pos2_uncertain2: "./Assets/Characters/Flynn/Outfit1/Flynn_light_hand_uncertain_II.png",
                pos3_angry: "./Assets/Characters/Flynn/Outfit1/Flynn_light_right_angry.png",
                pos3_happy: "./Assets/Characters/Flynn/Outfit1/Flynn_light_right_happy.png",
                pos3_smile: "./Assets/Characters/Flynn/Outfit1/Flynn_light_right_smile.png",
                // Outfit 2
                pos1_confused: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_confused.png",
                pos1_sad: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_confused_sad.png",
                pos2_crossed_angry: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_angry.png",
                pos2_crossed_neutral: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_neutral.png",
                pos2_crossed_neutral2: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_neutral_II.png",
                pos2_crossed_sad: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_sad.png",
                pos2_crossed_shocked: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_shocked.png",
                pos2_crossed_shocked2: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_shocked_II.png",
                pos2_crossed_smile: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_smile.png",
                pos2_crossed_smile2: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_smile_II.png",
                pos2_crossed_uncertain: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_uncertain.png",
                pos3_arms_smile: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_crossed_smile.png",
                pos3_arms_happy: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_neutral_happy.png",
                pos3_arms2_angry: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_uncertain_angry.png",
                pos3_arms2_sad: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_uncertain_sad.png",
                pos3_arms2_smile: "./Assets/Characters/Flynn/Outfit2/Flynn_blue_uncertain_smile.png",
            },
        },
        flowerMerchant: {
            name: "Blumenhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMCENTER,
        },
        leatherMerchant: {
            name: "Lederhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
        },
        mirrorMerchant: {
            name: "Spiegelhändler",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                left: "./Assets/Characters/Mirrormerchant/mm_1.png",
                neutral: "./Assets/Characters/Mirrormerchant/mm_2.png",
            },
        },
        Demon: {
            name: "Dämon",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                pos1_angry: "./Assets/Characters/Demon/Demon_angry.png",
                pos2_angry: "./Assets/Characters/Demon/Demon_pos2_angry.png",
                pos2_smile: "./Assets/Characters/Demon/Demon_pos2_smile.png",
            },
        },
        Beggar: {
            name: "Bettlerin",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                anguish: "./Assets/Characters/Beggar/Beggar_Pos1_anguish.png",
                front: "./Assets/Characters/Beggar/Beggar_Pos1_front.png",
                neutral: "./Assets/Characters/Beggar/Beggar_Pos1_neutral.png",
                shocked: "./Assets/Characters/Beggar/Beggar_Pos1_shocked.png",
            },
        },
        Cook: {
            name: "Koch",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                pos1_concerned: "./Assets/Characters/Cook/Cook_Pos1_concerned.png",
                pos1_neutral: "./Assets/Characters/Cook/Cook_Pos1_neutral.png",
                pos2_concerned: "./Assets/Characters/Cook/Cook_Pos2_concerned.png",
                pos2_unknowing: "./Assets/Characters/Cook/Cook_Pos2_unknowing.png",
            },
        },
        Innkeeper: {
            name: "Wirtin",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                pos1_laugh: "./Assets/Characters/Innkeeper/Innk_Pos1_laugh.png",
                pos1_neutral: "./Assets/Characters/Innkeeper/Innk_pos1_neutral.png",
                pos1_smile: "./Assets/Characters/Innkeeper/Innk_Pos1_smile.png",
                pos1_worried: "./Assets/Characters/Innkeeper/Innk_Pos1_worried.png",
                pos2_frown: "./Assets/Characters/Innkeeper/Innk_Pos2_frown.png",
                pos2_laugh: "./Assets/Characters/Innkeeper/Innk_Pos2_laugh.png",
                pos2_neutral: "./Assets/Characters/Innkeeper/Innk_Pos2_laugh.png",
                pos2_smile: "./Assets/Characters/Innkeeper/Innk_Pos2_smile.png",
            },
        },
        Stablehand: {
            name: "Stallmädchen",
            origin: Spiegel_VN.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                pos1_afraid: "./Assets/Characters/Stablehand/Stable_Pos1_afraid.png",
                pos1_angry: "./Assets/Characters/Stablehand/Stable_Pos1_angry.png",
                pos1_laugh: "./Assets/Characters/Stablehand/Stable_Pos1_laugh.png",
                pos2_afraid: "./Assets/Characters/Stablehand/Stable_Pos2_afraid.png",
                pos2_angry: "./Assets/Characters/Stablehand/Stable_Pos2_angry.png",
                pos2_laugh: "./Assets/Characters/Stablehand/Stable_Pos2_laugh.png",
            },
        },
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
            background: "./Assets/Backgrounds/Chapter02/Cottage_Outside.png",
            // night: "./Assets/Backgrounds/Chapter05/House_ext_night.png",
        },
        // *** CHAPTER 02 ***
        Chp02_01_Dinner: {
            name: "Dinnertable",
            background: "./Assets/Backgrounds/Chapter02/DiningTable.png"
        },
        Chp02_02_LivingRoom: {
            name: "Living room",
            background: "./Assets/Backgrounds/Chapter02/LivingRoom.png",
            night: "./Assets/Backgrounds/Chapter02/LivingRoom_night.png"
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
        Chp03_021_FirewoodKailani: {
            name: "Firewood chopping Kailani",
            background: "./Assets/Backgrounds/Chapter03/Firewood.png"
        },
        Chp03_022_Marketplace_empty: {
            // empty marketplace
            name: "Well empty marketplace",
            background: "./Assets/Backgrounds/Chapter03/Marketplace_empty.png"
        },
        Chp03_E_DiscoverForest: {
            name: "Discover forest",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/MyBedroom.jpg"
        },
        Chp03_E_DiscoverLibrary: {
            name: "Discover library",
            background: "./Assets/Backgrounds/Chapter02/E_DiscoverBedroom/Library.png"
        },
        Chp03_CS_KailaniMissing: {
            name: "Kailanis bedroom",
            background: "./Assets/Backgrounds/Chapter02/Kailani_bedroom.png"
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
        // *** CHAPTER 06 ***
        Chp06_ArrivalMeadow: {
            name: "Arrival meadow",
            background: "./Assets/Backgrounds/Chapter06/Arrival_Meadow.png"
        },
        Chp06_CityGates: {
            name: "City gates",
            background: "./Assets/Backgrounds/Chapter06/CityGates.png"
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
            background: "./Assets/Backgrounds/Chapter07/Barn.png"
        },
        Chp07_MarketplaceWhary: {
            name: "Marketplace Whary",
            background: "./Assets/Backgrounds/Chapter07/Marketplace_Whary.png"
        },
        // *** CHAPTER 08 ***
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
        // *** CHAPTER 10 ***
        Chp10_Tunnel1: {
            name: "Tunnel 1",
            background: "./Assets/Backgrounds/Chapter10/Tunnel1.png"
        },
        Chp10_ExplorePortrait: {
            name: "Portrait",
            background: "./Assets/Backgrounds/Chapter10/Portrait.png"
        },
        // *** TRANSITION BETWEEN CHAPTERS ***
        black: {
            name: "Black_BG",
            background: "./Assets/Transitions/Black.png"
        }
    };
})(Spiegel_VN || (Spiegel_VN = {}));
;
var Spiegel_VN;
(function (Spiegel_VN) {
    Spiegel_VN.music = {
        //themes
        theme_ordinaryworld: "./Assets/Music/Theme_OrdinaryWorld.wav",
        theme_mirrorworld_whary: "./Assets/Music/Theme_Mirrorworld_Whary.wav",
        theme_mirrorworld_factory: "./Assets/Music/Theme_Mirrorworld_Factory1.wav",
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
    Spiegel_VN.Soundeffekte = {
        click: "./Assets/Soundeffekte/mouseclick.flac",
        birds: "./Assets/Soundeffekte/cardinal.mp3",
        crowd: "./Assets/Soundeffekte/crowd_talking.mp3",
        door: "./Assets/Soundeffekte/door-opening.mp3",
        forest: "./Assets/Soundeffekte/forest-wind-and-birds.mp3",
        forest2: "./Assets/Soundeffekte/forest-with-small-river-birds-and-nature-field.mp3",
        glass: "./Assets/Soundeffekte/glass-breaking.mp3",
        kitchen: "./Assets/Soundeffekte/kitchen.mp3",
        water: "./Assets/Soundeffekte/relaxing-mountains-rivers-streams-running-water.mp3",
        wood: "./Assets/Soundeffekte/woodcutter.mp3",
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
            T0004: '"Bevor es aber losgeht, musst du mir eine wichtige Frage beantworten: Welche Eigenschaft ist dir am wichtigsten? Wähle mit Bedacht aus, denn deine Antwort kann auf den Verlauf der Geschichte Einfluss nehmen …"',
            T0005: '"Schließe nun die Augen und lass dich von mir in eine Welt entführen, die nicht viel anders ist als deine hier. Nur mit etwas mehr … Magie!"',
            T0006: '"Es war einmal …."',
            T0007: '"... ein geschäftiger Marktplatz in einer kleinen Stadt am Rande des Bezirks, bevor der dunkle Wald begann."',
            T0008: '"Du schaust dich um und siehst Reihen an Marktständen, die mit bunten Waren bis oben hin aufgefüllt sind. Die Schreie der Händler schweben durch die kalte Luft, die von den lauen Sommerstrahlen an diesem kühlen Aprilmorgen ziemlich unberührt scheint."',
            T0009: '"Die Bewohner schlendern von Stand zu Stand und holen ihre Wocheneinkäufe. Ihre braunen, blauen und gelben Kleider zwischen den farbigen Waren lassen den gesamten Marktplatz wie die Farbpalette einer temperamentvollen, pinselschwingenden Künstlerin wirken."',
            T0010: '"Am Rande stehen und Beobachten ist sowieso eine deiner liebsten Beschäftigungen. So kannst du in Ruhe nachdenken. Als du so beobachtest, fällt dir auf, dass das Treiben geschäftiger wirkt als sonst."',
            T0011: '"Du runzelst die Stirn. Ist denn heute etwas anders als sonst? Wo ist außerdem Mama abgeblieben?"',
            T00012: '"Sicherlich rennt sie irgendwo deinen Chaos-Geschwistern hinterher. Kailani und Evarius. Verrückte Namen, oder? Was haben sich Mama und Mutti nur dabei gedacht!"',
            T0013: '"Mama ist wieder gestresst. Dabei sehe ich sie gerade sowieso so selten. Manchmal wünschte ich mir, sie würde weniger arbeiten und lieber mit uns Zeit verbringen."',
            T0014: '"(Tipp: Die Erkundungsoptionen kannst du wählen, ohne in der Story voranzuschreiten!)"',
        },
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
            T0001: '"Also, letzte Woche hattet ihr doch vergessen … naja, du und Mutti hattet viel zu tun und da wollte ich fragen … ihr habt vergessen, mir das Taschen–"',
            T0004: '"Vielleicht finde ich etwas auf dem Markt."',
            T0006: '"Doch, segeln lernen ist mir schon wichtig. Aber ich brauche noch ein paar Sachen … zum Beispiel Schuhcreme für meine Lederstiefel. Die sind doch, als wir neulich reiten waren, dreckig geworden. Obwohl, jetzt wo ich darüber nachdenke: Mutti freut sich vielleicht auch über ein paar Blumen, oder? Sie war letzte Woche so traurig, als Häschen Brombeere gestorben ist."',
            T0008: '"Nee, ich versuche doch, auf Segelunterricht zu sparen. Ich hab’ sogar bald die Hälfte!"',
            T0010: '"Ich muss noch überlegen, was ich mit dem Geld mache. Aber danke, Mama!"',
        },
        Mama: {
            T0000: '"Ja?"',
            T0002: '"Dein Taschengeld! Ja, natürlich. Das kriegst du noch. Das von heute und letzter Woche, oder? Hier, nimm nur."',
            T0003: '"Willst du dir etwas kaufen? Oder wieder sparen?"',
            T0005: '"Wolltest du nicht dein ganzes Geld für Segelunterricht sparen?  Oder hat sich das in der Zwischenzeit geändert?"',
            T0007: '"Ich habe dir doch gesagt, dass du beim Reiten andere Schuhe anziehen sollst. Aber du liebst eben diese Stiefel! Und Mutti würde sich sicher sehr über Blumen freuen. Aber jetzt auf, dass wir bald nach Hause kommen!"',
            T0009: '"Und das nach, wie viel, sechs Monaten? Das ist großartig. Spar’ nur fleißig weiter, darauf freust du dich schon seit Jahren!"'
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
            T0005: '"Brauchst du wirklich nicht sein! Das Besondere an diesem Spiegel ist: Er zeigt dir all’ deine Wünsche! Alles, was du dir vorstellen kannst, und auch das, was du dir nicht vorstellen kannst. Und es geht so einfach: Du musst nur den Spruch und deinen Herzenswunsch aufsagen – schon blühen deine gedanklichen Fantasien vor dir auf!"',
            T0006: '"Was meinst du, gefällt dir die Idee? Für nur 2 Goldstücke deine verrücktesten Träume vor dir zu sehen?"',
            T0011: '"Neugierige Kundschaft! Meine Lieblingskundschaft! Das Besondere an diesem Spiegel ist: Er zeigt dir all’ deine Wünsche! Alles, was du dir vorstellen kannst, und auch das, was du dir nicht vorstellen kannst. Und es geht so einfach: Du musst nur den Spruch und deinen Herzenswunsch aufsagen – schon blühen deine gedanklichen Fantasien vor dir auf!"',
        },
        maincharacter: {
            T0002: '"Was ist das denn für ein magischer Spiegel? Und was ist so besonders an ihm?"',
            T0004: '"Hm, ich bin mir unsicher …"',
            T0007: '"Nur zwei Goldstücke für meine kühnsten Träume in einem Spiegel? Unbedingt! Aber vorher sollte ich nochmal Mama um Geld bitten."',
            T0008: '"Hm, das klingt toll, aber wirklich erleben kann ich meine Wünsche dann immer noch nicht …"',
            T0009: '"Auf gar keinen Fall, das wäre ja zu schön, um wahr zu sein! Lieber verbringe ich die Zeit mit etwas, was mir mehr Spaß macht"',
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
        // ƒS.Sound.fade(Music.backgroundTheme_default, 0.8, 0.1, true);
        // ***BEGINN SZENE***
        // for (let diaSequence of Object.values(
        //   dlg_scn_00_IntroNarrator.narratorEntry
        // )) {
        //   await ƒS.Speech.tell(characters.narrator.name, diaSequence);
        // }
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0000);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0001);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0002);
        Spiegel_VN.dataForSave.nameProtagonist = await Spiegel_VN.ƒS.Speech.getInput();
        Spiegel_VN.characters.maincharacter.name = Spiegel_VN.dataForSave.nameProtagonist;
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0003);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0004);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0005);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0006);
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.narrator.name, Spiegel_VN.dlg_scn_00_IntroNarrator.narratorEntry.T0007);
        return "01_01 Intro Marketplace";
    }
    Spiegel_VN.Chp01_00_IntroNarration = Chp01_00_IntroNarration;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_01_IntroMarketplace() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_ordinaryworld, 0.8, 0.1, true);
        // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
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
        // await ƒS.Speech.tell(
        //   characters.maincharacter.name,
        //   dlg_scn_01.maincharacter.T0000
        // );
        // await ƒS.Speech.tell(characters.Mama.name, dlg_scn_01.Mama.T0000);
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
        // );
        // *** SCENE OPTIONS ***
        let Chp01PickSceneElementAnswers = {
            PickSceneConvoMother: "Rede mit Mama.",
            PickSceneMirrorMerchant: "Was glitzert so da hinten?",
            PickSceneExploreFlowerMerchant: "(Erkunden) Was gibt es Neues beim Blumenhändler?",
            PickSceneExploreLeatherMerchant: "(Erkunden) Was gibt es Neues beim Lederhändler?",
            PickSceneContinue: "Weiter",
        };
        console.log("boolean Mama gesprochen: ");
        console.log(Spiegel_VN.dataForSave.pickedChp01_ConvoMother);
        console.log("boolean Mirrormerhant besucht: ");
        console.log(Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant);
        if (!Spiegel_VN.dataForSave.pickedChp01_ConvoMother ||
            !Spiegel_VN.dataForSave.pickedChp01_MirrorMerchant) {
            delete Chp01PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        // let pickediSayTalkToMama: boolean;
        // let pickediSayTalkToMirrorMerchant: boolean;
        // do {
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
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, '"Ich schau mir noch schnell etwas an!"');
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
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
        // } while (dataForSave.pickedChoice);
    }
    Spiegel_VN.Chp01_01_IntroMarketplace = Chp01_01_IntroMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_02_ConvoMother() {
        Spiegel_VN.dataForSave.pickedChp01_ConvoMother = true;
        // await ƒS.Location.show(locations.black);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_02_ConvoMother);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        // await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);
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
            iSayNo: 'Abwehrend',
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
            iSayNo: '"Nein"',
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
        // let pickediSayAskAboutTrip: boolean;
        // let pickediSayAskAboutFlowers: boolean;
        // let pickediSayBuyFlowers: boolean;
        // let pickediSayLeave: boolean;
        // do {
        //   if (pickediSayAskAboutTrip) {
        //     delete chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip;
        //   }
        //   if (pickediSayAskAboutFlowers) {
        //     delete chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutFlowers;
        //   }
        //   if (pickediSayBuyFlowers) {
        //     delete chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers;
        //   }
        let chp01FlowerMerchantDialogueElement = await Spiegel_VN.ƒS.Menu.getInput(chp01FlowerMerchantDialogueElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (chp01FlowerMerchantDialogueElement) {
            case chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutTrip:
                // pickediSayAskAboutTrip = true;
                // dataForSave.pickedChoice = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Wie war denn die Reise hierher?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Ich weiß nicht, ob du, mein liebes Kind, davon etwas gehört hast, aber derzeit lauern überall Banditen auf den Königswegen! Einmal wären wir beinahe mitten in eine Bande hineingefahren."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Zum Glück habe ich so ein feines Näschen.Damit konnte ich das Gesindel meilenweit voraus riechen! Dann haben wir Händler einen anderen Weg genommen.Schau nicht so zweifelnd, jedes Wort, das ich gesprochen habe, ist wahr, jaja!."');
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_FlowerMerchant";
                break;
            case chp01FlowerMerchantDialogueElementAnswers.iSayAskAboutFlowers:
                // pickediSayAskAboutFlowers = true;
                // dataForSave.pickedChoice = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, '"Haben Sie normalerweise nicht mehr Blumen im Vorrat?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Ach die Blumen! Dieses Jahr werden sie mir förmlich aus den Händen gerissen. Es scheint so, als würden sich immer mehr Leute meine wunderschönen Kreationen zuhause aufstellen."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Seltsamerweise kaufen die grauesten Mäuse die buntesten Blumen… Nicht, dass ich mich beschwere! Nun werden sich eben diese, naja, kleinen Dörfchen wie eures mit weniger zufrieden geben müssen."');
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_FlowerMerchant";
                break;
            case chp01FlowerMerchantDialogueElementAnswers.iSayBuyFlowers:
                // pickediSayBuyFlowers = true;
                // dataForSave.pickedChoice = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, '"Ich nehme gerne die Nelken hier, darüber freut sich meine Mutti bestimmt. Gelb ist nämlich ihre Lieblingsfarbe."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Sehr gerne, liebes Kind, ich packe sie dir fest ein. Nicht, dass sie dir auf dem Heimweg etwa verloren gehen!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter.name, "Du lächelst den Händler an, bist aber etwas irritiert. Wieso denkt er, du kannst nicht auf die Blumen aufpassen? Du überreichst dem Händler das Geld von Mama, das er sofort in eine Tasche unter den Rock verstaut.");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_E_FlowerMerchant";
                break;
            case chp01FlowerMerchantDialogueElementAnswers.iSayLeave:
                // pickediSayLeave = true;
                Spiegel_VN.dataForSave.pickedChoice = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Auf Wiedersehen, Blumenhändler!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.flowerMerchant.name, '"Auf Wiedersehen, Kind!"');
                Spiegel_VN.ƒS.Speech.clear();
                return "01_01 Intro Marketplace";
                break;
        }
        // } while (dataForSave.pickedChoice);
        // );
    }
    Spiegel_VN.Chp01_E_FlowerMerchant = Chp01_E_FlowerMerchant;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp01_E_LeatherMerchant() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_E_LeatherMerchant);
        // await ƒS.update(2, transitions.fade.alpha, transitions.fade.edge);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        let randomTextChp01LeatherMerchant = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 3); //gerundet
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
            iSayLeave: "'Auf Wiedersehen!'",
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
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Etwas ungewöhnlich, das Ganze. Ganz gesund sahen sie nicht aus.Aber du, du siehst sehr gesund aus! Dir würde sicherlich diese Schafswolle stehen"');
                Spiegel_VN.ƒS.Speech.clear();
                return Chp01_E_LeatherMerchant();
                break;
            case Chp01LeatherMerchantDialogueElementAnswers.iSayAskAboutClothes:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Letztes Jahr hattet Ihr andere Ware dabei, oder?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Tatsächlich haben viele nach den neuen Modetönen aus der Hauptstadt gefragt. Normalerweise benötigen wir für das Färben einige Monate, aber die Nachfrage war so stark, dass wir unser Verfahren kurzerhand umstellen mussten."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.leatherMerchant, '"Die Farben sind dafür schön satt, halten aber leider nicht lange.Das war unseren Kunden aber egal! Nun gut."');
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
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress3_smile, Spiegel_VN.ƒS.positionPercent(45, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos3_laugh, Spiegel_VN.ƒS.positionPercent(10, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Zusammen mit Evarius, Kailani und Mama nimmst du die Abkürzung durch das Feld in Richtung zuhause. Das kleine Häuschen, in dem ihr, seit du denken kannst, lebt, liegt am Rande des Dorfes, dort, wo die Bäume enger zusammenstehen und das Moos schon an den Hauswänden hochkriecht.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Deine wenigen Freunde leben im Zentrum und finden dein Haus abgeschieden; du aber liebst die Stille und die unendlichen Möglichkeiten, die ein großer Wald zum Spielen anbietet.");
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress4_smile, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Da seid ihr ja! Wie war´s auf dem Markt? Habt ihr alles gefunden? Essen ist gleich fertig! Zieht eure Schuhe aus. Ich weiß, ich sage es jeden Tag. Aber ich werde es auch in Zukunft immer sagen, weil ihr sonst alles zermatscht."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du tauschst einen Blick mit deinen Geschwistern und schmunzelst. Mutti ist einfach überall mit ihren Gedanken.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Was habt ihr denn da gekauft? Oh, der ist aber schön!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie zieht den Spiegel aus der Verpackung und bewundert ihn.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_shocked, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Du warst wieder zu schnell! Ich wollte ihn dir eigentlich gerade geben, als Geschenk"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress4_laugh, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Ein Geschenk für mich? Ihr seid ja süß. Der ist auch hübsch. Ich stelle ihn mir gleich ins Bad."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress3_happy, Spiegel_VN.ƒS.positionPercent(40, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das ist nicht nur irgendein Spiegel. Er kann dir deine Wünsche zeigen! Oder so ähnlich hat zumindest der Händler auf dem Markt gesagt."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress4_frown, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_laugh, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Er zeigt dir wohl deine Wünsche! Man sagt einen Spruch auf und wünscht sich etwas, dann kann man es im Spiegel bewundern. Ich dachte, wenn es dir nicht gefällt, hast du trotzdem einen Handspiegel zum Benutzen."');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress4_neutral, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Eure Mama, immer die Pragmatische. Ist eine verrückte Idee, diese Wunsch-Anzeige. Ich kann es kaum erwarten, ihn auszuprobieren."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Aber erstmal essen wir! Evarius, Kailani, bitte deckt schon mal den Tisch. Du kannst die Einkäufe in die Küche bringen. Und geh doch bitte in den Garten, um ein paar Kräuter für das Abendessen zu pflücken."');
        return "02_00 Arrival Home";
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
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Darf ich Ihnen den magischen Spiegel vorführen? Lassen Sie sich verzaubern! Es funktioniert so: Sie halten sich den Spiegel vor das Gesicht und sagen “Spieglein, Spieglein, weise mir mein Träumlein” hinein, und dann dürfen Sie sich etwas wünschen."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Hier, ich zeige es Ihnen: Spieglein, Spieglein, weise mir mein Träumlein! Ich wünschte, ich wäre ein König vor einem wunderschönen Strand!"');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_03_MirrorDemo);
        Spiegel_VN.ƒS.Character.hideAll();
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Schauen Sie, wie brillant die Farben sind! Und das Schloss, eine wahre Pracht. Was meinen Sie, für zwei Goldstücke ist das doch eine unglaubliche Gelegenheit?"');
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_34_neutral, Spiegel_VN.ƒS.positionPercent(70, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Für mich ist so eine Spielerei nichts! Aber vielleicht für Mutti …?"');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_03_IntroMirror);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Die Spiegel eignen sich wunderbar als Geschenk für Ihre Frau! Steht ihr denn eher Gold oder Silber? Ich habe auch Spiegel aus anderen Edelmetallen im Angebot."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Gold ist eher ihre Farbe. Sie ist Künstlerin, wissen Sie; mit diesem Spiegel könnte sie vielleicht ihre Gedanken besser visualisieren, manchmal fehlt ihr das."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.mirrorMerchant, '"Das denke ich doch auch! Als Inspiration dient der Spiegel geradezu vorzüglich! Und für nur zwei Goldstücke machen Sie Ihre Frau glücklich."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Na gut, wir probieren es mal aus! Dann nehmen wir eben diesen hier."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, 'Mama überreicht dem Händler die Goldstücke aus ihrer gefüllten Geldbörse. Der strahlende Händler packt den Spiegel vorsichtig in glitzerndes Papier und steckt ihn Mama in die Tasche. Du hast ein komisches Gefühl dabei, schüttelst es aber ab und denkst, es ist bestimmt nur dein knurrender Magen.');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"So, alles erledigt, ab nach Hause!"');
        Spiegel_VN.ƒS.Character.hideAll();
        return "01_CS Arrival Home";
    }
    Spiegel_VN.Chp01_CS_PerchaseMirror = Chp01_CS_PerchaseMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_00_ArrivalHome() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        // ** RANDOM TEXT ***
        let randomTextChp02FamilyHome = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 4); //gerundet
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
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Du überlegst, wann du hoch in dein Zimmer kannst."');
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Endlich daheim"');
                break;
        }
        let Chp02PickSceneElementAnswers = {
            PickScenePickHerbs: "Kräuter pflücken",
            PickSceneKitchen: "Einkäufe wegbringen",
            PickSceneDiscoverBedroom: "(Erkunden) Mein Schlafzimmer anschauen",
            PickSceneContinue: "Weiter",
        };
        // doesnt work yet
        // if (
        //     !dataForSave.pickedChp02_PickHerbsGarden ||
        //     !dataForSave.pickedChp02_Kitchen
        // ) {
        //     delete Chp02PickSceneElementAnswers.PickSceneContinue;
        //     // return Chp01_CS_ArrivalHome();
        // }
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
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ich geh' kurz die Kräuter holen, Mutti!");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_03 Pick Herbs";
                break;
            case Chp02PickSceneElementAnswers.PickSceneKitchen:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Zuerst schnell die Einkäufe wegbringen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_Kitchen";
                break;
            case Chp02PickSceneElementAnswers.PickSceneDiscoverBedroom:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Mein eigenes Reich.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_E Discover bedroom";
                break;
            case Chp02PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Weiter zur cut scene.");
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
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Hey"' + Spiegel_VN.dataForSave.nameProtagonist + '"da bist du! Setz’ dich hin. Wir warten schon."');
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
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Nur ein bisschen, ihr zwei, in Ordnung?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Evarius);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos3_frown, Spiegel_VN.ƒS.positionPercent(10, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Ach, Mutti …"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das übliche Chaos beim Essen. Evarius gibt den Ton an und Kailani folgt ihm. Mutti lässt sich auch immer so schnell erweichen! Mama schaut dich von der Seite an.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_neutral, Spiegel_VN.ƒS.positionPercent(80, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Alles in Ordnung? Du bist heute noch stiller als sonst?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du musst lächeln.");
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
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Ach, vielleicht war es nichts Ernstes. Henri ärgerte sich über Balduin, weil er wohl dauernd in den Spiegel schaut, den gleichen Spiegel, den wir heute gekauft haben. Das ist doch komisch, nicht?"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_angry, Spiegel_VN.ƒS.positionPercent(80, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Das wäre ja ein arger Zufall. Worüber sollte man sich denn bei dem Spiegel streiten? Vielleicht hast du dich verhört."');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Mama dreht sich um und mahnt Evarius ab, weil er mit den Karotten Fange gespielt hat. Du hast schon fertig gegessen, hast aber immer noch dieses komische Gefühl im Bauch.");
                Spiegel_VN.ƒS.Speech.clear();
                // return "02_021 Test Mirror";
                break;
            case Chp02PickSceneElementAnswersDinner.iSaySilent:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Na gut! Wenn du nicht reden willst. Vielleicht kommen Mutti und ich heute Abend mit einer heißen Schokolade in deinem Zimmer vorbei?"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du weißt, sie will es dir nur recht machen. Du bist eben von dem Trubel heute erschöpft. Trotzdem willst du noch den Spiegel austesten. Stimmt das wirklich, was der Händler gesagt hat?");
                Spiegel_VN.ƒS.Speech.clear();
                // return "02_021 Test Mirror";
                break;
        }
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_smile, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Hat es euch denn geschmeckt?"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Alle stimmen lautstark mit ein. Gegen Muttis vorzügliches Kochen hat keiner aus der Familie etwas einzuwenden.");
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress1_angry, Spiegel_VN.ƒS.positionPercent(45, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Können wir nun endlich den Spiegel testen?"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_laugh, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"Warum macht ihr Kinder das nicht zuerst allein? Ich komme nach dem Abwasch gleich dazu"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mutti);
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Mama);
        let Chp02TestMirrorElementAnswers = {
            iSayTestWithKailani: "Mit Kailani testen.",
            iSayTestWithEvarius: "Mit Evarius ausprobieren.",
        };
        let Chp02TestMirrorElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02TestMirrorElement) {
            case Chp02TestMirrorElementAnswers.iSayTestWithKailani:
                Spiegel_VN.dataForSave.pickedChp02_TestWithKailani;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Komm’, Kailani, testen wir das neue Ding!"');
                return "02_021 Test Mirror Kailani";
            case Chp02TestMirrorElementAnswers.iSayTestWithEvarius:
                Spiegel_VN.dataForSave.pickedChp02_TestWithEvarius = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Komm’, Evarius, testen wir das neue Ding!"');
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
                Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Evarius);
                await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos2_laugh, Spiegel_VN.ƒS.positionPercent(45, 100));
                Spiegel_VN.ƒS.update();
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Auja!"');
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er packt den Spiegel und hebt ihn sich vors Gesicht.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Vorsicht, Evarius! Der ist Muttis und war teuer. Also, wie ging der Spruch nochmal?"');
                Spiegel_VN.ƒS.Speech.clear();
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
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Komm’, Evarius, testen wir das neue Ding!"');
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Kailani);
        Spiegel_VN.ƒS.Character.hide(Spiegel_VN.characters.Evarius);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Evarius, Spiegel_VN.characters.Evarius.pose.pos2_laugh, Spiegel_VN.ƒS.positionPercent(45, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Evarius, '"Auja!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Er packt den Spiegel und hebt ihn sich vors Gesicht.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Vorsicht, Evarius! Der ist Muttis und war teuer. Also, wie ging der Spruch nochmal?"');
        Spiegel_VN.ƒS.Speech.clear();
        break;
        do {
            let Chp02TestMirrorElementAnswersOptions2 = {
                iSayAnswer1: "Spieglein, Spieglein, zeige mir das Träumelein.",
                iSayAnswer2: "Spieglein, Spieglein, weise mir das Wünschlein",
                iSayAnswer3: "Spieglein, Spieglein, weise mir das Träumlein",
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
        if (Spiegel_VN.dataForSave.pickedChp02_TestWithKailani) {
            let Chp02TestMirrorScenesOptions = {
                iSayAnswer1: "Strand.",
                iSayAnswer2: "Bergsee",
                iSayAnswer3: "Palmen",
                iSayAnswer4: "Fliegen",
                iSayAnswer5: "Tauchen",
            };
            let Chp02TestMirrorScenes = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorScenesOptions, "choicesCSSclass");
            switch (Chp02TestMirrorScenes) {
                case Chp02TestMirrorScenesOptions.iSayAnswer1:
                    await Spiegel_VN.ƒS.Location(Spiegel_VN.locations.chp02);
                    await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Das war’s! Probier’ den Spruch mal."');
            }
        }
    }
    Spiegel_VN.Chp02_021_TestMirrorE = Chp02_021_TestMirrorE;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_021_TestMirrorK() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        Spiegel_VN.ƒS.Character.hideAll();
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Komm’, Kailani, testen wir das neue Ding!"');
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress1_happy, Spiegel_VN.ƒS.positionPercent(45, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Auja!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Sie packt den Spiegel und hebt ihn sich vors Gesicht.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, '"Vorsicht, Kailani! Der ist Muttis und war teuer. Also, wie ging der Spruch nochmal?"');
        do {
            let Chp02TestMirrorElementAnswersOptions2 = {
                iSayAnswer1: "Spieglein, Spieglein, zeige mir das Träumelein.",
                iSayAnswer2: "Spieglein, Spieglein, weise mir das Wünschlein",
                iSayAnswer3: "Spieglein, Spieglein, weise mir das Träumlein",
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
        let Chp02TestMirrorScenesOptions = {
            iSayAnswer1: "Strand.",
            iSayAnswer2: "Bergsee",
            iSayAnswer3: "Palmen",
            iSayAnswer4: "Fliegen",
            iSayAnswer5: "Tauchen",
        };
        let Chp02TestMirrorScenes = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorScenesOptions, "choicesCSSclass");
        switch (Chp02TestMirrorScenes) {
            case Chp02TestMirrorScenesOptions.iSayAnswer1:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneFBeach);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Schau mal, wie schön meine Haare glänzen!"');
            case Chp02TestMirrorScenesOptions.iSayAnswer2:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneFWater);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ach, was für ein tolles Kleid."');
            case Chp02TestMirrorScenesOptions.iSayAnswer3:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneFTrees);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Das sind aber tolle Farben, findest du nicht auch?"');
            case Chp02TestMirrorScenesOptions.iSayAnswer4:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneFFly);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Juchu! Ich wollte schon immer mal fliegen."');
            case Chp02TestMirrorScenesOptions.iSayAnswer5:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_TestSceneFCoral);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Kailani, '"Ich war noch nie so weit unter Wasser, wie aufregend!"');
        }
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mama, Spiegel_VN.characters.Mama.pose.dress_angry, Spiegel_VN.ƒS.positionPercent(80, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Kailani, Spiegel_VN.characters.Kailani.pose.outfit2_dress1_shrug, Spiegel_VN.ƒS.positionPercent(45, 100));
        await Spiegel_VN.ƒS.Character.show(Spiegel_VN.characters.Mutti, Spiegel_VN.characters.Mutti.pose.dress5_smirk, Spiegel_VN.ƒS.positionPercent(55, 100));
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mutti, '"‘So, jetzt ab auf eure Zimmer! Versucht bitte, so früh wie möglich schlafen zu gehen. Ich weiß, es graut euch schon davor, aber nächste Woche geht die Schule wieder los."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama, '"Also nicht wieder die ganze Nacht wachbleiben! Evarius, dich meine ich. Gute Nacht"');
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverBedroom);
        Spiegel_VN.ƒS.update();
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
            PickSceneContinue: "Zurück ins Wohnzimmer",
        };
        let Chp02PickSceneElementAnswers = await Spiegel_VN.ƒS.Menu.getInput(Chp02PickSceneElementAnswersKitchen, "choicesCSSclass");
        switch (Chp02PickSceneElementAnswers) {
            case Chp02PickSceneElementAnswersKitchen.PickScenePantry:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchenPantry);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die trockenen Lebensmittel kannst du alle in die Speisekammer einräumen. Hier ist es immer ziemlich voll, weil Mutti gerne viele Lebensmittel auf Vorrat bunkert. Für alle Notfälle, sagt sie. Welche Notfälle denn? Seit du ein kleines Kind bist, gab es immer reichlich zu essen. Erst recht, seit Mama dauernd mit ihrem Hufeisengeschäft unterwegs ist.");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_Kitchen";
                break;
            case Chp02PickSceneElementAnswersKitchen.PickSceneOven:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchenOven);
                await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das Holz muss nachgelegt werden. Dieses Jahr müsst ihr besonders viel Holz sammeln und hacken, weil der Winter ziemlich kalt werden soll. Das sagen zumindest die Bauern, weil die Vögel so früh zwitschern.");
                Spiegel_VN.ƒS.Speech.clear();
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
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Drinnen wird es gerade laut, wie immer um die Essenszeit. Deshalb schlüpfst du schnell in den Garten, um etwas allein zu sein. Auf dem Markt ist es meistens ziemlich hektisch, weshalb du dich danach gerne ein bisschen zurückziehst.");
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du kramst in deiner Hosentasche und findest ein paar übrig gebliebene Sonnenblumenkerne vom Hühnerfüttern gestern. Streust du sie über den Boden oder behältst du sie in der Tasche?");
        let Chp02ElementAnswersPickHerbs = {
            iSaySprinkle: "Streuen",
            iSayKeep: "Behalten",
        };
        let Chp02Element = await Spiegel_VN.ƒS.Menu.getInput(Chp02ElementAnswersPickHerbs, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02Element) {
            case Chp02ElementAnswersPickHerbs.iSaySprinkle:
                Spiegel_VN.dataForSave.pickedSeeds = true;
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du streust sie über den Boden und freust dich schon auf den kleinen Sonnenblumenwald, der bald entsteht.");
                Spiegel_VN.ƒS.Speech.clear();
                // return "02_03 Pick Herbs";
                break;
            case Chp02ElementAnswersPickHerbs.iSayKeep:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Du steckst die Samen wieder in die Tasche. Wer weiß, ob du sie noch für etwas gebrauchen kannst.");
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Die Kräuter sehen für die Jahreszeit schon gut aus. Du bückst dich, um ein paar Basilikumblätter abzuzupfen und zwischen den Fingern zu verreiben, als du eine Tür knallen hörst.");
                Spiegel_VN.ƒS.Speech.clear();
                // return "02_03 Pick Herbs";
                break;
        }
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_04_FightNeighborNeighbors);
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge);
        await Spiegel_VN.ƒS.Speech.tell("Nachbar", '"Henri! Henri, bleib’ doch hier!"');
        await Spiegel_VN.ƒS.Speech.tell("Nachbarin", '"Mir reichts, Balduin! Den ganzen Tag starrst du schon auf das Ding!"');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Ach, die Nachbarn streiten schon wieder. Es vergeht kaum ein Tag, an dem du sie nicht herumschreien hörst.");
        await Spiegel_VN.ƒS.Speech.tell("Nachbar", '"Es tut mir ja leid, ich wollte dich nicht verärgern! Aber Henri, der Spiegel ist doch so schön."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Der Spiegel? Redet Balduin etwa von dem magischen Spiegel, den es heute auf dem Markt zu kaufen gab? Henri wirbelt verärgert herum.");
        await Spiegel_VN.ƒS.Speech.tell("Nachbarin", '"Ja, der ist schön. Das ist doch das Problem. Seit heute Morgen sitzt du davor und tust nichts anderes, als den schönen Spiegel anzustarren."');
        await Spiegel_VN.ƒS.Speech.tell("Nachbarin", '"Was ist mit dem Holz? Der Karren sollte repariert werden? Und das Essen gekocht? Das waren heute alles deine Aufgaben! Stattdessen versauerst du vor dem Glitzer-Teil."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Mutti steckt verärgert den Kopf aus dem Küchenfenster, schickt einen wütenden Blick in Richtung Nachbarn und haut das Fenster demonstrativ zu.");
        await Spiegel_VN.ƒS.Speech.tell("Nachbar", '"Henri, ich weiß, tut mir leid! Hör mir doch zu. Ich tu ihn schon weg! Bitte, komm herein. Die Nachbarn schauen doch schon."');
        await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Nanu, was war denn da los? Balduin kann sich von dem Spiegel nicht losreißen? Er ist doch sonst ein fleißiger Mann. Komisch. Sah er auch anders aus als sonst? Vielleicht frage ich Mutti, ob er vielleicht krank ist. Sie wartet bestimmt schon lange auf die Kräuter, ups.");
        let Chp02PickHerbsAnswersContinue = {
            iSayContinue: "Zurück ins Wohnzimmer",
        };
        let Chp02PickHerbsContinue = await Spiegel_VN.ƒS.Menu.getInput(Chp02PickHerbsAnswersContinue, "choicesCSSclass");
        switch (Chp02PickHerbsContinue) {
            case Chp02PickHerbsAnswersContinue.iSayContinue:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.maincharacter, "Das war ja mal wieder interessant!");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_00 Arrival Home";
                break;
        }
    }
    Spiegel_VN.Chp02_03_PickHerbs = Chp02_03_PickHerbs;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverBedroom() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverBedroom); //unsere locations, die szenen. nach dem Punkt sind die Methoden! also tell und show ist eine Methode. Die klammer dahinter ist eine Methodenaufruf, also eine Variable. Der Hingergrund sollte da angezeigt werden
        // await ƒS.update(2, "./Assets/Transitions/Black.png", 1);
        // await ƒS.update(
        //   transitions.fade.duration,
        //   transitions.fade.alpha,
        //   transitions.fade.edge //edge ist der Härtegrad
        // );
        await Spiegel_VN.ƒS.Speech.tell("Ich", "My eigenes Reich. Wenigstens hier habe ich ein bisschen Privatsphäre...");
        let Chp02DiscoverBedroomElementAnswers = {
            iSayDiscoverDesk: "(Erkunden) Was liegt da auf dem Tisch?",
            iSayDiscoverBooks: "(Erkunden) Bücher anschauen",
            iSayLeave: "Zurück",
        };
        let Chp02DiscoverBedroomElementElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02DiscoverBedroomElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02DiscoverBedroomElementElement) {
            case Chp02DiscoverBedroomElementAnswers.iSayDiscoverDesk:
                // pickediSayAskAboutTrip = true;
                // dataForSave.pickedChoice = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Yay schauen wir uns den Tisch an, was gibts hier so.");
                Spiegel_VN.ƒS.Speech.clear();
                // return "01_E_FlowerMerchant";
                break;
            case Chp02DiscoverBedroomElementAnswers.iSayDiscoverBooks:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Bücher anschauen juchu");
                Spiegel_VN.ƒS.Speech.clear();
                break;
        }
    }
    Spiegel_VN.Chp02_E_DiscoverBedroom = Chp02_E_DiscoverBedroom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_E_DiscoverKitchen() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchen);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich mache mir in der Küche was zu futtern.");
        let Chp02DiscoverKitchenElementAnswers = {
            PickSceneDiscoverOven: "(Erkunden) Ofen anschauen",
            PickSceneDiscoverPantry: "(Erkunden) In die Speisekammer",
            PickSceneLeave: "Zurück",
        };
        let Chp02DiscoverKitchenElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02DiscoverKitchenElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02DiscoverKitchenElement) {
            case Chp02DiscoverKitchenElementAnswers.PickSceneDiscoverOven:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchenOven);
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Yay schauen wir uns den Ofen an, was gibts hier so.");
                Spiegel_VN.ƒS.Speech.clear();
                // return "01_E_FlowerMerchant";
                break;
            case Chp02DiscoverKitchenElementAnswers.PickSceneDiscoverPantry:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchenPantry);
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Speisekammer anschauen juchu");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp02DiscoverKitchenElementAnswers.PickSceneLeave:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wieder raus");
                Spiegel_VN.ƒS.Speech.clear();
                return "01_CS Arrival Home";
                break;
        }
    }
    Spiegel_VN.Chp02_E_DiscoverKitchen = Chp02_E_DiscoverKitchen;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_CS_NewDay() {
        await Spiegel_VN.ƒS.update(Spiegel_VN.transitions.fade.duration, Spiegel_VN.transitions.fade.alpha, Spiegel_VN.transitions.fade.edge //edge ist der Härtegrad
        );
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Guten Morgen!");
        // ** RANDOM TEXT ***
        let randomTextChp03NewDay = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp03NewDay) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp03PickSceneElementAnswers = {
            PickSceneDressmaker: "Jacke abholen",
            PickSceneChoresWithKailani: "Mit Kailani Hausarbeit machen",
            PickSceneDiscoverDonkey: "(Erkunden) Glücksesel streicheln",
            PickSceneDiscoverForest: "(Erkunden) Im Wald rumgucken",
            PickSceneDiscoverLibrary: "(Erkunden) Die Bücherei erkunden",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp03_Dressmaker || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp03_ChoresWithKailani) {
            delete Chp03PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp03PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp03PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp03PickSceneElement) {
            case Chp03PickSceneElementAnswers.PickSceneDressmaker:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Auf zur Schneiderin!");
                // dataForSave.score.scoreEmpathyPoints += 10;
                console.log(Spiegel_VN.dataForSave.scoreEmpathyPoints);
                Spiegel_VN.ƒS.Speech.clear();
                return "03_01 Dressmaker"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp03PickSceneElementAnswers.PickSceneChoresWithKailani:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Gehen wir Holz hacken");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "03_021 Chores with Kailani";
                break;
            case Chp03PickSceneElementAnswers.PickSceneDiscoverDonkey:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Süß, ein Esel!.");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_E Discover donkey";
                break;
            case Chp03PickSceneElementAnswers.PickSceneDiscoverForest:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Gehen wir den Wald anschauen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_E Discover Forest";
                break;
            case Chp03PickSceneElementAnswers.PickSceneDiscoverLibrary:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich liebe Bücher <3.");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_E Discover Library";
                break;
            case Chp03PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Weiter zur cut scene turmoil marketplace.");
                Spiegel_VN.ƒS.Speech.clear();
                return "03_CS Turmoil marketplace";
                break;
        }
    }
    Spiegel_VN.Chp02_CS_NewDay = Chp02_CS_NewDay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp02_CS_Sleep() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_CS_Sleep);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Muss jetzt schlafen gehen.");
        return "02_CS New day";
    }
    Spiegel_VN.Chp02_CS_Sleep = Chp02_CS_Sleep;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_01_Dressmaker() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_01_Dressmaker);
        Spiegel_VN.dataForSave.pickedChp03_Dressmaker = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Kann jetzt meine Jacke von der Schneiderin abholen, cool.");
        return "02_CS New day";
    }
    Spiegel_VN.Chp03_01_Dressmaker = Chp03_01_Dressmaker;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_021_ChoresWithKailani() {
        Spiegel_VN.dataForSave.pickedChp03_ChoresWithKailani = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Kailani und ich gehen Hausarbeiten machen.");
        let Chp02ChoresKailaniElementAnswers = {
            PickSceneWaterwell: "Wasser holen gehen.",
            PickSceneWoodChopping: "Holz hacken.",
        };
        let Chp02ChoresKailaniElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02ChoresKailaniElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02ChoresKailaniElement) {
            case Chp02ChoresKailaniElementAnswers.PickSceneWaterwell:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_022_WaterwellKailani);
                Spiegel_VN.dataForSave.pickedChp03_WaterwellKailani = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay wir gehen Wasser holen!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp02ChoresKailaniElementAnswers.PickSceneWoodChopping:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_021_FirewoodKailani);
                Spiegel_VN.dataForSave.pickedChp03_WoodChoppingKailani = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Kailani und ich gehen Holz hacken!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            // dataForSave.pickedChp02_TestWithElena = true;
            // console.log("boolean picked Test with Elena:");
            // console.log(dataForSave.pickedChp02_TestWithElena);
            // await ƒS.Speech.tell("Ich", "Teste den Spiegel mit Mutti.");
            // return "01_CS Arrival Home";
        }
        if (Spiegel_VN.dataForSave.pickedChp03_WaterwellKailani) {
            let Chp02ChoresKailaniWaterElementAnswers = {
                iSayTest1: "Test 1 Wasser holen.",
                iSayTest2: "Test 2 Wasser holen.",
            };
            let Chp02ChoresKailaniWaterElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02ChoresKailaniWaterElementAnswers, "choicesCSSclass");
            // *** RESPONSES ***
            switch (Chp02ChoresKailaniWaterElement) {
                case Chp02ChoresKailaniWaterElementAnswers.iSayTest1:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 1 Wasser holen");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02ChoresKailaniWaterElementAnswers.iSayTest2:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 2 Wasser holen");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        }
        if (Spiegel_VN.dataForSave.pickedChp03_WoodChoppingKailani) {
            let Chp02TestMirrorKailaniElementAnswers = {
                iSayTest1: "Test 1 Holz hacken.",
                iSayTest2: "Test 2 Holz hacken.",
            };
            let Chp02TestMirrorKailaniElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02TestMirrorKailaniElementAnswers, "choicesCSSclass");
            // *** RESPONSES ***
            switch (Chp02TestMirrorKailaniElement) {
                case Chp02TestMirrorKailaniElementAnswers.iSayTest1:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 1 Holz hacken");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
                case Chp02TestMirrorKailaniElementAnswers.iSayTest2:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Test 2 Holz hacken");
                    Spiegel_VN.ƒS.Speech.clear();
                    break;
            }
        }
    }
    Spiegel_VN.Chp03_021_ChoresWithKailani = Chp03_021_ChoresWithKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverDonkey() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverDonkey);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier steht ein Esel? Warum das");
        let Chp02DiscoverDonkeyElementAnswers = {
            PickSceneCloseup: "(Erkunden) Nase streicheln",
            PickSceneReadInscription: "(Erkunden) Inschrift lesen",
            PickSceneLeave: "Zurück",
        };
        let Chp02DiscoverDonkeyElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02DiscoverDonkeyElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02DiscoverDonkeyElement) {
            case Chp02DiscoverDonkeyElementAnswers.PickSceneCloseup:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverDonkeyCloseup);
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Nase streicheln vom Esel");
                Spiegel_VN.ƒS.Speech.clear();
                // return "01_E_FlowerMerchant";
                break;
            case Chp02DiscoverDonkeyElementAnswers.PickSceneReadInscription:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverDonkeyCloseup);
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Inschrift lesen" // novel page
                );
                Spiegel_VN.ƒS.Speech.clear();
                // return "01_E_FlowerMerchant";
                break;
            case Chp02DiscoverDonkeyElementAnswers.PickSceneLeave:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zurück");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_CS New day";
                break;
        }
    }
    Spiegel_VN.Chp03_E_DiscoverDonkey = Chp03_E_DiscoverDonkey;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverForest() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Was es hier wohl gibt, im Wald?");
        return "02_CS New day";
    }
    Spiegel_VN.Chp03_E_DiscoverForest = Chp03_E_DiscoverForest;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_E_DiscoverLibrary() {
        // await ƒS.Location.show(locations.Chp03_E_DiscoverLibraryOutside);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Juchuu Bücher.");
        // await ƒS.Location.show(locations.Chp03_E_DiscoverLibraryInside);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Du schnupperst und riechst die alten Bücher.");
        let Chp02DiscoverLibraryElementAnswers = {
            PickSceneCloseup: "(Erkunden) Alte Bücher anschauen",
            PickSceneLeave: "Zurück",
        };
        let Chp02DiscoverLibraryElement = await Spiegel_VN.ƒS.Menu.getInput(Chp02DiscoverLibraryElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp02DiscoverLibraryElement) {
            case Chp02DiscoverLibraryElementAnswers.PickSceneCloseup:
                await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverLibraryCloseup);
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Bücher sind ja uralt!");
                Spiegel_VN.ƒS.Speech.clear();
                break;
            case Chp02DiscoverLibraryElementAnswers.PickSceneLeave:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zurück ins Haus");
                Spiegel_VN.ƒS.Speech.clear();
                return "02_CS New day";
                break;
        }
    }
    Spiegel_VN.Chp03_E_DiscoverLibrary = Chp03_E_DiscoverLibrary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_CS_KailaniMissing() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_CS_KailaniMissing);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Kailani ist weg!");
        // ** RANDOM TEXT ***
        let randomTextChp04KailaniMissing = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp04KailaniMissing) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp04PickSceneElementAnswers = {
            PickSceneTalkToFamily: "Zuerst muss ich mit meiner Familie reden",
            PickSceneTalkToElena: "Vielleicht sollte ich Mutti fragen ...",
            PickSceneResearchLibrary: "Zur Bücherei",
            PickSceneDiscoverGarden: "(Erkunden) Im Garten nach Kailani suchen",
            PickSceneDiscoverMirror: "(Erkunden) Den Spiegel genauer anschauen",
            PickSceneDiscoverGroundFloor: "(Erkunden) Das Erdgeschoss absuchen",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp04TalkToFamily || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp04TalkToElena ||
            !Spiegel_VN.dataForSave.pickedChp04ResearchLibrary) {
            delete Chp04PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp04PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp04PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp04PickSceneElement) {
            case Chp04PickSceneElementAnswers.PickSceneTalkToFamily:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir treffen uns im Esszimmer zum reden");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "04_01 Talk with family";
                break;
            case Chp04PickSceneElementAnswers.PickSceneTalkToElena:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich muss zuerst mit Mutti reden");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "04_02 Talk with Elena";
                break;
            case Chp04PickSceneElementAnswers.PickSceneResearchLibrary:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "In der Bücherei finde ich bestimmt Infos.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_03 Research library";
                break;
            case Chp04PickSceneElementAnswers.PickSceneDiscoverMirror:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Diesen Spiegel muss ich mir genauer anschauen ...");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_E_Examine mirror";
                break;
            case Chp04PickSceneElementAnswers.PickSceneDiscoverGroundFloor:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich suche erstmal das Erdgeschoss ab.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_E Search ground floor";
                break;
            case Chp04PickSceneElementAnswers.PickSceneDiscoverGarden:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich suche mal den Garten ab.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_E Search garden";
                break;
            case Chp04PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich gehe jetzt in den Wald cut scene.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_CS Entry forest";
                break;
        }
    }
    Spiegel_VN.Chp03_CS_KailaniMissing = Chp03_CS_KailaniMissing;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp03_CS_TurmoilMarketplace() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_022_WaterwellKailani);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Auf dem Marktplatz ist ja was los ...");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp03_CS_TurmoilMarketplace = Chp03_CS_TurmoilMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_01_TalkWithFamily() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_02_LivingRoom);
        Spiegel_VN.dataForSave.pickedChp04TalkToFamily = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir reden und reden und reden ... Kailani ist trotzdem einfach weg!");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_01_TalkWithFamily = Chp04_01_TalkWithFamily;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_02_TalkWithElena() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp02_E_DiscoverKitchen);
        Spiegel_VN.dataForSave.pickedChp04TalkToElena = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Mutti, kann ich mit dir reden?");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_02_TalkWithElena = Chp04_02_TalkWithElena;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_03_ResearchLibrary() {
        Spiegel_VN.dataForSave.pickedChp04ResearchLibrary = true;
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_E_DiscoverLibraryInside);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "In der Bücherei finde ich bestimmt was.");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_03_ResearchLibrary = Chp04_03_ResearchLibrary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_E_ExamineMirror() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp03_CS_KailaniMissing);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Der Spiegel glitzert so komisch ...");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_E_ExamineMirror = Chp04_E_ExamineMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_E_SearchGarden() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Vielleicht ist sie im Garten?");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_E_SearchGarden = Chp04_E_SearchGarden;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_E_SearchGroundFloor() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Vielleicht ist sie im Erdgeschoss?");
        return "03_CS Kailani is missing";
    }
    Spiegel_VN.Chp04_E_SearchGroundFloor = Chp04_E_SearchGroundFloor;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp04_CS_EntryForest() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: ab in den Wald");
        // ** RANDOM TEXT ***
        let randomTextChp05EntryForest = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp05EntryForest) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp05PickSceneElementAnswers = {
            PickSceneGoToClearing: "Hier geht's zur Lichtung",
            PickSceneDiscoverOak: "(Erkunden) Schau mal diese alte Eiche an",
            PickSceneDiscoverRiver: "(Erkunden) Ein kleines Bächlein gibts auch",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp05GoToClearing || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp05GiveBirdsFood ||
            !Spiegel_VN.dataForSave.pickedChp05SingToBirds) {
            delete Chp05PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp05PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp05PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp05PickSceneElement) {
            case Chp05PickSceneElementAnswers.PickSceneGoToClearing:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zur Lichtung gehen");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "05_01 Clearing"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp05PickSceneElementAnswers.PickSceneDiscoverOak:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "(Erkunden) Eiche anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "05_E Discover oak";
                break;
            case Chp05PickSceneElementAnswers.PickSceneDiscoverRiver:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Bächlein anschauen.");
                Spiegel_VN.ƒS.Speech.clear();
                return "05_E Discover river";
                break;
            case Chp05PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Weiter zur cut scene: go home.");
                Spiegel_VN.ƒS.Speech.clear();
                return "05_CS Go home";
                break;
        }
    }
    Spiegel_VN.Chp04_CS_EntryForest = Chp04_CS_EntryForest;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_01_Clearing() {
        Spiegel_VN.dataForSave.pickedChp05GoToClearing = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Diese Lichtung ist irgendwie magisch");
        let Chp05ClearingPickSceneElementAnswers = {
            PickSceneSingToBirds: "Zu Vögeln singen",
            PickSceneGiveBirdsFood: "Zu fressen geben",
            // iSayDiscoverOak: "(Erkunden) Eiche anschauen",
            // iSayDiscoverRiver: "(Erkunden) Bächlein anschauen",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp05GoToClearing || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp05GiveBirdsFood ||
            !Spiegel_VN.dataForSave.pickedChp05SingToBirds) {
            delete Chp05ClearingPickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp05ClearingPickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp05ClearingPickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp05ClearingPickSceneElement) {
            case Chp05ClearingPickSceneElementAnswers.PickSceneSingToBirds:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich singe mal zu den Vögeln");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "05_02 Sing to birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp05ClearingPickSceneElementAnswers.PickSceneGiveBirdsFood:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich gebe den Vögeln mal zu fressen");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "05_03 Feed birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            // case Chp05ClearingPickSceneElementAnswers.iSayDiscoverOak:
            //   // continue path here
            //   // if (dataForSave.score.scoreCouragePoints === 50)
            //   // wie mindestens 50?
            //   await ƒS.Speech.tell("Ich", "(Erkunden) Eiche anschauen");
            //   ƒS.Speech.clear();
            //   // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
            //   // ƒS.Character.hide(characters.Mama);
            //   return "05_E Discover oak";
            //   break;
            // case Chp05ClearingPickSceneElementAnswers.iSayDiscoverRiver:
            //   // continue path here
            //   await ƒS.Speech.tell("Ich", "Bächlein anschauen.");
            //   ƒS.Speech.clear();
            //   return "05_E Discover river";
            //   break;
            case Chp05ClearingPickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Nochmal zurück zur Ursprungsszene entry forest.");
                Spiegel_VN.ƒS.Speech.clear();
                return "04_CS Entry forest";
                break;
        }
    }
    Spiegel_VN.Chp05_01_Clearing = Chp05_01_Clearing;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_02_SingToBirds() {
        Spiegel_VN.dataForSave.pickedChp05SingToBirds = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier singe ich zu den Vögeln");
        return "05_01 Clearing";
    }
    Spiegel_VN.Chp05_02_SingToBirds = Chp05_02_SingToBirds;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_03_FeedBirds() {
        Spiegel_VN.dataForSave.pickedChp05GiveBirdsFood = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier füttere ich die Vögel");
        return "05_01 Clearing";
    }
    Spiegel_VN.Chp05_03_FeedBirds = Chp05_03_FeedBirds;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_E_DiscoverOak() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die alte Eiche entdecken");
        return "04_CS Entry forest";
    }
    Spiegel_VN.Chp05_E_DiscoverOak = Chp05_E_DiscoverOak;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_E_DiscoverRiver() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Das kleine Bächlein entdecken");
        return "04_CS Entry forest";
    }
    Spiegel_VN.Chp05_E_DiscoverRiver = Chp05_E_DiscoverRiver;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp05_CS_GoHome() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: es wird dunkel, ab nach Hause");
        // ** RANDOM TEXT ***
        let randomTextChp06GoHome = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp06GoHome) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp06PickSceneElementAnswers = {
            PickSceneTalkToMama: "Mama, was gibt's denn?",
            PickSceneDepartureRiver: "Ich muss los ...",
        };
        let Chp06PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp06PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp06PickSceneElement) {
            case Chp06PickSceneElementAnswers.PickSceneTalkToMama:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Hast du etwas für mich?");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "06_02 Recieve iron"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp06PickSceneElementAnswers.PickSceneDepartureRiver:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Meine Reise beginnt");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "06_03 Departure";
                break;
        }
    }
    Spiegel_VN.Chp05_CS_GoHome = Chp05_CS_GoHome;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_02_ReceiveItemMama() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier bekomme ich was von Mama");
        let Chp06RecieveIronElementAnswers = {
            iSayYes: "Ja",
            iSayNo: "Nein",
        };
        let Chp06RecieveIronElement = await Spiegel_VN.ƒS.Menu.getInput(Chp06RecieveIronElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp06RecieveIronElement) {
            case Chp06RecieveIronElementAnswers.iSayYes:
                Spiegel_VN.dataForSave.pickedIron = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich nehme den Talisman an");
                Spiegel_VN.ƒS.Speech.clear();
                return "06_03 Departure"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp06RecieveIronElementAnswers.iSayNo:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich nehme den Talisman nicht an");
                Spiegel_VN.ƒS.Speech.clear();
                return "06_03 Departure"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp06_02_ReceiveItemMama = Chp06_02_ReceiveItemMama;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_03_DepartureRiver() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt reise ich in die Spiegelwelt");
        return "06_CS Arrival Meadow";
    }
    Spiegel_VN.Chp06_03_DepartureRiver = Chp06_03_DepartureRiver;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp06_CS_ArrivalMeadow() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: wir sind auf der Wiese angekommen");
        // ** RANDOM TEXT ***
        let randomTextChp07ArrivalMeadow = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp07ArrivalMeadow) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp07PickSceneElementAnswers = {
            PickSceneTravelToWhary: "Richtung Stadt gehen",
            PickSceneDiscoverBees: "(Erkunden) Bienen anschauen",
            PickSceneDiscoverFlowers: "(Erkunden) Blumen anschauen",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp07TravelToWhary // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        ) {
            delete Chp07PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp07PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp07PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp07PickSceneElement) {
            case Chp07PickSceneElementAnswers.PickSceneTravelToWhary:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lez go to da citayyy");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "07_01 Travel to to Whary"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp07PickSceneElementAnswers.PickSceneDiscoverBees:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Bienen sind so hübsch!");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "07_E Discover bees";
                break;
            case Chp07PickSceneElementAnswers.PickSceneDiscoverFlowers:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Blumen sind so farbig ...");
                Spiegel_VN.ƒS.Speech.clear();
                return "07_E Discover flowers";
                break;
            case Chp07PickSceneElementAnswers.PickSceneContinue:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Weiter zur cut scene: Line at city gates.");
                Spiegel_VN.ƒS.Speech.clear();
                return "07_CS Line at gates";
                break;
        }
    }
    Spiegel_VN.Chp06_CS_ArrivalMeadow = Chp06_CS_ArrivalMeadow;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_02_TravelToWhary() {
        Spiegel_VN.dataForSave.pickedChp07TravelToWhary = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Es geht los, es geht los, es geht los nach Wharyyy");
        return "06_CS Arrival Meadow";
    }
    Spiegel_VN.Chp07_02_TravelToWhary = Chp07_02_TravelToWhary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_E_DiscoverBees() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Diese Biene ist echt komisch. So fett. Und grellgelb.");
        return "06_CS Arrival Meadow";
    }
    Spiegel_VN.Chp07_E_DiscoverBees = Chp07_E_DiscoverBees;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_E_DiscoverFlowers() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Oops, die Blume geht ja sofort kaputt.");
        return "06_CS Arrival Meadow";
    }
    Spiegel_VN.Chp07_E_DiscoverFlowers = Chp07_E_DiscoverFlowers;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp07_CS_LineAtGates() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: wir stehen an vor den Stadttoren und entdecken Flynn");
        // ** RANDOM TEXT ***
        let randomTextChp08LineAtGates = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp08LineAtGates) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp08PickSceneElementAnswers = {
            PickSceneCatchFlynnGates: "Flynn gleich ansprechen",
            PickSceneEnterCity: "Eintritt Stadt",
        };
        // if (
        //   !dataForSave.pickedChp07TravelToWhary // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        // ) {
        //   delete Chp08PickSceneElementAnswers.iSayContinue;
        //   // return Chp01_CS_ArrivalHome();
        // }
        let Chp08PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp08PickSceneElement) {
            case Chp08PickSceneElementAnswers.PickSceneCatchFlynnGates:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay, wir sprechen Flynn gleich an");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "08_01 Meet Flynn gates"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp08PickSceneElementAnswers.PickSceneEnterCity:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zuerst will ich in diese blöde Stadt");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "08_03 Enter City";
                break;
        }
    }
    Spiegel_VN.Chp07_CS_LineAtGates = Chp07_CS_LineAtGates;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_01_MeetFlynnAtGates() {
        Spiegel_VN.dataForSave.pickedChp08CatchFlynnAtGates = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hey Flynn wir sprechen dich jetzt vor den Toren an.");
        let Chp08ChooseStayElementAnswers = {
            PickSceneGoWithFlynn: "Mit Flynn Bleibe suchen",
            PickSceneGoWithoutFlynn: "Ohne Flynn was suchen",
        };
        //  if (
        //   !dataForSave.pickedChp07TravelToWhary // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        // ) {
        //   delete Chp08ChooseStayElementAnswers.iSayContinue;
        //   // return Chp01_CS_ArrivalHome();
        // }
        let Chp08ChooseStayElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08ChooseStayElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp08ChooseStayElement) {
            case Chp08ChooseStayElementAnswers.PickSceneGoWithFlynn:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Super, suchen wir uns zusammen eine Bleibe");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "08_01 Meet Flynn gates"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp08ChooseStayElementAnswers.PickSceneGoWithoutFlynn:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Nee, ich möchte lieber alleine bleiben");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "08_04 Choose stay"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp08_01_MeetFlynnAtGates = Chp08_01_MeetFlynnAtGates;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_02_MeetFlynnInAlley() {
        Spiegel_VN.dataForSave.pickedChp08CatchFlynnInAlley = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hi Flynn in der Gasse wir sind jetzt Freunde");
        return "08_03 Enter City";
    }
    Spiegel_VN.Chp08_02_MeetFlynnInAlley = Chp08_02_MeetFlynnInAlley;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_03_EnterCity() {
        Spiegel_VN.dataForSave.pickedChp08EnterCity = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir gehen in die Stadt juchu hoffentlich gibts Drachen");
        let randomTextChp08EnterCity = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp08EnterCity) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp08_1PickSceneElementAnswers = {
            PickSceneCatchFlynnInAlley: "Flynn in Gasse ansprechen",
            PickSceneDiscoverHay: "(Erkunden) Heuballen anschauen)",
            PickSceneDiscoverWindow: "(Erkunden) Schaufenster anschauen)",
            PickSceneDiscoverSpeakToVillagers: "(Erkunden) Passanten ansprechen",
            PickSceneChooseStay: "Bleibe suchen",
        };
        if (!Spiegel_VN.dataForSave.pickedChp08CatchFlynnInAlley
        // !dataForSave.// ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        ) {
            delete Chp08_1PickSceneElementAnswers.PickSceneChooseStay;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp08_1PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08_1PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp08_1PickSceneElement) {
            case Chp08_1PickSceneElementAnswers.PickSceneCatchFlynnInAlley:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay, wir sprechen Flynn in der Gasse an");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "08_02 Meet Flynn in alley"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp08_1PickSceneElementAnswers.PickSceneDiscoverHay:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Oke wir schauen jetzt Heu an");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "08_E Discover Hay";
                break;
            case Chp08_1PickSceneElementAnswers.PickSceneDiscoverWindow:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lass das Schaufenster angucken brudi");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "08_E Discover windows";
                break;
            case Chp08_1PickSceneElementAnswers.PickSceneDiscoverSpeakToVillagers:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will mit diesen Leuten sprechen");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "08_E Discover Villagers";
                break;
            case Chp08_1PickSceneElementAnswers.PickSceneChooseStay:
                // continue path here
                // if (dataForSave.score.scoreCouragePoints === 50)
                // wie mindestens 50?
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir suchen jetzt einen Schlafplatz");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "08_04 Choose stay";
                break;
        }
    }
    Spiegel_VN.Chp08_03_EnterCity = Chp08_03_EnterCity;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_0411_NiceStayFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt habe ich mich für das schöne Gasthaus mit Flynn entschieden");
        return "08_CS Talk To Flynn";
    }
    Spiegel_VN.Chp08_0411_NiceStayFlynn = Chp08_0411_NiceStayFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_041_ChooseNiceStay() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt habe ich mich für das angeblich hübsche Gasthaus entschieden");
        return "08_CS Sleep";
    }
    Spiegel_VN.Chp08_041_ChooseNiceStay = Chp08_041_ChooseNiceStay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_0421_UglyStayFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt habe ich mich für das hässliche Gasthaus mit FLynn entschieden");
        return "08_CS Talk To Flynn";
    }
    Spiegel_VN.Chp08_0421_UglyStayFlynn = Chp08_0421_UglyStayFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_042_ChooseUglyStay() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt habe ich mich für das hässliche Gasthaus alleine entschieden");
        return "08_CS Sleep";
    }
    Spiegel_VN.Chp08_042_ChooseUglyStay = Chp08_042_ChooseUglyStay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_04_ChooseStay() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Auf gehts zur Suche nach der Bleibe");
        let Chp08ChooseWhichStayElementAnswers = {
            PickSceneChooseUglyStay: "Mit Flynn Bleibe suchen",
            PickSceneContinueSearch: "Ohne Flynn was suchen",
            PickSceneChooseNiceStay: "Hübsche Bleibe auswählen",
        };
        if (!Spiegel_VN.dataForSave.pickedChp08ChooseContinueSearch // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        ) {
            delete Chp08ChooseWhichStayElementAnswers.PickSceneChooseNiceStay;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp08ChooseWhichStayElement = await Spiegel_VN.ƒS.Menu.getInput(Chp08ChooseWhichStayElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp08ChooseWhichStayElement) {
            case Chp08ChooseWhichStayElementAnswers.PickSceneChooseUglyStay:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich nehme gleich das hässliche Gasthaus, ist bestimmt billig");
                Spiegel_VN.ƒS.Speech.clear();
                if ((Spiegel_VN.dataForSave.pickedChp08GoWithFlynn = true)) {
                    return "08_0421 Ugly stay with Flynn";
                }
                else if ((Spiegel_VN.dataForSave.pickedChp08GoWithoutFlynn = true)) {
                    return "08_042 Choose ugly stay";
                }
                // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp08ChooseWhichStayElementAnswers.PickSceneContinueSearch:
                Spiegel_VN.dataForSave.pickedChp08ChooseContinueSearch = true;
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich möchte noch weitersuchen");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "08_04 Choose stay";
                break;
            case Chp08ChooseWhichStayElementAnswers.PickSceneChooseNiceStay:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Nehmen wir das hässliche Gasthaus");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                if ((Spiegel_VN.dataForSave.pickedChp08GoWithFlynn = true)) {
                    return "08_0411 Nice stay with Flynn";
                }
                else if ((Spiegel_VN.dataForSave.pickedChp08GoWithoutFlynn = true)) {
                    return "08_041 Choose nice stay";
                }
                break;
        }
    }
    Spiegel_VN.Chp08_04_ChooseStay = Chp08_04_ChooseStay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_E_DiscoverHay() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier entdecke ich einen Heuballen super cool");
        return "08_03 Enter City";
    }
    Spiegel_VN.Chp08_E_DiscoverHay = Chp08_E_DiscoverHay;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_E_DiscoverVillagers() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier versuche ich, mit ein paar Bewohnern zu reden");
        return "08_03 Enter City";
    }
    Spiegel_VN.Chp08_E_DiscoverVillagers = Chp08_E_DiscoverVillagers;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_E_DiscoverWindows() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier entdecke ich ein Schaufenster super cool");
        return "08_03 Enter City";
    }
    Spiegel_VN.Chp08_E_DiscoverWindows = Chp08_E_DiscoverWindows;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_CS_TalkToFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich lerne Flynn genauer kennen yayy");
        return "08_CS Sleep & new day";
    }
    Spiegel_VN.Chp08_CS_TalkToFlynn = Chp08_CS_TalkToFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp08_CS_Sleep() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: aufwachen und nach Kailani suchen");
        // ** RANDOM TEXT ***
        let randomTextChp09NewDay = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp09NewDay) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp09PickSceneElementAnswers = {
            PickSceneResearchMarketplace: "Auf Marktplatz informieren",
            PickSceneSpeakToInnkeeper: "Mit der Inhaberin sprechen",
            PickSceneSpeakToCook: "Mit Koch sprechen",
            PickSceneSpeakToStablehand: "Mit Stallmädchen sprechen",
            PickSceneContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChp09ResearchMarketplace || // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
            !Spiegel_VN.dataForSave.pickedChp09TalkToCook ||
            !Spiegel_VN.dataForSave.pickedChp09TalkToInnkeeper ||
            !Spiegel_VN.dataForSave.pickedChp09TalkToStablehand) {
            delete Chp09PickSceneElementAnswers.PickSceneContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp09PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp09PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp09PickSceneElement) {
            case Chp09PickSceneElementAnswers.PickSceneResearchMarketplace:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zum Markplatz dann");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "09_01 Research Marketplace"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp09PickSceneElementAnswers.PickSceneSpeakToCook:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ab in die Küche");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "09_03 TalkToCook";
                break;
            case Chp09PickSceneElementAnswers.PickSceneSpeakToInnkeeper:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wo ist die Inhaberin?");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "09_02 TalkToInnkeeper";
                break;
            case Chp09PickSceneElementAnswers.PickSceneSpeakToStablehand:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will zu den Pferden");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "09_04 Talk to stablehand";
                break;
        }
    }
    Spiegel_VN.Chp08_CS_Sleep = Chp08_CS_Sleep;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_011_Beggar() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier kommt die Bettlerin");
        let Chp09BeggarSceneElementAnswers = {
            PickSceneSpeakToBeggar: "Mit Bettlerin sprechen",
            PickSceneIgnoreBeggar: "Bettlerin ignorieren",
        };
        let Chp09BeggarSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp09BeggarSceneElementAnswers, "choicesCSSclass");
        switch (Chp09BeggarSceneElement) {
            case Chp09BeggarSceneElementAnswers.PickSceneSpeakToBeggar:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay, erzähl mir was du weißt, Bettlerin");
                Spiegel_VN.ƒS.Speech.clear();
                return "08_CS Sleep & new day";
                break;
            case Chp09BeggarSceneElementAnswers.PickSceneIgnoreBeggar:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Neee ich will nicht mit dir reden Bettlerin");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "09_012 Make a wish";
                break;
        }
    }
    Spiegel_VN.Chp09_011_Beggar = Chp09_011_Beggar;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_012_MakeAWish() {
        Spiegel_VN.dataForSave.pickedChp09MakeAWish = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich brauch den Kobold!");
        return "08_CS Sleep & new day";
    }
    Spiegel_VN.Chp09_012_MakeAWish = Chp09_012_MakeAWish;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_01_ResearchMarketplace() {
        Spiegel_VN.dataForSave.pickedChp09ResearchMarketplace = true;
        console.log("Boolean of research marketplace");
        console.log(Spiegel_VN.dataForSave.pickedChp09ResearchMarketplace);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Soo auf dem Markplatz ist ganz schön viel los");
        let Chp09DiscoverMarketplaceElementAnswers = {
            PickSceneDiscoverListenToVillagers: "(Erkunden) Bewohnern zuhören",
            PickSceneMerchants: "Mit den Händlern sprechen",
            PickSceneSpeakToVillagers: "Mit Bewohnern sprechen",
        };
        if (Spiegel_VN.dataForSave.pickedChp09DiscoverMerchants &&
            Spiegel_VN.dataForSave.pickedChp09DiscoverSpeakToVillagers) {
            return "09_011 Beggar";
        }
        let Chp09DiscoverMarketplaceElement = await Spiegel_VN.ƒS.Menu.getInput(Chp09DiscoverMarketplaceElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp09DiscoverMarketplaceElement) {
            case Chp09DiscoverMarketplaceElementAnswers.PickSceneDiscoverListenToVillagers:
                Spiegel_VN.dataForSave.pickedChp09DiscoverListenToVillagers = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich mische mich unter die Leute");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "09_E Listen to villagers"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp09DiscoverMarketplaceElementAnswers.PickSceneMerchants:
                Spiegel_VN.dataForSave.pickedChp09DiscoverMerchants = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich spreche mit den Händlern");
                Spiegel_VN.ƒS.Speech.clear();
                return "09_13 Talk to merchants"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp09DiscoverMarketplaceElementAnswers.PickSceneSpeakToVillagers:
                Spiegel_VN.dataForSave.pickedChp09DiscoverSpeakToVillagers = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich spreche mit den Leuten");
                Spiegel_VN.ƒS.Speech.clear();
                return "09_14 Speak to villagers"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp09_01_ResearchMarketplace = Chp09_01_ResearchMarketplace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_02_TalkToInnkeeper() {
        Spiegel_VN.dataForSave.pickedChp09TalkToInnkeeper = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich rede mit der Inhaberin");
        return "08_CS Sleep & new day";
    }
    Spiegel_VN.Chp09_02_TalkToInnkeeper = Chp09_02_TalkToInnkeeper;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_03_TalkToCook() {
        Spiegel_VN.dataForSave.pickedChp09TalkToCook = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich rede mit dem Koch");
        return "08_CS Sleep & new day";
    }
    Spiegel_VN.Chp09_03_TalkToCook = Chp09_03_TalkToCook;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_04_TalkToStablehand() {
        Spiegel_VN.dataForSave.pickedChp09TalkToStablehand = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich rede mit dem Stallmädchen");
        return "08_CS Sleep & new day";
    }
    Spiegel_VN.Chp09_04_TalkToStablehand = Chp09_04_TalkToStablehand;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_E_ListenToVillagers() {
        Spiegel_VN.dataForSave.pickedChp09DiscoverListenToVillagers = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich höre mir mal an, was die Bewohner so sagen");
        return "09_01 Research Marketplace";
    }
    Spiegel_VN.Chp09_E_ListenToVillagers = Chp09_E_ListenToVillagers;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_E_TalkToMerchants() {
        Spiegel_VN.dataForSave.pickedChp09DiscoverMerchants = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich höre mir mal an, was die Händler so sagen");
        return "09_01 Research Marketplace";
    }
    Spiegel_VN.Chp09_E_TalkToMerchants = Chp09_E_TalkToMerchants;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_E_SpeakToVillagers() {
        Spiegel_VN.dataForSave.pickedChp09DiscoverSpeakToVillagers = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will mit den Bewohnern reden");
        return "09_01 Research Marketplace";
    }
    Spiegel_VN.Chp09_E_SpeakToVillagers = Chp09_E_SpeakToVillagers;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp09_CS_ArrivalLake() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: wir sind am See angekommen");
        // ** RANDOM TEXT ***
        let Chp10ArrivalLakeElementAnswers = {
            PickSceneDiscoverLake: "(Erkunden) Seeufer anschauen",
            PickSceneBuildARaft: "Floß bauen",
        };
        let Chp10ArrivalLakeElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10ArrivalLakeElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp10ArrivalLakeElement) {
            case Chp10ArrivalLakeElementAnswers.PickSceneDiscoverLake:
                Spiegel_VN.dataForSave.pickedChp09DiscoverListenToVillagers = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay lass das Seeufer genauer anschauen");
                // dataForSave.score.scoreEmpathyPoints += 10;
                Spiegel_VN.ƒS.Speech.clear();
                return "10_E Discover lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10ArrivalLakeElementAnswers.PickSceneBuildARaft:
                Spiegel_VN.dataForSave.pickedChp09DiscoverMerchants = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Naja wir brauchen ein Floß!");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_01 Build a raft"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp09_CS_ArrivalLake = Chp09_CS_ArrivalLake;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_01_HowToCross() {
        let randomTextChp10HowToCross = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp10HowToCross) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp10HowToCrossElementAnswers = {
            iSayStealABoat: "Boot klauen",
            iSayBuildARaft: "Floß bauen",
            iSaySwim: "Schwimmen",
            iSayTurnAround: "Umdrehen",
        };
        do {
            let Chp10HowToCrossElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10HowToCrossElementAnswers, "choicesCSSclass");
            switch (Chp10HowToCrossElement) {
                case Chp10HowToCrossElementAnswers.iSayStealABoat:
                    // continue path here
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Boot klauen? Eher nicht");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "10_01 How to cross"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                    break;
                case Chp10HowToCrossElementAnswers.iSayBuildARaft:
                    Spiegel_VN.dataForSave.pickedRightChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Ein Floß bauen klingt doch gut!");
                    Spiegel_VN.dataForSave.pickedRightChoice = true;
                    Spiegel_VN.ƒS.Speech.clear();
                    return "10_02 On the raft";
                    break;
                case Chp10HowToCrossElementAnswers.iSaySwim:
                    // continue path here
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Schwimmen ist glaub bisschen viel");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "10_01 How to cross";
                    break;
                case Chp10HowToCrossElementAnswers.iSayTurnAround:
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Umdrehen ist eigentlich keine Option ... Was ist mit Kailani?");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "10_01 How to cross";
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedRightChoice);
        if (Spiegel_VN.dataForSave.pickedRightChoice) {
            return "10_02 On the raft";
        }
    }
    Spiegel_VN.Chp10_01_HowToCross = Chp10_01_HowToCross;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_02_OnTheRaft() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Juchu Floß bauen. Flynn, was denkst du denn, warum die Leute hier so auf ihr Äußeres fixiert sind?");
        let randomTextChp10BuildARaft = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp10BuildARaft) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp10BuildARaftElementAnswers = {
            iSayExploreTheyAreAfraid: "(Erkunden) Vielleicht haben sie Angst?",
            iSayExploreAttention: "(Erkunden) Sie brauchen die Aufmerksamkeit",
            iSayExploreSick: "(Erkunden) Die Leute sind einfach krank",
            iSayExploreAll: "(Erkunden) Wenn alle so sind ...",
            iSayContinue: "Weiter",
        };
        if (!Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAfraid || // Hier vielleicht counter einbauen? wenn 2 optionen geklickt wurden, erscheint weiter-button
            !Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAttention ||
            !Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAll) {
            delete Chp10BuildARaftElementAnswers.iSayContinue;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp10BuildARaftElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10BuildARaftElementAnswers, "choicesCSSclass");
        switch (Chp10BuildARaftElement) {
            case Chp10BuildARaftElementAnswers.iSayExploreTheyAreAfraid:
                Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAfraid = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Angst vor Verurteilung");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_01 Build a raft"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10BuildARaftElementAnswers.iSayExploreAttention:
                Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAttention = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Mit der Aufmerksamkeit fühlen sie sich vielleicht besser");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_01 Build a raft";
                break;
            case Chp10BuildARaftElementAnswers.iSayExploreSick:
                Spiegel_VN.dataForSave.pickedChoiceChp10ExploreSick = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Sie sind einfach verrückt! Was soll diese Oberflächlichkeit");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_01 Build a raft";
                break;
            case Chp10BuildARaftElementAnswers.iSayExploreAll:
                Spiegel_VN.dataForSave.pickedChoiceChp10ExploreAll = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Na gut, wenn es alle machen?");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_01 Build a raft";
                break;
            case Chp10BuildARaftElementAnswers.iSayContinue:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Es geht weiter");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_03 Cross lake";
                break;
        }
    }
    Spiegel_VN.Chp10_02_OnTheRaft = Chp10_02_OnTheRaft;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_03_CrossLake() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir überqueren den See");
        let Chp10CrossingLakeElementAnswers = {
            PickSceneDiscoverCitylights: "Die Stadtlichter ...",
            PickSceneDiscoverLakewater: "Wasser anschauen",
            PickSceneLookAhead: "Nach vorne schauen",
        };
        let Chp10CrossingLakeElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10CrossingLakeElementAnswers, "choicesCSSclass");
        switch (Chp10CrossingLakeElement) {
            case Chp10CrossingLakeElementAnswers.PickSceneDiscoverCitylights:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Von hier sieht es gar nicht so schlimm aus");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_03 Cross lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10CrossingLakeElementAnswers.PickSceneDiscoverLakewater:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lass mal das Wasser anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_03 Cross lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10CrossingLakeElementAnswers.PickSceneLookAhead:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Du wendest den Kopf nach vorne und schaust in die Dunkelheit");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_04 Attack birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp10_03_CrossLake = Chp10_03_CrossLake;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_041_SingToBirds() {
        Spiegel_VN.dataForSave.pickedChp10SingToBirds = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "La la la... ich singe zu den Vögeln");
        return "10_051 Birds become friendly";
    }
    Spiegel_VN.Chp10_041_SingToBirds = Chp10_041_SingToBirds;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_042_UseMirror() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich benutze den Spiegel als Schutzschild");
        return "10_052 Birds disappear";
    }
    Spiegel_VN.Chp10_042_UseMirror = Chp10_042_UseMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_04_AttackBirds() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hilfe Vögel attackieren uns!");
        let Chp10AttackBirdsElementAnswers = {
            PickSceneSingToBirds: "Zu Vögeln singen",
            PickSceneHitWithOar: "(Erkunden) Wegschlagen",
            PickSceneUseMirror: "Spiegel als Schutzschild benutzen",
        };
        let Chp10AttackBirdsElement = await Spiegel_VN.ƒS.Menu.getInput(Chp10AttackBirdsElementAnswers, "choicesCSSclass");
        switch (Chp10AttackBirdsElement) {
            case Chp10AttackBirdsElementAnswers.PickSceneSingToBirds:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich versuchs mal mit singen");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_041 Sing to birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10AttackBirdsElementAnswers.PickSceneHitWithOar:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Kann ich sie wegschlagen?");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_04 Attack birds"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp10AttackBirdsElementAnswers.PickSceneUseMirror:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Kann ich den Spiegel benutzen?");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_042 Use Mirror"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp10_04_AttackBirds = Chp10_04_AttackBirds;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_051_FriendlyBirds() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Vögel werden freundlich");
        return "10_CS Arrival other side";
    }
    Spiegel_VN.Chp10_051_FriendlyBirds = Chp10_051_FriendlyBirds;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_052_BirdsDisappear() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Vögel verschwinden");
        return "10_CS Arrival other side";
    }
    Spiegel_VN.Chp10_052_BirdsDisappear = Chp10_052_BirdsDisappear;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_E_CityLightsWhary() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Stadtlichter sehen schön aus");
        return "10_03 Cross lake";
    }
    Spiegel_VN.Chp10_E_CityLightsWhary = Chp10_E_CityLightsWhary;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_E_DiscoverLake() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Der See ist echt gruselig");
        return "09_CS Arrival lake";
    }
    Spiegel_VN.Chp10_E_DiscoverLake = Chp10_E_DiscoverLake;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_E_DiscoverLakewater() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Das Wasser ist echt dunkel und gruselig");
        return "10_03 Cross lake";
    }
    Spiegel_VN.Chp10_E_DiscoverLakewater = Chp10_E_DiscoverLakewater;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp10_CS_ArrivalOtherSide() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: wir sind auf der anderen Seite des Sees angekommen");
        // ** RANDOM TEXT ***
        let randomTextChp11ArrivalOtherSide = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp11ArrivalOtherSide) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp11ArrivalOtherSideElementAnswers = {
            PickSceneDiscoverTower: "(Erkunden) Turm anschauen",
            PickSceneDiscoverHuts: "(Erkunden) Hütten anschauen",
            PickSceneDiscoverForest: "(Erkunden) Wald anschauen",
            PickSceneSearchForHidingPlace: "Nach Versteck suchen",
        };
        let Chp11ArrivalOtherSideElement = await Spiegel_VN.ƒS.Menu.getInput(Chp11ArrivalOtherSideElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp11ArrivalOtherSideElement) {
            case Chp11ArrivalOtherSideElementAnswers.PickSceneDiscoverForest:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay lass den Wald genauer anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_E Discover forest"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11ArrivalOtherSideElementAnswers.PickSceneDiscoverHuts:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Hütten anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_E Discover huts"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11ArrivalOtherSideElementAnswers.PickSceneDiscoverTower:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Turm anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_E Discover tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11ArrivalOtherSideElementAnswers.PickSceneSearchForHidingPlace:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Erstmal nach einem Schlafplatz suchen");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_01 Search for hiding place"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp10_CS_ArrivalOtherSide = Chp10_CS_ArrivalOtherSide;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_01_SearchHidingPlace() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Suchen wir mal nach einem Versteck");
        let Chp11HidingPlacePickSceneElementAnswers = {
            PickSceneDiscoverIron: "Wald erkunden",
            PickSceneSearchSleepingPlace: "Nach Schlafplatz suchen",
        };
        if (!Spiegel_VN.dataForSave.pickedIron // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und
        ) {
            delete Chp11HidingPlacePickSceneElementAnswers.PickSceneDiscoverIron;
            // return Chp01_CS_ArrivalHome();
        }
        let Chp11HidingPlacePickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp11HidingPlacePickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp11HidingPlacePickSceneElement) {
            case Chp11HidingPlacePickSceneElementAnswers.PickSceneDiscoverIron:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Da hinten glitzert was im Wald ...");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_02 Find iron"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11HidingPlacePickSceneElementAnswers.PickSceneSearchSleepingPlace:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wo können wir uns niederlassen?");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_03 Watch factory"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp11_01_SearchHidingPlace = Chp11_01_SearchHidingPlace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_02_FindIron() {
        Spiegel_VN.dataForSave.pickedIron = true;
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier finde ich ein Stück Eisen");
        return "11_01 Search for hiding place";
    }
    Spiegel_VN.Chp11_02_FindIron = Chp11_02_FindIron;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_03_WatchFactory() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Von hier aus kann man die Fabrik gut beobachten");
        let Chp11WatchFactoryPickSceneElementAnswers = {
            PickSceneTryBreakIn: "Gleich einbrechen",
            PickSceneSleep: "Zuerst schlafen gehen",
        };
        let Chp11WatchFactoryPickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp11WatchFactoryPickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp11WatchFactoryPickSceneElement) {
            case Chp11WatchFactoryPickSceneElementAnswers.PickSceneTryBreakIn:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lass gleich versuchen, einzubrechen!");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_04 Try break-in"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11WatchFactoryPickSceneElementAnswers.PickSceneSleep:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will zuerst schlafen");
                Spiegel_VN.ƒS.Speech.clear();
                return "11_CS Sleep"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp11_03_WatchFactory = Chp11_03_WatchFactory;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_04_TryBreakIn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir versuchen einzubrechen, aber es klappt nicht, zu viele Wachen!");
        return "11_03 Watch factory";
    }
    Spiegel_VN.Chp11_04_TryBreakIn = Chp11_04_TryBreakIn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_E_DiscoverForest() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Den Wald erkunden");
        return "10_CS Arrival other side";
    }
    Spiegel_VN.Chp11_E_DiscoverForest = Chp11_E_DiscoverForest;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_E_DiscoverHuts() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier erkundige ich die Hütten");
        return "10_CS Arrival other side";
    }
    Spiegel_VN.Chp11_E_DiscoverHuts = Chp11_E_DiscoverHuts;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_E_DiscoverTower() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will mir den Turm genauer anschauen");
        return "10_CS Arrival other side";
    }
    Spiegel_VN.Chp11_E_DiscoverTower = Chp11_E_DiscoverTower;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp11_CS_Sleep() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wieder schlafen yay");
        let Chp11HowSneakInElementAnswers = {
            PickSceneSneakInBack: "Hinten rein schleichen",
            PickSceneSneakAmongSlaves: "Vorne mit Sklaven reinschleichen",
        };
        let Chp11HowSneakInElement = await Spiegel_VN.ƒS.Menu.getInput(Chp11HowSneakInElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp11HowSneakInElement) {
            case Chp11HowSneakInElementAnswers.PickSceneSneakInBack:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lass hinten rein");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_011 Sneak-in"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp11HowSneakInElementAnswers.PickSceneSneakAmongSlaves:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir mischen uns unter die Sklaven");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_012 Sneak-in amongst slaves"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp11_CS_Sleep = Chp11_CS_Sleep;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_011_SneakIn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir versuchen jetzt von hinten einzubrechen");
        return "12_02 Enter factory";
    }
    Spiegel_VN.Chp12_011_SneakIn = Chp12_011_SneakIn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_012_SneakAmongSlaves() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir versuchen uns zwischen den Sklaven einzuschleichen");
        return "12_02 Enter factory";
    }
    Spiegel_VN.Chp12_012_SneakAmongSlaves = Chp12_012_SneakAmongSlaves;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_02_EnterFactory() {
        // ** RANDOM TEXT ***
        let randomTextChp12EnterFactory = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp12EnterFactory) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp12FactoryPickSceneElementAnswers = {
            PickSceneDiscoverTalkToSlaves: "(Erkunden) Mit Sklaven reden",
            PickSceneDiscoverSearchKailani: "(Erkunden) Kailani suchen",
            PickSceneDiscoverListenToGuards: "(Erkunden) Wachen überhören",
            PickSceneDiscoverProductionSite: "Spiegelräume anschauen",
            PickSceneBack: "Zurück zum Versteck",
        };
        let Chp12FactoryPickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp12FactoryPickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp12FactoryPickSceneElement) {
            case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverTalkToSlaves:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich rede mal mit den Leuten hier");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_031 Talk to slaves"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverSearchKailani:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Kailani suchen!");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_032 Search for Kailani"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverListenToGuards:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will die Wachen überhören");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_033 Listen to guards"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp12FactoryPickSceneElementAnswers.PickSceneDiscoverProductionSite:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Spiegelräume genauer anschauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_E Discover production site"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp12FactoryPickSceneElementAnswers.PickSceneBack:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Zurück zum Versteck");
                Spiegel_VN.ƒS.Speech.clear();
                return "12_04 Back to hiding place"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp12_02_EnterFactory = Chp12_02_EnterFactory;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_031_TalkToSlaves() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Was ist denn mit diesen Leuten?");
        return "12_02 Enter factory";
    }
    Spiegel_VN.Chp12_031_TalkToSlaves = Chp12_031_TalkToSlaves;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_032_SearchForKailani() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Kailani muss doch irgendwo sein!");
        return "12_02 Enter factory";
    }
    Spiegel_VN.Chp12_032_SearchForKailani = Chp12_032_SearchForKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_033_ListenToGuards() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Wachen schwätzen doch bestimmt viel");
        return "12_02 Enter factory";
    }
    Spiegel_VN.Chp12_033_ListenToGuards = Chp12_033_ListenToGuards;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_051_BirdsOfferHelp() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier bieten mir die Vögel ihre Hilfe an, weil ich vorher zu ihnen gesungen habe");
        return "12_CS Talk to Flynn";
    }
    Spiegel_VN.Chp12_051_BirdsOfferHelp = Chp12_051_BirdsOfferHelp;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_052_MakeAWish() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich muss einen meiner drei Wünsche verwenden, wo ist der Kobold?");
        return "12_CS Talk to Flynn";
    }
    Spiegel_VN.Chp12_052_MakeAWish = Chp12_052_MakeAWish;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_04_BackToHidingPlace() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Gehen wir zurück zum Versteck");
        if (Spiegel_VN.dataForSave.pickedChp10SingToBirds) {
            return "12_051 Birds offer help";
        }
        else {
            return "12_052 Make a wish";
        }
    }
    Spiegel_VN.Chp12_04_BackToHidingPlace = Chp12_04_BackToHidingPlace;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_E_DiscoverVillage() { }
    Spiegel_VN.Chp12_E_DiscoverVillage = Chp12_E_DiscoverVillage;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_E_Productionsite() { }
    Spiegel_VN.Chp12_E_Productionsite = Chp12_E_Productionsite;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp12_CS_TalkToFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier bespreche ich mit Flynn alles, was passiert ist und wie wir vorgehen");
        return "13_01 Entry village";
    }
    Spiegel_VN.Chp12_CS_TalkToFlynn = Chp12_CS_TalkToFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_01_EntryVillage() {
        let randomTextChp13VillageFactory = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp13VillageFactory) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp13VillagePickSceneElementAnswers = {
            PickSceneDiscoverWatchGuard: "(Erkunden) Wachen beobachten",
            PickSceneDiscoverSneakAround: "(Erkunden) Herumschleichen",
            PickSceneGoToTower: "Auf zum Turm",
        };
        let Chp13VillagePickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp13VillagePickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp13VillagePickSceneElement) {
            case Chp13VillagePickSceneElementAnswers.PickSceneDiscoverWatchGuard:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will die Wachen beobachten");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_E Discover watch guard"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp13VillagePickSceneElementAnswers.PickSceneDiscoverSneakAround:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Lass bisschen rumschleichen");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_E Sneak around tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp13VillagePickSceneElementAnswers.PickSceneGoToTower:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir müssen zum Turm!");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_02 Get into tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp13_01_EntryVillage = Chp13_01_EntryVillage;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_02_GetIntoTower() {
        // ***BEGINN SZENE***
        let randomTextChp13GetIntoTower = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp13GetIntoTower) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Default--------------------");
                break;
        }
        // *** SCENE OPTIONS ***
        let Chp13GetIntoTowerElementAnswers = {
            iSayCharmGuards: "Wächter mit Charm überzeugen.",
            iSayPersuadeGuards: "Wächter überzeugen.",
            iSayConfrontGuards: "Wächter überlisten",
        };
        // if (
        //   !dataForSave.score.scoreEmpathyPoints 50){ // ! heißt not: es wird nach entgegengesetztem Zustand gefragt // || = oder; && = und) {
        //   delete Chp13GetIntoTowerElementAnswers.iSayCharmGuards;
        //   // return Chp01_CS_ArrivalHome();
        // }
        do {
            let Chp13GetIntoTowerElement = await Spiegel_VN.ƒS.Menu.getInput(Chp13GetIntoTowerElementAnswers, "choicesCSSclass");
            switch (Chp13GetIntoTowerElement) {
                case Chp13GetIntoTowerElementAnswers.iSayCharmGuards: // hier Punktezahl nicht vergessen!
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Wie kann ich die Wachen charmant überzeugen?");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "13_02 Get into tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                    break;
                case Chp13GetIntoTowerElementAnswers.iSayPersuadeGuards: // hier Punktezahl nicht vergessen!
                    Spiegel_VN.dataForSave.pickedRightChoice = true;
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich will die Wachen überreden!");
                    Spiegel_VN.ƒS.Speech.clear();
                    // return "13_03 Entry tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                    break;
                case Chp13GetIntoTowerElementAnswers.iSayConfrontGuards: // hier Punktezahl nicht vergessen!
                    await Spiegel_VN.ƒS.Speech.tell("Ich", "Die Wachen konfrontieren");
                    Spiegel_VN.ƒS.Speech.clear();
                    return "13_02 Get into tower"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                    break;
            }
        } while (!Spiegel_VN.dataForSave.pickedRightChoice);
        if (Spiegel_VN.dataForSave.pickedRightChoice) {
            return "13_03 Entry tower";
        }
    }
    Spiegel_VN.Chp13_02_GetIntoTower = Chp13_02_GetIntoTower;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_03_EntryTower() {
        let randomTextChp13GetIntoTower = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp13GetIntoTower) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell(Spiegel_VN.characters.Mama.name, "Default--------------------");
                break;
        }
        let Chp13EntryTowerElementAnswers = {
            PickSceneDiscoverLockedDoor: "(Erkunden) Geschlossene Tür.",
            PickSceneDiscoverFamilyPortrait: "(Erkunden) Portrait anschauen.",
            PickSceneDiscoverTowerWindow: "(Erkunden) Aus Turmfenster schauen",
            PickSceneSneakPastDemon: "An Dämon vorbeischleichen",
        };
        let Chp13EntryTowerTowerElement = await Spiegel_VN.ƒS.Menu.getInput(Chp13EntryTowerElementAnswers, "choicesCSSclass");
        switch (Chp13EntryTowerTowerElement) {
            case Chp13EntryTowerElementAnswers.PickSceneDiscoverLockedDoor: // hier Punktezahl nicht vergessen!
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Was ist das für eine Tür?");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_E Discover locked door"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp13EntryTowerElementAnswers.PickSceneDiscoverFamilyPortrait:
                Spiegel_VN.dataForSave.pickedRightChoice = true;
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Das sieht ja gruselig aus ...");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_E Discover family portrait"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp13EntryTowerElementAnswers.PickSceneDiscoverTowerWindow: // hier Punktezahl nicht vergessen!
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier kann ich aus dem Fenster schauen");
                Spiegel_VN.ƒS.Speech.clear();
                return "13_E Discover tower window"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp13EntryTowerElementAnswers.PickSceneSneakPastDemon: // hier Punktezahl nicht vergessen!
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt müssen wir uns am Dämon vorbeischleichen");
                Spiegel_VN.ƒS.Speech.clear();
                return "10_04 Sneak past demon"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp13_03_EntryTower = Chp13_03_EntryTower;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_04_SneakPastDemon() {
        // !Idee 1: Mit Reimen bzw Gesang Dämon ablenken (je nach Gesichtsausdruck von ihm kann Spielerin abschätzen, ob sie wirken oder nicht)
        // Idee 2: geradeaus/zurück/rechts/links navigieren, dämon ändert random seine position und spielerin muss dementsprechend reagieren. vll nen counter einbauen, nachdem er abgelaufen is, reset und von vorne?
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir schleichen uns am Dämon vorbei!");
        // *** MINIGAME ***
        if (!Spiegel_VN.dataForSave.pickedIron) {
            return "14.2_01 Realization mirror";
        }
        else {
            return "14.1_01 Destroy mirror";
        }
    }
    Spiegel_VN.Chp13_04_SneakPastDemon = Chp13_04_SneakPastDemon;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_E_DiscoverFamilyPortrait() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wer ist wohl hier abgebildet?");
        return "13_03 Entry tower";
    }
    Spiegel_VN.Chp13_E_DiscoverFamilyPortrait = Chp13_E_DiscoverFamilyPortrait;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_E_DiscoverLockedDoor() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich frage mich, was hinter dieser Tür ist ...");
        return "13_03 Entry tower";
    }
    Spiegel_VN.Chp13_E_DiscoverLockedDoor = Chp13_E_DiscoverLockedDoor;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_E_DiscoverSneakAround() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich schleiche herum, ich schleiche ums Dorf, yay");
        return "13_01 Entry village";
    }
    Spiegel_VN.Chp13_E_DiscoverSneakAround = Chp13_E_DiscoverSneakAround;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_E_DiscoverTowerWindow() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Alles so grell und farbig (Sicht aus Fenster)");
        return "13_03 Entry tower";
    }
    Spiegel_VN.Chp13_E_DiscoverTowerWindow = Chp13_E_DiscoverTowerWindow;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_E_DiscoverWatchGuard() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich muss die Wachen beobachten");
        return "13_01 Entry village";
    }
    Spiegel_VN.Chp13_E_DiscoverWatchGuard = Chp13_E_DiscoverWatchGuard;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp13_CS_EntryMirrorRoom() {
        // hier counter einbauen: beim 3. Mal klicken gehts weiter
        console.log("Boolean picked Iron");
        console.log(Spiegel_VN.dataForSave.pickedIron);
        if (!Spiegel_VN.dataForSave.pickedIron) {
            return "14.2_01 Realization mirror";
        }
    }
    Spiegel_VN.Chp13_CS_EntryMirrorRoom = Chp13_CS_EntryMirrorRoom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp141_01_DestroyMirror() {
        // hier counter einbauen: beim dritten mal klicken gehts weiter
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir müssen die Spiegel zerstören! Hinweis: schau in dein Inventar (Eisen holen)");
        await Spiegel_VN.ƒS.Sound.play; // vielleicht einfach 3x?
        return "14.1_02 Demon dies";
    }
    Spiegel_VN.Chp141_01_DestroyMirror = Chp141_01_DestroyMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp141_02_DemonDies() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir habens geschafft, die Spiegel sind kaputt, der Dämon stirbt");
        return "14.1_CS Balcony tower";
    }
    Spiegel_VN.Chp141_02_DemonDies = Chp141_02_DemonDies;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp14_CS_BalconyTower() {
        let randomTextChp14GoodEndingBalcony = Spiegel_VN.ƒ.Random.default.getRangeFloored(1, 5); //gerundet
        switch (randomTextChp14GoodEndingBalcony) {
            case 1:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 1 -----------");
                break;
            case 2:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 2 -----------");
                break;
            case 3:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 3 -----------");
                break;
            case 4:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 4 -----------");
                break;
            case 5:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Random dialogue 5 -----------");
                break;
            default:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Default--------------------");
                break;
        }
        let Chp14_1PickSceneElementAnswers = {
            PickSceneDiscoverDemonRoom: "(Erkunden) Dämonzimmer anschauen",
            PickSceneDiscoverMirrorRoom: "(Erkunden) Spiegelzimmer anschauen",
            PickSceneFindKailani: "Raus und Kailani finden",
        };
        let Chp14_1PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp14_1PickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp14_1PickSceneElement) {
            case Chp14_1PickSceneElementAnswers.PickSceneDiscoverDemonRoom:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Wie siehts hier im Dämonzimmer so aus?");
                Spiegel_VN.ƒS.Speech.clear();
                return "15_E Discover demon room"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp14_1PickSceneElementAnswers.PickSceneDiscoverMirrorRoom:
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Spiegelzimmer anschauen wowww");
                Spiegel_VN.ƒS.Speech.clear();
                // await ƒS.Character.show(characters.Mama, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
                // ƒS.Character.hide(characters.Mama);
                return "15_E Discover mirror room";
                break;
            case Chp14_1PickSceneElementAnswers.PickSceneFindKailani:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Komm wir suchen Kailani!!");
                Spiegel_VN.ƒS.Speech.clear();
                return "15_01 Reunion Kailani";
                break;
        }
    }
    Spiegel_VN.Chp14_CS_BalconyTower = Chp14_CS_BalconyTower;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp142_01_RealizationMirror() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Shit, wir haben kein Eisen dabei, jetzt ist es vorbei");
        return "14.2_02 Caught by demon";
    }
    Spiegel_VN.Chp142_01_RealizationMirror = Chp142_01_RealizationMirror;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp142_02_CaughtByDemon() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay wir werden vom Dämon gefasst, ciao");
        return "14.2_03 Transformation into slaves";
    }
    Spiegel_VN.Chp142_02_CaughtByDemon = Chp142_02_CaughtByDemon;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp142_03_TransformationSlaves() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Jetzt werden wir selber in Sklaven verwandelt, shit");
        return "14.2_End Empty Scene";
    }
    Spiegel_VN.Chp142_03_TransformationSlaves = Chp142_03_TransformationSlaves;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp142_End_EmptyScene() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "SCHLECHT GELAUFEN, ENDE");
    }
    Spiegel_VN.Chp142_End_EmptyScene = Chp142_End_EmptyScene;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp15_01_ReunionKailani() {
        // hier muss dialog und char rein: weil kailani hier auf dem Platz vor dem Turm ist. also, frohes wiedersehen, dann kommen 2 optionen
        let Chp15ReunionKailaniPickSceneElementAnswers = {
            PickSceneSpeakFreedVillagers: "(Erkunden) Mit befreiten Leuten sprechen",
            PickSceneGoToLake: "Zurück zum See",
        };
        let Chp15ReunionKailaniPickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp15ReunionKailaniPickSceneElementAnswers, "choicesCSSclass");
        // *** RESPONSES ***
        switch (Chp15ReunionKailaniPickSceneElement) {
            case Chp15ReunionKailaniPickSceneElementAnswers.PickSceneSpeakFreedVillagers:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Hey Leute, erzählt mal von euren Erfahrungen");
                Spiegel_VN.ƒS.Speech.clear();
                return "15_E Talk to freed villagers"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp15ReunionKailaniPickSceneElementAnswers.PickSceneGoToLake:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "Okay, wir wollen endlich heim");
                Spiegel_VN.ƒS.Speech.clear();
                return "15_CS Go to lake"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp15_01_ReunionKailani = Chp15_01_ReunionKailani;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp15_E_DiscoverDemonRoom() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir entdecken das Dämonzimmer juchu");
        return "14.1_CS Balcony tower";
    }
    Spiegel_VN.Chp15_E_DiscoverDemonRoom = Chp15_E_DiscoverDemonRoom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp15_E_DiscoverMirrorRoom() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Wir entdecken das Spiegelzimmer juchu");
        return "14.1_CS Balcony tower";
    }
    Spiegel_VN.Chp15_E_DiscoverMirrorRoom = Chp15_E_DiscoverMirrorRoom;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp15_E_TalkToFreedVillagers() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Ich spreche mit den befreiten Sklaven und Bewohnern");
        return "15_01 Reunion Kailani";
    }
    Spiegel_VN.Chp15_E_TalkToFreedVillagers = Chp15_E_TalkToFreedVillagers;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp15_CS_GoToLake() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Cut scene: Ankunft am Seeufer zum Zurückreisen");
        return "16_01 Confrontation Flynn";
    }
    Spiegel_VN.Chp15_CS_GoToLake = Chp15_CS_GoToLake;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_01_ConfrontationFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier gibts Stress mit Flynn, weil wir rausfinden, dass er nen Splitter eingesteckt hat und nen Spion war");
        return "16_02 Make a wish";
    }
    Spiegel_VN.Chp16_01_ConfrontationFlynn = Chp16_01_ConfrontationFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_021_GoHomeAlone() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Juche nach Hause wir reisen mit dem Koboldwunsch");
        return "16_CS Reunion family";
    }
    Spiegel_VN.Chp16_021_GoHomeAlone = Chp16_021_GoHomeAlone;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_022_GoHomeWithFlynn() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Juche nach Hause mit Flynn wir reisen mit dem Koboldwunsch");
        return "16_CS Reunion family";
    }
    Spiegel_VN.Chp16_022_GoHomeWithFlynn = Chp16_022_GoHomeWithFlynn;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_02_MakeAWish() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Hier müssen wir den Kobold rufen, um heimzureisen, weil alle Spiegel jetzt kaputt sind");
        let Chp16PickSceneElementAnswers = {
            PickSceneGoHomeAlone: "Heimreise",
            PickSceneGoHomeWithFlynn: "Flynn mitnehmen",
        };
        if (
        // !dataForSave.score.scoreEmpathyPoints >= 80 ||
        !Spiegel_VN.dataForSave.pickedChp08TrustFlynn) {
            delete Chp16PickSceneElementAnswers.PickSceneGoHomeWithFlynn;
        }
        let Chp16PickSceneElement = await Spiegel_VN.ƒS.Menu.getInput(Chp16PickSceneElementAnswers, "choicesCSSclass");
        switch (Chp16PickSceneElement) {
            case Chp16PickSceneElementAnswers.PickSceneGoHomeAlone:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "So auf gehts nach Hause");
                Spiegel_VN.ƒS.Speech.clear();
                return "16_021 Go home alone"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
            case Chp16PickSceneElementAnswers.PickSceneGoHomeWithFlynn:
                // continue path here
                await Spiegel_VN.ƒS.Speech.tell("Ich", "So auf gehts nach Hause mit Flynn");
                Spiegel_VN.ƒS.Speech.clear();
                return "16_022 Go home with Flynn"; // hier lieber: return "Chp ..."; if clause: ich nehm versch keys und sage: if dataforsave.pciekd = alle true, dann in der if clause return. if (dataforsave.pickedChoice, pickedotherchoice, usw. = true), dann gehts weiter
                break;
        }
    }
    Spiegel_VN.Chp16_02_MakeAWish = Chp16_02_MakeAWish;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_CS_ReunionFamily() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Daheim angekommen yay");
        return "16_End Empty Scene";
    }
    Spiegel_VN.Chp16_CS_ReunionFamily = Chp16_CS_ReunionFamily;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function Chp16_End_EmptyScene() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "YAY GUTES ENDE ALLES GUT");
    }
    Spiegel_VN.Chp16_End_EmptyScene = Chp16_End_EmptyScene;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function BadEnding() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_CS_ArrivalHome);
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Bad Ending");
        // return "16_02 Make a wish";
    }
    Spiegel_VN.BadEnding = BadEnding;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function GoodEnding() {
        await Spiegel_VN.ƒS.Location.show(Spiegel_VN.locations.Chp01_01_IntroMarketplace);
        Spiegel_VN.ƒS.update();
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Good ending");
        // return "16_02 Make a wish";
    }
    Spiegel_VN.GoodEnding = GoodEnding;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function SemiGoodEnding() {
        await Spiegel_VN.ƒS.Speech.tell("Ich", "Semi Good ending");
        // return "16_02 Make a wish";
    }
    Spiegel_VN.SemiGoodEnding = SemiGoodEnding;
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
var Spiegel_VN;
(function (Spiegel_VN) {
    async function imageRiddle() {
        let locLake = {
            name: "Lake",
            background: "./Assets/Backgrounds/Chapter08/CrossLake.png"
        };
        Spiegel_VN.ƒS.Sound.fade(Spiegel_VN.music.theme_ordinaryworld, 0.8, 0.1, true);
        await Spiegel_VN.ƒS.Location.show(locLake);
        Spiegel_VN.ƒS.update(0);
        createHitbox(0);
        createHitbox(1);
        createHitbox(2);
        createHitbox(3);
        createHitbox(4);
        createHitbox(5);
        createHitbox(6);
        createHitbox(7);
        await Spiegel_VN.ƒS.getKeypress(Spiegel_VN.ƒ.KEYBOARD_CODE.SPACE);
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
                    Spiegel_VN.ƒS.Speech.tell("", "Auf dem Leuchtturm könnten wir Ausschau nach Schiffen halten? Aber wie kommen wir dahin?");
                    break;
                case "hit1":
                    console.log("Steine");
                    Spiegel_VN.ƒS.Speech.tell("", "Ich weiß nicht, ob über die Steine hüpfen so eine gute Idee ist.");
                    break;
                case "hit2":
                    console.log("Wasser");
                    Spiegel_VN.ƒS.Speech.tell("", "Willst du wirklich rüber schwimmen? Das würde ich mir nochmal überlegen!");
                    break;
                case "hit3":
                    console.log("Schildkröten");
                    Spiegel_VN.ƒS.Speech.tell("", "Die Schildkröten lassen uns sicher nicht auf ihnen reiten!");
                    break;
                case "hit4":
                    console.log("Schilf");
                    Spiegel_VN.ƒS.Speech.tell("", "Perfekt. Hinter dem Schilf liegt ein Boot.");
                    Spiegel_VN.dataForSave.pickedBoat = true;
                    // return Chp01_01_IntroMarketplace
                    break;
                case "hit5":
                    console.log("Vögel");
                    Spiegel_VN.ƒS.Speech.tell("", "Ich würde auch sofort rüber fliegen! Aber das klappt nicht.");
                    break;
                case "hit6":
                    console.log("Wald");
                    Spiegel_VN.ƒS.Speech.tell("", "Ein Floß bauen könntet ihr auch. Wo kriegt ihr aber das Werkzeug her?");
                    break;
            }
        }
        // if (dataForSave.pickedBoat = true) {
        return "01_01 Intro Marketplace";
        // }
    }
    Spiegel_VN.imageRiddle = imageRiddle;
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
var Spiegel_VN;
(function (Spiegel_VN) {
    async function textRiddle() {
        await Spiegel_VN.ƒS.Speech.tell("", "Ich habe ein Bett, doch ich find keine Ruh.<br>'Ich habe einen Mund, doch ich kann nicht sprechen.<br>Ich bewege mich rasend schnell, doch ich verlasse niemals einen Ort.<br>Wer oder was bin ich? Tipp: Es hat etwas mit Wasser zu tun!<br/>", false);
        let answer = await Spiegel_VN.ƒS.Speech.getInput();
        if (answer.toLowerCase() == "fluss") {
            console.log("RICHTIG!");
            await Spiegel_VN.ƒS.Speech.tell("Baum der Wünsche", "Das erste Rätsel geschafft!");
        }
        else {
            await Spiegel_VN.ƒS.Speech.tell("Baum der Wünsche", "Denke nochmal nach ...");
        }
        await Spiegel_VN.ƒS.getKeypress(Spiegel_VN.ƒ.KEYBOARD_CODE.SPACE);
    }
    Spiegel_VN.textRiddle = textRiddle;
})(Spiegel_VN || (Spiegel_VN = {}));
var Spiegel_VN;
(function (Spiegel_VN) {
    async function testTunnel() {
        let locTunnel = {
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
        await Spiegel_VN.ƒS.Location.show(locTunnel);
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
        Spiegel_VN.ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, loopFrame);
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
        Spiegel_VN.ƒ.Loop.removeEventListener("loopFrame" /* LOOP_FRAME */, loopFrame);
        viewport.canvas.removeEventListener("mousemove", moveMirror);
        if (event.type == "tunnelFail") {
            Spiegel_VN.dataForSave.tunnelFailed += 1;
            Spiegel_VN.ƒS.Speech.tell("", "Mist, der Dämon hat dich erwischt! " + Spiegel_VN.dataForSave.tunnelFailed + " Mal, probier's nochmal.<br/>Drücke dazu die Leertaste");
        }
        ;
        if (Spiegel_VN.dataForSave.tunnelFailed == 3) {
            Spiegel_VN.ƒS.Speech.clear();
            Spiegel_VN.ƒS.Speech.tell("Dämon", "Ha! Hab' ich dich!");
            return "Bad Ending";
        }
        ;
        if (event.type == "tunnelSuccess") {
            return "Good Ending";
        }
        ;
        // for testing, stop NV from starting
        await Spiegel_VN.ƒS.getKeypress(Spiegel_VN.ƒ.KEYBOARD_CODE.SPACE);
        await testTunnel();
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
    Spiegel_VN.testTunnel = testTunnel;
})(Spiegel_VN || (Spiegel_VN = {}));
//# sourceMappingURL=VN_Spiegel.js.map