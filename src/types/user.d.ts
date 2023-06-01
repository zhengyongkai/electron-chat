export type UserToken = string

export type UserInfo = {
  username?: string
  nickname?: string
  signature?: string
  avatar?: string
  work?: string
  sex: number
  id: number
}

export interface UserState {
  token: UserToken
  userInfo: UserInfo
}

export interface UserSearch {
  username?: string
  limit?: number
  page?: number
}
