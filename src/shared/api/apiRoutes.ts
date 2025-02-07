const baseUrl = process.env.API_BASE_URL;

export const apiRoutes = {
  instructors: `${baseUrl}/api/instructors`,
  yogaTypes: `${baseUrl}/api/yoga-types`,
  subscription: `${baseUrl}/api/subscription`,
};
