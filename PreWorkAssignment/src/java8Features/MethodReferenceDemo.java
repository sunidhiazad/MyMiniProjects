package java8Features;

import java.util.ArrayList;
import java.util.List;

public class MethodReferenceDemo {
	@SuppressWarnings("unchecked")
	public static void main(String args[]) {
		@SuppressWarnings("rawtypes")
		List names = new ArrayList();

		names.add("Anna");
		names.add("Bob");
		names.add("Caleb");
		names.add("Dixon");
		names.add("Elliot");

		names.forEach(System.out::println);
	}
}
