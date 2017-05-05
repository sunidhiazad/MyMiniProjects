package strings;

import java.util.regex.Pattern;

public class VowelsAndConsonantsCount {

	private static void countThem(String string) {
		int vowelCount = 0;
		int consonantCount = 0;
		for (Character c : string.toLowerCase().toCharArray()) {
			if (c != ' ') {
				if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
					vowelCount++;
				else
					consonantCount++;
			}
		}
		System.out.println(vowelCount + " vowels and " + consonantCount + " consonants");
	}

	private static void countThemUsingPattern(String string) {
		int vowelCount = 0;
		int consonantCount = 0;
		for (Character c : string.toLowerCase().toCharArray()) {
			if (c != ' ') {
				if (Pattern.matches("[aeiou]", Character.toString(c)))
					vowelCount++;
				else
					consonantCount++;
			}
		}
		System.out.println(vowelCount + " vowels and " + consonantCount + " consonants");
	}
	
	public static void main(String[] args) {
		countThem("I am superwoman");
		countThemUsingPattern("I am superwoman");
	}



}
