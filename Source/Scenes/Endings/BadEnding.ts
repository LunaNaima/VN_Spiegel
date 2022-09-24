namespace Spiegel_VN {
  export async function BadEnding(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.Chp01_CS_ArrivalHome)
    await ƒS.Speech.tell(
      "Ich",
      "Bad Ending"
    );
    // return "16_02 Make a wish";
  }
}
