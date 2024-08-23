# Register Routes

-http://127.0.0.1:3001/api/auth/register // create a new user

     ## Fields
      full_name (String) required  jacob
      email     (String) required  jacob@mail.com
      password  (String) required  12345678   (min: 6)
      confirm_password (String) required   12345678   (min: 6)
      currency   {String} optional NGN   CAD

    ## Response
      {
       "id": 3,
       "username": "jacob",
       "email": "jacob@mail.com",
       "password": "12345678",
       "created_at": "8/23/2024",
       "updated_at": "8/23/2024",
       "currency": "CAD"
      }

    ## Error Responses
      message("full name must be more than 3 characters")(400)
          ### reason
                - full name field is empthy

      message("please provide a valid email")(400)
          ### reason
                -  valid email address: example (John@mail.com)

      message("password must be at least six characters in length")(400)
          ### reason
                -  password not more than six characters

      message("password confirmation does not match password")(400)
          ### reason
                - confirm password not similar to password

# Login Routes
