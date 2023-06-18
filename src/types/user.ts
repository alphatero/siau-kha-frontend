export type User = {
  username: string
  password: string
}

export enum Role {
  admin = '超級管理員',
  waiter = '外場人員',
  kitchen = '廚房人員',
  manager = '管理者',
  counter = '櫃檯人員',
}

export type ResType = {
  status: string;
  message: string;
  data: {
    id: string;
    token: string;
    user_name: string;
    user_role: string;
    user_account: string;
  } | ''
}

export type ResDataType = {
  status: 'success'
  user: {
    name: string;
    role: string;
    token: string;
  };
} | {
  status: 'error'
  message: string;
  user?: string;
}
