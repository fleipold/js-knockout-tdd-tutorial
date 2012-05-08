var ViewModel = function(){
    self = {}

    self.input = ko.observable('')

    self.calc = function(){
        var numericInput = parseInt(self.input());
        if (numericInput=NaN){
            return;
        }
        var numericOutput = 2 * numericInput;

        self.output("" + numericOutput);
    }

    self.output = ko.observable('');

    return self;
}
