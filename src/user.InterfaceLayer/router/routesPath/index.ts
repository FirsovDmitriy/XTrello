const RoutesPath = {
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
  PROFILE: '/profile',
  EDIT_PROFILE: '/profile/edit',
  BOARD: '/board',
  CARD_TASK: 'board/card-task/:id',
  CREATE_TASK: '/tasks/create',
  NOT_FOUND: '*',
} as const;

export default RoutesPath