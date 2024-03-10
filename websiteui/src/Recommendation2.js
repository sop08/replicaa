import MReco2 from "./MReco2.js";

const MangaData2 = [
  {
    name: "Hakaijuu",
    image: "reco/hakaijuu.jpg",
  },
  {
    name: "Maria no Danzai",
    image: "reco/maria.jpg",
  },
  {
    name: "Chainsaw Man",
    image: "reco/chainsaw.png",
  },
  {
    name: "Shingeki no Kyojin",
    image: "reco/aot.jpg",
  },
  {
    name: "Uzumaki",
    image: "reco/uzumaki.jpg",
  },
  {
    name: "Mieruko-Chan",
    image: "reco/mieruko.jpg",
  },
  {
    name: "Tomie",
    image: "reco/tomie.jpg",
  },
  {
    name: "Made in Abyss",
    image: "reco/madeinabyss.jpg",
  },
  {
    name: "Pumpkin Night",
    image: "reco/pumpkin.jpg",
  },
  {
    name: "PTSD Radio",
    image: "reco/ptsd.jpg",
  },
];

function Recommendation2() {
  return (
    <div className="reco2">
      {MangaData2.map((reco2) => (
        <MReco2 mangaReco2={reco2} key={reco2.name} />
      ))}
    </div>
  );
}

export default Recommendation2;
