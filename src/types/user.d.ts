export type UserToken = string

export type UserInfo = {
  username?: string
  nickName?: string
  signature?: string
  avatar?: string
  work?: string
}

export interface UserState {
  token: UserToken
  userInfo: UserInfo
}
