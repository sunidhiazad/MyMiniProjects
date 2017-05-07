package strings;

import general.GeneralOperations;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DuplicateCharacters {

	private static Character[] printCaseSensitive(String string) {

		List<Character> duplicates = new ArrayList<Character>();
		Map<Character, Integer> map = new HashMap<>();

		for (Character c : string.toCharArray()) {
			map.put(c, map.containsKey(c) ? map.get(c) + 1 : 1);
		}

		for (Map.Entry<Character, Integer> entry : map.entrySet()) {
			if (entry.getValue() > 1)
				duplicates.add(entry.getKey());
		}

		return (Character[]) duplicates.toArray();
	}

	private static Character[] printCaseInsensitive(String string) {
		return printCaseSensitive(string.toLowerCase());
	}

	public static void main(String[] args) {
		GeneralOperations.printArray(printCaseSensitive("aaMmJKkkLGj"));
		GeneralOperations.printArray(printCaseInsensitive("aaMmJKkkLGj"));
	}

}
