package strings;

import java.util.Arrays;

public class Anagram {
	public static void main(String[] args) {
		System.out.println(isAnagram1("liril", "rilil"));
		System.out.println(isAnagram2("liril", "rilil"));
		System.out.println(isAnagram3("liril", "rilil"));
		System.out.println(isAnagram1("hello", "hola"));
		System.out.println(isAnagram2("hello", "hola"));
		System.out.println(isAnagram3("hello", "hola"));
	}

	public static boolean isAnagram1(String string1, String string2) {
		if (string1.length() != string2.length())
			return false;

		char[] chars = string1.toCharArray();

		for (char c : chars) {
			int index = string2.indexOf(c);
			if (index != -1) {
				string2 = string2.substring(0, index) + string2.substring(index + 1, string2.length());
			} else
				return false;
		}
		return string2.isEmpty();
	}

	public static boolean isAnagram2(String string1, String string2) {
		char[] charFromString1 = string1.toCharArray();
		char[] charFromString2 = string2.toCharArray();
		Arrays.sort(charFromString1);
		Arrays.sort(charFromString2);
		return Arrays.equals(charFromString1, charFromString2);
	}

	public static boolean isAnagram3(String string1, String string2) {
		char[] characters = string1.toCharArray();
		StringBuilder sbString2 = new StringBuilder(string2);

		for (char ch : characters) {
			int index = sbString2.indexOf("" + ch);
			if (index != -1) {
				sbString2.deleteCharAt(index);
			} else
				return false;
		}
		return sbString2.length() == 0 ? true : false;
	}

}
