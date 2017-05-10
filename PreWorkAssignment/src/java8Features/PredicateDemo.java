package java8Features;

import general.GeneralOperations;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class PredicateDemo {
	public static void main(String[] args) {
		List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
		String[] array = { "abc", "sbcg" };
		GeneralOperations.printArray(array);
		System.out.println(GeneralOperations.convertCollectionToDelimitedString(list, ","));
		System.out.println("Print all numbers");
		eval(list, n -> true);
		System.out.println("Print even numbers:");
		eval(list, n -> n % 2 == 0);
	}

	private static void eval(List<Integer> list, Predicate<Integer> predicate) {
		for (Integer i : list) {
			if (predicate.test(i))
				System.out.print(i + " ");
		}
		System.out.println();
	}
}
