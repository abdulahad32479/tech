namespace UserService {
  export const authenticateUser = async (email: string) => {
    const body = JSON.stringify({
      email,
    });

    const res = await fetch("/api/auth", {
      method: "POST",
      body,
    });

    const user: IUser = await res.json();

    return user;
  };
}

export default UserService;
