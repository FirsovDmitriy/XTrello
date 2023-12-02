const OStatus = {
  ACTIVE: 'active',
  BLOCKED: 'blocked',
  DELETED: 'deleted'
} as const;

const ORoles = {
  USER: 'user',
  ADMIN: 'admin'
} as const

export type IUser = {
  id: string
  avatar: string
  name: string
  about: string
  status: typeof OStatus[keyof typeof OStatus]
  login: string
  password: string
  roles: typeof ORoles[keyof typeof ORoles]
}