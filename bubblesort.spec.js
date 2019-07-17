
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an unsorted array', function(){
      expect( bubbleSort([6,3,7,2,8,1]) ).toEqual( [1,2,3,6,7,8] );
    });

  });



