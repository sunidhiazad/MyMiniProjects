package propulsion;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Sorting {

	public static Double[] sortItOut(Double... array) {
		List<Double> evenList = new ArrayList<Double>();
		List<Double> oddList = new ArrayList<Double>();
		List<Double> jointList = new ArrayList<Double>();

		for (Double x : array) {
			if (x.intValue() % 2 == 0) {
				evenList.add(x);
			} else {
				oddList.add(x);
			}
		}

		Collections.sort(oddList);
		Collections.sort(evenList, Comparator.reverseOrder());

		jointList.addAll(oddList);
		jointList.addAll(evenList);
		return (Double[]) jointList.toArray(new Double[jointList.size()]);
	}

	public static void main(String... args) {
		print(sortItOut(1d, 2d, 3d, 4d, 5d, 6d, 7d, 8d, 9d));
		print(sortItOut(26.66, 24.01, 52.00, 2.10, 44.15, 1.02, 11.15));
	}

	private static void print(Double[] array) {
		System.out.println(Arrays.toString(array));
	}
}