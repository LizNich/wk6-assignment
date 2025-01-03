import PinkImage from "../assets/threeelfpink.png";
import squeakSound from "../assets/squeak.mp3";

export default function UpgradePink({ buyPink, pinkCount }) {
  const clickSound = new Audio(squeakSound);
  const handleClick = () => {
    clickSound.play();
    buyPink();
  };
  return (
    <div className="upgradeOptions">
      <div>Speedy Pink Elf</div>
      <div>500</div>
      <div>+100</div>

      <div>
        <button id="pink-btn" onClick={handleClick}>
          <img
            src={PinkImage}
            width={50}
            height={50}
            alt="A Pink Elf"
            title="Buy a Pink Elf - click here!"
          />
        </button>
      </div>
      <div>{pinkCount}</div>
    </div>
  );
}
