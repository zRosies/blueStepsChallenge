import { validate } from "../utils/validation.js";
import { newUserObject } from "../lib/db.js";
// In case you want to instantiate new user object here just unccoment the import below
// import { UserHelper} from '../lib/db.js'

//  --------------------------------- MOCK API Controller ---------------------------------------

// Follow the steps (1 - 5) to uncomment the code

export async function mockAPI(userInfo) {
  // Added status and error fields just for fun.
  // Bonus here \/

  // ------------------------ 1- Uncomment the validation below ----------------------
  const fieldValidations = validate(userInfo);
  if (fieldValidations?.error) {
    return {
      message: "Field validation error",
      result: false,
      status: 400,
      error: fieldValidations.error,
    };
  }
  // ---------------------------------------------------------------------------------
  try {
    // I am already exporting the object instead of instatiating it here
    // But you can also instantiate it here using const newUser = new UserHelper();

    //--------------------- 2 - Then uncomment the object below  ---------------------
    const newUser = newUserObject;
    newUser.setAll(userInfo);
    // -------------------------------------------------------------------------------

    // If you want to check a mock Lib/DB error uncommetting one of these constructors below
    // newUser.setZip(null);
    // newUser.setName(null);
    // newUser.setCity(null);

    // ------------------------- 3 - Then uncomment the response below  --------------------
    const response = newUser.save();
    // ------------------------------------------------------------------------------------

    // You can also set the user info using the constructors as in the example below
    // newUser.setName(userInfo.name);
    // newUser.setEmail('email');
    // newUser.setAddress('address');
    // newUser.setEmergency('emergency');
    // newUser.setCity('city');
    // newUser.setZip('zip');

    // ----------------------- 4 - Then uncomment the responses below  --------------------
    if (response) {
      return {
        message: "user added to the database",
        result: true,
        status: 201,
        error: null,
      };
    } else {
      return {
        message: "Database error",
        result: false,
        status: 500,
        error: "Error during user creation",
      };
    }
    // ------------------------------------------------------------------------------------

    // ----- 5 - Comment the block below below when you uncomment all the blocks above -----
    // return {
    //   message: "user added to the database",
    //   result: true,
    //   status: 201,
    //   error: null,
    // };
    // ------------------------------------------------------------------------------------
  } catch (error) {
    return {
      message: error.message,
      result: false,
      status: 500,
      error: error.message,
    };
  }
}
