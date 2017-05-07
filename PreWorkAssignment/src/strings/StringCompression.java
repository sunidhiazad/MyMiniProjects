package strings;

public class StringCompression {

	private static String compressIt(String string) {
		StringBuilder build = new StringBuilder();
		char first = string.charAt(0);
		int counter = 1;
		for (int i = 1; i < string.length(); i++) {
			if (string.charAt(i) == first)
				counter++;
			else {
				build.append(first);
				build.append(counter);
				first = string.charAt(i);
				counter = 1;
			}
		}
		build.append(first);
		build.append(counter);

		if (build.toString().length() > string.length())
			return string;
		else
			return build.toString();
	}

	public static void main(String[] args) {
		System.out.println(compressIt("aaaabbbcccccddeeeeeeffgggxxyz"));
		System.out.println(compressIt("abcdef"));
	}

}
