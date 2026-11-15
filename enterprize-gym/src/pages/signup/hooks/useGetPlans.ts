import { useQuery } from "@tanstack/react-query";

import { getPlans } from "../api/signupApi";

export function useGetPlans() {
  return useQuery({
    queryKey: ["signup", "plans"],
    queryFn: getPlans,
    staleTime: 5 * 60 * 1000,
  });
}