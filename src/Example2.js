var DuplicatorExample2 = function(){
    self = {}


    self.input = ko.observable('');

    self.inputValidation = ko.observable(true);

    self.validationMessage = ko.observable('');

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
    }

    self.output = ko.observable('');

    return self;
}
