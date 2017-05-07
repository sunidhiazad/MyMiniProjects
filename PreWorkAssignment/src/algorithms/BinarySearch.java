package algorithms;

public class BinarySearch {

	private static int getPosition(Integer[] array, int item) {

		int start = 0;
		int end = array.length;
		int mid;

		while (start <= end) {
			mid = (start + end) / 2;

			if (item == array[mid])
				return mid;

			if (item < array[mid])
				end = mid - 1;
			else
				start = mid + 1;
		}

		return -1;
	}

	public static int getPositionRecursively(Integer[] array, int start, int end, int item) {

		if (start < end) {
			int mid = (start + end) / 2;

			if (item < array[mid])
				return getPositionRecursively(array, start, mid - 1, item);
			else if (item > array[mid])
				return getPositionRecursively(array, mid + 1, end, item);
			else
				return mid;
		}
		return -(start + 1);
	}

	public static void main(String[] args) {
		Integer[] array = { 2, 4, 6, 8, 10, 12, 14, 16 };
		System.out.println(getPosition(array, 14));
		System.out.println(getPositionRecursively(array, 0, array.length, 14));
	}

}
