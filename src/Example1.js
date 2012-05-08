var ViewModel = function(){
    self = {}

    self.input = ko.observable('')

    self.calc = function(){
        var input = self.input();
        var numericInput = parseInt(input);

        var numericOutput = 2 * numericInput;
        self.output("" + numericOutput);
    }

    self.output = ko.observable('');

    return self;
}
