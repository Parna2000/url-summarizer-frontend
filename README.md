# URL SUMMARIZER
This is a URL summarizer application which can summarize the content of a URL, if it is text based. The frontend of this application is made with react, the backend consist of Springboot and fastAPI. Here the frontend sends requests to the springboot server. The springboot server act as a middleman and sends the requests to the fastAPI which performs the actual summarization task using thisrd party API 'SMMRY API'.
The fastAPI server then sends the response to springboot server which eventually send it back to frontend. The resquest history is also recorded by the springboot server in PostgreSQL database.

Link to fastAPI server: https://github.com/Parna2000/url-summarizer-fastAPI.git
Link to springBoot server: https://github.com/Parna2000/url-summarizer/tree/main/backend/Spring-Boot

## URL SUMMARIZER FRONTEND
This is the frontend of the URL summarizer application. It is built with react and uses axios to interact with the api. To run this locally, follow these steps:
1. Fork the repository to your github account.
2. Clone it to local environment.
3. Run `npm install` to install all the dependencies.
4. Run `npm start` to run the application on localhost.

Hope you will like and enjoy the project!
