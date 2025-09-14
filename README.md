Tilla Coding Challenge

Hello, Thanks for inviting me to the second round of interview process at Tilla. Please find attached the loom link for recording below -

https://www.loom.com/share/d4ca54d80db04320856056974691be1c?sid=353315b8-abeb-49cb-b1ba-a2c979afa77d

I have completed the tasks mentioned in the original README. In addition, I introduced a small optimization, a limit parameter to the API call allowing users to control the number of responses returned. This serves as a first step towards pagination. The recording of the original tasks along with this feature runs until 1:04:40.

Afterwards, I worked on an additional feature: converting the GET individual airport data API into a GraphQL endpoint (though this was not explicitly required in the README). I had to leave this part unfinished due to an error and the session time reaching close to 1:30:00. This section of the recording starts at 1:04:45.

Upon reviewing later, I discovered the issue was caused by the lack of normalization of IATA values, the backend expected uppercase values while the frontend was sending lowercase.

Questions

1. What are some edge cases you would take care of before shipping this to production?

    Few of the edge cases that we need to consider before pushing it to production are:

    a. Verify if iata values are unique across DB since duplicate iata values might cause errors
    b. Input sanitization in search bar
    c. Graceful handling of API failures in the frontend using Error boundary
    d. Handling of large datasets and latency of API calls.

2. How would you scale this to handle high amounts of traffic?

    a. Caching client side using inbuilt Apollo client functionality or server side caching using Redis
    b. Adding indexes in prisma schema for faster lookups
    c. Rate limiting APIs using inbuilt NestJS middleware
    d. Observability and logs for better understanding of points of failures
    e. Optimizing GraphQL responses across application to include only necessary data to reduce the size of the payload
    f. CDNs for faster delivery of data to nearby users



3. What's important for you to work well in a fully remote team?

    Personally, the two things I value the most in a fully remote team is clear communication about work/requierements through written documentation and a defined set of short term and long term goals to have a shared vision of where the product is headed. Along with this, sprint cycles and time blocks for certain specific activities like code reviews will be of great help as well.


Thank you. Looking forward to hearing from you.

