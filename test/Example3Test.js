describe("Duplicator Example 3", function() {
    var viewModel;

    beforeEach(function() {
        viewModel = DuplicatorExample3();
    });

    it("initializes", function() {
        expect(viewModel.input()).toEqual("");
        expect(viewModel.output()).toEqual("");
    });

    it("entering text doesn't trigger calculation", function(){
        viewModel.input("10");
        expect(viewModel.output()).toEqual("");

    });

    it("hitting the calc button triggeres the calculation", function(){
        viewModel.input("10");
        viewModel.calc();

        expect(viewModel.inputValidation()).toEqual(true);
        expect(viewModel.output()).toEqual("20");
    });

    it("should validate that input is numeric", function(){
        viewModel.input("garbage");
        viewModel.calc();

        expect(viewModel.inputValidation()).toEqual(false);
    })
    
    it("should validate that input is not empty", function(){
        viewModel.input("");
        viewModel.calc();

        expect(viewModel.inputValidation()).toEqual(false);
    })

    it("should not indicate validation error, after input is corrected", function(){
        viewModel.input("garbage");
        viewModel.calc();

        expect(viewModel.inputValidation()).toEqual(false);

        viewModel.input("101");
        viewModel.calc();

        expect(viewModel.inputValidation()).toEqual(true);
    });

    it("should show a validation message to the user when input is not numeric", function(){
        viewModel.input("garbage");
        viewModel.calc();

        expect(viewModel.validationMessage()).toEqual("You must enter a number!");
    });

    it("should be able to save and retrieve input from a datastore and display to user", function(){
        var lastResult = "2";

        viewModel.input(lastResult);
        viewModel.calc();

        waitsFor(function() {
            return viewModel.hasSuccessfullySaved() && viewModel.hasSuccessfullyLoaded();
        }, "The Value should be saved and loaded");

        runs(function(){            
            expect(viewModel.memory()).toEqual(lastResult);
        });
    });

});
