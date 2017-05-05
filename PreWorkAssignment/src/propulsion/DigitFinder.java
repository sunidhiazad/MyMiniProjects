package propulsion;
import java.util.stream.Stream;

public class DigitFinder {

	public static int find(long n) {
		String nString = new Long(n).toString();
		int counter = 0;
		while (nString.length() != 1) {
			nString = getProductOfDigits(nString);
			counter++;
		}
		return counter;
	}

	public static String getProductOfDigits(String n) {
		int[] numbers = Stream.of(n.split("")).mapToInt(Integer::parseInt).toArray();
		int product = 1;
		for (int i = 0; i < numbers.length; i++) {
			product = product * numbers[i];
		}
		return String.valueOf(product);
	}

	public static void main(String... args) {
		System.out.println(find(57)); // 3
		System.out.println(find(5923)); // 2
		System.out.println(find(90)); // 1
		System.out.println(find(7)); // 0
		System.out.println(find(999)); // 4
	}

}