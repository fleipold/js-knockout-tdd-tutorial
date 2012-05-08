describe("ViewModel", function() {
    var viewModel;

    beforeEach(function() {
        viewModel = ViewModel();
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
        expect(viewModel.output()).toEqual("20");
    })


});
