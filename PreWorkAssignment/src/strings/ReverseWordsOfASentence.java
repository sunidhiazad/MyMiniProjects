package strings;

import java.util.Collections;
import java.util.List;

import general.GeneralOperations;

public class ReverseWordsOfASentence {

	private static String reverseSentence(String string) {
		List<String> words = GeneralOperations.tokenize(string, " ");
		Collections.reverse(words);
		return GeneralOperations.convertListToString(words);
	}

	public static void main(String[] args) {
		System.out.println(reverseSentence("Hello World I am sunazshine"));
	}


}
