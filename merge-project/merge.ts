interface Collection {
    length: number;
    [index: number]: number;
  }
  
    
export function merge(collection1: Collection, collection2: Collection, collection3: Collection): Collection {
    const mergedArray: number[] = [];
  
    let i1 = 0;
    let i2 = 0;
    let i3 = collection3.length - 1;
  
    while (i1 < collection1.length && i2 < collection2.length && i3 >= 0) {
      // Compare and add elements in order
      if (collection1[i1] <= collection2[i2] && collection1[i1] <= collection3[i3]) {
        mergedArray.push(collection1[i1]);
        i1++;
      } else if (collection2[i2] <= collection1[i1] && collection2[i2] <= collection3[i3]) {
        mergedArray.push(collection2[i2]);
        i2++;
      } else {
        mergedArray.push(collection3[i3]);
        i3--;
      }
    }
  
    // Add remaining elements from collection1 and collection2
    while (i1 < collection1.length) {
      mergedArray.push(collection1[i1]);
      i1++;
    }
  
    while (i2 < collection2.length) {
      mergedArray.push(collection2[i2]);
      i2++;
    }
  
    return mergedArray;
  }

  // Example usage:
  const collection1 = [1, 3, 5];
  const collection2 = [2, 4, 6];
  const collection3 = [-1, -2, -3];
  const merged = merge(collection1, collection2, collection3);
  console.log(merged);