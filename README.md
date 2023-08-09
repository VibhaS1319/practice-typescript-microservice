# practice-typescript-microservice
This repository is to practice on microservice with node and typescript
3.1 Create a project directory E.g- 'practice-typescript-microservice'

3.2  Initialize a node project inside your new folder by using the following command, it will prompt for several details. Press enter to accept the defaults for now.

            npm init

3.3  Look for package.json, created by the above command.

3.4  Install typescript by using the below command-

       npm i typescript --save-dev

3.5  Enter the below command for creating tsconfig.json-

       npx -p typescript tsc --init

3.6  Install all dependencies required to build and run your application by using  

       below commands-

           npm i express dayjs cors bcrypt config cookie-parser jsonwebtoken    

           lodash nanoid pino pino-pretty class-validator class-transformer reflect  

           metadata

       

         npm i @types/express @types/jsonwebtoken @types/bcrypt  

        @types/body-parser @types/config @types/cookie-parser @types/cors     

        @types/lodash  @types/nanoid @types/node @types/pino ts-node --save-

         dev

3.7  Create src folder inside your project repo

3.8 Create server.ts file inside src.

3.9  Add required code in server.ts

3.10 Add nodemon using below command, it automatically restarts node server when file changes are detected in a specific directory-

     npm i nodemon

3.11 Add a nodemon.json file at the same level as package.json

3.12 Update the package.json file to enable nodemon.

3.13 Run one of the below commands to start your server and complete the   

       setup.

        npm run dev  

        or 

        yarn run dev

        Set up is completed !!!

