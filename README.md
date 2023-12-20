# url-shortener
It is a Url shortening application .It takes a long URL and generates a shortened version that redirects to the original URL.

Frontend Deployed Link - https://amazing-sfogliatella-e39a1e.netlify.app/

Backend Deployed Link - https://tough-bee-flip-flops.cyclic.app/

**All Routes**

- `POST /shorten` route - To short a long url.
- `GET /allUrls` route - To get all the short Urls created by the user.
- `GET /:shortid` route - To redirect the user to the original url through short url.
- `POST /register` route - To register a new user's Details
- `POST /login` route - To login a already existed user.


**Packages installed**

1. `express` - Used for making the server easier and more robust.
2. `nodemon` - Used to automatically restart the application after changes happen in the file.
3. `cors` - CORS allows servers to specify who can access their resources and under what conditions.
4. `mongoose` - To connect MongoDB database with the server.
5. `dotenv` - To secure MongoDB sensitive information.
6. `short-unique-id` - To generate a short url.
7. `jsonwebtoken` - To generate a token.
8. `bcrypt` - To hash the password provided by the user.
