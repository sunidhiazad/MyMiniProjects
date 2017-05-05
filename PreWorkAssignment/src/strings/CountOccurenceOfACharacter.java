package strings;

public class CountOccurenceOfACharacter {

	private static int countOf(String string, Character c) {
		int count = 0;
		for (Character i : string.toLowerCase().toCharArray()) {
			if (i == c)
				count++;
		}
		return count;
	}

	public static void main(String[] args) {
		System.out.println(countOf("Java", 'a'));
		System.out.println(countOf("Java", 'x'));
	}

}
