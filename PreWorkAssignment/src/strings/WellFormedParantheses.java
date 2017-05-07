package strings;

public class WellFormedParantheses {
	private static boolean isWellFormed(String string) {
		int open = 0;
		int closed = 0;
		char[] chars = string.toCharArray();

		for (int i = 0; i < chars.length; i++) {
			if (chars[i] == '{')
				open++;
			if (chars[i] == '}')
				closed++;
			if (closed > open)
				return false;
		}
		if (open == closed)
			return true;
		else
			return false;
	}

	public static void main(String[] args) {
		System.out.println("{{{{}}}}{}{}{}{}{}{}{}{}{}{}{{{}}} -->" + isWellFormed("{{{{}}}}{}{}{}{}{}{}{}{}{}{}{{{}}}"));
		System.out.println("{{}}}} -->" + isWellFormed("{{}}}}"));
		System.out.println("{{{{{}}}} -->" + isWellFormed("{{{{{}}}}"));
	}

}
