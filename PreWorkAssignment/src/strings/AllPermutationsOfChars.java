package strings;

import general.GeneralOperations;

import java.util.HashSet;
import java.util.Set;

public class AllPermutationsOfChars {
	static int counter = 0;

	public static Set<String> permutation1(String str) {
		Set<String> perm = new HashSet<String>();

		if (str == null) {
			return null;
		} else if (str.length() == 0) {
			perm.add("");
			return perm;
		}

		char initial = str.charAt(0);
		String rem = str.substring(1);

		Set<String> words = permutation1(rem);

		for (String strNew : words) {
			for (int i = 0; i <= strNew.length(); i++) {
				perm.add(charInsert(strNew, initial, i));
			}
		}

		return perm;
	}

	public static String charInsert(String str, char c, int j) {
		String begin = str.substring(0, j);
		String end = str.substring(j);
		return begin + c + end;
	}

	public static void permutation2(String str) {
		permutation2("", str);
	}

	private static void permutation2(String prefix, String str) {
		int n = str.length();
		if (n == 0)
			System.out.println(prefix);
		else {
			for (int i = 0; i < n; i++) {
				permutation2(prefix + str.charAt(i), str.substring(0, i) + str.substring(i + 1, n));
			}
		}
	}

	public static void permutation3(String s) {
		permutation3(s.toCharArray(), s.length());
	}

	private static void permutation3(char[] arr, int len) {
		if (len == 1) {
			System.out.println(arr);
			return;
		}
		for (int i = 0; i < len; i++) {
			swap(arr, i, len - 1);
			permutation3(arr, len - 1);
			swap(arr, i, len - 1);
		}
	}

	private static void swap(char[] a, int i, int j) {
		char c = a[i];
		a[i] = a[j];
		a[j] = c;
	}

	public static void main(String[] args) {
		System.out.println("METHOD 1");
		Set<String> list = permutation1("ABC");
		GeneralOperations.printCollection(list);
		
		System.out.println("METHOD 2");
		permutation2("ABC");
		
		System.out.println("METHOD 3");
		permutation3("ABC");
	}

}
