// TODO: Replace with actual API call
export const managerLoginApi = async (username: string, password: string) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // TODO: Backend integration here
  console.log("Manager login:", { username, password });

  return {
    success: true,
    data: {
      token: "mock-token",
      user: { username, role: "manager" }
    }
  };
};