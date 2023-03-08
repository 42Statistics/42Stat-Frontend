import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <>
      <p>Header & Sidebar</p>
      <main>
        <Outlet />
      </main>
    </>
  );
};
