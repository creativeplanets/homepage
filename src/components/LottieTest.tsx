import Lottie from 'react-lottie';
import Planet from '@/assets/Planet.json';

export default function LottieTest() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: Planet,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      style={{ cursor: 'default' }}
      isClickToPauseDisabled
      options={options}
    />
  );
}
