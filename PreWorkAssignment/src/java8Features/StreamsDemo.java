package java8Features;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

public class StreamsDemo {

	static List<String> list = new ArrayList<String>();

	public static boolean isEven(int n) {
		return n % 2 == 0;
	}

	private static void initialize() {
		list = new ArrayList<String>();
		list.add("adam");
		list.add("caleb");
		list.add("doug");
		list.add("nancy");
		list.add("rob");
		list.add("jon");
		list.add("sansa");
		list.add("arya");
		list.add("cersei");
		list.add("bran");
		list.add("tyrion");
	}

	public static void intStreamDemo() {
		int sum = IntStream.iterate(0, n -> n + 1).filter(StreamsDemo::isEven).limit(20).sum();
		System.out.println("Sum: " + sum);
	}

	private static void parallelDemo() {
		List<Integer> ilist = new ArrayList<>();
		for (int i = 0; i < 10000000; i++)
			ilist.add(i);
		
		Long start = System.currentTimeMillis();
		ilist.stream().count();
		Long end = System.currentTimeMillis();
		System.out.println("Sequential counting time: " + (end - start));
		
		start = System.currentTimeMillis();
		ilist.parallelStream().count();
		end = System.currentTimeMillis();
		System.out.println("Parallel counting time: " + (end - start));
	}

	private static void reduceDemo() {
		Optional<String> reduced = list.stream().reduce((s1, s2) -> s1 + "," + s2);
		reduced.ifPresent(System.out::println);
	}

	private static void countDemo() {
		long count = list.stream().filter(s -> s.contains("a")).count();
		System.out.println("Count: " + count);
	}

	private static void matchDemo() {
		boolean any = list.stream().anyMatch(s -> s.startsWith("s"));
		boolean all = list.stream().allMatch(s -> s.startsWith("s"));
		boolean none = list.stream().noneMatch(s -> s.startsWith("z"));
		System.out.println("Any: " + any + "\tAll: " + all + "\tNone: " + none);
	}

	private static void mapDemo() {
		list.stream().map(String::toUpperCase).forEach(System.out::println);
	}

	private static void sortedDemo() {
		list.stream().sorted().forEach(System.out::println);
	}

	private static void filterDemo() {
		list.stream().filter((s) -> s.startsWith("a")).forEach(System.out::println);
	}

	public static void main(String[] args) {
		initialize();
		System.out.println("...IntStream...");
		intStreamDemo();
		System.out.println("...Filter...");
		filterDemo();
		System.out.println("...Sorted...");
		sortedDemo();
		System.out.println("...Map...");
		mapDemo();
		System.out.println("...Match...");
		matchDemo();
		System.out.println("...Count...");
		countDemo();
		System.out.println("...Reduce...");
		reduceDemo();
		System.out.println("...Parallel...");
		parallelDemo();
	}

}
