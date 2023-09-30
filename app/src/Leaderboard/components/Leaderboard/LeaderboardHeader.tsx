import { HStack, Spacer } from '@shared/ui-kit';

type LeaderboardHeaderProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function LeaderboardHeader({
  left,
  right,
}: LeaderboardHeaderProps) {
  return (
    <HStack w="100%" spacing="2rem">
      {left}
      <Spacer />
      {right}
    </HStack>
  );
}
