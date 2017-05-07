package strings;

public class LongestPalindromeInString {

	private static String intermediatePalindrome(String s, int left, int right) {
		if (left > right)
			return null;
		while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
			left--;
			right++;
		}
		return s.substring(left + 1, right);
	}

	private static String findIt(String string) {
		if (string == null)
			return null;
		String longest = string.substring(0, 1);
		String palindrome;
		for (int i = 0; i < string.length(); i++) {
			// odd cases like 343
			palindrome = intermediatePalindrome(string, i, i);
			if (palindrome.length() > longest.length())
				longest = palindrome;

			// even cases like 3443
			palindrome = intermediatePalindrome(string, i, i + 1);
			if (palindrome.length() > longest.length())
				longest = palindrome;
		}

		return longest;
	}

	public static void main(String[] args) {
		System.out.println(findIt("themadamsir"));
	}

}
