import { useOnlineStatus } from "../hooks/useOnlineStatus";
import NoInternet from "../../pages/no-internet/no-internet";

export default function OfflineGuard({ children }: { children: React.ReactNode }) {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <NoInternet />;
  }

  return <>{children}</>;
}
