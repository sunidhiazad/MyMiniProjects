package strings;

public class PalindromeCheck {
	
	public static boolean isPalindrome(String string) {
		StringBuilder build = new StringBuilder(string.toLowerCase());
		int len = build.length();
		for (int i = 0; i <= len/2; i++) {
			if(build.charAt(i)!=build.charAt(len-1-i))
				return false;
		}
		return true;
	}

	public static void main(String[] args) {
		System.out.println(isPalindrome("Kayak"));
		System.out.println(isPalindrome("Baahubali"));
	}


}
