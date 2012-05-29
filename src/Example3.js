var DuplicatorExample3 = function(){
    self = {}

    self.input = ko.observable('');

    self.inputValidation = ko.observable(true);

    self.validationMessage = ko.observable('');

    self.memory = ko.observable('');

    self.hasSuccessfullySaved = ko.observable(false);

    self.hasSuccessfullyLoaded = ko.observable(false);

    var validation = new RegExp("^\\d*$");

    self.calc = function(){
        var input = self.input();

        if (! validation.test(input) || input.length < 1){
            self.inputValidation(false);
            self.validationMessage('You must enter a number!');
            self.output('');
            return;
        }

        self.inputValidation(true);
        
        var numericInput = parseInt(input);
        var numericOutput = 2 * numericInput;

        self.validationMessage('');
        self.output('' + numericOutput);
        self.save();
    }

    self.save = function(){ 
        var data = { key_memory: self.input() };
        jQuery.ajax({
          url: "http://api.openkeyval.org/store/",
          data: data,
          dataType: "jsonp",
          success: function(data){
            self.hasSuccessfullySaved(true);
            self.load();
          }
        });
    }

    self.load = function(){ 
        $.ajax({
          url: "http://api.openkeyval.org/key_memory",
          dataType: "jsonp",
          success: function(data){
            self.hasSuccessfullyLoaded(true);
            self.memory(''+data);
          }
        });
    }

    self.output = ko.observable('');

    return self;
}
