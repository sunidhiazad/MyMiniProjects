package strings;

public class StringOperations {
	public static void main(String[] args) {

		String strliteral = "SahilSunidhi";
		String strObject = new String("SahilSunidhi");

		System.out.println("strliteral == strObject --> " + (strliteral == strObject));
		System.out.println("strliteral.equals(strObject) --> " + strliteral.equals(strObject));

		strObject = strObject.intern();

		System.out.println("\nAfter calling strObject.intern() method...");
		System.out.println("strliteral == strObject --> " + (strliteral == strObject));
		System.out.println("strliteral.equals(strObject) --> " + strliteral.equals(strObject));

		String subStr1 = strObject.substring(5);
		String subStr2 = strObject.substring(3, 8);

		System.out.println("\nSubstrings...");
		System.out.println("subStr1 = strObject.substring(5) --> " + subStr1);
		System.out.println("subStr2 = strObject.substring(3,8) --> " + subStr2);

		String subStr3 = strObject.substring(strObject.length());

		System.out.println("\nWhat happens when beginIndex in Substring = length of string...");
		System.out.println("Length of subStr3 = strObject.substring(strObject.length()) --> " + subStr3.length());

	}
}
