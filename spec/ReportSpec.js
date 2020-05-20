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
    })
})
