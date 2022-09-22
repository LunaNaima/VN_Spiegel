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
        pickedRightChoice: boolean;
        pickedIron: boolean;
        pickedChp08TrustFlynn: boolean;
        pickedChp10SingToBirds: boolean;
        pickedChoice: boolean;
        pickediAskAboutTrip: boolean;
        pickediAskAboutDecorations: boolean;
        pickedChp01_E_FlowerMerchantScene: boolean;
        pickedChp01_E_LeatherMerchantScene: boolean;
        pickedChp01_ConvoMother: boolean;
        pickedChp01_MirrorMerchant: boolean;
        pickedChp02_DinnerScene: boolean;
        pickedChp02_TestMirror: boolean;
        pickedChp02_TestWithElena: boolean;
        pickedChp02_TestWithKailani: boolean;
        pickedChp02_TestWithEvarius: boolean;
        pickedChp02_PickHerbsGarden: boolean;
        pickedChp02_FightNeighbor: boolean;
        pickedChp03_Dressmaker: boolean;
        pickedChp03_ChoresWithKailani: boolean;
        pickedChp03_WaterwellKailani: boolean;
        pickedChp03_WoodChoppingKailani: boolean;
        pickedChp04TalkToFamily: boolean;
        pickedChp04TalkToElena: boolean;
        pickedChp04ResearchLibrary: boolean;
        pickedChp05GoToClearing: boolean;
        pickedChp05GiveBirdsFood: boolean;
        pickedChp05SingToBirds: boolean;
        pickedChp07TravelToWhary: boolean;
        pickedChp07DiscoverBees: boolean;
        pickedChp07DiscoverFlowers: boolean;
        pickedChp08CatchFlynnAtGates: boolean;
        pickedChp08EnterCity: boolean;
        pickedChp08CatchFlynnInAlley: boolean;
        pickedChp08ChooseStay: boolean;
        pickedChp08GoWithFlynn: boolean;
        pickedChp08GoWithoutFlynn: boolean;
        pickedChp08ChooseContinueSearch: boolean;
        pickedChp09ResearchMarketplace: boolean;
        pickedChp09TalkToInnkeeper: boolean;
        pickedChp09TalkToCook: boolean;
        pickedChp09TalkToStablehand: boolean;
        pickedChp09DiscoverListenToVillagers: boolean;
        pickedChp09DiscoverMerchants: boolean;
        pickedChp09DiscoverSpeakToVillagers: boolean;
        pickedChp09SpeakToBeggar: boolean;
        pickedChp09MakeAWish: boolean;
        pickedChoiceChp10ExploreAfraid: boolean;
        pickedChoiceChp10ExploreAttention: boolean;
        pickedChoiceChp10ExploreSick: boolean;
        pickedChoiceChp10ExploreAll: boolean;
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
}
declare namespace Spiegel_VN {
    let characters: {
        maincharacter: {
            name: string;
        };
        narrator: {
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
                annoyed_angry: string;
                annoyed_eyeroll: string;
                back_smile: string;
                back_worried: string;
                begging_eyeroll: string;
                begging_shrug: string;
                crossed_angry: string;
                crossed_eyeroll: string;
                crossed_neutral: string;
                neutral_angry: string;
                neutral_eyeroll: string;
                neutral_happy: string;
                neutral_neutral: string;
                neutral_smile: string;
                profile_h_neutral: string;
                profile_h_smile: string;
                profile_neutral: string;
                profile_smile: string;
                shrug_eyeroll: string;
                shrug_happy: string;
                shrug_shrug: string;
                thinking_angry: string;
                thinking_neutral: string;
                thinking_shrug: string;
                dress_back_neutral: string;
                dress_back_smile: string;
                dress1_angry: string;
                dress1_eyeroll: string;
                dress1_happy: string;
                dress1_shrug: string;
                dress1_smile: string;
                dress2_smile: string;
                dress2_eyeroll: string;
                dress3_angry: string;
                dress3_eyeroll: string;
                dress3_happy: string;
                dress3_shrug: string;
                dress3_smile: string;
                grey_slave: string;
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
    };
}
declare namespace Spiegel_VN {
    function func_RandomNumberRange(// random nr zw 0-10. macht
    min?: number, max?: number): number;
}
declare namespace Spiegel_VN {
    let locations: {
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
        Chp01_CS_ArrivalHome: {
            name: string;
            background: string;
            night: string;
        };
        Chp02_01_Dinner: {
            name: string;
            background: string;
        };
        Chp02_02_LivingRoom: {
            name: string;
            background: string;
            night: string;
        };
        Chp02_03_PickHerbs: {
            name: string;
            background: string;
        };
        Chp02_04_FightNeighbor: {
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
        Chp03_01_Dressmaker: {
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
        Chp03_E_DiscoverForest: {
            name: string;
            background: string;
        };
        Chp03_E_DiscoverLibrary: {
            name: string;
            background: string;
        };
        Chp03_CS_KailaniMissing: {
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
        Chp06_ArrivalMeadow: {
            name: string;
            background: string;
        };
        Chp06_CityGates: {
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
    let Soundeffekte: {
        click: string;
        birds: string;
        crowd: string;
        door: string;
        forest: string;
        forest2: string;
        glass: string;
        kitchen: string;
        water: string;
        wood: string;
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
            T0004: string;
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
            T0000: string;
            T0001: string;
        };
        Mama: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_Chp01EntryMirrorMerchant: {
        mirrorMerchant: {
            T0000: string;
            T0001: string;
        };
        maincharacter: {
            T0000: string;
        };
    };
    let dlg_Chp01MirrorMerchantiSayUnsure: {
        maincharacter: {
            T0000: string;
            T0001: string;
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
    let dlg_scn_E_Flowermerchant: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
        flowerMerchant: {
            T0000: string;
        };
    };
}
declare namespace Spiegel_VN {
    let dlg_scn_E_Leathermerchant: {
        maincharacter: {
            T0000: string;
            T0001: string;
        };
        leatherMerchant: {
            T0000: string;
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
    function Chp02_01_Dinner(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_021_TestMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_03_PickHerbs(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_03_FightNeighbor(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_E_DiscoverBedroom(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_E_DiscoverKitchen(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_CS_NewDay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp02_CS_Sleep(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_01_Dressmaker(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_021_ChoresWithKailani(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp03_E_DiscoverDonkey(): ƒS.SceneReturn;
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
    function Chp04_01_TalkWithFamily(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_02_TalkWithElena(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_03_ResearchLibrary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_E_ExamineMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_E_SearchGarden(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_E_SearchGroundFloor(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp04_CS_EntryForest(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_01_Clearing(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_02_SingToBirds(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_03_FeedBirds(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_E_DiscoverOak(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_E_DiscoverRiver(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp05_CS_GoHome(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_02_ReceiveItemMama(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_03_DepartureRiver(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp06_CS_ArrivalMeadow(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_02_TravelToWhary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_E_DiscoverBees(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_E_DiscoverFlowers(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp07_CS_LineAtGates(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_01_MeetFlynnAtGates(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_02_MeetFlynnInAlley(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_03_EnterCity(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_0411_NiceStayFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_041_ChooseNiceStay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_0421_UglyStayFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_042_ChooseUglyStay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_04_ChooseStay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_E_DiscoverHay(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_E_DiscoverVillagers(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_E_DiscoverWindows(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_CS_TalkToFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp08_CS_Sleep(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_011_Beggar(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_012_MakeAWish(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_01_ResearchMarketplace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_02_TalkToInnkeeper(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_03_TalkToCook(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_04_TalkToStablehand(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_E_ListenToVillagers(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_E_TalkToMerchants(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_E_SpeakToVillagers(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp09_CS_ArrivalLake(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_01_HowToCross(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_02_OnTheRaft(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_03_CrossLake(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_041_SingToBirds(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_042_UseMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_04_AttackBirds(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_051_FriendlyBirds(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_052_BirdsDisappear(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_E_CityLightsWhary(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_E_DiscoverLake(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_E_DiscoverLakewater(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp10_CS_ArrivalOtherSide(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_01_SearchHidingPlace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_02_FindIron(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_03_WatchFactory(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_04_TryBreakIn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_E_DiscoverForest(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_E_DiscoverHuts(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_E_DiscoverTower(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp11_CS_Sleep(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_011_SneakIn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_012_SneakAmongSlaves(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_02_EnterFactory(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_031_TalkToSlaves(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_032_SearchForKailani(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_033_ListenToGuards(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_051_BirdsOfferHelp(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_052_MakeAWish(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_04_BackToHidingPlace(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_E_DiscoverVillage(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_E_Productionsite(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp12_CS_TalkToFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_01_EntryVillage(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_02_GetIntoTower(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_03_EntryTower(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_04_SneakPastDemon(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_E_DiscoverFamilyPortrait(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_E_DiscoverLockedDoor(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_E_DiscoverSneakAround(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_E_DiscoverTowerWindow(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_E_DiscoverWatchGuard(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp13_CS_EntryMirrorRoom(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp141_01_DestroyMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp141_02_DemonDies(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp14_CS_BalconyTower(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp142_01_RealizationMirror(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp142_02_CaughtByDemon(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp142_03_TransformationSlaves(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp142_End_EmptyScene(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp15_01_ReunionKailani(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp15_E_DiscoverDemonRoom(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp15_E_DiscoverMirrorRoom(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp15_E_TalkToFreedVillagers(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp15_CS_GoToLake(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_01_ConfrontationFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_021_GoHomeAlone(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_022_GoHomeWithFlynn(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_02_MakeAWish(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_CS_ReunionFamily(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function Chp16_End_EmptyScene(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
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
    function imageRiddle(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function MinigameDemon(): ƒS.SceneReturn;
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
declare namespace Spiegel_VN {
    function textRiddle(): ƒS.SceneReturn;
}
declare namespace Spiegel_VN {
    function testTunnel(): ƒS.SceneReturn;
}
