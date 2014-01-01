This package is based on my blogpost http://www.bicobic.com/posts/CNBkEbaA3BeMNQamk
that describes the ways to add a npm-module to your project

This example descibes how to add npm packages with the meteorite module meteor-npm

1. *mrt create meteorite-npm-integration*  
 -- delete all files in this folder
 
2. *mrt add npm*  
 This installs the moddule npm. After installation refresh your projectdirectory and checkout the new created file packages.json
 
3. Open *packages.json*
 Add your dependencies with module name and version. Dont forget to use doublequots! Singlequots produce some errors.
 
      {
        "hashids": "0.3.3"
      } 

4. Create a startupfile where we want to use our dependency  

      Meteor.startup(function() {
        //This loads the NPM module you have specified in your packages.json
        var Hashids = Meteor.require('hashids');
        //Now you can use this package like always :)
        var hashids = new Hashids('this is my salt');
        var numbers = hashids.decrypt("NkK9");
        console.log(numbers);
        //prints 12345
      });
      
5. Start your project *mrt*

