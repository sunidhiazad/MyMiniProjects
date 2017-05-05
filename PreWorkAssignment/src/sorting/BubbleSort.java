package sorting;

import general.GeneralOperations;

public class BubbleSort {

	private static Integer[] sort(Integer[] array) {
		for (int j = 0; j < array.length; j++) {
			for (int i = 0; i < array.length - 1; i++) {
				if (array[i] > array[i + 1]) {
					GeneralOperations.swap(i, i + 1, array);
				}
			}
		}
		return array;
	}

	public static void main(String[] args) {
		Integer[] array = { 14, 33, 27, 35, 10, 7, 24 };
		GeneralOperations.printArray(sort(array));
	}

}
