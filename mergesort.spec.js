describe('Merge Sort', function(){
    it('handles an empty array', function(){
      expect( mergeSort([]) ).toEqual( [] );
    });

    it('handles an unsorted array', function(){
      expect( mergeSort([6,3,7,2,8,1]) ).toEqual( [1,2,3,6,7,8] );
    });

  });
