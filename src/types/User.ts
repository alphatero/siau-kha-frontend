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
  } | ""
}