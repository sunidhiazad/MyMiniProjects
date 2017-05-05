package sorting;

import general.GeneralOperations;

public class SelectionSort {

	private static Integer[] sort(Integer[] array) {
		for (int i = 0; i < array.length - 1; i++) {
			for (int j = i+1; j < array.length; j++) {
				if(array[i]>array[j])
					GeneralOperations.swap(i, j, array);
			}
		}
		return array;
	}

	public static void main(String[] args) {
		Integer[] array = { 14, 33, 27, 35, 10, 7, 24 };
		GeneralOperations.printArray(sort(array));
	}
}
