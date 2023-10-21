import { DesktopNavBar } from '@core/components/NavBar/Desktop';
import { Drawer } from '@shared/ui-kit';

type TabletNavDrawerViewProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const TabletNavDrawerView = ({
  isOpen,
  onClose,
}: TabletNavDrawerViewProps) => {
  return (
    <Drawer anchor="left" isOpen={isOpen} onClose={onClose}>
      <DesktopNavBar fixed={false} />
    </Drawer>
  );
};
