import { BsTriangleFill } from '@react-icons/all-files/bs/BsTriangleFill';

export const Arrow = ({ direction }: { direction: 'up' | 'down' }) => {
  return (
    <BsTriangleFill
      size="12px"
      color={direction === 'up' ? '#00C48C' : '#FF3D71'}
      style={{
        transform: direction === 'up' ? 'rotate(0deg)' : 'rotate(180deg)',
      }}
    />
  );
};
