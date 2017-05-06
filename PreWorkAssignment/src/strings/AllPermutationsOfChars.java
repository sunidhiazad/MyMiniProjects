package strings;

import general.GeneralOperations;

import java.util.List;

public class AllPermutationsOfChars {
	private static List<String> findThem(String string) {
		return null;
	}

	private static void permutate(String perm, String word) {
		if (word.length() == 0)
			System.out.println("Error");
		else {
			System.out.println("Perm: " + perm + " Word: " + word);
			for (int i = 0; i < word.length(); i++) {
				permutate(perm + word.charAt(i), word.substring(0, i) + word.substring(i + 1, word.length()));
			}
		}

	}

	public static void main(String[] args) {
		List<String> list = findThem("xyz");
		GeneralOperations.printList(list);
		permutate("", "xyz");
	}

}
