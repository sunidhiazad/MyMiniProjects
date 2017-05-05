package strings;

public class StringReversal {
	
	public static String reverseStringByCharsHalf(final String string){
		char[] charArray = string.toCharArray();
		int len = charArray.length;
		char temp;
		for (int i = 0; i <= len/2; i++) {
			temp = charArray[i];
			charArray[i] = charArray[len-1-i];
			charArray[len-1-i] = temp;
		}
		return new String(charArray);
	}
	
	public static String reverseStringByCharsLoop(final String string){
		char[] charArray = string.toCharArray();
		int len = charArray.length;
		char[] reverse = new char[len];
		for (int i = len - 1; i >= 0; i--) {
			reverse[(len-1)-i] = charArray[i];
		}
		return new String(reverse);
	}
	
	public static String reverseStringByAPI(final String string){
		StringBuilder build = new StringBuilder(string);
		build.reverse();
		return build.toString();
	}
	
	public static String reverseStringRecursively(final String string){
		if(string.length() == 1)
			return string;
		return reverseStringRecursively(string.substring(1)) + string.charAt(0);
	}
	
	public static void main(String[] args) {
		System.out.println(reverseStringByCharsHalf("Hellot"));
		System.out.println(reverseStringByCharsLoop("Hellot"));
		System.out.println(reverseStringByAPI("Hellot"));
		System.out.println(reverseStringRecursively("Hellot"));
	}
}
