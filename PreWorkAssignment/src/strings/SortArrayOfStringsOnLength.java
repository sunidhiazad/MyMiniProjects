package strings;

import general.GeneralOperations;

public class SortArrayOfStringsOnLength {
	private static String[] sortOnLength(String[] array) {
		for (int i = 0; i < array.length; i++) {
			for (int j = i; j > 0; j--) {
				if (array[j].length() < array[j - 1].length()) {
					GeneralOperations.swap(j, j - 1, array);
				}
			}
		}
		return array;
	}

	public static void main(String[] args) {
		String[] array = { "Hello", "I", "am", "the", "most", "person", "powerful" };
		String[] sortedArray = sortOnLength(array);
		GeneralOperations.printArray(sortedArray);
	}

}
