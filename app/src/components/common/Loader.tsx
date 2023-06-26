import { PulseLoader } from 'react-spinners';
import { Center } from './Stack';

export const Loader = () => {
  return (
    <Center w="100%" h="100%">
      <PulseLoader size={8} color="#bbbbbb" speedMultiplier={0.6} />
    </Center>
  );
};
