package strings;

public class StringRotation {

	private static boolean checkIfStringRotated(String string1, String string2) {
		if (string1 == null || string2 == null)
			return false;
		if (string1.length() != string2.length())
			return false;
		StringBuilder build = new StringBuilder(string1 + string2);
		return build.toString().contains(string2);
	}

	public static void main(String[] args) {
		System.out.println("Check if a string is rotation of another string: ");
		System.out.println(checkIfStringRotated("SahilSingh", "SinghSahil"));
		System.out.println(checkIfStringRotated("SahilSin", "SinghSahil"));
		System.out.println(checkIfStringRotated(null, "SinghSahil"));
		System.out.println(checkIfStringRotated("SinghSahil", null));
	}

}
