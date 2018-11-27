**Live**  
https://adoption.foxflare.com  

**Emphasis Tooling**  
Weaving a variety of tools together to ensure clean execution  
Balancing/modifying Airbnb eslint rules in order for it to play nice with JsPrettier syntax formatting. To see rule adjustments -> /.eslintrc.json  
Wrote Jest unit test for one of the fetch executions  

**Tools used**  
Customized version of "Create React App" (ejected) (React v16.6)  
Typechecking -> Flow (https://flow.org/en/)  
Automated testing -> Jest (https://jestjs.io/en/)  
Masonary layout -> react-stack-grid (https://github.com/tsuyoshiwada/react-stack-grid)  
Leveraged  unsplash.com API to get correct thumbnail dimensions required by react-stack-grid   
Responsive grid -> Bootstrap  
Airbnb's Eslint config: https://github.com/airbnb/javascript https://eslint.org  

**Ideally: Make Scaleable for Large Data Set**  
Fetch process would be configured to consume bite-size data sets to fill out page on user scroll

**Known Issues**  
On mobile, 3rd party tool "react-image-lightbox" intermittently does not render whole image  
3rd party tool "react-stack-grid" re-adds dom elements on popup open and close  

**Commands**  
yarn start  
yarn build  
yarn test  
yarn run flow  
