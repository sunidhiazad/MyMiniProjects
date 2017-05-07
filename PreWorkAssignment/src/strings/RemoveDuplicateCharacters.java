package strings;

import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

public class RemoveDuplicateCharacters {

	// Removes all characters from the string that appears more than once
	private static String remove(String string) {
		Map<Character, Integer> map = new LinkedHashMap<>();
		char c;
		StringBuilder result = new StringBuilder();

		for (int i = 0; i < string.length(); i++) {
			c = string.charAt(i);
			map.put(c, map.containsKey(c) ? map.get(c) + 1 : 1);
		}

		for (Map.Entry<Character, Integer> entry : map.entrySet()) {
			if (entry.getValue() == 1)
				result.append(entry.getKey());
		}
		return result.toString();
	}

	// Removes the duplicated characters from the string and returns the unique character string
	private static String removeAlternate(String string) {
		char[] chars = string.toCharArray();
		Set<Character> charSet = new LinkedHashSet<Character>();
		for (char c : chars) {
			charSet.add(c);
		}

		StringBuilder sb = new StringBuilder();
		for (Character character : charSet) {
			sb.append(character);
		}
		return sb.toString();
	}

	public static void main(String[] args) {
		System.out.println(remove("aabcbyddefx"));
		System.out.println(removeAlternate("aabcbyddefx"));
	}

}
