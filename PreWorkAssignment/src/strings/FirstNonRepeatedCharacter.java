package strings;

import java.util.LinkedHashMap;
import java.util.Map;

public class FirstNonRepeatedCharacter {

	private static Character getFirstNonRepeatedCharacter(String string) {

		Map<Character, Integer> map = new LinkedHashMap<Character, Integer>();

		for (Character c : string.toCharArray()) {
			map.put(c, map.containsKey(c) ? map.get(c) + 1 : 1);
		}

		for (Map.Entry<Character, Integer> entry : map.entrySet()) {
			if (entry.getValue() == 1) {
				return entry.getKey();
			}
		}

		return null;
	}

	public static void main(String[] args) {
		System.out.println(getFirstNonRepeatedCharacter("aabcb"));
	}

}
