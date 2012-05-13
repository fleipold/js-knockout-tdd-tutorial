var DuplicatorExample2 = function(){
    self = {}


    self.input = ko.observable('');

    self.inputValidation = ko.observable(true);

    var validation = new RegExp("^\\d*$");

    self.calc = function(){
        var input = self.input();

        if (! validation.test(input)){
            self.inputValidation(false);
            self.output("");
            return;
        }

        self.inputValidation(true);
        var numericInput = parseInt(input);

        var numericOutput = 2 * numericInput;
        self.output("" + numericOutput);
    }

    self.output = ko.observable('');

    return self;
}
