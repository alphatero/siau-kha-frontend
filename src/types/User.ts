export type User = {
  username: string
  password: string
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
  user: string;
}
