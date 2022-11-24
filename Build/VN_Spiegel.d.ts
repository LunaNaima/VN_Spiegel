declare namespace Spiegel_VN {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        scoreEmpathyPoints: number;
        EmpathyPointsSkala: string;
        scoreCouragePoints: number;
        scoreKnowledgePoints: number;
        tunnelFailed: number;
        pickedBoat: boolean;
        pickedRightChoice: boolean;
        pickedRightChoiceMirror: boolean;
        pickedIron: boolean;
        pickedSeeds: boolean;
        pickedChp05Seeds: boolean;
        pickedChp05Food: boolean;
        pickedChp05Cloak: boolean;
        pickedChp10SingToBirds: boolean;
        pickedChoice: boolean;
        pickedRiddle1: boolean;
        pickedRiddle2: boolean;
        pickedRiddle3: boolean;
        pickediAskAboutTrip: boolean;
        pickediAskAboutDecorations: boolean;
        pickedChp01_E_FlowerMerchantScene: boolean;
        pickedChp01_E_LeatherMerchantScene: boolean;
        pickedChp01_ConvoMother: boolean;
        pickedChp01_MirrorMerchant: boolean;
        pickedChp02_Kitchen: boolean;
        pickedChp02_TestMirror: boolean;
        pickedChp02_TestWithKailani: boolean;
        pickedChp02_TestWithEvarius: boolean;
        pickedChp02_PickHerbsGarden: boolean;
        pickedChp02_FightNeighbor: boolean;
        pickedChp02MirrorScenesContinue: boolean;
        pickedChp03_Dressmaker: boolean;
        pickedChp03_ChoresWithKailani: boolean;
        pickedChp03_SearchGarden: boolean;
        pickedChp03_SearchKitchen: boolean;
        pickedChp04TalkToFamily: boolean;
        pickedChp04ResearchLibrary: boolean;
        pickedChp04ExamineMirror: boolean;
        pickedChp05Inner: boolean;
        pickedChp05Sick: boolean;
        pickedChp05Free: boolean;
        pickedChp05GoToClearing: boolean;
        pickedChp05GiveBirdsFood: boolean;
        pickedChp05SingToBirds: boolean;
        pickedChp06Leave: boolean;
        pickedChp06Window: boolean;
        pickedChp06Villagers: boolean;
        pickedChp06TrustFlynn: boolean;
        pickedChp07ResearchMarketplace: boolean;
        pickedChp07DiscoverMerchants: boolean;
        pickedChp07DiscoverSpeakToVillagers: boolean;
        pickedChp07TalkToInnkeeper: boolean;
        pickedChp07TalkToCook: boolean;
        pickedChp07TalkToStablehand: boolean;
        pickedChp07pickedColor: boolean;
        pickedChp07pickedGrey: boolean;
        pickedChp07pickedWhatHappened: boolean;
        pickedChp07CookpickedGhost: boolean;
        pickedChp07CookpickedColor: boolean;
        pickedChp07CookpickedPeople: boolean;
        pickedChp07CookpickedContinue: boolean;
        pickedChp07SpeakToBeggar: boolean;
        pickedChp07Continue: boolean;
        pickedChp08ConvoContinue: boolean;
        pickedChp08Left: boolean;
        pickedChp08Right: boolean;
        pickedChp08HidingPlaceContinue: boolean;
        pickedChp09InFactoryContinue: boolean;
        pickedChp09ScoutTowerBirds: boolean;
        pickedChp10IntoTowerContinue: boolean;
        pickedChp10GoodEndingContinue1: boolean;
        pickedChp10GoodEndingContinue2: boolean;
        pickedChp10GoodEndingContinue3: boolean;
        pickedChp10SemiGoodEndingContinue1: boolean;
        pickedChp10SemiGoodEndingContinue2: boolean;
        pickedChp10SemiEndingContinue3: boolean;
        pickedChp10BadEndingContinue2: boolean;
    };
    let inventory: {
        apple: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function showCredits(): void;
}
declare namespace Spiegel_VN {
    let minPoints: number;
    let maxPoints: number;
    let points: number;
    function UpdateBar(): Promise<void>;
    function DisplaySanityBar(show: boolean): void;
    function SetPoints(num: number): void;
    function AddPoints(num: number): void;
    function SubPoints(num: number): void;
    function GetPoints(): number;
}
declare namespace Spiegel_VN {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    let characters: {
        maincharacter: {
            name: string;
        };
        narrator: {
            name: string;
        };
        wishtree: {
            name: string;
        };
        Mama: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                dress_34_neutral: string;
                dress_34_angry: string;
                dress_34_smile: string;
                dress_angry: string;
                dress_laugh: string;
                dress_neutral: string;
                dress_shocked: string;
                pants1_34_angry: string;
                pants1_34_neutral: string;
                pants1_34_smile: string;
                pants1_laugh: string;
                pants1_neutral: string;
                pants1_shocked: string;
                pants2_angry: string;
                pants2_laugh: string;
                pants2_neutral: string;
                pants2_shocked: string;
                pants2_angry2: string;
                pants2_laugh2: string;
                pants2_neutral2: string;
                pants2_shocked2: string;
                pants2_hand_angry: string;
                pants2_hand_laugh: string;
                pants2_hand_neutral: string;
                pants2_hand_shocked: string;
            };
        };
        Mutti: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                dress1_basket_frown: string;
                dress1_basket_laugh: string;
                dress1_basket_neutral: string;
                dress1_basket_smile: string;
                dress1_basket_smirk: string;
                dress2_basket_laugh: string;
                dress2_basket_neutral: string;
                dress2_basket_smile: string;
                dress2_basket_smirk: string;
                dress2_basket_frown: string;
                dress3_frown: string;
                dress3_laugh: string;
                dress3_neutral: string;
                dress3_smile: string;
                dress3_smirk: string;
                dress4_laugh: string;
                dress4_neutral: string;
                dress4_frown: string;
                dress4_smile: string;
                dress4_smirk: string;
                dress5_frown: string;
                dress5_laugh: string;
                dress5_neutral: string;
                dress5_smile: string;
                dress5_smirk: string;
                dress6_frown: string;
                dress6_laugh: string;
                dress6_neutral: string;
                dress6_smile: string;
                dress6_smirk: string;
                dress7_frown: string;
                dress7_laugh: string;
                dress7_neutral: string;
                dress7_smile: string;
                dress7_smirk: string;
            };
        };
        Kailani: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                outfit1_annoyed_angry: string;
                outfit1_annoyed_eyeroll: string;
                outfit1_back_smile: string;
                outfit1_back_worried: string;
                outfit1_begging_eyeroll: string;
                outfit1_begging_shrug: string;
                outfit1_crossed_angry: string;
                outfit1_crossed_eyeroll: string;
                outfit1_crossed_neutral: string;
                outfit1_neutral_angry: string;
                outfit1_neutral_eyeroll: string;
                outfit1_neutral_happy: string;
                outfit1_neutral_neutral: string;
                outfit1_neutral_smile: string;
                outfit1_profile_h_neutral: string;
                outfit1_profile_h_smile: string;
                outfit1_profile_neutral: string;
                outfit1_profile_smile: string;
                outfit1_shrug_eyeroll: string;
                outfit1_shrug_happy: string;
                outfit1_shrug_shrug: string;
                outfit1_thinking_angry: string;
                outfit1_thinking_neutral: string;
                outfit1_thinking_shrug: string;
                outfit2_dress_back_neutral: string;
                outfit2_dress_back_smile: string;
                outfit2_dress1_angry: string;
                outfit2_dress1_eyeroll: string;
                outfit2_dress1_happy: string;
                outfit2_dress1_shrug: string;
                outfit2_dress1_smile: string;
                outfit2_dress2_smile: string;
                outfit2_dress2_eyeroll: string;
                outfit2_dress3_angry: string;
                outfit2_dress3_eyeroll: string;
                outfit2_dress3_happy: string;
                outfit2_dress3_shrug: string;
                outfit2_dress3_smile: string;
                grey_slave: string;
                grey_shrug_eyeroll: string;
                grey_neutral_angry: string;
                grey_neutral_smile: string;
                grey_crossed_angry: string;
                grey_neutral_happy: string;
            };
        };
        Evarius: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                pos1_angry: string;
                pos1_frown: string;
                pos1_laugh: string;
                pos1_neutral: string;
                pos1_smile: string;
                pos2_angry: string;
                pos2_frown: string;
                pos2_laugh: string;
                pos2_neutral: string;
                pos2_smile: string;
                pos3_angry: string;
                pos3_frown: string;
                pos3_laugh: string;
                pos3_neutral: string;
                profile_neutral: string;
                profile_smile: string;
            };
        };
        Flynn: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                pos1_angry: string;
                pos1_happy: string;
                pos1_neutral: string;
                pos1_smile: string;
                pos1_smile2: string;
                pos2_happy2: string;
                pos2_neutral: string;
                pos2_neutral2: string;
                pos2_uncertain2: string;
                pos3_angry: string;
                pos3_happy: string;
                pos3_smile: string;
                pos1_confused: string;
                pos1_sad: string;
                pos2_crossed_angry: string;
                pos2_crossed_neutral: string;
                pos2_crossed_neutral2: string;
                pos2_crossed_sad: string;
                pos2_crossed_shocked: string;
                pos2_crossed_shocked2: string;
                pos2_crossed_smile: string;
                pos2_crossed_smile2: string;
                pos2_crossed_uncertain: string;
                pos3_arms_smile: string;
                pos3_arms_happy: string;
                pos3_arms2_angry: string;
                pos3_arms2_sad: string;
                pos3_arms2_smile: string;
                wo_angry: string;
                wo_happy: string;
                wo_I_skeptical: string;
                wo_II_skeptical: string;
                wo_shocked: string;
                grey_wo_skeptical: string;
                grey_wo_angry: string;
                grey_wo_I_skeptical: string;
                grey_wo_II_skeptical: string;
                grey_wo_shocked: string;
                grey_blue_confused: string;
                grey_blue_confused_sad: string;
                grey_blue_happy: string;
                grey_blue_crossed_angry: string;
                grey_blue_crossed_shocked: string;
                grey_blue_crossed_neutral: string;
                grey_blue_crossed_sad: string;
                grey_blue_crossed_smile: string;
            };
        };
        flowerMerchant: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        leatherMerchant: {
            name: string;
            origin: ƒ.ORIGIN2D;
        };
        mirrorMerchant: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                left: string;
                neutral: string;
            };
        };
        Demon: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                pos1_angry: string;
                pos2_angry: string;
                pos2_smile: string;
            };
        };
        Beggar: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                anguish: string;
                front: string;
                neutral: string;
                shocked: string;
            };
        };
        Cook: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                pos1_concerned: string;
                pos1_neutral: string;
                pos2_concerned: string;
                pos2_unknowing: string;
            };
        };
        Innkeeper: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                pos1_laugh: string;
                pos1_neutral: string;
                pos1_smile: string;
                pos1_worried: string;
                pos2_frown: string;
                pos2_laugh: string;
                pos2_neutral: string;
                pos2_smile: string;
            };
        };
        Stablehand: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                pos1_afraid: string;
                pos1_angry: string;
                pos1_laugh: string;
                pos2_afraid: string;
                pos2_angry: string;
                pos2_laugh: string;
            };
        };
        Seller: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                pos1: string;
            };
        };
        MerchantWhary: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                pos1: string;
            };
        };
    };
}
declare namespace Spiegel_VN {
    function func_RandomNumberRange(// random nr zw 0-10. macht
    min?: number, max?: number): number;
}
declare namespace Spiegel_VN {
    let locations: {
        WitchInTheWoods: {
            name: string;
            background: string;
        };
        Chp01_01_IntroMarketplace: {
            name: string;
            background: string;
        };
        Chp01_02_ConvoMother: {
            name: string;
            background: string;
        };
        Chp01_E_FlowerMerchant: {
            name: string;
            background: string;
        };
        Chp01_E_LeatherMerchant: {
            name: string;
            background: string;
        };
        Chp01_03_IntroMirror: {
            name: string;
            background: string;
        };
        Chp01_03_MirrorDemo: {
            name: string;
            background: string;
        };
        Chp01_CS_ArrivalHome: {
            name: string;
            background: string;
        };
        Chp01_CS_ArrivalHomeNight: {
            name: string;
            background: string;
        };
        Chp02_01_Dinner: {
            name: string;
            background: string;
        };
        Chp02_02_LivingRoom: {
            name: string;
            background: string;
        };
        Chp02_02_LivingRoomNight: {
            name: string;
            background: string;
        };
        Chp02_03_PickHerbs: {
            name: string;
            background: string;
        };
        Chp02_04_FightNeighbor: {
            name: string;
            background: string;
        };
        Chp02_04_FightNeighborNeighbors: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverBedroom: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverBedroomDiary: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverKitchen: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverKitchenOven: {
            name: string;
            background: string;
        };
        Chp02_E_DiscoverKitchenPantry: {
            name: string;
            background: string;
        };
        Chp02_TestSceneFBeach: {
            name: string;
            background: string;
        };
        Chp02_TestSceneFCoral: {
            name: string;
            background: string;
        };
        Chp02_TestSceneFFly: {
            name: string;
            background: string;
        };
        Chp02_TestSceneFTrees: {
            name: string;
            background: string;
        };
        Chp02_TestSceneFWater: {
            name: string;
            background: string;
        };
        Chp02_TestSceneMWater: {
            name: string;
            background: string;
        };
        Chp02_TestSceneMTrees: {
            name: string;
            background: string;
        };
        Chp02_TestSceneMFly: {
            name: string;
            background: string;
        };
        Chp02_TestSceneMBeach: {
            name: string;
            background: string;
        };
        Chp02_TestSceneMCoral: {
            name: string;
            background: string;
        };
        Chp03_01_Dressmaker: {
            name: string;
            background: string;
        };
        Chp03_01_DressmakerMan: {
            name: string;
            background: string;
        };
        Chp03_021_FirewoodKailani: {
            name: string;
            background: string;
        };
        Chp03_022_Marketplace_empty: {
            name: string;
            background: string;
        };
        Chp03_E_DiscoverLibrary: {
            name: string;
            background: string;
        };
        Chp03_KailaniBedroom: {
            name: string;
            background: string;
        };
        Chp03_KailaniBedroomDiary: {
            name: string;
            background: string;
        };
        Chp03_KailaniBedroomMirror: {
            name: string;
            background: string;
        };
        Chp03_MarketplacePerson: {
            name: string;
            background: string;
        };
        Chp04_Library_Interior: {
            name: string;
            background: string;
        };
        Chp04_Library_Bookshelf: {
            name: string;
            background: string;
        };
        Chp04_Bookshelf_Book: {
            name: string;
            background: string;
        };
        Chp05_Forestpath: {
            name: string;
            background: string;
        };
        Chp05_River: {
            name: string;
            background: string;
        };
        Chp05_Trees: {
            name: string;
            background: string;
        };
        Chp05_Wishtree: {
            name: string;
            background: string;
        };
        Chp05_WishtreeBirds: {
            name: string;
            background: string;
        };
        Chp06_ArrivalMeadow: {
            name: string;
            background: string;
        };
        Chp06_ArrivalMeadowFlowers: {
            name: string;
            background: string;
        };
        Chp06_CityGates: {
            name: string;
            background: string;
        };
        Chp06_InWharyPeople: {
            name: string;
            background: string;
        };
        Chp06_ClothingStore: {
            name: string;
            background: string;
        };
        Chp06_Inn_ext: {
            name: string;
            background: string;
        };
        Chp06_Inn_int: {
            name: string;
            background: string;
        };
        Chp06_Inn_room: {
            name: string;
            background: string;
        };
        Chp06_InWhary: {
            name: string;
            background: string;
        };
        Chp06_StreetToWhary: {
            name: string;
            background: string;
        };
        Chp06_WharyWindow: {
            name: string;
            background: string;
        };
        Chp07_Barn: {
            name: string;
            background: string;
        };
        Chp07_InnKitchen: {
            name: string;
            background: string;
        };
        Chp07_MarketplaceWhary: {
            name: string;
            background: string;
        };
        Chp07_MarketplaceWharyBirds: {
            name: string;
            background: string;
        };
        Chp08_Lake: {
            name: string;
            background: string;
        };
        Chp08_ArrivalFactory: {
            name: string;
            background: string;
        };
        Chp08_E_FactoryVillage: {
            name: string;
            background: string;
        };
        Chp08_Mirrorroom_unbroken: {
            name: string;
            background: string;
        };
        Chp08_OnBoat: {
            name: string;
            background: string;
        };
        Chp08_OnBoatGhosts1: {
            name: string;
            background: string;
        };
        Chp08_OnBoatGhosts2: {
            name: string;
            background: string;
        };
        Chp08_OnBoatGhosts3: {
            name: string;
            background: string;
        };
        Chp08_OutsideTower: {
            name: string;
            background: string;
        };
        Chp08_ForestPath: {
            name: string;
            background: string;
        };
        Chp08_ForestPathHammer: {
            name: string;
            background: string;
        };
        Chp08_HidingPlace: {
            name: string;
            background: string;
        };
        Chp08_HidingPlaceSlaves: {
            name: string;
            background: string;
        };
        Chp08_Village: {
            name: string;
            background: string;
        };
        Chp09_OutsideFactory: {
            name: string;
            background: string;
        };
        Chp09_InFactory: {
            name: string;
            background: string;
        };
        Chp09_InFactoryWK: {
            name: string;
            background: string;
        };
        Chp10_TowerOutside: {
            name: string;
            background: string;
        };
        Chp10_TowerOutsideBirds: {
            name: string;
            background: string;
        };
        Chp10_TowerOutsideSlavesGrey: {
            name: string;
            background: string;
        };
        Chp10_TowerOutsideSlaves: {
            name: string;
            background: string;
        };
        Chp10_GroundFloorTower: {
            name: string;
            background: string;
        };
        Chp10_GroundFloorTowerGrey: {
            name: string;
            background: string;
        };
        Chp10_ExplorePortrait: {
            name: string;
            background: string;
        };
        Chp10_MinigameInstructions: {
            name: string;
            background: string;
        };
        Chp10_Mirrorroom: {
            name: string;
            background: string;
        };
        Chp10_MirrorroomGrey: {
            name: string;
            background: string;
        };
        Chp10_Demontunnel: {
            name: string;
            background: string;
        };
        Chp10_DemontunnelGrey: {
            name: string;
            background: string;
        };
        black: {
            name: string;
            background: string;
        };
    };
}
declare namespace Spiegel_VN {
    let music: {
        theme_ordinaryworld: string;
        theme_mirrorworld_whary: string;
        theme_mirrorworld_factory: string;
        theme_DemonMinigame: string;
        click: string;
    };
}
declare namespace Spiegel_VN {
    let score: {
        punkte: number;
        teeGetrunken: boolean;
    };
    let scoreMutti: {
        punkte: number;
        affection: number;
        introduced: boolean;
    };
}
declare namespace Spiegel_VN {
    let soundeffects: {
        birds: string;
        cracklingfire: string;
        crowd: string;
        door: string;
        forest: string;
        forest2: string;
        glass: string;
        kitchen: string;
        water: string;
        wood: string;
        listeningriddle_demon: string;
        listeningriddle_mirror: string;
        listeningriddle_destroy: string;
    };
}
declare namespace Spiegel_VN {
    let transitions: {
        fade: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_00_IntroNarrator: {
        narratorEntry: {
            T0000: string;
            T0001: string;
            T0002: string;
            T0003: string;
            T0005: string;
            T0006: string;
            T0007: string;
            T0008: string;
            T0009: string;
            T0010: string;
            T0011: string;
            T00012: string;
            T0013: string;
            T0014: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_01: {
        Mama: {
            T0001: string;
            T0002: string;
            T0003: string;
            T0004: string;
            T0005: string;
            T0006: string;
            T0007: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_02: {
        maincharacter: {
            T0001: string;
            T0004: string;
            T0006: string;
            T0008: string;
            T0010: string;
        };
        Mama: {
            T0000: string;
            T0002: string;
            T0003: string;
            T0005: string;
            T0007: string;
            T0009: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_Chp01EntryMirrorMerchant: {
        mirrorMerchant: {
            T0000: string;
            T0001: string;
            T0003: string;
            T0005: string;
            T0006: string;
            T0011: string;
        };
        maincharacter: {
            T0002: string;
            T0004: string;
            T0007: string;
            T0008: string;
            T0009: string;
            T0010: string;
            T0012: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_E_10EmpathyPoints: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace Spiegel_VN {
    function Chp00_00_NameEntry(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_00_IntroNarration(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_01_IntroMarketplace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_02_ConvoMother(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_03_IntroMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_E_FlowerMerchant(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_E_LeatherMerchant(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_CS_ArrivalHome(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp01_CS_PerchaseMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_00_ArrivalHome(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_01_Dinner(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_021_TestMirrorE(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_021_TestMirrorK(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_Kitchen(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_03_PickHerbs(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_E_DiscoverBedroom(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_00_NewDay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_01_Dressmaker(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_021_ChoresWithKailani(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_E_DiscoverForest(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_E_DiscoverLibrary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_CS_KailaniMissing(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_CS_TurmoilMarketplace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_00_ResearchOptions(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_01_TalkWithFamily(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_03_ResearchLibrary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_E_ExamineMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_CS_EntryForest(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function textRiddle(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_02_ConvoTree(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_ConvoMother(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_CS_ArrivalMeadow(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_InWhary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_ClothingStore(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_Inn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_NewDay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_ResearchMarketplace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_Beggar(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_TalkToInnkeeper(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_TalkToCook(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_ArrivalLake(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_ImageRiddle(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_OnLake(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_ArrivalOtherSide(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_SearchHidingPlace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_EnterFactory(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_ScoutTower(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_InFactory(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_IntoTower(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_MinigameDemon(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function GoodEnding(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function SemiGoodEnding(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function BadEnding(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function End(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function EmptyScene(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Auswahlmöglichkeiten(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Diary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function HowToMakeChoices(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function RandomIntervall(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function ScnTestzene01(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function ScnTestzene02(): ƒS.SceneReturn;
}
declare let weihnachtsdeko: string;
declare let x: number;
declare let y: number;
declare let z: number;
