import MReco1 from "./MReco1.js";

const MangaData = [
  //   {
  //     name: "Get it Together",
  //     image: "reco/immortaldays.jpg",
  //   },
  {
    name: "Chainsaw Man",
    image: "reco/chainsaw.png",
  },
  //   {
  //     name: "Lookism",
  //     image: "reco/lookism.jpg",
  //   },
  {
    name: "The Boxer",
    image: "reco/theboxer.jpg",
  },
  {
    name: "Sweet Home",
    image: "reco/sweethome.jpg",
  },
  {
    name: "Eleceed",
    image: "reco/eleceed.jpg",
  },
  {
    name: "Ooh La La",
    image: "reco/oohlala.jpg",
  },
  {
    name: "Dwaejiuri (Pigpen)",
    image: "reco/dwaejuri.jpg",
  },
  {
    name: "Maybe Meant To Be",
    image: "reco/mmtb.jpg",
  },
  {
    name: "Something About Us",
    image: "reco/somthaboutus.jpg",
  },
  {
    name: "Get Schooled",
    image: "reco/getschooled.jpg",
  },
  {
    name: "Revelation of Youth",
    image: "reco/revelation.png",
  },
];

function Recommendation() {
  return (
    <div className="reco">
      {MangaData.map((reco) => (
        <MReco1 mangaReco={reco} key={reco.name} />
      ))}
    </div>
  );
}

export default Recommendation;
