(function() {
  angular.module('builder.components', ['builder', 'validator.rules'])
  .config([
    '$builderProvider', function($builderProvider) {
      $builderProvider.registerComponent('textInput', {
        group: 'Default',
        label: 'Text Input',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        validationOptions: [
          {
            label: 'none',
            rule: '/.*/'
          }, {
            label: 'number',
            rule: '[number]'
          }, {
            label: 'email',
            rule: '[email]'
          }, {
            label: 'url',
            rule: '[url]'
          }
        ],
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <input type=\"text\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '<label class="control-label">Description</label>\n        '+
        '<input type="text" ng-model=\"description\" class="form-control"/>\n    '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
        '<label class="control-label">Placeholder</label>\n       '+
        '<input type="text" ng-model=\"placeholder\" class="form-control"/>\n  '+ 
        '</div>\n    <div class=\"checkbox\">\n        '+
        '<label>\n            '+
        '<input type="checkbox" ng-model=\"required\" />\n            '+
        'Required</label>\n    '+
        '</div>\n     '+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      });
      $builderProvider.registerComponent('textArea', {
        group: 'Default',
        label: 'Text Area',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <textarea type=\"text\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" rows='6' placeholder=\"{{placeholder}}\"/>\n        <p class='help-block'>{{description}}</p>\n   </div>\n</div>",
        //templateUrl: 'popup.html',
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '<label class="control-label">Description</label>\n        '+
        '<input type="text" ng-model=\"description\" class="form-control"/>\n    '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
        '<label class="control-label">Placeholder</label>\n       '+
        '<input type="text" ng-model=\"placeholder\" class="form-control"/>\n  '+ 
        '</div>\n    <div class=\"checkbox\">\n        '+
        '<label>\n            '+
        '<input type="checkbox" ng-model=\"required\" />\n            '+
        'Required</label>\n    '+
        '</div>\n     '+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      
      });
      $builderProvider.registerComponent('checkbox', {
        group: 'Default',
        label: 'Checkbox',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        options: ['value one', 'value two'],
        arrayToText: true,
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <input type='hidden' ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\"/>\n        <div class='checkbox' ng-repeat=\"item in options track by $index\">\n            <label><input type='checkbox' ng-model=\"$parent.inputArray[$index]\" value='item'/>\n                {{item}}\n            </label>\n        </div>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        //popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required\n        </label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '<label class="control-label">Description</label>\n        '+
        '<input type="text" ng-model=\"description\" class="form-control"/>\n    '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
       
        '<input type="text" ng-model=\"placeholder\" class="form-control"/>\n  '+ 
         '<label class="control-label">Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n '+
        '</div>\n     '+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      });
      $builderProvider.registerComponent('datefile', {
        group: 'Default',
        label: 'Date Filed',
        description: 'description',
        value:'value',
        placeholder: 'placeholder',
        required: false,
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <input  type=\"date\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        //popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n      </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
        '</div>\n    <div class=\"checkbox\">\n        '+
        '<label>\n            '+
        '<input type="checkbox" ng-model=\"required\" />\n            '+
        'Required</label>\n    '+
        '</div>\n     '+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      });
      $builderProvider.registerComponent('time', {
        group: 'Default',
        label: 'Time',
        description: 'description',
        value:'value',
        placeholder: 'placeholder',
        required: false,
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <input  type=\"time\" ng-model=\"inputText\" validator-required=\"{{required}}\" validator-group=\"{{formName}}\" id=\"{{formName+index}}\" class=\"form-control\" placeholder=\"{{placeholder}}\"/>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        //popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n      </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
        '</div>\n    <div class=\"checkbox\">\n        '+
        '<label>\n            '+
        '<input type="checkbox" ng-model=\"required\" />\n            '+
        'Required</label>\n    '+
        '</div>\n     '+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      });
      $builderProvider.registerComponent('file', {
        group: 'Default',
        label: 'File Upload',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        template: "<div class=\"form-group\">\n <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n<input type=\"text\" placeholder=\"file\" ng-model=\"inputText\" ng-hide=\"true\"> <div class=\"col-sm-1\">		<div class=\"file-upload\"><input type=\"file\" file-model=\"myFile\"/> \n<input type=\"button\" ng-click=\"uploadFile()\" class='btn btn-sm btn-primary' value=\"upload me\">{{name}}</div></div>  </div>",

        //template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-7\">\n <img id=\"blah\" class=\"img\" src=\"assets/img/user/{{File}}\" alt=\"your image\" width=\"100\" height=\"100\"/> <input type=\"text\" placeholder=\"file\" ng-model=\"inputText\" ng-hide=\"true\">   <div class=\"file-upload\"><input type=\"file\" file-model=\"myFile\"/> \n <input type=\"button\" ng-click=\"uploadFile()\" class='btn btn-sm btn-primary' value=\"upload me\">{{name}}</div></div>  </div>\n</div>",
        //popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n      </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
        '</div>\n    <div class=\"checkbox\">\n        '+
        '<label>\n            '+
        '<input type="checkbox" ng-model=\"required\" />\n            '+
        'Required</label>\n    '+
        '</div>\n     '+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      });
     $builderProvider.registerComponent('image', {
        group: 'Default',
        label: 'Image',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        template: "<div class=\"form-group\">\n <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n <div class=\"col-sm-3\">\n <img id=\"blah\" class=\"img\" src=\"assets/img/user/{{File}}\" alt=\"your image\" width=\"100\" height=\"100\"/></div><input type=\"text\" placeholder=\"file\" ng-model=\"inputText\" ng-hide=\"true\"> <div class=\"col-sm-1\">		<div class=\"file-upload\"><input type=\"file\" file-model=\"myFile\" style=\"width:1500%\"/> \n<input type=\"button\" ng-click=\"uploadFile()\" class='btn btn-sm btn-primary' value=\"upload me\">{{name}}</div></div>  </div>",
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
        '</div>\n    <div class=\"checkbox\">\n        '+
        '<label>\n            '+
        '<input type="checkbox" ng-model=\"required\" />\n            '+
        'Required</label>\n    '+
        '</div>\n     '+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      });
      /*$builderProvider.registerComponent('star', {
        group: 'Default',
        label: 'Star Rating',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        template: "<div class=\"form-group\">\n  <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n <div class=\"rating-wrapper\"><input type=\"radio\" class=\"rating-input\" id=\"rating-input-1-5\" name=\"rating-input-1\" /><label for=\"rating-input-1-5\" class=\"rating-star\"></label><input type=\"radio\" class=\"rating-input\" id=\"rating-input-1-4\" name=\"rating-input-1\" /><label for=\"rating-input-1-4\" class=\"rating-star\"></label><input type=\"radio\" class=\"rating-input\" id=\"rating-input-1-3\" name=\"rating-input-1\" /><label for=\"rating-input-1-3\" class=\"rating-star\"></label><input type=\"radio\" class=\"rating-input\" id=\"rating-input-1-2\" name=\"rating-input-1\" /><label for=\"rating-input-1-2\" class=\"rating-star\"></label><input type=\"radio\" class=\"rating-input\" id=\"rating-input-1-1\" name=\"rating-input-1\" /><label for=\"rating-input-1-1\" class=\"rating-star\"></label></div>  <p class='help-block'>{{description}}</p>\n </div>",
        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n      </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });*/
      $builderProvider.registerComponent('radio', {
        group: 'Default',
        label: 'Radio',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        options: ['value one', 'value two'],
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>\n    <div class=\"col-sm-8\">\n  <div class='radio' ng-repeat=\"item in options track by $index\">\n  <label><input name='{{formName+index}}' ng-model=\"$parent.inputText\" validator-group=\"{{formName}}\" value='{{item}}' type='radio'/>\n                {{item}}\n            </label>\n        </div>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        //popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '<label class="control-label">Description</label>\n        '+
        '<input type="text" ng-model=\"description\" class="form-control"/>\n    '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
       
        '<input type="text" ng-model=\"placeholder\" class="form-control"/>\n  '+ 
         '<label class="control-label">Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n '+
        '</div>\n     '+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      });
      $builderProvider.registerComponent('star', {
        group: 'Default',
        label: 'Star Rating',
        description: 'description',
        placeholder: 'placeholder',
        options: ['1', '2', '3', '4', '5'],
        arrayToText: true,
        template: "<div class=\"form-group\">\n <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>    <div class=\"col-sm-8\"> <input ng-repeat=\"item in options track by $index\" name='{{formName+index}}' ng-model=\"$parent.inputText\" validator-group=\"{{formName}}\" value='{{item}}' type='radio'/></div></div></div>",
        //template: "<div class=\"form-group\">\n <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>   <div class=\"rating\"><input ng-repeat=\"item in options track by $index\" name='{{formName+index}}' ng-model=\"$parent.inputText\" validator-group=\"{{formName}}\" type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" /><label class = \"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label><input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label class = \"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label><input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label class = \"full\" for=\"star3\" title=\"Meh - 3 stars\"></label><input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label class = \"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label><input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label class = \"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label></div></div>",
        //popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required\n        </label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '<label class="control-label">Description</label>\n        '+
        '<input type="text" ng-model=\"description\" class="form-control"/>\n    '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
       
        '<input type="text" ng-model=\"placeholder\" class="form-control"/>\n  '+ 
         '<label class="control-label">Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n '+
        '</div>\n     '+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      });
      $builderProvider.registerComponent('evaluation', {
        group: 'Default',
        label: 'Evaluation',
        description: 'description',
        placeholder: 'placeholder',
        options: ['1', '2', '3', '4', '5','6','7','8','9','10'],
        arrayToText: true,
        template: "<div class=\"form-group\">\n <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>    <div class=\"col-sm-8\"> <input ng-repeat=\"item in options track by $index\" name='{{formName+index}}' ng-model=\"$parent.inputText\" validator-group=\"{{formName}}\" value='{{item}}' type='radio'/></div></div></div>",
        //template: "<div class=\"form-group\">\n <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>   <div class=\"rating\"><input ng-repeat=\"item in options track by $index\" name='{{formName+index}}' ng-model=\"$parent.inputText\" validator-group=\"{{formName}}\" type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" /><label class = \"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label><input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label class = \"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label><input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label class = \"full\" for=\"star3\" title=\"Meh - 3 stars\"></label><input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label class = \"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label><input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label class = \"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label></div></div>",
       //popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required\n        </label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
       popoverTemplate: '<form>\n'+    
       '<div class=\"form-group\">\n   '+     
       '<label class="control-label">Label</label>\n   '+     
       '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
       '</div>\n    <div class=\"form-group\">\n        '+
       '<label class="control-label">Description</label>\n        '+
       '<input type="text" ng-model=\"description\" class="form-control"/>\n    '+
       '</div>\n    '+
       '<div class=\"form-group\">\n        '+
      
       '<input type="text" ng-model=\"placeholder\" class="form-control"/>\n  '+ 
        '<label class="control-label">Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n '+
       '</div>\n     '+
       '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
       '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
       '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
       '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
       '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
       '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
       '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
       '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
       '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
       '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

       '<hr/>\n    '+
       '<div class="form-group">\n        '+
       '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
       '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
       '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
       '</div>\n'+
       '</form>'+ '',
      });
        $builderProvider.registerComponent('likedislike', {
        group: 'Default',
        label: 'choix',
        description: 'description',
        placeholder: 'placeholder',
        options: ['like', 'dislike'],
        arrayToText: true,
        template: "<div class=\"form-group\">\n <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>    <div class=\"col-sm-8\"> <input ng-repeat=\"item in options track by $index\" name='{{formName+index}}' ng-model=\"$parent.inputText\" validator-group=\"{{formName}}\" value='{{item}}' type='radio'/></div></div></div>",
        //template: "<div class=\"form-group\">\n <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}</label>   <div class=\"rating\"><input ng-repeat=\"item in options track by $index\" name='{{formName+index}}' ng-model=\"$parent.inputText\" validator-group=\"{{formName}}\" type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" /><label class = \"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label><input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label class = \"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label><input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label class = \"full\" for=\"star3\" title=\"Meh - 3 stars\"></label><input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label class = \"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label><input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label class = \"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label></div></div>",
        //popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required\n        </label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '<label class="control-label">Description</label>\n        '+
        '<input type="text" ng-model=\"description\" class="form-control"/>\n    '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
       
        '<input type="text" ng-model=\"placeholder\" class="form-control"/>\n  '+ 
         '<label class="control-label">Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n '+
        '</div>\n     '+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      });
      /*$builderProvider.registerComponent('likedislike', {
        group: 'Default',
        label: 'likedislike',
        description: 'description',
        placeholder: 'placeholder',
        options: [0,0],
        arrayToText: true,
        template: "<input type=\"button\" value=\"Like\" ng-click=\"incrementLike(technology)\" /> |<input type=\"button\" value=\"Dislike\" ng-click=\"incrementDislike(technology)\" />",

        popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type='checkbox' ng-model=\"required\" />\n            Required\n        </label>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
      });*/
      return $builderProvider.registerComponent('select', {
        group: 'Default',
        label: 'Select',
        description: 'description',
        placeholder: 'placeholder',
        required: false,
        options: ['value one', 'value two'],
        template: "<div class=\"form-group\">\n    <label for=\"{{formName+index}}\" class=\"col-sm-4 control-label\">{{label}}</label>\n    <div class=\"col-sm-8\">\n        <select ng-options=\"value for value in options\" id=\"{{formName+index}}\" class=\"form-control\"\n            ng-model=\"inputText\" ng-init=\"inputText = options[0]\"/>\n        <p class='help-block'>{{description}}</p>\n    </div>\n</div>",
        //popoverTemplate: "<form>\n    <div class=\"form-group\">\n        <label class='control-label'>Label</label>\n        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Description</label>\n        <input type='text' ng-model=\"description\" class='form-control'/>\n    </div>\n    <div class=\"form-group\">\n        <label class='control-label'>Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n    </div>\n\n    <hr/>\n    <div class='form-group'>\n        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'/>\n        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'/>\n        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'/>\n    </div>\n</form>"
        popoverTemplate: '<form>\n'+    
        '<div class=\"form-group\">\n   '+     
        '<label class="control-label">Label</label>\n   '+     
        '<input type="text" ng-model=\"label\" validator=\"[required]\" class="form-control"/>\n    '+
        '</div>\n    <div class=\"form-group\">\n        '+
        '<label class="control-label">Description</label>\n        '+
        '<input type="text" ng-model=\"description\" class="form-control"/>\n    '+
        '</div>\n    '+
        '<div class=\"form-group\">\n        '+
       
        '<input type="text" ng-model=\"placeholder\" class="form-control"/>\n  '+ 
         '<label class="control-label">Options</label>\n        <textarea class=\"form-control\" rows=\"3\" ng-model=\"optionsText\"/>\n '+
        '</div>\n     '+
        '<label>Choix graphique :</label> '+
        '<hr/>'+
        '<label>\n <input type="radio" id="Bar chart" name="drone" value="Bar chart"  ng-model=\"res\" />\n  Bar chart</label>\n '+
        '<label>\n <input type="radio" id="Line chart" name="drone" value="Line chart" ng-model=\"res\" />\n  Line chart</label>\n '+
        '<label>\n <input type="radio" id="Pie chart" name="drone" value="Pie chart" ng-model=\"res\" />\n  Pie chart</label>\n '+
        '<label>\n <input type="radio" id="Radar chart" name="drone" value="Radar chart" ng-model=\"res\" />\n  Radar chart</label>\n '+
        '<label>\n <input type="radio" id="Polar area" name="drone" value="Polar area" ng-model=\"res\" />\n  Polar area</label>\n '+
        '<label>\n <input type="radio" id="Doughnut chart" name="drone" value="Doughnut chart"  ng-model=\"res\" />\n  Doughnut chart</label>\n '+
        '<label>\n <input type="radio" id="Horizontal bars" name="drone" value="Horizontal bars" ng-model=\"res\" />\n  Horizontal bars</label>\n '+
        '<label>\n <input type="radio" id="Grouped bar" name="drone" value="Grouped bar" ng-model=\"res\" />\n  Grouped bar</label>\n '+
        '<label>\n <input type="radio" id="Mixed charts" name="drone" value="Mixed charts" ng-model=\"res\" />\n  Mixed charts</label>\n '+
        '<label>\n <input type="radio" id="Bubble chart" name="drone" value="Bubble chart" ng-model=\"res\" />\n  Bubble chart</label>\n '+

        '<hr/>\n    '+
        '<div class="form-group">\n        '+
        '<input type="submit" ng-click=\"popover.save($event)\" class="btn btn-primary" value="Save"/>\n   '+     
        '<input type="button" ng-click=\"popover.cancel($event)\" class="btn btn-default" value="Cancel"/>\n '+       
        '<input type="button" ng-click=\"popover.remove($event)\" class="btn btn-danger" value="Delete"/>\n  '+  
        '</div>\n'+
        '</form>'+ '',
      });
    
    }
  ]);

}).call(this);
