package strings;

import general.GeneralOperations;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DuplicateCharacters {

	private static Character[] printCaseSensitive(String string) {
		char[] charArray = string.toCharArray();
		List<Character> duplicates = new ArrayList<Character>();
		Map<Character, Integer> map = new HashMap<>();
		for (int i = 0; i < charArray.length; i++) {
			if(map.containsKey(charArray[i])){
				map.put(charArray[i], map.get(charArray[i])+1);
			}else{
				map.put(charArray[i], 1);
			}
		}
		for (Map.Entry<Character, Integer> entry : map.entrySet()) {
			if(entry.getValue() > 1)
				duplicates.add(entry.getKey());		
		}
		return (Character[]) duplicates.toArray(new Character[duplicates.size()]);
	}
	
	private static Character[] printCaseInsensitive(String string) {
		return printCaseSensitive(string.toLowerCase());
	}
	
	public static void main(String[] args) {
		GeneralOperations.printArray(printCaseSensitive("aaMmJKkkLGj"));
		GeneralOperations.printArray(printCaseInsensitive("aaMmJKkkLGj"));
	}


}
