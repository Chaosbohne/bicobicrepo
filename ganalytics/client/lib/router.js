Router.configure({
  layoutTemplate: 'layout',
  
  yieldTemplates: {
    'ganalytics': {to: 'ganalytics'}
  }
});

Router.map(function() {
  this.route('postsList', {
    path: '/',
    template: 'basic'
  });  
});