const user = ref(null);

export default function useAuthUser() {
  /**
   * Login with email and password
   */
  const useLogin = async ({ email, password }) => {};

  /**
   * Logout
   */
  const logout = async () => {};

  /**
   * Check if the user is logged in or not
   */
  const isLoggedIn = () => {};

  /**
   * Register
   */
  const register = async ({ email, password, ...meta }) => {};

  /**
   * Update user email, password, or meta data
   */
  const update = async (data) => {};

  /**
   * Send user an email to reset their password
   * (ie. support "Forgot Password?")
   */
  const sendPasswordRestEmail = async (email) => {};

  return {
    user,
    useLogin,
    isLoggedIn,
    logout,
    register,
    update,
    sendPasswordRestEmail,
    //maybeHandleEmailConfirmation,
  };
}