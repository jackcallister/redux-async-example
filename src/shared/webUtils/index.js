const webUtils = {

  fetchUser: function() {
    return new Promise((resolve, reject) => {

      // Fake API call with a username as the response

      const payload = {
        username: 'Username'
      };

      setTimeout(() => {
        resolve(payload);
      }, 1200);

    });
  }
}

export default webUtils
