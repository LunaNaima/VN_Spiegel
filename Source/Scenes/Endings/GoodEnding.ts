namespace Spiegel_VN {
  export async function GoodEnding(): ƒS.SceneReturn {
   await ƒS.Location.show(locations.Chp01_01_IntroMarketplace);
    ƒS.update();
    await ƒS.Speech.tell(
      "Ich",
      "Good ending"
    );
    // return "16_02 Make a wish";
  }
}
