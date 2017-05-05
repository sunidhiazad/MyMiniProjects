package strings;

import java.text.NumberFormat;
import java.text.ParsePosition;
import java.util.regex.Pattern;

public class OnlyDigitsCheck {

	private static boolean isNumber1(String string) {
		Pattern pattern = Pattern.compile(".*\\D.*");
		if (pattern.matcher(string).matches())
			return false;
		else
			return true;
	}

	private static boolean isNumber2(String string) {
		NumberFormat formatter = NumberFormat.getInstance();
		ParsePosition pos = new ParsePosition(0);
		formatter.parse(string, pos);
		return string.length() == pos.getIndex();
	}

	public static void main(String[] args) {
		System.out.println(isNumber1("127765"));
		System.out.println(isNumber1("12xfc7765"));
		System.out.println(isNumber2("127765"));
		System.out.println(isNumber2("12xfc7765"));
	}

}
