import axios from 'axios'

type User = {
  username: string
  password: string
}

export const login = async (user: User) => {
  const jwt = process.env.JWT_SECRET
  const { data } = await axios.post(
    `${process.env.API_URL}/login`,
    user,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  )
  return data
}
