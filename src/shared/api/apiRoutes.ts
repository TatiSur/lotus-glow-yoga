const baseUrl = process.env.API_BASE_URL;

export const apiRoutes = {
  instructors: `${baseUrl}/api/instructors`,
  instructorsWithSessionTypes: `${baseUrl}/api/instructors-with-session-types`,
  yogaTypes: `${baseUrl}/api/yoga-types`,
  sessionTypes: `${baseUrl}/api/session-types`,
  subscription: `${baseUrl}/api/subscription`,
};
