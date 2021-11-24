describe('isOdd()', function() {
    it('should work', function () {
        expect(isOdd(1)).toBe(true)
        expect(isOdd(3)).toBe(true)
        expect(isOdd(0)).toBe(false)
    })
})
