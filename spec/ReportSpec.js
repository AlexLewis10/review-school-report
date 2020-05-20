describe('Report', function () {
    var report

    beforeEach(function () {
        report = new Report()
    })

    describe('Returns the colour', function () {
        it('when given green it returns the colour green', function () {
            expect(report.returnColour("Green")).toEqual("Green")
        })

        it('when given amber it returns the colour amber', function () {
            expect(report.returnColour("Amber")).toEqual("Amber")
        })

        it('when given red it returns the colour red', function () {
            expect(report.returnColour("Red")).toEqual("Red")
        })
    })

    describe('Splits the string into an array', function () {
        it('when given a string with 2 or more words it separates to an array', function () {
            expect(report.splitString("Green, Green")).toEqual(["Green", "Green"])
        })
    })
})
