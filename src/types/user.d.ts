export interface UserState {
  token?: string
  userInfo?: UserInfo
}

export interface UserInfo {
  userInfo: {
    username?: string
    nickName?: string
    signature?: string
    avatar?: string
    work?: string
  }
}
