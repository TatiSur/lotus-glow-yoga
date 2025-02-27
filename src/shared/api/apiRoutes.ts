const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiRoutes = {
  instructorsWithSessionTypes: `${baseUrl}/api/instructors-with-session-types`,
  yogaTypes: `${baseUrl}/api/yoga-types`,
  sessionTypes: `${baseUrl}/api/session-types`,
  subscription: `${baseUrl}/api/subscription`,
  bookSession: `${baseUrl}/api/book-session`,
  sessionScheduleDetails: (sessionTypeId: string) =>
    `${baseUrl}/api/session-schedule-details?sessionTypeId=${sessionTypeId}`,
};
