import { useNavigate, useParams } from "react-router-dom";

type ProfileType = "coaches" | "trainees" | "managers" | "plans";

export function useGymProfileNavigation(profileType: ProfileType) {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (profileId: string) => {
    if (!id) return;

    navigate(
      `/dashboard/superadmin/gym/${id}/${profileType}/${profileId}`
    );
  };
}