This package is based on my blogpost http://www.bicobic.com/posts/CNBkEbaA3BeMNQamk
that describes the ways to add a npm-module to your project

Adding npm packages this way works with meteor the same way as with meteorite:

1. *mrt create npmintegration* OR *meteor create npmintegration*

  -- delete all files in this folder

2. Packageconfiguration 

  -mkdir packages  
  -cd packages  
  --mkdir hashids  
  --cd hashids  
  ---touch package.js  
      
      Package.describe({
        summary: "Adding the npm-module hashids."
      });
      
      Npm.depends({
        hashids: '0.3.3' // Where x.x.x is the version, e.g. 0.3.2
      });
      
      Package.on_use(function (api) {
          api.add_files('hashids.js', 'server'); // Or 'client', or ['server', 'client']
        
          if(api.export)
            api.export('Hashids');  
      });   

  ---touch hashids.js  
  
      Hashids = Npm.require("hashids");   
      
  ---cd ..  
  --cd ..  
  -mkdir server  
  -cd server  
  --touch startup.js 
   
      Meteor.startup(function() {
        var hashids = new Hashids('this is my salt');
        var numbers = hashids.decrypt("NkK9");
        console.log(numbers);
        //prints 12345
      });    
    

3. Add this package to your app  
 *meteor add hashids*
  
4. Start your project  
 *meteor* OR *mrt*
