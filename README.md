# hmrc-hackathon
Hackathon at HMRC

## Prerequisites
Node and npm are required to build and run this library. Node and npm installation
instructions can be found [https://docs.npmjs.com/getting-started/installing-node]

## Installation commands
- Install dependencies `npm install`
- Build scripts and css `npm run build`
- Setup self signed cert `openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`
- Start server `npm run start`

## Testing
Unit testing is accomplished using mocha, and tests are located in the `/test` directory
- Test command `npm run test`

## Additional info
Library entry point is in `/src/main.js`. The library compiles javascript code using
babel and webpack from ES6 to ES5. Build files are output to the `/build/` directory.

### Happy hacking
