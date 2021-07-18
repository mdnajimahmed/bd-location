# bd-location
A repository to support static bd location mapping by postcode. 

- The keys are division,district,thana,postcode,suboffice
- Yes, one postcode can have more than one suboffice attached to it! 
- Data source is sadly https://en.wikipedia.org/wiki/Postal_codes_in_Bangladesh 
- No upazila information is here, any contribution/ sugession is welcome.
- sls deploy - and your API is live. 
- I call the application at the application bootup and keep the data in the redux store to use it in several views. Since this is a static data, and not much in size with gzip(not implemented in this repo) over AWS cloudfront cache, I thought database and filter and search APIs wil be innecessary coimplication and make client side integration harder. You are welcome to fork and implement your own APIs. 
- Runs one AWS lamba with express as proxy inside as compute layer, exposed over API Gateway allowing everything to passthough. Be careful with typical sls deployment concerns such as code start.
- Modify CORS configuration as per your need.

#### Run it locally
- npm install
- sls offline start
- curl http://localhost:3000/dev/postal-codes

*This project is on https://www.serverless.com/ framework.*