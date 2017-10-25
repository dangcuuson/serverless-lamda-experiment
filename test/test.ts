export const hello = async (event, context, cb) => {

    const response = {
      body: {
        message: 'hello world'
      }
    };

    cb(null, response);
  }
  