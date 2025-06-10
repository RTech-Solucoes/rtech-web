import Lottie from 'react-lottie';
import botAnim from '@/animations/bot.json';

export const Bot = ({...props}) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: botAnim,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Lottie
      options={options}
      speed={.5}
      isClickToPauseDisabled
      {...props}
    />
  )
}

