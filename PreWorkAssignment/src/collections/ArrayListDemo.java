package collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Spliterator;

public class ArrayListDemo {
	private List<String> list;

	ArrayListDemo() {
		list = new ArrayList<String>();
		list.add("Rihanna");
		list.add("Justin Bieber");
		list.add("Chris Martin");
		list.add("Miley Cyrus");
		list.add("Beyonce");
		list.add("Taylor Swift");
		list.add("Ariana Grande");
		list.add("Nicki Minaj");
		list.add("Nick Jonas");
		list.add("The Weeknd");
	}

	public static void main(String[] args) {
		ArrayListDemo demo = new ArrayListDemo();
		demo.iterateOverList();
		demo.splitIterateOverList();
		demo.useStreamsToIterate();
	}

	private void useStreamsToIterate() {
		System.out.println("=========STREAMS=========");
		list.stream().forEach(System.out::println);
	}

	private void splitIterateOverList() {
		System.out.println("=========SPLITERATOR=========");
		Spliterator<String> iterator = list.spliterator();
		System.out.println("Characteristics: " + iterator.characteristics());
		System.out.println("Estimate Size: " + iterator.estimateSize());
		// System.out.println("TryAdvance...");
		// iterator.tryAdvance(System.out::println);
		// System.out.println("forEachRemaining...");
		// iterator.forEachRemaining(System.out::println);
		System.out.println("TrySplit...");
		Spliterator<String> s = iterator.trySplit();
		iterator.forEachRemaining(System.out::println);
		s.forEachRemaining(System.out::println);
	}

	private void iterateOverList() {
		System.out.println("=========ITERATOR=========");
		Iterator<String> iterator = list.iterator();
		while (iterator.hasNext()) {
			System.out.println(iterator.next());
		}
	}
}
