package sorting;

import general.GeneralOperations;

public class InsertionSort {

	public static void main(String[] args) {
		Integer[] array = { 14, 33, 27, 35, 10, 7, 24 };
		GeneralOperations.printArray(sort(array));
	}

	private static Integer[] sort(Integer[] array) {
		for (int i = 0; i < array.length; i++) {
			for (int j = i; j > 0; j--) {
				if(array[j] < array[j-1]){
					GeneralOperations.swap(j, j-1,array);
                }
			}
		}
		return array;
	}
	
}
